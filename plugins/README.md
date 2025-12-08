# MyST Plugins

This directory contains custom MyST (Markedly Structured Text) directive plugins for embedding interactive content into the Hands-On Advanced Physics Laboratory textbook.

## Overview

These plugins extend MyST's functionality by providing custom directives that embed various types of interactive educational content:

| Plugin | Directive | Description |
|--------|-----------|-------------|
| [PhET](#phet-simulations) | `{phet}` | Embed PhET physics simulations |
| [GeoGebra](#geogebra-simulations) | `{geogebra}` | Embed GeoGebra math visualizations |
| [YouTube](#youtube-videos) | `{youtube}` | Embed YouTube videos |
| [JupyterLite](#jupyterlite-repl) | `{jupyterlite}` | Embed interactive JupyterLite REPL |
| [Pyodide](#pyodide-python-runner) | `{run-python}` | Run Python code in the browser |

## Installation

Plugins are automatically loaded by MyST when registered in `myst.yml`:

```yaml
project:
  plugins:
    - type: javascript
      path: plugins/phet.mjs
    - type: javascript
      path: plugins/geogebra.mjs
    - type: javascript
      path: plugins/youtube.mjs
    - type: javascript
      path: plugins/jupyterlite.mjs
    - type: javascript
      path: plugins/pyodide.mjs
```

## Plugin API

All plugins follow the MyST plugin specification and export a default object with the following structure:

```javascript
const plugin = {
  name: 'Plugin Name',
  directives: [directiveObject]
};

export default plugin;
```

Each directive object has:

- **`name`** (string): The directive identifier used in MyST markdown
- **`doc`** (string): Human-readable description
- **`arg`** (object): Configuration for the required/optional argument
- **`body`** (object): Configuration for optional body content
- **`options`** (object): Available options with types and documentation
- **`run`** (function): Processes the directive and returns AST nodes

---

## PhET Simulations

**File:** `phet.mjs`

Embeds interactive physics simulations from [PhET Interactive Simulations](https://phet.colorado.edu/) at the University of Colorado Boulder.

### Usage

```markdown
{phet} simulation-name
:option: value

Optional caption text
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `simulation-name` | String | Yes | The name of the PhET simulation (e.g., "geometric-optics") |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | String | `800px` | Width of the iframe |
| `height` | String | `600px` | Height of the iframe |
| `lang` | String | `en` | Language code for the simulation |
| `placeholder` | String | - | Path to placeholder image for static exports |
| `urlOptions` | String | - | Additional URL parameters (e.g., `?screens=2`) |

### Examples

**Basic usage:**
```markdown
{phet} geometric-optics
```

**With custom dimensions and caption:**
```markdown
{phet} projectile-motion
:width: 100%
:height: 500px
:lang: es

Explore the physics of projectile motion!
```

**With URL options:**
```markdown
{phet} circuit-construction-kit-dc
:urlOptions: ?screens=2
```

### URL Format

The plugin constructs URLs in the format:
```
https://phet.colorado.edu/sims/html/{simulation}/latest/{simulation}_{lang}.html{urlOptions}
```

---

## GeoGebra Simulations

**File:** `geogebra.mjs`

Embeds interactive mathematics visualizations from [GeoGebra](https://www.geogebra.org/).

### Usage

```markdown
{geogebra} material-id
:option: value

Optional caption text
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `material-id` | String | Yes | GeoGebra material ID or base64-encoded file |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | String | `800px` | Width of the iframe |
| `height` | String | `600px` | Height of the iframe |
| `appName` | String | `classic` | GeoGebra app: `graphing`, `geometry`, `3d`, `cas`, `classic` |
| `showToolBar` | Boolean | `false` | Show the toolbar |
| `showAlgebraInput` | Boolean | `false` | Show the algebra input field |
| `showMenuBar` | Boolean | `false` | Show the menu bar |
| `showResetIcon` | Boolean | `true` | Show the reset icon |
| `enableLabelDrags` | Boolean | `false` | Enable dragging of labels |
| `enableShiftDragZoom` | Boolean | `true` | Enable shift-drag to zoom |
| `enableRightClick` | Boolean | `false` | Enable right-click context menu |
| `placeholder` | String | - | Path to placeholder image for static exports |

### Examples

**Basic usage:**
```markdown
{geogebra} agxadfzzivgh
```

**Graphing calculator with controls:**
```markdown
{geogebra} pythagorean-theorem
:appName: graphing
:width: 100%
:height: 500px
:showToolBar: true

Interactive demonstration of the Pythagorean theorem
```

**3D geometry with full UI:**
```markdown
{geogebra} 3d-vectors
:appName: 3d
:showAlgebraInput: true
:showMenuBar: true
:enableRightClick: true
```

### Material ID Detection

The plugin automatically detects whether the argument is:
- **Short string (< 30 chars):** Treated as a material ID
- **Long string (>= 30 chars):** Treated as a base64-encoded GeoGebra file

---

## YouTube Videos

**File:** `youtube.mjs`

Embeds YouTube videos using the [YouTube IFrame Player API](https://developers.google.com/youtube/player_parameters).

### Usage

```markdown
{youtube} video-id
:option: value

Optional caption text
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `video-id` | String | Yes | YouTube video ID (11 characters from URL) |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | String | `560px` | Width of the iframe |
| `height` | String | `315px` | Height of the iframe |
| `title` | String | `YouTube video` | Iframe title (for accessibility) |
| `start` | Number | - | Start time in seconds |
| `end` | Number | - | End time in seconds |
| `autoplay` | Boolean | `false` | Autoplay the video |
| `controls` | Boolean | `true` | Show video controls |
| `cc_load_policy` | Boolean | `false` | Show closed captions by default |
| `modestbranding` | Boolean | `true` | Hide YouTube logo |
| `loop` | Boolean | `false` | Loop the video |
| `mute` | Boolean | `false` | Mute the video |
| `rel` | Boolean | `false` | Show related videos at end |
| `placeholder` | String | - | Path to placeholder image for static exports |

### Examples

**Basic usage:**
```markdown
{youtube} dQw4w9WgXcQ
```

**With caption and custom dimensions:**
```markdown
{youtube} dQw4w9WgXcQ
:width: 100%
:height: 400px
:title: Never Gonna Give You Up

A classic music video from Rick Astley
```

**Clip with closed captions:**
```markdown
{youtube} jNQXAC9IVRw
:start: 30
:end: 60
:cc_load_policy: true
:loop: true
```

**Autoplay (requires mute in most browsers):**
```markdown
{youtube} dQw4w9WgXcQ
:autoplay: true
:mute: true
```

### Finding Video IDs

The video ID is the 11-character string in YouTube URLs:
- `youtube.com/watch?v=VIDEO_ID`
- `youtu.be/VIDEO_ID`

---

## JupyterLite REPL

**File:** `jupyterlite.mjs`

Embeds an interactive [JupyterLite](https://jupyterlite.readthedocs.io/) REPL (Read-Eval-Print Loop) that runs entirely in the browser using WebAssembly.

### Usage

```markdown
{jupyterlite} Optional Title
:option: value

python code here
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | String | No | Optional title displayed as a heading |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | String | `100%` | Width of the iframe |
| `height` | String | `400px` | Height of the iframe |
| `kernel` | String | `python` | Kernel: `python`, `xeus-python`, `javascript` |
| `theme` | String | `JupyterLab Light` | JupyterLab theme |
| `toolbar` | Boolean | `true` | Show the toolbar |
| `autorun` | Boolean | `false` | Automatically run code on load |
| `placeholder` | String | - | Path to placeholder image for static exports |

### Examples

**Basic usage:**
```markdown
{jupyterlite}
print("Hello, World!")
x = 5 + 3
print(f"The sum is: {x}")
```

**With title and autorun:**
```markdown
{jupyterlite} My Interactive Example
:kernel: python
:autorun: true
:height: 500px

import math
print(f"Pi is approximately {math.pi:.4f}")
```

**Dark theme without toolbar:**
```markdown
{jupyterlite}
:kernel: xeus-python
:theme: JupyterLab Dark
:toolbar: false

import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())
```

### Base URL

This plugin uses a custom JupyterLite deployment at:
```
https://veillette.github.io/jupyterlite/repl/index.html
```

---

## Pyodide Python Runner

**File:** `pyodide.mjs`

Runs Python code directly in the browser using [Pyodide](https://pyodide.org/), a Python distribution compiled to WebAssembly. Unlike JupyterLite, this creates a lightweight, self-contained execution environment.

### Usage

```markdown
{run-python} Optional Title
:option: value

python code here
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | String | No | Optional title displayed in the container header |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showCode` | Boolean | `true` | Display the code block |
| `showOutput` | Boolean | `true` | Display the output area |
| `autorun` | Boolean | `false` | Automatically run code on page load |
| `packages` | Array | `[]` | Additional Pyodide packages to load |
| `width` | String | `100%` | Width of the container |
| `height` | String | `auto` | Height of the output container |

### Examples

**Basic usage:**
```markdown
{run-python}
print("Hello, World!")
for i in range(5):
    print(f"Count: {i}")
```

**With title and autorun:**
```markdown
{run-python} Calculate Fibonacci
:autorun: true

def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(f"Fibonacci(10) = {fibonacci(10)}")
```

**With NumPy package:**
```markdown
{run-python} NumPy Example
:packages: ["numpy"]

import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(f"Array: {arr}")
print(f"Mean: {arr.mean()}")
```

**Hidden code (output only):**
```markdown
{run-python}
:showCode: false
:autorun: true

print("This output appears automatically!")
```

### Features

- **Lazy loading:** Pyodide is only loaded when the user clicks "Run"
- **Package support:** Load additional packages from the Pyodide repository
- **Output capture:** Both stdout and stderr are captured and displayed
- **Unique instances:** Multiple run-python blocks work independently

### Pyodide Version

This plugin uses Pyodide v0.23.4 from the jsdelivr CDN.

---

## Development

### Creating a New Plugin

1. Create a new `.mjs` file in the `plugins/` directory
2. Define your directive configuration object
3. Export a plugin object with `name` and `directives` array
4. Register the plugin in `myst.yml`

### Plugin Structure Template

```javascript
/**
 * @fileoverview Brief description of the plugin
 * @module plugins/my-plugin
 */

const myDirective = {
  name: 'my-directive',
  doc: 'Description of the directive',
  arg: {
    type: String,
    doc: 'Description of the argument'
  },
  body: {
    type: 'markdown',
    doc: 'Description of body content'
  },
  options: {
    myOption: {
      type: String,
      doc: 'Description of the option'
    }
  },
  run: function(data) {
    // Process directive and return AST nodes
    return [{
      type: 'iframe',  // or other AST node type
      src: 'https://example.com',
      // ... other properties
    }];
  }
};

const plugin = {
  name: 'My Plugin',
  directives: [myDirective]
};

export default plugin;
```

### AST Node Types

Common AST node types used in these plugins:

- **`iframe`**: Embedded content frame
- **`paragraph`**: Text paragraph
- **`text`**: Plain text content
- **`caption`**: Figure/element caption
- **`heading`**: Section heading
- **`html`**: Raw HTML content

### Testing

See the `plugins/tests/` directory for test files that verify plugin functionality.

---

## References

- [MyST Plugin Documentation](https://mystmd.org/guide/plugins)
- [PhET Interactive Simulations](https://phet.colorado.edu/)
- [GeoGebra](https://www.geogebra.org/)
- [YouTube IFrame API](https://developers.google.com/youtube/player_parameters)
- [JupyterLite](https://jupyterlite.readthedocs.io/)
- [Pyodide](https://pyodide.org/)
