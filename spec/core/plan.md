<!-- spec-feature: implementation plan -->

Template helps format the feature implementation plan in the **spec-feature** process.

**Parameters**

- **FEATURE** — name of the folder where the plan will be saved. Taken from the value between the first two `@` symbols (e.g., `@payments@` → `payments`).
- **CONTEXT** — main context for preparing the plan. Consider everything after the second `@` in the parameter line; context can span multiple lines and include additional clarifications.

**General rules**

- Work only with specification files: do not create code and new directories.
- Use `spec/core/spec.md` as the specification source on which the plan is formed.
- Use `spec/features/{FEATURE}/spec.md` as additional context. If the file is unavailable, continue working based on **CONTEXT**.
- Substitute specific values instead of placeholders (`{FEATURE}`, `{CONTEXT}`, etc.). If a section is not applicable — explicitly write `Not required — reason: <explanation>`.
- Form meaningful paragraphs or lists: do not leave empty headers, hint comments, and `...` markers.
- Follow basic software development principles: KISS, DRY, and YAGNI, so solutions remain simple, without duplication and unnecessary logic.
- After completing the sections, mark checkboxes in the "Instruction execution control" block.

**What needs to be revealed in the plan**

- `## Data sources / schemas` — storage, migrations, indexes, data handling, and external sources.
- `## Contracts and interfaces` — public APIs, events, queues, UI/CLI, error formats, and validation expectations.
- `## Architecture / Components` — services, modules, integrations, constraints, and chosen stack (DB, API, UI, queues, background processes, etc.).
- `## Risks` — potential problems and mitigation methods.
- `## Assumptions` — explicit assumptions and missing information.

**Steps**

1. Start the result with a comment to specify the save path:
   ```md
   <!-- SAVE_AS: spec/features/{FEATURE}/plan.md -->
   ```
2. Form the plan according to the sections above, based on **CONTEXT** and available additional context. For each section, fix what exactly needs to be done, not just list components.
3. Check that the document contains no unfilled placeholders and that the output is formatted in valid Markdown.
4. Add the "## Instruction execution control" section from the template below at the end of the document and mark `[x]` for each item if the requirement is met.

**Result template**

```md
# Implementation Plan

**Plan:** {CONTEXT}

## Data sources / schemas

## Contracts and interfaces

## Architecture / Components

## Risks

## Assumptions

## Instruction execution control

- [ ] All sections are filled with specific actions or marked "Not required — reason".
- [ ] Plan considers specification and source context.
- [ ] Document is ready for saving and complies with Markdown.
```

Write strictly in Markdown and add nothing outside the document. **Goal** — save file `/spec/features/{FEATURE}/plan.md` describing HOW we implement the feature based on **CONTEXT**.