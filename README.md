# fortune

Secure-by-default Python project scaffold for long-running services and one-shot jobs.

## Highlights

- Structured JSON logging to `logs/`
- `.env`-based configuration with safe defaults
- `dry_run=True` default for destructive operations
- Pre-run resource checks for ports, process names, and lock files
- PID file management and cleanup hooks
- Validation guards for suspicious numeric inputs
- Unit tests, linting, formatting, dependency audit, and CI

## Quick start

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e .[dev]
copy .env.example .env
python scripts/run_sample_job.py
pytest
```

## Project layout

```text
project/
|-- src/
|-- utils/
|-- config/
|-- tests/
|-- scripts/
|-- docs/
|-- .env.example
`-- README.md
```

## Safety defaults

- Destructive actions require `--force`; otherwise the app runs in dry-run mode.
- Long-running loops require timeout, heartbeat logging, and stop signal support.
- Runtime writes stay inside the repository boundary.

## Planning docs

- Service operations guide: `docs/OPERATING_GUIDE.md`
- Fortune method shortlist: `docs/FORTUNE_METHODS.md`
- One-click reading design: `docs/ONE_CLICK_READING_DESIGN.md`
- AI interpretation workflow: `docs/AI_INTERPRETATION_WORKFLOW.md`

## Web preview

```powershell
python scripts/serve_web.py
```

Then open `http://127.0.0.1:8000`.
