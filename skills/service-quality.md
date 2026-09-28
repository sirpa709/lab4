# Service Quality Review

- Check that the structure is minimal and that the app is separated from local startup.
- Confirm that `PORT` is read from the environment and that `/health` returns JSON.
- Verify that unknown routes return a JSON error.
- Run the application and test `/health` with `curl`.
- Confirm that logs use stdout/stderr and not local files.
- Send `SIGTERM` and verify the orderly shutdown.
- Avoid unnecessary dependencies, endpoints, and configuration.
