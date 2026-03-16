"""Application configuration helpers."""

from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


def _get_bool(name: str, default: bool) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


@dataclass(slots=True)
class AppConfig:
    """Runtime configuration loaded from environment variables."""

    env: str
    log_level: str
    log_dir: Path
    default_timeout_seconds: int
    heartbeat_interval_seconds: int
    auto_cleanup: bool
    allow_port_cleanup: bool
    allow_process_cleanup: bool
    resource_lock_file: Path
    pid_file: Path
    project_root: Path

    @classmethod
    def load(cls) -> AppConfig:
        """Load configuration from the local `.env` file and environment."""

        project_root = Path(__file__).resolve().parents[2]
        load_dotenv(project_root / ".env")
        return cls(
            env=os.getenv("APP_ENV", "development"),
            log_level=os.getenv("APP_LOG_LEVEL", "INFO"),
            log_dir=project_root / os.getenv("APP_LOG_DIR", "logs"),
            default_timeout_seconds=int(os.getenv("APP_DEFAULT_TIMEOUT_SECONDS", "300")),
            heartbeat_interval_seconds=int(os.getenv("APP_HEARTBEAT_INTERVAL_SECONDS", "30")),
            auto_cleanup=_get_bool("APP_AUTO_CLEANUP", False),
            allow_port_cleanup=_get_bool("APP_ALLOW_PORT_CLEANUP", False),
            allow_process_cleanup=_get_bool("APP_ALLOW_PROCESS_CLEANUP", False),
            resource_lock_file=project_root / os.getenv("APP_RESOURCE_LOCK_FILE", "tmp/app.lock"),
            pid_file=project_root / os.getenv("APP_PID_FILE", "tmp/app.pid"),
            project_root=project_root,
        )
