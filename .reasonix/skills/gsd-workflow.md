---
name: gsd-workflow
description: GSD core development loop: discuss → plan → execute → verify → ship a phase
---

# GSD Workflow — Core Development Loop

Run this when you have a phase goal or feature to build and want the full GSD disciplined workflow: discuss → plan → execute → verify → ship.

## How to use

Invoke with a phase description. Example: `run_skill({ name: "gsd-workflow", arguments: "Add user authentication with JWT tokens" })`

## Workflow

### 1. DISCUSS — Capture implementation decisions

Ask the user **targeted questions** about how they want this built. Don't ask everything — only the gray areas that affect architecture:

- **Layout / API shape**: Request/response format, route structure, error format
- **Error handling**: What happens on failure? Logging strategy?
- **Dependencies**: Any library preferences? Zero-dependency policy?
- **Testing**: Test framework, coverage expectations
- **Edge cases**: What inputs are invalid? What should never happen?

Write the answers to `.planning/phases/current/CONTEXT.md`.

### 2. PLAN — Research and create task plans

- Search the codebase for existing patterns, conventions, similar implementations (`search_content`, `search_files`, `read_file`)
- Break the phase into atomic, independently-executable tasks (each should fit in one fresh context window)
- Create `.planning/phases/current/` with numbered PLAN files: `01-PLAN.md`, `02-PLAN.md`, etc.
- **Each PLAN file** must contain:
  - Task name and scope
  - Files to create/modify
  - Concrete action steps (not vague)
  - Verification criteria (how to confirm it worked)
- **Submit a plan** via `submit_plan` for the user to review and approve

### 3. EXECUTE — Implement each task

Once the plan is approved:

- Implement plans in order (respect dependencies)
- Use `edit_file` / `multi_edit` / `write_file` as appropriate
- After each task, verify it against its criteria
- Write a short SUMMARY.md per task
- Update `.planning/phases/current/STATE.md`

### 4. VERIFY — User acceptance check

Walk the user through what was built. For each deliverable:

- State what was implemented
- Ask them to confirm it works as expected
- If something's broken, diagnose and fix (don't just report)

Write results to `.planning/phases/current/UAT.md`.

### 5. SHIP — Wrap up

- Create a summary of what was built, key decisions, and any deferred items
- Update ROADWAY.md with phase status
- Suggest next phase if applicable
