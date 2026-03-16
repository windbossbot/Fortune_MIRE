"""Runtime guards for process lifecycle and resource cleanup."""

from __future__ import annotations

import atexit
import logging
import shutil
import signal
import sys
import time
from collections.abc import Iterator
from contextlib import contextmanager
from pathlib import Path

import psutil

LOGGER = logging.getLogger(__name__)


class ResourceConflictError(RuntimeError):
    """Raised when a conflicting process, port, or lock is detected."""


def ensure_project_boundary(project_root: Path, target: Path) -> Path:
    """Ensure the target path stays within the repository."""

    resolved_target = target.resolve()
    resolved_root = project_root.resolve()
    if resolved_root not in (resolved_target, *resolved_target.parents):
        raise PermissionError(f"Refusing to access path outside project root: {resolved_target}")
    return resolved_target


def find_processes_by_name(process_name: str) -> list[psutil.Process]:
    """Find processes matching a given executable name."""

    matches: list[psutil.Process] = []
    for process in psutil.process_iter(["pid", "name", "cmdline"]):
        try:
            if process.info["name"] and process_name.lower() in process.info["name"].lower():
                matches.append(process)
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue
    return matches


def find_processes_by_port(port: int) -> list[psutil.Process]:
    """Find processes that are listening on a TCP port."""

    matches: list[psutil.Process] = []
    for connection in psutil.net_connections(kind="inet"):
        if connection.laddr and connection.laddr.port == port and connection.pid:
            try:
                matches.append(psutil.Process(connection.pid))
            except (psutil.NoSuchProcess, psutil.AccessDenied):
                continue
    return matches


def preflight_check(
    *,
    lock_file: Path,
    pid_file: Path,
    process_name: str | None = None,
    port: int | None = None,
) -> list[str]:
    """Collect runtime conflicts before the application starts."""

    conflicts: list[str] = []
    if lock_file.exists():
        conflicts.append(f"Lock file already exists: {lock_file}")
    if pid_file.exists():
        conflicts.append(f"PID file already exists: {pid_file}")
    if process_name:
        processes = find_processes_by_name(process_name)
        if processes:
            pids = ", ".join(str(process.pid) for process in processes)
            conflicts.append(f"Processes matching '{process_name}' are already running: {pids}")
    if port is not None:
        processes = find_processes_by_port(port)
        if processes:
            pids = ", ".join(str(process.pid) for process in processes)
            conflicts.append(f"Port {port} is already in use by PID(s): {pids}")
    return conflicts


def suggested_cleanup_commands(
    *, pid: int | None = None, process_name: str | None = None
) -> list[str]:
    """Return platform-specific cleanup commands."""

    commands: list[str] = []
    if pid is not None:
        commands.append(f"taskkill /PID {pid} /F")
        commands.append(f"kill -9 {pid}")
    if process_name:
        commands.append(f"taskkill /IM {process_name} /F")
        commands.append(f"pkill -f {process_name}")
    return commands


@contextmanager
def runtime_lock(lock_file: Path, pid_file: Path, command: str) -> Iterator[int]:
    """Create lock and PID files and remove them on exit."""

    lock_file.parent.mkdir(parents=True, exist_ok=True)
    pid_file.parent.mkdir(parents=True, exist_ok=True)

    pid = str(psutil.Process().pid)
    lock_file.write_text(f"{pid}\n", encoding="utf-8")
    pid_file.write_text(f"{pid}|{command}\n", encoding="utf-8")

    def _cleanup() -> None:
        for path in (lock_file, pid_file):
            if path.exists():
                path.unlink()

    atexit.register(_cleanup)
    try:
        yield int(pid)
    finally:
        _cleanup()


@contextmanager
def temporary_workspace(path: Path, *, auto_cleanup: bool) -> Iterator[Path]:
    """Create a temporary workspace inside the project and clean it if requested."""

    path.mkdir(parents=True, exist_ok=True)
    try:
        yield path
    finally:
        if auto_cleanup and path.exists():
            shutil.rmtree(path, ignore_errors=True)


def install_signal_handlers(stop_event: dict[str, bool]) -> None:
    """Install signal handlers that flip a shared stop flag."""

    def _handler(signum: int, _frame: object) -> None:
        stop_event["stop"] = True
        LOGGER.info(
            "Received stop signal.",
            extra={"event": "signal_received", "context": {"signal": signum}},
        )

    signal.signal(signal.SIGINT, _handler)
    if hasattr(signal, "SIGTERM"):
        signal.signal(signal.SIGTERM, _handler)


def run_loop(
    *,
    timeout_seconds: int,
    heartbeat_interval_seconds: int,
    stop_event: dict[str, bool],
) -> None:
    """Example long-running loop with heartbeat and timeout support."""

    started = time.monotonic()
    next_heartbeat = started
    while not stop_event["stop"]:
        now = time.monotonic()
        if now - started >= timeout_seconds:
            LOGGER.info(
                "Loop timeout reached.",
                extra={"event": "loop_timeout", "context": {"timeout_seconds": timeout_seconds}},
            )
            break
        if now >= next_heartbeat:
            LOGGER.info(
                "Heartbeat.",
                extra={"event": "heartbeat", "context": {"uptime_seconds": int(now - started)}},
            )
            next_heartbeat = now + heartbeat_interval_seconds
        time.sleep(0.25)


def abort_on_conflicts(conflicts: list[str]) -> None:
    """Raise a readable exception when preflight conflicts exist."""

    if conflicts:
        message = "Pre-run cleanup required:\n- " + "\n- ".join(conflicts)
        raise ResourceConflictError(message)


def build_startup_command(argv: list[str] | None = None) -> str:
    """Return the shell command used to launch the current process."""

    return " ".join(argv or sys.argv)
