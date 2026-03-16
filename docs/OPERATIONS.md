# Operations Notes

## Process types

- One-shot jobs should exit immediately after work completes.
- Persistent services should remain active until they receive a stop signal.
- Infinite loops must define heartbeat logging and a timeout or external stop signal.

## Cleanup guidance

- Windows: `taskkill /PID <pid> /F`
- Unix: `kill -9 <pid>` or `pkill -f <process-name>`

## Compliance reminders

- Review local financial regulations before enabling live order execution.
- Keep anti-manipulation controls enabled for any trading logic.
- Minimize personal data collection and retention.
