"""Serve the local fortune web app."""

from __future__ import annotations

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main() -> int:
    """Run a local static file server for the web directory."""

    root = Path(__file__).resolve().parents[1] / "web"
    handler = partial(SimpleHTTPRequestHandler, directory=str(root))
    server = ThreadingHTTPServer(("127.0.0.1", 8000), handler)
    print("Serving fortune web app at http://127.0.0.1:8000")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
