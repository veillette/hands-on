# JupyterLite Plugin Tests

This file tests the `{jupyterlite}` directive for embedding JupyterLite REPL environments.

## Test 1: Basic Usage

The simplest usage with Python code.

```{jupyterlite}
print("Hello, World!")
x = 5 + 3
print(f"The sum is: {x}")
```

**Expected:** A 100% width, 400px height JupyterLite REPL with Python kernel.

---

## Test 2: With Title

Testing the optional title argument.

```{jupyterlite} My First JupyterLite
print("This REPL has a title!")
```

**Expected:** REPL with an H4 heading "My First JupyterLite" above it.

---

## Test 3: Custom Dimensions

Testing width and height options.

```{jupyterlite}
:width: 800px
:height: 500px

import math
print(f"Pi = {math.pi}")
print(f"E = {math.e}")
```

**Expected:** Fixed 800px width and 500px height REPL.

---

## Test 4: Autorun

Testing automatic code execution.

```{jupyterlite}
:autorun: true

result = sum(range(1, 101))
print(f"Sum of 1 to 100 = {result}")
```

**Expected:** Code runs automatically when the page loads.

---

## Test 5: Hide Toolbar

Testing toolbar visibility.

```{jupyterlite}
:toolbar: false
:height: 350px

print("No toolbar visible!")
```

**Expected:** REPL without the toolbar.

---

## Test 6: Python Kernel (Explicit)

Testing explicit Python kernel selection.

```{jupyterlite}
:kernel: python
:height: 400px

import sys
print(f"Python version: {sys.version}")
```

**Expected:** Python kernel with version info displayed.

---

## Test 7: Xeus-Python Kernel

Testing the xeus-python kernel.

```{jupyterlite}
:kernel: xeus-python
:height: 400px

import sys
print("Running on xeus-python!")
print(f"Python version: {sys.version}")
```

**Expected:** Xeus-Python kernel runs the code.

---

## Test 8: JavaScript Kernel

Testing the JavaScript kernel.

```{jupyterlite}
:kernel: javascript
:height: 400px

console.log("Hello from JavaScript!");
const result = [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0);
console.log(`Sum: ${result}`);
```

**Expected:** JavaScript kernel executes the code.

---

## Test 9: Dark Theme

Testing JupyterLab Dark theme.

```{jupyterlite}
:theme: JupyterLab Dark
:height: 400px

print("Dark theme enabled!")
for i in range(5):
    print(f"  Line {i + 1}")
```

**Expected:** REPL with dark theme styling.

---

## Test 10: All Options Combined

Testing comprehensive configuration.

```{jupyterlite} Complete Example
:width: 100%
:height: 500px
:kernel: python
:theme: JupyterLab Light
:toolbar: true
:autorun: false

def fibonacci(n):
    """Generate first n Fibonacci numbers."""
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib[:n]

print("Fibonacci sequence:")
print(fibonacci(10))
```

**Expected:** Full-featured REPL with title and all options set.

---

## Test 11: Mathematical Computations

Testing mathematical Python code.

```{jupyterlite} Math Demo
:autorun: true
:height: 450px

import math

# Calculate various mathematical values
print("Mathematical Constants:")
print(f"  Pi: {math.pi:.10f}")
print(f"  E: {math.e:.10f}")
print(f"  Tau: {math.tau:.10f}")

print("\nTrigonometry:")
angles = [0, 30, 45, 60, 90]
for angle in angles:
    rad = math.radians(angle)
    print(f"  sin({angle}°) = {math.sin(rad):.4f}")
```

**Expected:** Mathematical calculations display correctly.

---

## Test 12: Empty Code Block

Testing behavior with empty code.

```{jupyterlite}
:height: 300px

```

**Expected:** Empty REPL ready for user input.

---

## Test 13: Multi-line Code

Testing complex multi-line Python code.

```{jupyterlite}
:height: 500px

class Rectangle:
    """A simple rectangle class."""

    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def __str__(self):
        return f"Rectangle({self.width}x{self.height})"

# Create and test rectangles
rect1 = Rectangle(10, 5)
rect2 = Rectangle(7, 3)

print(f"{rect1}: area={rect1.area()}, perimeter={rect1.perimeter()}")
print(f"{rect2}: area={rect2.area()}, perimeter={rect2.perimeter()}")
```

**Expected:** Class definition and usage works correctly.

---

## Test 14: Placeholder Image

Testing placeholder for static exports.

```{jupyterlite}
:placeholder: /figures/jupyterlite-placeholder.png
:height: 400px

print("This REPL has a placeholder for PDF exports")
```

**Expected:** In HTML, REPL loads. In PDF, placeholder image appears.

---

## Summary

| Test | Feature | Status |
|------|---------|--------|
| 1 | Basic usage | Verify manually |
| 2 | Title | Verify manually |
| 3 | Custom dimensions | Verify manually |
| 4 | Autorun | Verify manually |
| 5 | Hide toolbar | Verify manually |
| 6 | Python kernel | Verify manually |
| 7 | Xeus-Python kernel | Verify manually |
| 8 | JavaScript kernel | Verify manually |
| 9 | Dark theme | Verify manually |
| 10 | All options | Verify manually |
| 11 | Math computations | Verify manually |
| 12 | Empty code | Verify manually |
| 13 | Multi-line code | Verify manually |
| 14 | Placeholder | Verify manually |
