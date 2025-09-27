<!-- spec-feature: specification -->

Template helps describe a feature before implementation in the **spec-feature** process.

**Parameters**

- **FEATURE** — name of the folder where the specification will be saved. Taken from the value between the first two `@` symbols (e.g., `@payments@` → `payments`).
- **CONTEXT** — main context for describing the feature. Consider everything after the second `@` in the parameter line; context can span multiple lines and include additional clarifications.

**General rules**

- Work only with specification files: do not create code and new directories.
- Substitute specific values instead of placeholders (`{FEATURE}`, `{CONTEXT}`, etc.). The final document should not contain hints, examples, or `...` markers.
- The specification header should contain a clear feature name (adapt the **FEATURE** value if necessary).
- The structure from the template below needs to be filled with content: theses, lists, and tables are allowed, empty sections are not.
- If there's insufficient data for a section, explicitly write `No data — needs clarification: <what exactly>` instead of an empty header.
- Before completing the document, perform self-check and mark checkboxes in the "Instruction execution control" section.

**What needs to be revealed in the specification**

- `## User Stories` — minimum three completed stories. For each, fix the role, action, and result/value.
- `## Main scenarios and rules` — key usage scenarios, constraints, error variants.
- `## Non-functional requirements` — SLA, performance, security, localization, accessibility, and other non-functional criteria.
- `## Assumptions` — explicit assumptions and questions that need clarification before development.

**Steps**

1. Insert a comment at the beginning of the result to specify the save path:
   ```md
   <!-- SAVE_AS: spec/features/{FEATURE}/spec.md -->
   ```
2. Form the specification according to the sections above, based on **CONTEXT** and available additional context.
3. Check that the document is formatted in Markdown and contains no unfilled placeholders.
4. Add the "## Instruction execution control" section with checkboxes from the template at the end of the document and mark each item `[x]` if the condition is met.

**Result template**

```md
# {FEATURE}

**Specification:** {CONTEXT}

## User Stories

## Main scenarios and rules

## Non-functional requirements

## Assumptions

## Instruction execution control

- [ ] Template structure is fully preserved, each section is filled with content or marked "No data — needs clarification".
- [ ] Context from **CONTEXT** is reflected in all sections.
- [ ] Document is ready for saving and contains no service hints.
```

Write strictly in Markdown and add nothing outside the document. **Goal** — save file `/spec/features/{FEATURE}/spec.md` describing WHAT we do and WHY, based on **CONTEXT**.