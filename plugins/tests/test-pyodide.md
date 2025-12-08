# Pyodide Plugin Tests

This file tests the `{run-python}` directive for running Python code in the browser using Pyodide.

## Test 1: Basic Usage

The simplest usage with Python code.

```{run-python}
print("Hello, World!")
x = 5 + 3
print(f"The sum is: {x}")
```

**Expected:** A code block with a "Run" button that executes the Python code.

---

## Test 2: With Title

Testing the optional title argument.

```{run-python} My Python Example
print("This code block has a title!")
for i in range(3):
    print(f"  Iteration {i + 1}")
```

**Expected:** Code block with "My Python Example" header.

---

## Test 3: Custom Width

Testing width option.

```{run-python}
:width: 600px

print("Fixed width container!")
```

**Expected:** 600px wide container.

---

## Test 4: Custom Output Height

Testing height option for output area.

```{run-python}
:height: 200px

# Generate lots of output
for i in range(50):
    print(f"Line {i + 1}: {'#' * (i % 20 + 1)}")
```

**Expected:** Output area with 200px height and scroll.

---

## Test 5: Autorun

Testing automatic code execution.

```{run-python}
:autorun: true

import random
print("This code runs automatically!")
print(f"Random number: {random.randint(1, 100)}")
```

**Expected:** Code executes automatically when page loads.

---

## Test 6: Hide Code

Testing hidden code block (output only).

```{run-python}
:showCode: false
:autorun: true

# This code is hidden
result = sum(range(1, 101))
print(f"The sum of 1 to 100 is: {result}")
print("(The code that generated this is hidden)")
```

**Expected:** Only output is visible, code block is hidden.

---

## Test 7: Hide Output

Testing hidden output area.

```{run-python}
:showOutput: false

print("This output won't be shown!")
# But the code is visible
x = 10
y = 20
print(f"x + y = {x + y}")
```

**Expected:** Only code is visible, output area is hidden.

---

## Test 8: All Display Options

Testing various display combinations.

### Show Both (Default)
```{run-python} Both Visible
print("Code and output visible")
```

### Code Only
```{run-python} Code Only
:showOutput: false

print("Only code visible")
```

### Output Only
```{run-python} Output Only
:showCode: false
:autorun: true

print("Only output visible")
```

**Expected:** Three blocks with different visibility settings.

---

## Test 9: Mathematical Computations

Testing mathematical operations.

```{run-python} Math Demo
import math

print("Mathematical Constants:")
print(f"  Pi: {math.pi:.10f}")
print(f"  E: {math.e:.10f}")

print("\nSquare roots:")
for n in [2, 3, 5, 7, 11]:
    print(f"  sqrt({n}) = {math.sqrt(n):.6f}")

print("\nFactorials:")
for n in range(1, 11):
    print(f"  {n}! = {math.factorial(n)}")
```

**Expected:** Mathematical calculations display correctly when run.

---

## Test 10: Error Handling

Testing Python error display.

```{run-python} Error Example
print("Starting...")

# This will cause an error
result = 1 / 0

print("This won't be printed")
```

**Expected:** Error message (ZeroDivisionError) displayed in output.

---

## Test 11: Complex Code

Testing complex Python code with classes and functions.

```{run-python} Object-Oriented Example
:height: 300px

class BankAccount:
    """A simple bank account class."""

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}. New balance: ${self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            print(f"Insufficient funds! Balance: ${self.balance}")
        else:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")

    def __str__(self):
        return f"Account({self.owner}, ${self.balance})"

# Test the class
account = BankAccount("Alice", 100)
print(account)
account.deposit(50)
account.withdraw(30)
account.withdraw(200)  # Should fail
```

**Expected:** Class works correctly with all methods.

---

## Test 12: Data Structures

Testing Python data structure operations.

```{run-python} Data Structures
# Lists
numbers = [1, 2, 3, 4, 5]
print(f"List: {numbers}")
print(f"Sum: {sum(numbers)}")
print(f"Reversed: {list(reversed(numbers))}")

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "Boston"
}
print(f"\nDictionary: {person}")
for key, value in person.items():
    print(f"  {key}: {value}")

# Sets
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
print(f"\nSet A: {set_a}")
print(f"Set B: {set_b}")
print(f"Union: {set_a | set_b}")
print(f"Intersection: {set_a & set_b}")
```

**Expected:** Data structures work correctly.

---

## Test 13: List Comprehensions and Generators

Testing advanced Python features.

```{run-python} Advanced Python
# List comprehension
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")

# Filtered list comprehension
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(f"Even squares: {even_squares}")

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
print(f"Square dict: {square_dict}")

# Generator expression (converted to list for display)
gen = (x**3 for x in range(5))
print(f"Cubes: {list(gen)}")

# Lambda functions
multiply = lambda x, y: x * y
print(f"3 * 4 = {multiply(3, 4)}")

# Map and filter
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(f"Doubled: {doubled}")
```

**Expected:** All advanced features work correctly.

---

## Test 14: All Options Combined

Testing comprehensive configuration.

```{run-python} Complete Example
:width: 100%
:height: 250px
:showCode: true
:showOutput: true
:autorun: false

def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    fib = []
    a, b = 0, 1
    for _ in range(n):
        fib.append(a)
        a, b = b, a + b
    return fib

print("Fibonacci Sequence:")
for i, num in enumerate(fibonacci(15)):
    print(f"  F({i}) = {num}")
```

**Expected:** Full-featured code block with all options explicitly set.

---

## Test 15: Long Running Computation

Testing longer computations.

```{run-python} Prime Numbers
:height: 300px

def is_prime(n):
    """Check if a number is prime."""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def find_primes(limit):
    """Find all primes up to limit."""
    return [n for n in range(2, limit + 1) if is_prime(n)]

# Find primes
primes = find_primes(100)
print(f"Primes up to 100: {len(primes)} found")
print(primes)

# Prime factorization
def prime_factors(n):
    factors = []
    d = 2
    while d * d <= n:
        while n % d == 0:
            factors.append(d)
            n //= d
        d += 1
    if n > 1:
        factors.append(n)
    return factors

print(f"\nPrime factorization of 360: {prime_factors(360)}")
print(f"Prime factorization of 1001: {prime_factors(1001)}")
```

**Expected:** Prime calculations complete and display results.

---

## Test 16: Multiple Instances

Testing multiple independent Pyodide instances on the same page.

### Instance 1
```{run-python} Counter A
count = 0
for i in range(5):
    count += 1
print(f"Counter A: {count}")
```

### Instance 2
```{run-python} Counter B
count = 100
for i in range(5):
    count -= 1
print(f"Counter B: {count}")
```

### Instance 3
```{run-python} Counter C
count = 50
print(f"Counter C: {count}")
```

**Expected:** Each instance runs independently with its own state.

---

## Summary

| Test | Feature | Status |
|------|---------|--------|
| 1 | Basic usage | Verify manually |
| 2 | Title | Verify manually |
| 3 | Custom width | Verify manually |
| 4 | Custom height | Verify manually |
| 5 | Autorun | Verify manually |
| 6 | Hide code | Verify manually |
| 7 | Hide output | Verify manually |
| 8 | Display options | Verify manually |
| 9 | Math computations | Verify manually |
| 10 | Error handling | Verify manually |
| 11 | Complex code | Verify manually |
| 12 | Data structures | Verify manually |
| 13 | Advanced Python | Verify manually |
| 14 | All options | Verify manually |
| 15 | Long computation | Verify manually |
| 16 | Multiple instances | Verify manually |
