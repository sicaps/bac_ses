---
name: gsd-project
description: GSD project lifecycle: init, milestones, audits, summaries, archives
---

# GSD Project — Project Lifecycle Management

Manages the big picture: initializing a new project with requirements and roadmap, tracking milestones, running audits, generating summaries, and archiving completed work.

## How to use

`run_skill({ name: "gsd-project", arguments: "<subcommand>: <details>" })`

## Subcommands

### init
Start a new project from scratch. Creates `.planning/` structure with:
- `PROJECT.md` — vision, audience, core problem
- `REQUIREMENTS.md` — numbered requirements (REQ-001, REQ-002, ...)
- `ROADMAP.md` — phases with goals and status
- `STATE.md` — session memory, current position
- `.planning/config.json` — defaults

**Process:**
1. Ask the user what they're building, who it's for, and key constraints
2. Search the codebase if there's already code (use `search_content`, `search_files`, `directory_tree`)
3. Spawn parallel research agents (via `run_skill explore`) to understand stack, features, architecture, pitfalls
4. Synthesize findings into PROJECT.md, REQUIREMENTS.md, ROADMAP.md
5. Present the roadmap for user approval via `submit_plan`
6. Save approved artifacts

### milestone
Manage milestones — create, advance, or complete.
- `init <name>` — Start a new milestone
- `audit` — Run a milestone audit: check all requirements are addressed, phases are verified, no gaps
- `summary` — Generate a comprehensive summary from all phase artifacts
- `complete` — Archive milestone, tag completion, clean up

### phase
CRUD for phases in the roadmap:
- `add <description>` — Append a new phase
- `remove <N>` — Remove a phase
- `status <N> <new-status>` — Update phase status (pending, discussing, planned, executing, verifying, done)

### report
Generate a project health report: progress %, phases by status, requirements coverage, any blockers. Write to `.planning/reports/`. Present as a markdown summary.
