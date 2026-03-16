"""Entrypoint orchestration for jobs and services."""

from __future__ import annotations

import argparse
import logging

from fortune.config import AppConfig
from fortune.logging_utils import configure_logging
from fortune.runtime import (
    abort_on_conflicts,
    build_startup_command,
    ensure_project_boundary,
    install_signal_handlers,
    preflight_check,
    run_loop,
    runtime_lock,
    suggested_cleanup_commands,
    temporary_workspace,
)
from fortune.validation import (
    ValidationError,
    detect_outlier,
    validate_balance,
    validate_price,
)

LOGGER = logging.getLogger(__name__)


def parse_args() -> argparse.Namespace:
    """Parse command-line arguments for sample application modes."""

    parser = argparse.ArgumentParser(description="fortune runtime harness")
    parser.add_argument("--mode", choices=["oneshot", "service", "loop"], default="oneshot")
    parser.add_argument("--process-name", default="fortune")
    parser.add_argument("--port", type=int)
    parser.add_argument("--price", type=float, default=101.25)
    parser.add_argument("--balance", type=float, default=1000.0)
    parser.add_argument("--dry-run", dest="dry_run", action="store_true", default=True)
    parser.add_argument("--force", action="store_true", help="Allow destructive actions.")
    parser.add_argument("--timeout-seconds", type=int)
    return parser.parse_args()


def run_application() -> int:
    """Run the sample application with safety rails enabled."""

    args = parse_args()
    config = AppConfig.load()
    log_file = configure_logging(config.log_dir, config.log_level)

    command = build_startup_command()
    conflicts = preflight_check(
        lock_file=config.resource_lock_file,
        pid_file=config.pid_file,
        process_name=args.process_name,
        port=args.port,
    )
    abort_on_conflicts(conflicts)

    timeout_seconds = args.timeout_seconds or config.default_timeout_seconds
    stop_event = {"stop": False}
    install_signal_handlers(stop_event)

    with runtime_lock(config.resource_lock_file, config.pid_file, command) as pid:
        LOGGER.info(
            "Application starting.",
            extra={
                "event": "startup",
                "context": {
                    "pid": pid,
                    "command": command,
                    "log_file": str(log_file),
                    "cleanup_commands": suggested_cleanup_commands(
                        pid=pid, process_name=args.process_name
                    ),
                },
            },
        )

        temp_dir = ensure_project_boundary(config.project_root, config.project_root / "tmp" / "run")
        with temporary_workspace(temp_dir, auto_cleanup=config.auto_cleanup):
            try:
                validate_price(args.price)
                validate_balance(args.balance)
                if detect_outlier([99.0, 100.0, 101.0, 102.0], args.price):
                    raise ValidationError("Price looks like an outlier. Aborting for safety.")

                if args.mode == "oneshot":
                    run_oneshot_task(dry_run=args.dry_run or not args.force)
                elif args.mode == "service":
                    run_service(
                        stop_event=stop_event,
                        timeout_seconds=timeout_seconds,
                        config=config,
                    )
                else:
                    run_loop(
                        timeout_seconds=timeout_seconds,
                        heartbeat_interval_seconds=config.heartbeat_interval_seconds,
                        stop_event=stop_event,
                    )
            except Exception:
                LOGGER.exception("Application failed.", extra={"event": "failure"})
                raise
            finally:
                LOGGER.info(
                    "Application stopping.",
                    extra={
                        "event": "shutdown",
                        "context": {
                            "pid": pid,
                            "cleanup_commands": suggested_cleanup_commands(
                                pid=pid, process_name=args.process_name
                            ),
                        },
                    },
                )
    return 0


def run_oneshot_task(*, dry_run: bool) -> None:
    """Run an example one-shot job with dry-run protection."""

    if dry_run:
        LOGGER.info(
            "Would have executed one-shot job.",
            extra={"event": "dry_run", "context": {"operation": "oneshot_job"}},
        )
        return
    LOGGER.info("One-shot job executed.", extra={"event": "oneshot_complete"})


def run_service(*, stop_event: dict[str, bool], timeout_seconds: int, config: AppConfig) -> None:
    """Run an example service loop with heartbeat and timeout enforcement."""

    LOGGER.info(
        "Service mode active.",
        extra={"event": "service_start", "context": {"timeout_seconds": timeout_seconds}},
    )
    run_loop(
        timeout_seconds=timeout_seconds,
        heartbeat_interval_seconds=config.heartbeat_interval_seconds,
        stop_event=stop_event,
    )
