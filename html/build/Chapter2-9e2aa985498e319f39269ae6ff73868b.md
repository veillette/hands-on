---
title: Measurement and Uncertainty
exports:
  - format: md
    output: exports/Chapter2.md
  - format: pdf
    template: lapreprint-typst
    output: exports/Chapter2.pdf
  - format: docx
    template: curvenote
    output: exports/Chapter2.docx
downloads: []
content_includes_title: false
parts: {}
authors:
  - nameParsed:
      literal: Martin Veillette
      given: Martin
      family: Veillette
    name: Martin Veillette
    id: contributors-myst-generated-uid-0
date: '2025-01-01'
github: https://github.com/veillette/hands-on
keywords:
  - physics
  - laboratory
  - experimental design
  - data analysis
  - scientific writing
edit_url: https://github.com/veillette/hands-on/blob/main/content/Chapter2.md
---
+++
## Understanding the Measuring Process



Measurement lies at the heart of our scientific understanding. Though perhaps overstated, this sentiment captures an essential truth - proper measurement forms the foundation of meaningful experimentation.

:::{note} Note
At its core, measurement involves comparing an object or phenomenon with some reference standard. These reference standards (meters, kilograms, seconds, etc.) must be universally agreed upon, which is why international organizations establish and maintain measurement standards.
:::

Let’s begin with a simple example to understand the fundamental nature of measurement. Imagine measuring the height of a coffee mug with a ruler marked in millimeters. You might report “87 mm,” but does this mean the mug is exactly 87.00000... mm tall? Of course not. What you’re really doing is determining that the height falls within some interval - perhaps between 86.5 mm and 87.5 mm.

:::{admonition} The Measurement Process
The actual measuring process involves examining the object in relation to the scale and making judgments:

*   Is the height definitely less than 88 mm? Yes.
*   Less than 87.5 mm? Probably.
*   Less than 87 mm? Not certain.

Similarly, working upward:

*   Is it definitely more than 86 mm? Yes.
*   More than 86.5 mm? Probably.
*   More than 87 mm? Not certain.
:::

Through this dual process of approaching from above and below, we identify an interval - the smallest range within which we’re confident the true value lies. This reveals measurement’s essential nature: we don’t determine exact values but rather intervals of possibility.

:::{important} Important
When reporting measurements, we must specify both the central value and the interval width. This determination requires careful judgment based on numerous factors: scale precision, lighting conditions, object definition, visual acuity, and more.
:::

We must assess each situation individually rather than following oversimplified rules (like assuming uncertainty equals half the smallest scale division). A well-defined object under perfect conditions might allow precision well beyond the smallest marked division, while a poorly defined object might create uncertainty spanning several divisions.

## Understanding Digital Readouts and Rounding

Digital instruments present their own interpretive challenges. When a digital multimeter displays “3.82 V,” what exactly does this mean? The answer depends on the instrument’s design.

:::{tip} Tip
Most commonly, the reading indicates the value falls between 3.815 V and 3.825 V - the instrument rounds to the nearest displayed digit.
:::

However, some digital timers might operate differently, showing “10:15” for any time between exactly 10:15:00 and 10:15:59. Each instrument type requires understanding its specific operation.

This highlights a broader concept: rounding introduces its own form of uncertainty. When we write π = 3.14, we understand this isn’t exactly true. Rather, we mean the value lies between 3.135 and 3.145.

:::{warning} Warning
“Rounding uncertainty” may seem trivial, but it can significantly impact calculations, especially when:

1.  Many rounded values accumulate errors throughout a calculation
2.  Two nearly equal values are subtracted, making relative errors much larger
3.  High powers are involved, amplifying small errors
:::

With modern calculators, it’s wise to maintain extra digits throughout calculations, rounding appropriately only at the final step. Similarly, statements like “measured to the nearest millimeter” inadequately convey measurement uncertainty, as they establish only minimum bounds for the measurement interval.

## Absolute and Relative Uncertainty

Measurements should represent the range within which we believe the true value lies. For instance, we might determine a tabletop’s length lies between 152.7 cm and 153.1 cm. While this interval representation is entirely valid, we often restate it as 152.9 ± 0.2 cm.

:::{admonition} Advantages of Central Value Notation
:class: tip

This notation provides two advantages:

1.  It gives us a central value (152.9 cm) for calculations
2.  It explicitly states the uncertainty (±0.2 cm) for quality assessment
:::

