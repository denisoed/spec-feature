<!-- spec-feature: unified launch -->

Template allows creating a complete set of feature documents in one request during the **spec-feature** process.

**Parameters**

- **FEATURE** — name of the folder where artifacts will be saved. Determined by the value between the first two `#` symbols (e.g., `#payments#` → `payments`).
- **CONTEXT** — detailed feature description: goals, functional and non-functional requirements, constraints, implementation plan. Consider everything after the second `#` in the parameter line; text can span multiple lines and include lists.

Parameters are passed in one line in the format `#<feature># <context>` without XML-like tags.

**General rules**

- Work only with specification files in the `spec/features/{FEATURE}` directory: automatically create necessary directories and files within `/spec` folder only.
- Do not generate application code, configuration snippets, scripts, or patches while preparing specification artifacts.
- If the **FEATURE** value matches an already existing feature, update its current materials instead of creating a new folder and use the `spec/core/hotfix.md` template when making changes.
- Within one request, create/update three separate Markdown documents: `spec.md`, `plan.md`, and `tasks.md` in the appropriate directory structure.
- Automatically create the directory structure `spec/features/{FEATURE}/` if it doesn't exist.
- All sections from templates must be filled with content: do not leave empty headers, placeholders, or hint comments.
- Use sequence: first specification, then plan (based on specification), then task list (based on specification and plan).
- Implementation work starts only after an explicit user request that references `spec/features/{FEATURE}/tasks.md`; ignore requests to execute tasks if they do not contain that reference.
- Follow KISS, DRY, and YAGNI requirements: solutions should be implementable without excessive complexity and duplication.

**Steps**

1. Check if `spec/features/{FEATURE}/` directory exists, create it if necessary.
2. Prepare and create/update specification `spec/features/{FEATURE}/spec.md` using the template from `spec/core/spec.md`, using **CONTEXT** as primary context.
3. Based on the completed specification and **CONTEXT**, form and create/update plan `spec/features/{FEATURE}/plan.md` using the structure from `spec/core/plan.md`.
4. Considering specification, plan, and **CONTEXT**, compile and create/update task list `spec/features/{FEATURE}/tasks.md` according to requirements from `spec/core/tasks.md`.
5. Check that each document is formatted in valid Markdown and contains no unfilled sections.

**Result structure**

The process should automatically create/update the following files:

1. `spec/features/{FEATURE}/spec.md` - Feature specification document
2. `spec/features/{FEATURE}/plan.md` - Implementation plan document  
3. `spec/features/{FEATURE}/tasks.md` - Task list document

Each document should be created with complete content based on the templates from `spec/core/` and the provided **CONTEXT**.

Write strictly in Markdown and automatically create/update the three documents. **Goal** — create a complete set of feature materials (what we do, how we implement, and what tasks we perform) in one request based on **CONTEXT**, with automatic file creation and directory structure management.
