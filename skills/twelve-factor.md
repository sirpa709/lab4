# Twelve-Factor Review

Use this checklist to review the application with repository evidence. Review the twelve factors separately:

- Codebase: confirm that there is one versionable repository.
- Dependencies: verify that all dependencies are declared in `package.json` and `package-lock.json`.
- Config: check that configuration uses environment variables and contains no secrets.
- Backing services: identify databases, queues, or external APIs; if none exist, mark the factor as not required.
- Build, release, run: review the scripts and separate preparation, release, and execution.
- Processes: confirm that the process is stateless and does not depend on persistent local files.
- Port binding: verify that the server uses `PORT` with a local default value.
- Concurrency: verify that the application can run as an independent process.
- Disposability: check the controlled shutdown on `SIGTERM`.
- Dev/prod parity: compare local execution with the Vercel entrypoint.
- Logs: confirm that logs go to stdout/stderr.
- Admin processes: identify administrative tasks; if none exist, document that they are not needed for this service.

For each item, cite a file or a concrete test result and mark it as implemented, partial, or pending.
