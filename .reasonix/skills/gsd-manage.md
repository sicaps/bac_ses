---
name: gsd-manage
description: GSD management: config, progress tracking, session state, workspace utilities
---

# GSD Manage — Management & Utilities

Configuration, progress tracking, session persistence, and workspace management utilities. Runs inline since these are lightweight operations.

## How to use

`run_skill({ name: "gsd-manage", arguments: "<subcommand>: <details>" })`

## Subcommands

### progress
Show current project state and what's next:
1. Read `.planning/STATE.md`, `ROADMAP.md`, and latest `UAT.md` if they exist
2. Summarize: current phase, status, what's done, what's pending
3. Suggest the next logical action (discuss → plan → execute → verify → ship)
4. If `.planning/` doesn't exist, suggest `gsd-project: init`

### config
View or update `.planning/config.json`:
- `config: view` — show current config
- `config: set <key> <value>` — update a setting
- Default settings:
  ```json
  {
    "mode": "interactive",
    "parallelization": { "enabled": true },
    "artifacts_dir": ".planning"
  }
  ```

### thread
Lightweight cross-session knowledge store:
- `thread: list` — list all threads in `.planning/threads/`
- `thread: new <title>` — create a new thread file with Goal, Context, References, Next Steps
- `thread: <slug>` — resume/read an existing thread
- Threads are lighter than phases — no planning state, just persistent notes for work that spans sessions

### inbox / capture
Quick capture of ideas, TODOs, or notes:
- `capture: <note>` — append to `.planning/inbox.md` with timestamp
- `capture --backlog <desc>` — create a backlog item at `.planning/phases/999.N/`

### state
Inspect or update session state:
- `state: view` — show STATE.md
- `state: set <key> <value>` — update a state field
- `state: save` — write a session snapshot for resume later

### undo
For reverting the last change(s) made during a GSD phase:
1. Use `git log --oneline -10` to show recent commits
2. Show the user what would be reverted (files changed, diff summary)
3. Ask confirmation before running the revert
4. Execute `git revert` with a descriptive commit message
