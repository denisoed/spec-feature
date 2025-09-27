<!-- spec-feature: unified launch -->

Template allows creating a complete set of feature documents in one request during the **spec-feature** process.

**Parameters**

- **FEATURE** — name of the folder where artifacts will be saved. Determined by the value between the first two `@` symbols (e.g., `@payments@` → `payments`).
- **CONTEXT** — detailed feature description: goals, functional and non-functional requirements, constraints, implementation plan. Consider everything after the second `@` in the parameter line; text can span multiple lines and include lists.

Parameters are passed in one line in the format `@<feature>@ <context>` without XML-like tags.

**General rules**

- Work only with specification files in the `spec/features/{FEATURE}` directory: do not create code and new directories.
- If the **FEATURE** value matches an already existing feature, update its current materials instead of creating a new folder and use the `spec/core/hotfix.md` template when making changes.
- Within one request, form three separate Markdown documents: `spec.md`, `plan.md`, and `tasks.md`.
- Start each document with a `<!-- SAVE_AS: ... -->` comment to specify the save path.
- All sections from templates must be filled with content: do not leave empty headers, placeholders, or hint comments.
- Use sequence: first specification, then plan (based on specification), then task list (based on specification and plan).
- Follow KISS, DRY, and YAGNI requirements: solutions should be implementable without excessive complexity and duplication.

**Steps**

1. Prepare specification `spec/features/{FEATURE}/spec.md` using the template from `spec/core/spec.md`, using **CONTEXT** as primary context.
2. Based on the completed specification and **CONTEXT**, form plan `spec/features/{FEATURE}/plan.md` using the structure from `spec/core/plan.md`.
3. Considering specification, plan, and **CONTEXT**, compile task list `spec/features/{FEATURE}/tasks.md` according to requirements from `spec/core/tasks.md`.
4. Check that each document is formatted in valid Markdown and contains no unfilled sections.

**Result structure**

```md
<!-- SAVE_AS: spec/features/{FEATURE}/spec.md -->

# {FEATURE}

...

<!-- SAVE_AS: spec/features/{FEATURE}/plan.md -->

# Implementation Plan

...

<!-- SAVE_AS: spec/features/{FEATURE}/tasks.md -->

# Tasks

...
```

Write strictly in Markdown and add nothing outside the three documents. **Goal** — prepare a complete set of feature materials (what we do, how we implement, and what tasks we perform) in one request based on **CONTEXT**.