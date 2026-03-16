"""Structured logging setup."""

from __future__ import annotations

import json
import logging
from datetime import UTC, datetime
from pathlib import Path


class JsonFormatter(logging.Formatter):
    """Format logs as one JSON object per line."""

    def format(self, record: logging.LogRecord) -> str:
        payload = {
            "timestamp": datetime.now(UTC).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if hasattr(record, "event"):
            payload["event"] = record.event
        if hasattr(record, "context"):
            payload["context"] = record.context
        if record.exc_info:
            payload["exception"] = self.formatException(record.exc_info)
        return json.dumps(payload, ensure_ascii=True)


def configure_logging(log_dir: Path, log_level: str) -> Path:
    """Configure root logging and return the active log file path."""

    log_dir.mkdir(parents=True, exist_ok=True)
    log_file = log_dir / f"{datetime.now().strftime('%Y-%m-%d')}.log"

    handler = logging.FileHandler(log_file, encoding="utf-8")
    handler.setFormatter(JsonFormatter())

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(JsonFormatter())

    root_logger = logging.getLogger()
    root_logger.handlers.clear()
    root_logger.setLevel(getattr(logging, log_level.upper(), logging.INFO))
    root_logger.addHandler(handler)
    root_logger.addHandler(console_handler)
    return log_file
