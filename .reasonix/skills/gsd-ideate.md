---
name: gsd-ideate
description: GSD ideation & exploration: explore ideas, spike tech, sketch UI, write specs
---

# GSD Ideate — Exploration & Capture

Explore ideas, spike technical approaches, sketch UI concepts, and write specifications. Runs inline because it requires iterative back-and-forth with the user.

## How to use

`run_skill({ name: "gsd-ideate", arguments: "<subcommand>: <details>" })`

## Subcommands

### explore
Socratic ideation session. Given a topic or problem:
1. Ask probing questions to surface assumptions, constraints, and priorities
2. Research existing approaches (use `web_search` if needed, or `search_content` for existing code)
3. Present 2-3 alternative approaches with trade-offs (use `ask_choice` if branching decisions)
4. Route output to an artifact: notes (`.planning/inbox.md`), a new thread, a spec, or a phase
5. If the user wants to move forward, suggest the appropriate next skill (gsd-workflow, gsd-project)

### spike
Validate technical feasibility of an approach:
1. Define a clear hypothesis: "Given X, when Y, then Z"
2. Research the approach (web_search for docs, search_content for existing code patterns)
3. Create minimal working code to prove or disprove the hypothesis
4. Report: VALIDATED / INVALIDATED / PARTIAL with evidence
5. On `--wrap-up`: package findings as actionable notes
- For small explorations, a single experiment suffices
- For bigger unknowns, run 2-3 experiments with different approaches

### sketch
Explore visual/UI direction (for frontend work):
1. Understand what component/screen/layout the user wants to design
2. Describe 2-3 visual approaches with different layout structures, interaction models, or visual treatments
3. Note CSS/styling approach consistent with the project's existing patterns
4. End with a concrete recommendation the user can approve

### spec
Write a specification:
1. Gather user's intent through focused questions
2. Research technical context (search codebase for related code, patterns)
3. Write a structured spec covering:
   - **Overview**: what and why
   - **Requirements**: numbered, testable
   - **API / Interface**: surface area, contract
   - **Data model**: types, schemas, flows
   - **Edge cases**: error handling, limits, fallbacks
   - **Open questions**: things still undecided
4. Save to `docs/specs/` or `.planning/specs/`
5. Present for approval

### capture
Quick capture of an idea as a planning artifact:
- `capture: <note>` — append to `.planning/inbox.md`
- `capture --backlog <desc>` — create a numbered backlog item  
- `capture --seed <desc>` — create a seed (forward-looking idea with trigger conditions) at `.planning/seeds/`
