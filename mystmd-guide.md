# MyST Markdown Reference Guide

## Introduction and Overview

MyST (Markedly Structured Text) is a markdown specification designed to create publication-quality documents, especially technical and scientific content, written entirely in Markdown. It was designed to make it easier to create publishable computational documents written with Markdown notation and is a superset of CommonMark Markdown, drawing heavy inspiration from reStructuredText and pandoc.

The MyST ecosystem consists of three main components:
1. The MyST markup language (a superset of CommonMark)
2. The MyST abstract syntax tree (AST), which is the data structure of a document after parsing
3. A set of unit tests for testing implementations

The mystmd document engine and its ecosystem of tools were developed as a collaboration between Curvenote, 2i2c, and the ExecutableBooks team. It can help create scientific PDFs, Microsoft Word documents, presentations, and websites.

## Core Features and Capabilities

MyST adds various typography extensions to standard markdown, including:
- Footnotes
- Inline math
- Definition lists
- Rich linking to other documents
- Citations

The extensions and design of MyST allow you to directly create "directives" and "roles" that extend markdown to support technical and scientific documents:
- Directives are block-level extension points, like callout panels, tabs, figures, or embedded charts
- Roles are inline extension points, for components like cross-references, external references, citations, or inline math

Some standout features include:
- "Rabbit-hole links" that allow readers to get information quickly and deep-dive into computations, code, and interactive figures
- Live graphs embedded directly in documentation with computation backed by Jupyter
- JupyterLab support with inline computations, ipywidgets support, and beautiful typography

## Basic Syntax

### CommonMark Foundation

