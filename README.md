# SpecFeature

SpecFeature helps you create feature specifications automatically. Just describe what you want to build, and it generates a complete specification, technical plan, and task list for your development team. All documents are created by AI from a single description.

## Why use SpecFeature?

### **Clearer starting point**
The specification becomes the single source of truth — you guess less about what you intended to build.

### **Fewer misunderstandings between human and AI**
Clear "contracts" / specifications help avoid "vibe coding" — when AI "guesses" your intention and often builds something not quite what you need.

### **Architecture and decisions are documented**
"Why did we choose this solution?" will be captured in the specification / constitution, not in emails, chats, or someone's head.

### **Controlled task breakdown**
Small tasks are easier to review, test, and correct — fewer "big commits that are hard to understand".

### **Flexibility and evolution**
Specifications are not "dead" — they can be updated, refactored, and revised when requirements change.

### **AI assistant integration**
Specification + plan + tasks gives AI "context" and boundaries within which it can generate code more safely.

## Installation

### Using npx (recommended)

The easiest way to use SpecFeature is through npx:

```bash
# Initialize SpecFeature in current directory
npx spec-feature init

# Initialize SpecFeature with custom folder name
npx spec-feature init my-project-docs
```

This will create a `spec` folder (or your custom folder name) with the complete SpecFeature structure ready to use.

### Global installation

For frequent use, you can install SpecFeature globally:

```bash
npm install -g spec-feature

# Then use it anywhere
spec-feature init
spec-feature init my-features
```

### Local installation

To install SpecFeature in your project:

```bash
npm install spec-feature

# Add to package.json scripts
{
  "scripts": {
    "init-spec": "spec-feature init",
    "init-docs": "spec-feature init documentation"
  }
}
```

## Directory structure `/spec`

### Initial structure (created during initialization)
```
/spec
├── README.md             ← this guide
├── feature.md            ← main template that launches spec-feature
└── core                  ← base templates for specific stages
    ├── spec.md           ← specification structure
    ├── plan.md           ← technical plan structure
    ├── tasks.md          ← task list structure
    ├── verify.md         ← verification report structure
    └── hotfix.md         ← hotfix and artifact update structure
```

### Full structure (after creating the first feature)
```
/spec
├── README.md             ← this guide
├── feature.md            ← main template that launches spec-feature
├── core                  ← base templates for specific stages
│   ├── spec.md           ← specification structure
│   ├── plan.md           ← technical plan structure
│   ├── tasks.md          ← task list structure
│   ├── verify.md         ← verification report structure
│   └── hotfix.md         ← hotfix and artifact update structure
└── features              ← directory with feature materials (created automatically)
    ├── <feature>         ← specific feature folder (e.g., `user-auth`)
    │   ├── spec.md       ← current specification
    │   ├── plan.md       ← technical plan
    │   ├── tasks.md      ← implementation checklist
    │   └── verify-report.md (optional) — verification log
    └── ...               ← other features created from templates
```

> **Note:** The `features` folder is created automatically when creating the first feature through `spec/feature.md`.

## Getting started

To create a feature specification, use `spec/feature.md` template with any AI Assistant that can create folders and files (such as `Claude Code`, `Gemini CLI`, `Codex CLI`, `Copilot`, `Cursor`, etc.).

### Input parameter format

Pass parameters in one line in the format `@<feature>@ <context>`:

- the value between the first two `@` symbols is used as **FEATURE** and determines the feature folder (`@payments@` → `spec/features/payments`);
- everything following the second `@` is **CONTEXT**. It can span multiple lines, include lists, links, and additional clarifications.

### Usage example

```
Use the template from spec/feature.md.
@user-auth@ Need to add user authentication via email and password. The user should be able to register, log in, and recover their password. Integration with the existing notification system is mandatory.
```

### What happens next

The AI assistant generates three Markdown documents in sequence:
- `spec/features/{FEATURE}/spec.md` — specification describing value and user scenarios.
- `spec/features/{FEATURE}/plan.md` — technical plan based on specification and context.
- `spec/features/{FEATURE}/tasks.md` — checklist of tasks for implementation and testing.

For example, the above command will create the `spec/features/user-auth/` folder with three files: `spec.md`, `plan.md`, and `tasks.md`.

## How to launch task execution based on created specifications

After creating the specification and plan, you can proceed with implementation:

1. **Launch task execution**
   ```
   Execute all tasks in `spec/features/{FEATURE}/tasks.md`
   ```

2. **What happens during execution**
   - AI assistant sequentially executes tasks from the checklist
   - Each completed task is marked as finished
   - When problems arise, the assistant may request clarifications
   - Progress can be tracked by updating checkboxes in `tasks.md`

3. **Example for user-auth feature**
   ```
   Execute all tasks in `spec/features/user-auth/tasks.md`
   ```

## What happens after task execution

After completing all tasks, automatic verification is launched:

1. **Automatic verification**
   - AI assistant uses the `spec/core/verify.md` template
   - Compares implemented functionality with requirements from `spec.md`
   - Checks compliance with the technical plan from `plan.md`

2. **Verification results**
   - A report `spec/features/{FEATURE}/verify-report.md` is created
   - Task statuses in `tasks.md` are updated (✅ completed / ❌ requires refinement)
   - Found discrepancies and recommendations are recorded

3. **Verification report content**
   - Summary of completed tasks
   - List of found problems
   - Recommendations for fixes
   - Assessment of feature readiness for production

## Updating existing feature

To update an existing feature, reuse `spec/feature.md`, specifying the name of the required feature folder and a list of changes:

**Update example:**
```
Use the template from spec/feature.md.
@user-auth@ Add two-factor authentication (2FA) via SMS. The user should be able to enable/disable 2FA in profile settings. Integration with existing SMS provider.
```

The AI assistant will correctly overwrite `spec.md`, `plan.md`, and `tasks.md`, preserving the structure and updating the content for new requirements.

## Troubleshooting

### Common problems and solutions

**Problem:** AI assistant doesn't create feature folder
- **Solution:** Make sure you're using the correct format `@feature@ context` and that the assistant has file creation permissions

**Problem:** Tasks are executed in wrong order
- **Solution:** Check task numbering in `tasks.md` and reorder if necessary

**Problem:** Verification doesn't launch automatically
- **Solution:** Make sure all tasks in `tasks.md` are marked as completed, then manually launch verification:
  ```
  Use the template from spec/core/verify.md to verify spec/features/{FEATURE}/
  ```

**Problem:** Conflict when updating existing feature
- **Solution:** Create a backup of current files before updating or use git to track changes