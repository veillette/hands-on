# Claude.md - Repository Guide for AI Assistants

This document provides essential context for AI assistants (Claude) working on the "Hands-On Advanced Physics Laboratory" textbook repository.

## Repository Overview

This is a physics textbook project built with **MyST Markdown** (mystmd), designed for upper-level undergraduate physics students. The textbook covers advanced laboratory methods, experimental design, data analysis, scientific thinking, and technical writing.

- **Published at**: https://veillette.github.io/hands-on/
- **Repository**: https://github.com/veillette/hands-on
- **License**: CC-BY-NC-SA-4.0
- **Build System**: mystmd v1.7.0+
- **Target Audience**: 3rd-4th year undergraduate physics students

## Repository Structure

```
hands-on/
├── content/              # Main textbook content
│   ├── Preface.md
│   ├── Chapter1.md - Chapter7.md
│   └── Appendix1.md - Appendix4.md
├── figures/              # Images organized by chapter (ch1/, ch2/, etc.)
├── plugins/              # MyST plugins for interactive elements
├── scripts/              # Build automation scripts
├── myst.yml              # MyST configuration
├── package.json          # npm dependencies and scripts
├── .prettierrc           # Prettier formatting configuration
├── .markdownlint.json    # Markdown linting rules
├── CONTRIBUTING.md       # Contribution guidelines
└── REVIEW-TECHNICAL-FORMATTING.md  # Known issues and formatting standards
```

## Content Conventions

### 1. File Organization

- **Chapters**: `content/Chapter[1-7].md` - Main instructional content
- **Appendices**: `content/Appendix[1-4].md` - Supplementary material and tutorials
- **Figures**: `figures/ch[N]/Fig[N]_[M].png` - Organized by chapter number
- Each chapter/appendix is a standalone markdown file

### 2. Writing Style

- **Perspective**: Use first-person plural ("we") for instructional content
- **Audience Level**: 3rd-4th year undergraduate physics students
- **Tone**: Clear, concise academic English
- **Terminology**: Define specialized terms when first introduced
- **Units**: SI units and standard physics notation throughout
- **Scientific Accuracy**: All content must be scientifically accurate; cite peer-reviewed sources where appropriate

### 3. MyST Markdown Conventions

This repository uses **MyST Markdown**, not standard GitHub-flavored markdown. Key MyST-specific syntax:

#### Admonitions (Notes, Tips, Warnings)

```markdown
:::{note}
This is a note
:::

:::{tip}
This is a helpful tip
:::

:::{warning}
This is a warning
:::

:::{important}
This is important information
:::

:::{caution}
This is a caution
:::

:::{admonition} Custom Title
:class: note

Custom admonition with specific class
:::
```

**Important**: Do NOT use GitHub-style callouts like `> [!note]`. Always use MyST directive syntax `:::{note}`.

#### Exercises

```markdown
:::{exercise} Exercise Title
:label: ex-unique-label

Exercise content here
:::
```

#### Glossary

```markdown
:::{glossary}
Term 1
  Definition of term 1

Term 2
  Definition of term 2
:::
```

#### Figures

Prefer MyST figure directives over basic markdown image syntax:

```markdown
:::{figure} ../figures/ch4/Fig4_1.png
:label: fig-elastic-band
:alt: Graph showing elastic band extension vs load
:width: 80%

Caption text describing the figure
:::
```

Reference figures with: `{numref}fig-elastic-band`

#### Equations

For labeled equations that need cross-referencing:

```markdown
```{math}
:label: eq-ohms-law
V = IR
```

Reference with: `{eq}eq-ohms-law`

For inline equations: Use `$...$` syntax
For display equations: Use `$$...$$` syntax

#### Code Blocks

Always specify language for syntax highlighting:

````markdown
```python
import numpy as np
import matplotlib.pyplot as plt
```
````

### 4. Mathematical Content

- **LaTeX Syntax**: All equations use LaTeX within `$...$` (inline) or `$$...$$` (display)
- **Exponents**: Use proper LaTeX syntax `x^{1/2}` not `x^(1/2)`
- **Symbols**: Use standard physics notation (σ for uncertainty, μ for mean, etc.)
- **Units**: Include units in equations where appropriate using `\text{unit}` or `\ \text{unit}`

Example:
```latex
$$\sigma_A = 0.0133 \times 472.44 \text{ cm}^2 \approx 6.3 \ \text{cm}^2$$
```

### 5. Exercise and Section Numbering

- Use MyST's automatic numbering via `:label:` attributes
- Don't manually number exercises or sections
- Reference labeled items using `{ref}`, `{numref}`, or `{eq}` syntax

## Formatting Requirements

### **CRITICAL: Always Format Before Committing**

Before committing any changes to markdown files, you **MUST** run:

```bash
npm run format
```

This runs Prettier on all markdown files in `content/**/*.md` with the following settings:

- **Print Width**: 80 characters
- **Prose Wrap**: preserve (for markdown files)
- **Tab Width**: 2 spaces
- **End of Line**: LF (Unix-style)

### Checking Formatting

To check if files are properly formatted without modifying them:

```bash
npm run format:check
```

### Markdown Linting

The repository uses markdownlint with custom rules (see `.markdownlint.json`):

```bash
npm run lint:md          # Check for issues
npm run lint:md:fix      # Auto-fix issues where possible
```

## Development Workflow

### Building and Previewing

```bash
# Install dependencies
npm install