This uncertainty value (±0.2 cm) represents the **absolute uncertainty** of our measurement. However, the significance of any uncertainty depends on the measurement’s magnitude. An uncertainty of ±0.2 cm would be:

:::{list-table} Impact of Uncertainty in Different Contexts
:header-rows: 1

*   *   Context

    *   Impact of ±0.2 cm

*   *   Measuring microchip components

    *   Substantial

*   *   Measuring furniture

    *   Acceptable

*   *   Measuring astronomical distances

    *   Negligible
:::

To better evaluate a measurement’s quality, we use **relative uncertainty**, defined as:

```{math}
\text{Relative Uncertainty} = \frac{\text{Absolute Uncertainty}}{\text{Measured Value}}
```

For our tabletop example:

```{math}
\text{Relative Uncertainty} = \frac{0.2 \text{ cm}}{152.9 \text{ cm}} = 0.0013 \text{ or } 0.13\%
```

:::{note} Note
This relative value provides a more meaningful assessment of precision. We often call this the **precision** of our measurement. Absolute uncertainty carries the same units as the measurement itself, while relative uncertainty is a dimensionless ratio.
:::

## Identifying Systematic Errors

The uncertainties discussed so far arise from natural limitations in measurement processes. However, another category - systematic errors - affects all measurements in a consistent way.

:::{admonition} Common Systematic Errors
:class: caution

*   Zero errors in measuring instruments
*   A stretched or compressed measuring tape
*   Consistently miscalibrated electronic equipment
*   Temperature effects on measuring devices
:::

These systematic errors, particularly **calibration errors**, require vigilance. Always check instrument zeros before measurement and verify calibration when possible.

:::{warning} Warning
Don’t be misled by sophisticated digital displays with multiple “precise” digits - our laboratory once received electronic timers claiming millisecond precision that actually contained calibration errors exceeding 12%! Approach all instruments with healthy skepticism.
:::

## Calculating Uncertainty in Derived Quantities

Rarely does a single measurement complete our work. Usually, we need to calculate some quantity based on multiple measurements or apply mathematical operations to our measured values.

:::{admonition} Common Derived Quantities
:class: example

*   A sphere’s volume from its diameter
*   An object’s density from its mass and dimensions
*   Gravitational acceleration from a pendulum’s length and period
:::

In each case, uncertainty in primary measurements creates uncertainty in calculated results. For this section, we’ll assume our uncertainty ranges represent intervals within which we’re “almost certain” the true values lie. We’ll calculate the maximum possible uncertainty by assuming the worst-case scenario - that all component uncertainties combine to maximize the final uncertainty.

## Uncertainty in Single-Variable Functions

Consider a measured quantity {math}`x_0` with uncertainty {math}`\pm\delta x`, and a calculated result {math}`z = f(x)`. The range of possible values for {math}`x` (from {math}`x_0-\delta x` to {math}`x_0+\delta x`) creates a corresponding range for {math}`z` from {math}`z_0-\delta z` to {math}`z_0+\delta z`.

:::{admonition} Calculus Approach
:class: tip

We can determine {math}`\delta z` using calculus. Since {math}`\delta z` and {math}`\delta x` are effectively components of the derivative {math}`dz/dx`, we can write:

```{math}
\delta z = \frac{d(f(x))}{dx}\delta x
```
:::

This straightforward approach works well even for complex functions. Consider {math}`z = \frac{x}{x^2+4}`:

```{math}
\frac{dz}{dx} = \frac{(x^2+4) - x(2x)}{(x^2+4)^2} = \frac{4-x^2}{(x^2+4)^2}
```

Therefore:

```{math}
\delta z = \frac{4-x^2}{(x^2+4)^2}\delta x
```

Let’s examine several common function types:

### Powers and Roots

:::{admonition} Power Functions
:class: note

For {math}`z = x^n`:

```{math}
\frac{dz}{dx} = nx^{n-1}
```



```{math}
\delta z = nx^{n-1}\delta x
```

Expressed as relative uncertainty:

```{math}
\frac{\delta z}{z} = n\frac{\delta x}{x}
```
:::

This reveals an important principle: the relative uncertainty in the result equals the relative uncertainty in the measurement multiplied by the power. This applies to both positive powers (multiplication) and negative powers (division/roots).

:::{admonition} Examples
:class: example

