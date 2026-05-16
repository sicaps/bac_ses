---
name: gsd-context
description: GSD codebase intelligence: map architecture, generate docs, gather learnings
runAs: subagent
---

# GSD Context — Codebase Intelligence

Read-only exploration of the codebase to build architectural understanding, generate documentation, and extract patterns and learnings. Runs as an isolated subagent — the findings come back distilled without cluttering the main context.

## How to use

`run_skill({ name: "gsd-context", arguments: "<subcommand>: <target>" })`

## Subcommands

### map
Map the architecture of the codebase or a specific subsystem:
1. Walk directory tree (`directory_tree` maxDepth 3)
2. Identify entry points, key modules, data flow, and layering
3. Read key files (configs, main entry, type definitions, core modules)
4. Output a structured architecture map covering:
   - **Project overview**: what it does, stack, frameworks
   - **Directory layout**: key directories and their purpose
   - **Module graph**: dependency relationships between modules
   - **Data flow**: how data moves through the system
   - **Key patterns**: idioms and conventions used (e.g., repository pattern, middleware chain, event bus)
   - **Entry points**: where execution starts, where tests run
5. Save to `.planning/context/ARCHITECTURE.md`

### docs
Generate or update documentation for a specific area:
- Read the source files
- Write clear, concise documentation covering: purpose, API surface, usage examples, edge cases
- Output as markdown in appropriate location (`docs/` or inline as code comments)
- Preserve any existing doc structure/conventions

### learnings
Extract project learnings and conventions from the codebase:
- Scan for: naming conventions, error handling patterns, testing style, import ordering, state management approach, CSS/styling approach
- Look at existing PRs and commit messages for decision context
- Output `.planning/context/LEARNINGS.md` with actionable rules the model should follow
- Format as concrete "do X, don't do Y" statements

### graphify
Generate a dependency graph of modules:
- Find all imports/requires across the codebase (`search_content` for import/require/from patterns)
- Map relationships: who depends on whom
- Flag circular dependencies
- Output dependency list grouped by layer
