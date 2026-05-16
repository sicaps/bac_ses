---
name: gsd-quality
description: GSD quality gates: code review, debug, security audit, UI review, eval
runAs: subagent
---

# GSD Quality — Quality Gates

Run quality checks on code: review, debug, security audit, UI audit, and test evaluation. Runs as an isolated subagent so the review is impartial and its findings don't bloat your main context.

## How to use

`run_skill({ name: "gsd-quality", arguments: "<subcommand>: <target>" })`

## Subcommands

### review
Full code review of a specific file, directory, or the current branch diff.
- Read the code, examine `git diff` if no target given
- Check: correctness, edge cases, error handling, naming, consistency with project conventions
- Rate each concern: HIGH / MED / LOW
- Output structured REVIEW.md with: Summary, Issues (grouped by severity), Positives, Suggestions

### debug
Diagnose a bug. Given a symptom or failing test:
1. Search the codebase for the relevant code path (`search_content`, `search_files`)
2. Formulate hypotheses about the root cause
3. Check each hypothesis by reading the relevant code
4. Report: Root Cause, Affected Files, Fix Plan (concrete SEARCH/REPLACE blocks)
5. If the user provided a failing test command, reference the actual error output

### security
Security-focused review of a target:
- Check for: injection vectors, hardcoded secrets, path traversal, unsafe deserialization, missing auth checks, CSP gaps
- Rate each: CRITICAL / HIGH / MED / LOW
- Output SECURITY.md with findings and remediation steps

### ui-audit
UI review (call on a frontend directory or component):
- Check: loading states, empty states, error states, responsive layout, keyboard navigation, focus management, color contrast
- Score each dimension 1-4
- Output top 3 priority fixes

### eval
Test evaluation — examine test coverage and quality:
- Read test files for the target
- Check: are edge cases tested? Are there integration tests? Coverage gaps?
- Suggest new test cases with rationale