*   Calculating a circle’s area (

    {math}`A = \pi r^2`

    ) from a radius measurement doubles the relative uncertainty
*   Calculating a cube’s volume (

    {math}`V = s^3`

    ) triples the relative uncertainty
*   Taking a square root halves the relative uncertainty
:::

### Exponential Functions

:::{admonition} Exponential Functions
:class: note

For {math}`z = e^x`:

```{math}
\frac{dz}{dx} = e^x
```



```{math}
\delta z = e^x \delta x
```
:::

:::{warning} Warning
Exponential functions can be extremely sensitive to uncertainty, especially as the exponent grows larger than 1.
:::

### Logarithmic Functions

:::{admonition} Logarithmic Functions
:class: note

For {math}`z = \ln x`:

```{math}
\frac{dz}{dx} = \frac{1}{x}
```



```{math}
\delta z = \frac{\delta x}{x}
```
:::

### Trigonometric Functions

:::{admonition} Trigonometric Functions
:class: note

For {math}`z = \sin x`:

```{math}
\frac{dz}{dx} = \cos x
```



```{math}
\delta z = (\cos x)\delta x
```
:::

:::{tip} Tip
When using this result, remember that angle uncertainty ({math}`\delta x`) must be expressed in radians.
:::

## Uncertainty in Multi-Variable Functions

When calculating uncertainty for functions with multiple variables, we could take a pessimistic approach - assuming all component uncertainties combine in the worst possible way. Or we could recognize that some errors might partially cancel others. For now, we’ll calculate maximum possible uncertainty.

### Sum of Variables

:::{admonition} Sum of Variables
:class: note

For {math}`z = x + y`:

The uncertainty is obtained from:

```{math}
z_0 \pm \delta z = (x_0 \pm \delta x) + (y_0 \pm \delta y)
```

Maximum uncertainty occurs when all component uncertainties have the same sign:

```{math}
\delta z = \delta x + \delta y
```

The absolute uncertainties simply add together.
:::

### Difference of Variables

:::{admonition} Difference of Variables
:class: note

For {math}`z = x - y`:

Similarly:

```{math}
z_0 \pm \delta z = (x_0 \pm \delta x) - (y_0 \pm \delta y)
```

Maximum uncertainty occurs when {math}`\delta x` is positive and {math}`\delta y` is negative:

```{math}
\delta z = \delta x + \delta y
```
:::

:::{warning} Warning
This highlights a critical issue: when subtracting similar quantities, relative uncertainty can become enormous. If {math}`x` and {math}`y` have similar values, their difference will be small, but the uncertainty remains the sum of their individual uncertainties.
:::

:::{admonition} Example of Poor Measurement Strategy
:class: caution

Measuring the thickness of a wall by measuring distances from a far point to each side would be absurdly imprecise.
:::

:::{tip} Tip
The solution? Whenever possible, measure differences directly. Don’t measure two large values and subtract them when you can measure their difference directly.
:::

## Calculus Approach for Multi-Variable Functions

:::{admonition} General Approach
:class: note

For a function {math}`z = f(x,y)`, we can use partial derivatives to calculate uncertainty:

```{math}
\delta z = \frac{\partial f}{\partial x}\delta x + \frac{\partial f}{\partial y}\delta y
```

These derivatives are evaluated at the measured values {math}`x_0` and {math}`y_0`. If any derivative is negative, we choose signs to maximize {math}`\delta z`.
:::

### Products

:::{admonition} Products
:class: note

For {math}`z = xy`:

```{math}
\frac{\partial z}{\partial x} = y, \frac{\partial z}{\partial y} = x
```



```{math}
\delta z = y\delta x + x\delta y
```

As relative uncertainty:

```{math}
\frac{\delta z}{z} = \frac{\delta x}{x} + \frac{\delta y}{y}
```
:::

:::{important} Important
For products, relative uncertainties add together.
:::

### General Power Functions

:::{admonition} General Power Functions
:class: note

For {math}`z = x^a y^b`:

Taking logarithms:

```{math}
\log z = a\log x + b\log y
```

Differentiating:

```{math}
\frac{\delta z}{z} = a\frac{\delta x}{x} + b\frac{\delta y}{y}
```
:::

:::{tip} Tip
This approach works for any number of variables with any powers, including negative powers (representing division).
:::

### Implicit Differentiation

:::{admonition} Implicit Differentiation
:class: note

