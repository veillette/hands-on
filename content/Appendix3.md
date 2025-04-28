# Appendix 3: Introduction to Jupyter and Python for Data Analysis

## The Power of Computational Tools in Modern Physics

Modern physics laboratories have been transformed by computational tools that allow for efficient data processing, powerful visualizations, and sophisticated statistical analysis. Two of the most valuable tools in a physicist's computational toolkit are Python and Jupyter Notebooks.

> [!note]
> This appendix assumes no prior programming experience. We'll start with the fundamentals and build toward practical applications for physics laboratory data analysis.

## Getting Started with Python

Python has become the de facto standard programming language for scientific computing due to its readability, extensive scientific libraries, and supportive community.

### Installing Python

Before diving into coding, you'll need to set up a Python environment:

> [!tip]
> The easiest way to get started is by installing Anaconda, a distribution that includes Python, Jupyter, and many scientific packages. Download it from [anaconda.com](https://www.anaconda.com/download/).

Once installed, you can verify your installation by opening a terminal (Command Prompt on Windows, Terminal on macOS/Linux) and typing:

```bash
python --version
```

### Python Fundamentals

Python is a high-level, interpreted programming language known for its clear syntax. Let's explore some basics:

#### Variables and Data Types

```python
# Numbers
mass = 9.8  # A floating-point number (decimal)
count = 5   # An integer

# Strings (text)
element = "Hydrogen"

# Boolean values
is_valid = True

# Lists (ordered collections)
readings = [9.81, 9.79, 9.82, 9.80]

# Printing values
print(f"The mass is {mass} kg")
print(f"We took {count} measurements")
print(f"The mean of our readings is {sum(readings)/len(readings)}")
```

#### Basic Math Operations

Python handles mathematical operations naturally:

```python
# Basic arithmetic
a = 10
b = 3

print(a + b)  # Addition: 13
print(a - b)  # Subtraction: 7
print(a * b)  # Multiplication: 30
print(a / b)  # Division: 3.3333...
print(a ** b) # Exponentiation: 1000
print(a % b)  # Modulo (remainder): 1

# Using the math library for more advanced functions
import math

angle = math.pi/4  # 45 degrees in radians
print(math.sin(angle))  # Sine function
print(math.sqrt(16))    # Square root: 4.0
```

#### Control Flow

Python uses indentation to define code blocks for conditions and loops:

```python
# Conditional statements
temperature = 22.5

if temperature > 25:
    print("It's warm")
elif temperature < 15:
    print("It's cold")
else:
    print("It's a pleasant temperature")

# Loops
print("Measuring temperatures:")
temperatures = [22.1, 22.4, 22.3, 22.5, 22.2]
for temp in temperatures:
    print(f"Reading: {temp}°C")

# While loops
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1  # Shorthand for count = count + 1
```

> [!warning]
> Indentation in Python is not just for readability—it's how Python identifies code blocks. Inconsistent indentation will cause syntax errors.

#### Functions

Functions allow you to encapsulate reusable code blocks:

```python
def calculate_kinetic_energy(mass, velocity):
    """Calculate kinetic energy using the formula E = 1/2 * m * v^2."""
    return 0.5 * mass * velocity**2

# Using the function
mass = 0.5  # kg
velocity = 10  # m/s
energy = calculate_kinetic_energy(mass, velocity)
print(f"The kinetic energy is {energy} J")
```

> [!note]
> The triple-quoted string after the function definition is called a "docstring." It documents the function's purpose and is good practice in scientific code.

## Scientific Computing Libraries

Python's real power for physics comes from its scientific computing ecosystem:

### NumPy: Numerical Python

NumPy provides support for arrays, matrices, and many mathematical functions:

```python
import numpy as np

# Creating arrays
data = np.array([1.2, 2.3, 3.4, 4.5, 5.6])
print(f"Mean: {np.mean(data)}")
print(f"Standard deviation: {np.std(data)}")

# Array operations (vectorized calculations)
scaled_data = 2 * data  # Multiplies each element by 2
shifted_data = data + 10  # Adds 10 to each element

# Creating a range of values (useful for x-axes)
time = np.linspace(0, 10, 100)  # 100 points from 0 to 10
position = 4.9 * time**2  # Position in free fall
```

### Matplotlib: Visualization

Matplotlib creates publication-quality graphs:

```python
import matplotlib.pyplot as plt

# Simple plot
plt.figure(figsize=(8, 6))  # Set figure size in inches
plt.plot(time, position, 'b-', label='Position')  # 'b-' means blue line
plt.xlabel('Time (s)')
plt.ylabel('Position (m)')
plt.title('Free Fall Motion')
plt.grid(True)
plt.legend()
plt.show()

# Scatter plot with error bars
x = np.array([1, 2, 3, 4, 5])
y = np.array([2.1, 3.9, 6.2, 7.8, 10.1])
y_error = np.array([0.2, 0.3, 0.2, 0.4, 0.3])

plt.figure(figsize=(8, 6))
plt.errorbar(x, y, yerr=y_error, fmt='ro', capsize=5, label='Measurements')
plt.xlabel('Input Variable')
plt.ylabel('Output Variable')
plt.title('Experiment Results with Error Bars')
plt.grid(True)
plt.legend()
plt.show()
```

### SciPy: Scientific Python

SciPy extends NumPy with additional scientific functionality:

```python
from scipy import stats
from scipy.optimize import curve_fit

# Linear regression
slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
print(f"Slope: {slope:.4f} ± {std_err:.4f}")
print(f"Intercept: {intercept:.4f}")
print(f"R-squared: {r_value**2:.4f}")

# Curve fitting
def model_func(x, a, b):
    """Model y = a*x^b."""
    return a * x**b

params, params_covariance = curve_fit(model_func, x, y)
a, b = params
print(f"Fitted parameters: a = {a:.4f}, b = {b:.4f}")
```

### Pandas: Data Manipulation

Pandas excels at handling structured data like CSV files:

```python
import pandas as pd

# Reading data from CSV file
df = pd.read_csv('experiment_data.csv')
print(df.head())  # Print first few rows

# Basic statistics
print(df.describe())

# Selecting columns
time_data = df['Time']
position_data = df['Position']

# Filtering data
filtered_data = df[df['Temperature'] > 25]
```

## Introduction to Jupyter Notebooks

Jupyter Notebooks provide an interactive environment that combines code, text, equations, and visualizations.

### Starting Jupyter

To start Jupyter Notebook, open your terminal and run:

```bash
jupyter notebook
```

This will open a web browser showing the Jupyter dashboard, where you can create or open notebooks.

### Notebook Components

A Jupyter Notebook consists of cells that can contain:

1. **Code** - Python code that can be executed
2. **Markdown** - Text with formatting, equations, and links
3. **Raw** - Plain text without formatting

> [!tip]
> Press `Shift+Enter` to run a cell and move to the next one. Press `Ctrl+Enter` to run a cell and stay on it.

### Markdown and LaTeX in Jupyter

Jupyter supports Markdown for text formatting and LaTeX for equations:

```markdown
# Heading 1

## Heading 2

_italic text_
**bold text**

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](https://example.com)

Inline equation: $E = mc^2$

Display equation:
$$F = G\frac{m_1 m_2}{r^2}$$
```

> [!important]
> The ability to mix explanatory text, mathematical equations, code, and visualizations makes Jupyter ideal for documenting laboratory experiments and analysis.

## Practical Example: Analyzing Pendulum Data

Let's walk through a complete example of analyzing pendulum period data using Python and Jupyter.

> [!example]
> In this example, we'll analyze measurements of a pendulum's period as a function of length, using the equation $T = 2\pi\sqrt{\frac{L}{g}}$.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import pandas as pd

# Sample data: pendulum length (m) and period (s)
length = np.array([0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50])
period = np.array([0.64, 0.78, 0.90, 1.01, 1.11, 1.19, 1.28, 1.36, 1.43])
period_error = np.array([0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04])

# Create a DataFrame for better data organization
data = pd.DataFrame({
    'Length (m)': length,
    'Period (s)': period,
    'Period Error (s)': period_error
})

print("Pendulum Data:")
print(data)

# Calculate the square of the period
data['Period² (s²)'] = data['Period (s)']**2
data['Period² Error (s²)'] = 2 * data['Period (s)'] * data['Period Error (s)']

# Define the theoretical model: T² = (4π²/g) * L
def model_function(L, g):
    """Model the relationship T² = (4π²/g) * L."""
    return (4 * np.pi**2 / g) * L

# Perform the curve fitting
params, params_covariance = curve_fit(
    model_function,
    data['Length (m)'],
    data['Period² (s²)'],
    sigma=data['Period² Error (s²)'],
    absolute_sigma=True
)

# Extract the fitted parameter (g) and its uncertainty
g_fitted = params[0]
g_error = np.sqrt(params_covariance[0, 0])

print(f"\nFitted value of g: {g_fitted:.3f} ± {g_error:.3f} m/s²")

# Create a nice plot
plt.figure(figsize=(10, 6))

# Plot the data points with error bars
plt.errorbar(
    data['Length (m)'],
    data['Period² (s²)'],
    yerr=data['Period² Error (s²)'],
    fmt='o',
    markersize=6,
    capsize=3,
    label='Experimental data'
)

# Plot the best fit line
L_values = np.linspace(0, 0.55, 100)
T2_fitted = model_function(L_values, g_fitted)
plt.plot(L_values, T2_fitted, 'r-',
         label=f'Best fit: T² = (4π²/g) * L, g = {g_fitted:.3f} m/s²')

# Add the expected line for g = 9.81 m/s²
T2_expected = model_function(L_values, 9.81)
plt.plot(L_values, T2_expected, 'g--',
         label=f'Expected: g = 9.81 m/s²')

# Customize the plot
plt.xlabel('Pendulum Length (m)')
plt.ylabel('Period² (s²)')
plt.title('Pendulum Period² vs. Length')
plt.grid(True, alpha=0.3)
plt.legend()
plt.tight_layout()
plt.show()

# Calculate the residuals (difference between observed and fitted values)
data['Fitted Period² (s²)'] = model_function(data['Length (m)'], g_fitted)
data['Residual (s²)'] = data['Period² (s²)'] - data['Fitted Period² (s²)']

# Plot the residuals
plt.figure(figsize=(10, 4))
plt.errorbar(
    data['Length (m)'],
    data['Residual (s²)'],
    yerr=data['Period² Error (s²)'],
    fmt='o',
    markersize=6,
    capsize=3
)
plt.axhline(y=0, color='r', linestyle='-')
plt.xlabel('Pendulum Length (m)')
plt.ylabel('Residual (s²)')
plt.title('Residuals of the Fit')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

> [!note]
> This example demonstrates how to:
>
> - Organize experimental data
> - Propagate uncertainties
> - Fit a theoretical model to data
> - Visualize results with appropriate error bars
> - Compare fitted results with expected values
> - Analyze residuals to evaluate the quality of the fit

## Data Analysis Workflow for Physics Experiments

When approaching data analysis for physics experiments, a systematic workflow is helpful:

1. **Data Import and Organization**

   - Import raw data (CSV, Excel, etc.)
   - Organize into appropriate data structures
   - Perform basic validation and cleaning

2. **Exploratory Analysis**

   - Calculate basic statistics (mean, standard deviation)
   - Create initial visualizations
   - Identify potential outliers or issues

3. **Data Transformation**

   - Convert units if necessary
   - Create derived quantities
   - Apply appropriate transformations (e.g., linearization)

4. **Model Fitting**

   - Define theoretical model
   - Perform regression or curve fitting
   - Extract parameters and their uncertainties

5. **Visualization**

   - Create publication-quality plots
   - Include error bars and uncertainty ranges
   - Compare experimental results with theoretical predictions

6. **Result Analysis and Interpretation**
   - Evaluate goodness of fit
   - Analyze residuals
   - Calculate derived quantities with proper uncertainty propagation
   - Compare results with established values or theories

> [!tip]
> For reproducibility, document each step of your analysis in your Jupyter Notebook with clear markdown explanations. This makes it easier to trace your reasoning and catch potential errors.

## Tips for Efficient Data Analysis

### Coding Best Practices

1. **Comment your code**

   ```python
   # Calculate gravitational acceleration from the slope
   g = 4 * np.pi**2 / slope  # Converting from T² vs L to g
   ```

2. **Use descriptive variable names**

   ```python
   # Good
   time_of_flight = distance_fallen / initial_velocity

   # Avoid
   t = d / v
   ```

3. **Structure your notebook logically**
   - Start with imports and setup
   - Follow with data loading and processing
   - Continue with analysis and visualization
   - End with conclusions

### Data Visualization Tips

1. **Always label your axes**

   ```python
   plt.xlabel('Time (s)')
   plt.ylabel('Displacement (m)')
   ```

2. **Include units in labels**

   ```python
   plt.xlabel('Pressure (kPa)')
   ```

3. **Use appropriate scales**

   ```python
   plt.xscale('log')  # For logarithmic scale
   ```

4. **Add error bars when possible**

   ```python
   plt.errorbar(x, y, yerr=y_errors, fmt='o')
   ```

5. **Include a legend when plotting multiple series**
   ```python
   plt.plot(x, y1, 'b-', label='Measured')
   plt.plot(x, y2, 'r--', label='Theoretical')
   plt.legend()
   ```

### Handling Experimental Uncertainties

1. **Propagate uncertainties correctly**

   ```python
   # For y = a*x + b
   y_error = np.sqrt((a_error * x)**2 + b_error**2)
   ```

2. **Use weighted fits when measurement uncertainties vary**

   ```python
   weights = 1 / (y_errors**2)
   params, params_covariance = curve_fit(model, x, y, sigma=y_errors, absolute_sigma=True)
   ```

3. **Check residuals for patterns**
   ```python
   residuals = y_data - model(x_data, *params)
   plt.plot(x_data, residuals, 'o')
   ```

## Advanced Topics

### Automating Repetitive Tasks

When processing multiple datasets with similar structure, functions can help automate the work:

```python
def analyze_pendulum_data(filepath, output_folder=None):
    """Analyze pendulum data from a CSV file.

    Parameters:
    -----------
    filepath : str
        Path to the CSV file containing length and period data
    output_folder : str, optional
        Folder to save output plots

    Returns:
    --------
    dict
        Dictionary containing analysis results
    """
    # Load data
    data = pd.read_csv(filepath)

    # Perform analysis
    # ...

    # Create and save plots
    # ...

    return results
```

### Saving and Sharing Your Work

Jupyter Notebooks can be shared in various ways:

1. **Export as HTML, PDF, or other formats**

   - In Jupyter: File > Export Notebook As...

2. **Version control with Git/GitHub**

   - Notebooks are text files that can be tracked with version control
   - GitHub renders notebooks directly in the browser

3. **Interactive sharing with Binder**
   - Share executable versions of your notebooks online

> [!important]
> When sharing your analysis, include the raw data files or clear instructions on how to obtain them.

## Glossary

:::{glossary}
Jupyter Notebook
: An interactive computing environment that enables users to create documents that combine live code, visualizations, and narrative text.

Python
: A high-level, interpreted programming language known for its readability and extensive scientific computing libraries.

NumPy
: A fundamental package for scientific computing in Python, providing support for arrays, matrices, and mathematical functions.

Matplotlib
: A comprehensive library for creating static, animated, and interactive visualizations in Python.

SciPy
: A Python library used for scientific and technical computing, building on NumPy.

Pandas
: A Python library providing data structures and data analysis tools, particularly for handling tabular data.

curve_fit
: A function from SciPy's optimize module used to fit a function to data with non-linear least squares.

residuals
: The differences between observed values and the values predicted by a model.
:::

## Problems

1. A student measures the terminal velocity of different objects falling through a viscous fluid. The data is stored in a CSV file with columns for 'Radius (mm)', 'Mass (g)', and 'Velocity (cm/s)'. Write Python code to:
   a. Load the data
   b. Convert to SI units
   c. Test if the velocity is proportional to the square of the radius, as predicted by Stokes' Law
   d. Determine the viscosity of the fluid

2. Using the pendulum example from this appendix, modify the code to:
   a. Add a random error to each period measurement
   b. Run the analysis 1000 times with different random errors
   c. Create a histogram of the resulting g values
   d. Determine if the uncertainty estimated by curve_fit matches the standard deviation of your Monte Carlo simulation

3. A student measures the distance vs. time for a cart rolling down an inclined plane. Write code to:
   a. Create a scatter plot of distance vs. time
   b. Fit both a linear model ($d = vt$) and a quadratic model ($d = \frac{1}{2}at^2$)
   c. Compare the models using residual analysis
   d. Determine which model better describes the motion

4. Create a Jupyter notebook that demonstrates the propagation of uncertainties for different mathematical operations (addition, multiplication, powers, etc.) using both analytical formulas and Monte Carlo simulation.

5. Using the least squares method described in Appendix 2, implement the weighted least squares algorithm in Python and compare its results with those from SciPy's curve_fit function.