MyST builds on CommonMark, which supports:
- Headers (using # syntax)
- Bold and italic text
- Lists
- Links
- Images
- Code blocks
- Block quotes

### MyST-Specific Syntax

MyST extends CommonMark with directives and roles:

**Directives** are block-level extensions. They can be created using fences made of colons (`:::`) or backticks (``````). Options can be specified using `:key: value` pairs directly below the opening fence or using YAML syntax between `---` markers.

*   **Arguments:** Some directives also accept one or more arguments, which appear directly after the directive name, enclosed in quotes if they contain spaces.
*   **Content:** Directives may or may not have content, which appears below the options (if any) or directly below the opening fence if there are no options.
*   **Fences:** The opening fence uses `{}` around the directive name. The closing fence must match the opening fence type (either `:::` or `````).

Here are the basic formats again:

1.  **Colon Fence & Colon Options:**
    ```myst
    :::{directivename} ArgumentIfNeeded
    :key1: value1
    :key2: value2

    This is the directive's content block.
    It can span multiple lines.
    :::
    ```

2.  **Backtick Fence & YAML Options:**
    ```myst
    ```{directivename} ArgumentIfNeeded
    ---
    key1: value1
    key2: value2
    ---
    This is the directive's content block.
    It can span multiple lines.
    ```
    ```

*Note: The number of colons (`:`) or backticks (```) in the fences must be at least three, and the closing fence must have at least as many as the opening fence. This allows for nesting directives by using more fences for the outer directive.*

### Further Examples

1.  **Note Directive (Colon fence, colon options, content):**
    ```myst
    :::{note}
    :class: tip

    This is the content of the note.
    It uses a colon fence and a `class` option.
    :::
    ```

2.  **Warning Directive (Backtick fence, YAML options, content):**
    ```myst
    ```{warning}
    ---
    class: severe
    ---
    This is the content of the warning.
    It uses a backtick fence and YAML options.
    ```
    ```

3.  **Figure Directive (Backtick fence, YAML options, no content):**
    Figures often don't have a content block; their "content" is specified via arguments/options.
    ```myst
    ```{figure} ../images/logo.png
    ---
    name: fig-logo
    alt: MyST Logo
    width: 200px
    ---
    Optional Caption Text (This *is* content, but placed differently for figures)
    ```
    ```

4.  **Admonition with Argument (Colon fence, argument, content):**
    The `admonition` directive takes the title as an argument.
    ```myst
    :::{admonition} Custom Title Here
    :class: dropdown

    This admonition has a title provided as an argument
    and uses a colon fence.
    :::
    ```

*Note: Both `:::` and ````` fences are valid for most directives unless a specific implementation requires one or the other. Consistency within a project is recommended.*

**Roles** are inline extensions written as:
```
Some content {rolename}`and here is my role's content!`
```

## Code and Code Blocks

Code can be included using standard markdown syntax with triple backticks and a language identifier. For example:

```python
print("Hello world")
```

For enhanced features like captions, labels, line numbers, or line emphasis, use the `{code}` directive:

```{code}
:linenos:
:emphasize-lines: 2,3
print("Line 1")
print("Line 2 - emphasized")
print("Line 3 - emphasized")
```

To show a filename, use the `filename` option:

```{code}
:filename: example.py
print("Hello world")
```

## Document Structure and Configuration

MyST projects are configured using a `myst.yml` file at the root of your project. This file contains metadata about the project such as:
- Title
- Description
- Keywords
- Authors
- GitHub repository
- Bibliography files

The configuration also controls site template options, navigation, build settings (like enabling extensions), and other structural elements. Many configuration options set in `myst.yml` apply project-wide, while some can be overridden in individual document frontmatter (the YAML block at the very top of a `.md` file).

## Installation and Usage

The mystmd project provides a command line tool for working with MyST Markdown projects. To install:

```
# Using npm
npm install -g mystmd

# Or using PyPI
pip install mystmd

# Or using Conda
conda install mystmd -c conda-forge
```

Basic usage involves:
1. Creating a project directory
2. Initializing with `myst init` to create a configuration file
3. Starting a development server with `myst start`
4. Building outputs with various `myst build` commands

## Extending MyST

The MyST AST (Abstract Syntax Tree) is the core of extending MyST functionality. It contains all the semantic structure of a document, including content types (e.g., "italics" or "admonition boxes"). When a MyST Markdown document is parsed, the result is MyST AST.

Extensions can be created in JavaScript or through executable extensions in other languages like Python. Executable extensions are treated like a black box in MyST - the build process executes a specified file and treats anything printed to stdout as MyST AST to be inserted into the document.

## Integration with Jupyter and Computational Content

MyST has deep integration with Jupyter. In fact, the initial use case driving the development of MyST was Jupyter Book, which allows creating educational online textbooks and tutorials with Jupyter Notebooks and narrative content written in MyST. In June 2024, Jupyter Book was incorporated as a Jupyter sub-project, standardizing on using and stewarding the MyST document engine.

## Export Formats

Once you write a document in MyST, you can use the command line tools to translate it into various formats:
- Scientific PDF articles
- Word Documents
- Websites

## Best Practices for Generating MyST Content

When generating MyST content, consider these best practices:

1. **Follow the correct syntax structure**:
   - Use proper directive syntax with either colon pairs or YAML-style options
   - Use role syntax correctly for inline extensions
   - Remember that directives use `{}` and roles use `{}` plus backticks

2. **Leverage semantic markup**:
   - Use cross-references instead of raw links when referring to other sections
   - Use citations properly with bibliographic entries
   - Apply equations, callouts, and other scientific elements appropriately

3. **Use structured content organization**:
   - Include proper frontmatter in the document
   - Structure headings logically
   - Apply appropriate labeling for figures, tables, and equations

4. **Consider the output format**:
   - Be aware that content may be rendered as PDF, website, or Word document
   - Design content to be compatible with all potential output formats

5. **Optimize for computational content**:
   - When including code, specify the correct language for syntax highlighting
   - Consider using executable code blocks when appropriate
   - Provide captions and labels for code blocks when they represent figures or important elements

By following these guidelines, one can effectively generate well-formed MyST Markdown content that takes full advantage of the format's capabilities for technical and scientific documentation.

## Admonitions and Callouts

Admonitions (also called callouts) are highlighted blocks of text that exist slightly apart from the main narrative to draw attention to specific information, such as notes, warnings, or tips.

### Basic Admonition Syntax

MyST supports several admonition types, each offering visual distinction through different styling. The basic syntax uses the directive format:

```
:::{note}
This is a note admonition.
:::
```

Or using the backtick fence format:

```
```{note}
This is a note admonition.
```
```

### Common Admonition Types

MyST supports these common admonition types:

- `note`: General information
- `tip` or `hint`: Helpful advice
- `important`: Crucial information
- `warning` or `caution`: Indicates potential issues
- `danger` or `error`: Highlights serious problems
- `seealso`: References to related information
- `attention`: Draws special attention to a point

### Customizing Admonitions

#### Adding Custom Titles

To provide a custom title for an admonition, you can use the `admonition` directive with a title as an argument:

```
:::{admonition} My Custom Title
This is a custom admonition.
:::
```

#### Adding CSS Classes

You can add CSS classes to admonitions using the `class` option:

```
:::{note}
:class: custom-class another-class
This note has custom CSS classes.
:::
```

#### Dropdown Admonitions

To create a collapsible admonition that users can expand or collapse, add the `dropdown` class:

```
:::{note}
:class: dropdown
This content is initially hidden and can be expanded.
:::
```

### Nesting Admonitions

You can nest admonitions inside one another by adding extra backticks or colons to the outer directive:

```
::::{important}
This is important!

:::{tip}
And here's a tip inside the important note.
:::
::::
```

## Exercises and Solutions

MyST, often in conjunction with tools like Jupyter Book or specific theme features, supports dedicated blocks for exercises and their solutions, useful in educational contexts.

### Creating Exercises

Exercises can typically be created using an `exercise` directive or a similarly named admonition type:

```myst
```{exercise}
:label: ex-basic-python

Write a Python function that takes two numbers and returns their sum.
```
```

This creates a visually distinct block marked as an exercise. You can add labels for referencing.

### Creating Solutions

Solutions are often linked to exercises and can be created using a `solution` directive or admonition. They are frequently designed to be optionally displayed or hidden (e.g., via a dropdown or build configuration).

```myst
```{solution} ex-basic-python
:class: dropdown

Here's one way to solve the exercise:

```python
def add_numbers(a, b):
  """Returns the sum of two numbers."""
  return a + b

# Example usage
result = add_numbers(5, 3)
print(f"The sum is: {result}")
```
```

Key points about solutions:

*   **Linking:** The argument to the `solution` directive (e.g., `ex-basic-python`) often corresponds to the label of the exercise it solves.
*   **Collapsible:** Using `:class: dropdown` is a common way to make the solution initially hidden.
*   **Build Configuration:** Some MyST build systems or themes allow configuring whether solutions are included or removed entirely from certain outputs (e.g., student versions of notes).

*Note: The exact availability and behavior of `exercise` and `solution` directives/admonitions might depend on the specific MyST parser configuration, theme, or extensions being used (like `sphinx-exercise` or features built into Jupyter Book). Check the documentation for your specific toolchain.*

## Mathematical Content

MyST provides robust support for mathematical expressions and equations using LaTeX syntax.

### Inline Math

You can include inline math expressions using several syntaxes:

1. Using the `math` role:
   ```
   Pythagoras theorem: {math}`a^2 + b^2 = c^2`
   ```

2. Using dollar signs (when the `dollarmath` extension is enabled in `myst.yml`):
   ```
   Pythagoras theorem: $a^2 + b^2 = c^2$
   ```

### Math Blocks and Equations

For standalone equations, you can use these approaches:

1. Using the `math` directive:
   ```
   ```{math}
   :label: pythagoras
   a^2 + b^2 = c^2
   ```
   ```

2. Using double dollar signs (when the `dollarmath` extension is enabled in `myst.yml`):
   ```
   $
   a^2 + b^2 = c^2
   $
   ```

3. Using AMS math environments (when the `amsmath` extension is enabled in `myst.yml`):
   ```
   \begin{equation}
   a^2 + b^2 = c^2
   \end{equation}
   ```

### Equation Numbering and References

To number and reference equations:

1. Add a label to the equation:
   ```
   ```{math}
   :label: my-equation
   E = mc^2
   ```
   ```

2. Reference the equation in text:
   ```
   As shown in equation {eq}`my-equation`...
   ```

   Or using a Markdown link:
   ```
   As shown in [](#my-equation)...
   ```

### Advanced Math Features

*Note: Some advanced math features require specific extensions like `amsmath` to be enabled in your project's `myst.yml` file.*

#### Aligned Equations

For multi-line aligned equations:

```
```{math}
:label: aligned-example
\begin{align}
(a + b)^2 &= (a + b)(a + b) \\
&= a^2 + 2ab + b^2
\end{align}
```
```

#### Math Macros

Define reusable math macros in the document's frontmatter or the project's `myst.yml` file under the `math.macros` key:

```yaml
---
# In document frontmatter (or myst.yml)
math:
  macros:
    R: '\mathbb{R}'  # Note: YAML requires escaping backslashes
    vector: '\mathbf{#1}'
---
```

Then use them in your equations:

```
$\vector{x} \in \R^n$
```

## Tables and Data Presentation

MyST supports both simple and complex table structures, making it ideal for presenting data in technical documentation.

### Basic Tables

Simple tables can be created using standard Markdown syntax:

```
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Advanced Tables

For more complex tables with features like alignment, spanning cells, and captions, use the `table` directive:

```
:::{table}
:caption: Sample Data Table
:align: center
| Header 1 | Header 2 | Header 3 |
|:---------|:--------:|---------:|
| Left     | Center   | Right    |
| Cell     | Cell     | Cell     |
:::
```

### Table Options

The `table` directive supports various options:
- `:caption:` - Add a table caption
- `:align:` - Set table alignment (left, center, right)
- `:class:` - Add CSS classes
- `:width:` - Set table width
- `:label:` - Add a label for cross-referencing

## Cross-References and Links

MyST provides powerful cross-referencing capabilities to create interconnected documents.

### Internal References

Reference sections, figures, tables, and equations using labels:

```
:::{figure}
:label: my-figure
![Figure caption](image.png)
:::

See {ref}`my-figure` for details.
```

### External References

Link to external resources using standard Markdown syntax:

```markdown
Visit [GitHub](https://github.com).
```

For more complex external links or specific behaviors defined by themes/extensions, other roles might be available.

### Reference Types

MyST supports various reference types:
- `{ref}` - General references
- `{eq}` - Equation references
- `{numref}` - Numbered references
- `{doc}` - Document references
- `{term}` - Term references

## Citations and Bibliography

MyST integrates with BibTeX and other bibliography formats for academic writing.

### Basic Citations

Cite references using the `cite` role:

```
{cite}`smith2020`
```

### Multiple Citations

Cite multiple sources:

```
{cite}`smith2020,jones2019`
```

### Bibliography Configuration

Configure bibliography paths in `myst.yml`:

```yaml
# In myst.yml
project:
  bibliography:
    - references.bib
    - other-refs.bib
```

## Advanced Formatting

### Custom Containers

Create custom containers for specialized content:

```
:::{custom}
:class: special-box
Custom content here
:::
```

### Sidebars and Asides

Add side content using the `sidebar` directive:

```
:::{sidebar}
:title: Additional Information
Side content here
:::
```

### Custom CSS

Add custom styling by specifying CSS files in `myst.yml`:

```yaml
# In myst.yml
html:
  css:
    - custom.css
```

### Custom JavaScript

Include custom JavaScript files for interactive features via `myst.yml`:

```yaml
# In myst.yml
html:
  js:
    - custom.js
```

## Embedding and Including Content

MyST allows you to structure complex documents by including content from other files or embedding external web resources directly into your pages.

### Including Content from Other Files

The `include` directive is used to insert the content of another file directly into the current document. This is useful for breaking down large documents into smaller, reusable parts.

```myst
This is the main document.

```{include} path/to/another/file.md
:heading-offset: 1
```

More content in the main document.
```

**Explanation:**

*   The argument to `include` is the path to the file whose content should be inserted.
*   Options like `:heading-offset:` allow you to adjust the heading levels from the included file to fit the structure of the parent document.
*   Other options might be available to include only specific parts of a file (e.g., using start/end markers).

### Embedding External Web Content

While MyST Core focuses on including local files, embedding external web content (like videos, maps, or interactive applications) is often achieved through specific directives provided by extensions or themes, or by using raw HTML passthrough (if enabled and safe).

A common approach for embedding a web page is using an `iframe` directive (which might require an extension like `sphinx-design` or enabling raw HTML):

```myst
```{iframe} https://example.com
:width: 100%
:height: 400px
:allowfullscreen:
```
```

**Explanation:**

*   The argument is the URL of the content to embed.
*   Options control the appearance and behavior of the iframe (e.g., `width`, `height`, `allowfullscreen`).

Embedding other specific types of content, like interactive charts (e.g., Plotly, Vega) or videos, typically relies on dedicated directives provided by relevant MyST extensions (e.g., `myst-nb` for notebook outputs, `myst-plotly` for Plotly charts). Consult the documentation for the specific tools or extensions you are using.

*Note: Enabling raw HTML or using iframes can have security implications. Ensure you only embed content from trusted sources.*


## Deployment and Publishing

### Static Site Generation

Build static sites for deployment:

```bash
myst build html
```

### PDF Generation

Create PDF documents:

```bash
myst build pdf
```