For complex relationships, implicit differentiation often simplifies uncertainty calculation. Consider the thin-lens equation:

```{math}
\frac{1}{f} = \frac{1}{s} + \frac{1}{s'}
```

To find uncertainty in focal length, differentiate implicitly:

```{math}
-\frac{df}{f^2} = \frac{ds}{s^2} + \frac{ds'}{s'^2}
```
:::

:::{tip} Tip
This gives us {math}`df/f` directly without having to solve for {math}`f` explicitly.
:::

## Compensating Errors

Sometimes variables are not independent. Consider calculating refractive index using:

```{math}
n = \frac{\sin\left(\frac{A+D_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}
```

:::{warning} Warning
If we have uncertainties in both {math}`A` and {math}`D_m`, we cannot treat the numerator and denominator as independent variables. An increase in {math}`A` affects both the numerator and denominator in ways that partially compensate each other.
:::

:::{tip} Tip
The solution is either to rewrite the equation with truly independent variables or return to the fundamental partial derivative approach. Watch for such compensating errors, as incorrect treatment can introduce significant calculation errors.
:::

## Significant Figures

Calculations often produce more digits than are justified by our measurement precision. We must quote results sensibly.

:::{admonition} Example
:class: example

If we measure voltage as {math}`9.2 \pm 0.2` V and current as {math}`2.1 \pm 0.1` A, our calculated resistance might appear as 4.380952... ohms. But calculating the uncertainty shows {math}`\delta R = 0.3` ohms. Therefore, reporting “{math}`R = 4.380952 \pm 0.3` ohms” would be nonsensical.

A reasonable statement would be “{math}`R = 4.4 \pm 0.3` ohms.”
:::

:::{admonition} Rules for Significant Figures
:class: important

We should:

1.  Ensure uncertainty values match the precision of original measurements
2.  Keep only significant digits in the final value that match the uncertainty
3.  Avoid mismatched precision statements like “12.3456 ± 0.2” or “12 ± 0.00001”
:::

## Problems

:::{admonition} Problem 1
:class: question

I measure a window pane’s width between 68.3 cm and 68.9 cm. Express this as a central value with uncertainty, and calculate the relative uncertainty.
:::

:::{admonition} Problem 2
:class: question

A digital scale displays 235.8 g when weighing a sample. If the scale rounds to the nearest 0.1 g, what is the absolute uncertainty?
:::

:::{admonition} Problem 3
:class: question

If my measuring tape has absolute uncertainty ±0.5 mm, what’s the shortest distance I can measure while maintaining relative uncertainty below 0.5%?
:::

:::{admonition} Problem 4
:class: question

I measure the dimensions of a rectangular sheet as {math}`(25.4 \pm 0.2) \text{ cm} \times (18.6 \pm 0.2) \text{ cm}`. What is the absolute uncertainty in the calculated area?
:::

:::{admonition} Problem 5
:class: question

A capacitance value is calculated using {math}`C = \frac{\varepsilon_0 A}{d}` with measurements:

*   Area 

    {math}`A = (0.025 \pm 0.001) \text{ m}^2`
*   Distance 

    {math}`d = (0.5 \pm 0.02) \text{ mm}`
*   {math}`\varepsilon_0 = 8.85 \times 10^{-12} \text{ F/m}`

     (exact)

Calculate the value and uncertainty of {math}`C`.
:::

:::{admonition} Problem 6
:class: question

When determining wave velocity using {math}`v = \lambda f`, I measure wavelength {math}`\lambda = (0.75 \pm 0.05) \text{ m}` and frequency {math}`f = (440 \pm 5) \text{ Hz}`. Find the absolute and relative uncertainty in velocity.
:::

:::{admonition} Problem 7
:class: question

A value is reported as {math}`583.2417 \pm 0.15`. Rewrite this with appropriate significant figures.
:::

:::{admonition} Problem 8
:class: question

The resistance of a wire is measured at two temperatures:

*   {math}`R_1 = (125.3 \,\pm\, 0.4)\,\Omega`

     at 

    {math}`T_1 = 20°\text{C}`
*   {math}`R_2 = (138.1 \,\pm\, 0.4)\,\Omega`

     at 

    {math}`T_2 = 50°\text{C}`

Calculate the temperature coefficient of resistance and its uncertainty using {math}`\alpha = \frac{R_2-R_1}{R_1(T_2-T_1)}`.
:::