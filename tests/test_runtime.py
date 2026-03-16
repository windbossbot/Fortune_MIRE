from pathlib import Path

from fortune.runtime import preflight_check, suggested_cleanup_commands


def test_preflight_detects_existing_files(tmp_path: Path) -> None:
    lock_file = tmp_path / "app.lock"
    pid_file = tmp_path / "app.pid"
    lock_file.write_text("1", encoding="utf-8")
    pid_file.write_text("1", encoding="utf-8")

    conflicts = preflight_check(lock_file=lock_file, pid_file=pid_file)

    assert len(conflicts) == 2


def test_cleanup_commands_include_windows_and_unix_options() -> None:
    commands = suggested_cleanup_commands(pid=1234, process_name="fortune.exe")

    assert "taskkill /PID 1234 /F" in commands
    assert "kill -9 1234" in commands
    assert "taskkill /IM fortune.exe /F" in commands
    assert "pkill -f fortune.exe" in commands
