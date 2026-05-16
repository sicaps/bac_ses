# 🦉 Owl Scan — Project Analysis

**Date:** Initial scan  
**Method:** Slow, multi-perspective, looking for what most overlook  
**Project:** `bac_ses` — Vite 8 + React 19 + TypeScript 6 scaffold

---

## The Obvious

A blank **Vite 8 + React 19 + TypeScript 6** scaffold — the default `npm create vite@latest` output, untouched. Dependencies are not installed, there is no git repository, and the counter demo still reads "Edit `src/App.tsx`."

---

## The Hidden Factors

### 1. Bleeding-edge toolchain, no safety net

| Package | Version | Notable |
|---|---|---|
| TypeScript | **6.0.2** | Released mid-2025. `erasableSyntaxOnly: true` is on by default — no `enum`, no `namespace`, no parameter properties. Anyone accustomed to TS 5.x will get confusing compile errors on the first `enum` they write. |
| Vite | **8.0.12** | Uses Oxc under the hood for the React plugin. Third-party Vite plugins may not all have caught up. |
| ESLint | **10.3.0** | Flat config only (no `.eslintrc`). The README recommends stricter type-checked rules, but the actual config only uses the basic recommended set. |

If libraries are added soon, **check every dependency's peer support for these versions**. Many packages still target TS 5.x / Vite 6.

### 2. Raster hero image in an SVG-native project

`src/assets/hero.png` (13 KB, 170×179) sits alongside `react.svg` and `vite.svg`. A pure-SVG project wouldn't use a raster for its primary visual. This is either a placeholder the template author never optimized, or a deliberate choice that should be documented. Either way — it is the one file that will not scale cleanly on retina displays.

### 3. `@types/node` installed but unused

Present in `devDependencies`, but this is a browser-only app (`src/` has no Node.js imports, `types` in tsconfig is `["vite/client"]`). Harmless dead weight, but suggests the project was scaffolded with a generator that threw in everything.

### 4. No testing infrastructure

`package.json` has `dev`, `build`, `lint`, `preview` — but no `test`. No `vitest`, no `testing-library`, nothing. Tests are a **greenfield addition, not incremental**. The later they are added, the harder the retrofit.

### 5. Dark mode is OS-gated, not user-choosable

`index.css` uses `@media (prefers-color-scheme: dark)` — it follows the OS setting. No class toggle, no localStorage persistence, no manual override button. Fine for a template, but if a theme switcher is ever needed, the CSS architecture will need rework (converting media queries to class-based selectors).

### 6. Single chunk, zero code splitting

The entire app is one component, one bundle, one route. No router, no lazy loading, no data fetching pattern. The architecture does not hint at any scaffolding for growth — routing, splitting, and state management decisions will be greenfield when the project outgrows one page.

### 7. Pre-initialization state

`node_modules/` is empty. No `.git` directory. The `.reasonix/skills/` directory is the only non-scaffold content. This is a **blank canvas**, not an app-in-progress.

### 8. The name `bac_ses`

Snake_case for a package name. npm allows it, but kebab-case is conventional (`bac-ses`). If there is a story behind the name (acronym? project code? placeholder?), that context should live in `PROJECT.md` from day one. If it is a placeholder, consider renaming before `package-lock.json` and git history bake it in.

---

## What Comes Next

The highest-leverage move before writing any code is to decide:

- **What is being built?** (app? library? experiment?)
- **Who is the user?** (yourself? a team? customers?)
- **What is the scope boundary?** (prototype vs production — this determines whether routing, auth, API layer, etc. are needed)

The GSD skills installed in `.reasonix/skills/` can guide the next steps:
- `gsd-project: init` — capture vision, requirements, and a roadmap
- `gsd-workflow` — walk through a feature phase by phase
- `gsd-ideate: explore` — explore ideas before committing to a direction