# Build HTML output
npm run build

# Build and preview locally (opens at http://localhost:3000)
myst start

# Clean build artifacts
npm run clean

# Export to all formats
npm run export

# Build PDF
npm run pdf

# Build DOCX
npm run docx
```

### Making Changes

1. **Read existing content first**: Always read the file you're modifying to understand context and maintain consistency
2. **Make targeted changes**: Only modify what's necessary; avoid over-engineering or unnecessary refactoring
3. **Format before committing**: Run `npm run format` on any markdown changes
4. **Test the build**: Run `myst build --html` to ensure no build errors
5. **Follow MyST syntax**: Use proper MyST directives, not GitHub-flavored markdown alternatives

## Common Patterns in This Repository

### Uncertainty Notation

The textbook uses two uncertainty propagation methods:
- **Chapter 2**: Maximum uncertainty method (sum of absolute values)
- **Chapter 3**: Statistical method (root-sum-of-squares)

Be aware of which method is appropriate for the context.

### Python Code Examples

Python code should:
- Be properly formatted and commented
- Use standard scientific libraries (numpy, matplotlib, scipy)
- Include error handling where appropriate
- Match the educational level (undergraduate physics)

### Figure References

Figures are referenced in text as "Figure X.Y" where X is chapter number and Y is figure number within that chapter.

## Known Issues and Review Standards

See `REVIEW-TECHNICAL-FORMATTING.md` for:
- Documented technical accuracy issues
- Formatting inconsistencies being addressed
- Standards for reviewing and improving content

Priority issues to avoid:
- ❌ Broken LaTeX calculations
- ❌ GitHub-style callouts (`> [!note]`) instead of MyST directives
- ❌ Unlabeled equations that are referenced by number
- ❌ Missing alt text for figures
- ❌ Inconsistent admonition syntax

## Git Workflow

### Branch Naming

Development branches should follow the pattern: `claude/descriptive-name-{session-id}`

### Commit Messages

Write clear, descriptive commit messages that:
- Summarize the nature of changes (feature, enhancement, fix, refactoring, docs)
- Focus on the "why" rather than just the "what"
- Are concise (1-2 sentences)
- Use imperative mood ("Add", "Fix", "Update", "Remove")

Examples from recent commits:
- "Remove numbered section headers from Appendix 4 for consistency"
- "Standardize exercise presentation across chapters and appendices"
- "Apply Prettier formatting to markdown files"

### Pushing Changes

Always push to the designated branch:

```bash
git push -u origin claude/branch-name-{session-id}
```

## Content Quality Standards

### Before Submitting Changes

- [ ] Run `npm run format` on modified markdown files
- [ ] Verify MyST syntax (admonitions, figures, equations)
- [ ] Test build: `myst build --html`
- [ ] Check for scientific accuracy
- [ ] Ensure consistent terminology
- [ ] Verify all math uses proper LaTeX syntax
- [ ] Confirm figures have alt text and captions
- [ ] Check that cross-references work correctly

### Writing Quality Checklist

- [ ] Target audience: 3rd-4th year physics students
- [ ] Use first-person plural ("we") for instruction
- [ ] Define specialized terms on first use
- [ ] Include units in all quantitative statements
- [ ] Provide clear examples for complex concepts
- [ ] Use consistent notation throughout

## Getting Help

- **MyST Documentation**: https://mystmd.org/guide
- **Repository Issues**: https://github.com/veillette/hands-on/issues
- **Contributing Guide**: See CONTRIBUTING.md

## Quick Reference: Common MyST Patterns

```markdown
# Chapter Title

:::{admonition} Learning Objectives
:class: note

- Objective 1
- Objective 2
:::

## Section Heading

Regular paragraph text with $inline\ math$ and references to {eq}eq-label.

:::{note}
Important conceptual point
:::

```{math}
:label: eq-important
y = mx + b
```

:::{exercise} Problem Title
:label: ex-problem-1

Exercise content
:::

:::{figure} ../figures/ch1/Fig1_1.png
:label: fig-example
:alt: Description for accessibility
:width: 600px

Figure caption
:::
```

---

**Last Updated**: December 2025
**For**: AI assistants working on the Hands-On Advanced Physics Laboratory textbook
