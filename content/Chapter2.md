# Measurement and Uncertainty

## Understanding the Measuring Process

```{epigraph}
When you can measure what you are speaking about and express it in numbers, you know something about it; but when you cannot express it in numbers, your knowledge remains meager and unsatisfactory.
-- Lord Kelvin
```

Measurement lies at the heart of our scientific understanding. Though perhaps overstated, this sentiment captures an essential truth - proper measurement forms the foundation of meaningful experimentation.

```{note}
At its core, measurement involves comparing an object or phenomenon with some reference standard. These reference standards (meters, kilograms, seconds, etc.) must be universally agreed upon, which is why international organizations establish and maintain measurement standards.
```

Let's begin with a simple example to understand the fundamental nature of measurement. Imagine measuring the height of a coffee mug with a ruler marked in millimeters. You might report "87 mm," but does this mean the mug is exactly 87.00000... mm tall? Of course not. What you're really doing is determining that the height falls within some interval - perhaps between 86.5 mm and 87.5 mm.

```{admonition} The Measurement Process
The actual measuring process involves examining the object in relation to the scale and making judgments:
- Is the height definitely less than 88 mm? Yes.
- Less than 87.5 mm? Probably.
- Less than 87 mm? Not certain.

Similarly, working upward:
- Is it definitely more than 86 mm? Yes.
- More than 86.5 mm? Probably.
- More than 87 mm? Not certain.
```

Through this dual process of approaching from above and below, we identify an interval - the smallest range within which we're confident the true value lies. This reveals measurement's essential nature: we don't determine exact values but rather intervals of possibility.

```{important}
When reporting measurements, we must specify both the central value and the interval width. This determination requires careful judgment based on numerous factors: scale precision, lighting conditions, object definition, visual acuity, and more.
```

We must assess each situation individually rather than following oversimplified rules (like assuming uncertainty equals half the smallest scale division). A well-defined object under perfect conditions might allow precision well beyond the smallest marked division, while a poorly defined object might create uncertainty spanning several divisions.

## Understanding Digital Readouts and Rounding

Digital instruments present their own interpretive challenges. When a digital multimeter displays "3.82 V," what exactly does this mean? The answer depends on the instrument's design.

```{tip}
Most commonly, the reading indicates the value falls between 3.815 V and 3.825 V - the instrument rounds to the nearest displayed digit.
```

However, some digital timers might operate differently, showing "10:15" for any time between exactly 10:15:00 and 10:15:59. Each instrument type requires understanding its specific operation.

This highlights a broader concept: rounding introduces its own form of uncertainty. When we write π = 3.14, we understand this isn't exactly true. Rather, we mean the value lies between 3.135 and 3.145.

```{warning}
"Rounding uncertainty" may seem trivial, but it can significantly impact calculations, especially when:
1. Many rounded values accumulate errors throughout a calculation
2. Two nearly equal values are subtracted, making relative errors much larger
3. High powers are involved, amplifying small errors
```

With modern calculators, it's wise to maintain extra digits throughout calculations, rounding appropriately only at the final step. Similarly, statements like "measured to the nearest millimeter" inadequately convey measurement uncertainty, as they establish only minimum bounds for the measurement interval.

## Absolute and Relative Uncertainty

Measurements should represent the range within which we believe the true value lies. For instance, we might determine a tabletop's length lies between 152.7 cm and 153.1 cm. While this interval representation is entirely valid, we often restate it as 152.9 ± 0.2 cm.

```{admonition} Advantages of Central Value Notation
:class: tip
This notation provides two advantages:
1. It gives us a central value (152.9 cm) for calculations
2. It explicitly states the uncertainty (±0.2 cm) for quality assessment
```

This uncertainty value (±0.2 cm) represents the **absolute uncertainty** of our measurement. However, the significance of any uncertainty depends on the measurement's magnitude. An uncertainty of ±0.2 cm would be:

```{list-table} Impact of Uncertainty in Different Contexts
:header-rows: 1

* - Context
  - Impact of ±0.2 cm
* - Measuring microchip components
  - Substantial
* - Measuring furniture
  - Acceptable
* - Measuring astronomical distances
  - Negligible
```

To better evaluate a measurement's quality, we use **relative uncertainty**, defined as:

$$\text{Relative Uncertainty} = \frac{\text{Absolute Uncertainty}}{\text{Measured Value}}$$

For our tabletop example:

$$\text{Relative Uncertainty} = \frac{0.2 \text{ cm}}{152.9 \text{ cm}} = 0.0013 \text{ or } 0.13\%$$

```{note}
This relative value provides a more meaningful assessment of precision. We often call this the **precision** of our measurement. Absolute uncertainty carries the same units as the measurement itself, while relative uncertainty is a dimensionless ratio.
```

## Identifying Systematic Errors

The uncertainties discussed so far arise from natural limitations in measurement processes. However, another category - systematic errors - affects all measurements in a consistent way.

```{admonition} Common Systematic Errors
:class: caution
- Zero errors in measuring instruments
- A stretched or compressed measuring tape
- Consistently miscalibrated electronic equipment
- Temperature effects on measuring devices
```

These systematic errors, particularly **calibration errors**, require vigilance. Always check instrument zeros before measurement and verify calibration when possible.

```{warning}
Don't be misled by sophisticated digital displays with multiple "precise" digits - our laboratory once received electronic timers claiming millisecond precision that actually contained calibration errors exceeding 12%! Approach all instruments with healthy skepticism.
```

## Calculating Uncertainty in Derived Quantities

Rarely does a single measurement complete our work. Usually, we need to calculate some quantity based on multiple measurements or apply mathematical operations to our measured values.

```{admonition} Common Derived Quantities
:class: example
- A sphere's volume from its diameter
- An object's density from its mass and dimensions
- Gravitational acceleration from a pendulum's length and period
```

When calculating uncertainties in derived quantities, we will focus on finding the maximum possible uncertainty by considering the absolute values of all component uncertainties. This approach ensures we account for the worst-case scenario where all uncertainties combine to produce the largest possible error in our final result.

## Uncertainty in Single-Variable Functions

Consider a measured quantity $x$ with uncertainty $\pm\delta x$, and a calculated result $z = f(x)$. The maximum possible uncertainty in $z$ is determined by considering how much $z$ could change when $x$ varies by $\pm\delta x$.

```{admonition} Calculus Approach
:class: tip
Using calculus, we can determine the maximum uncertainty $\delta z$ using the absolute value of the derivative:

$$\delta z = \left|\frac{d(f(x))}{dx}\right|\delta x$$

This ensures we capture the maximum possible variation in our result.
```

For example, if $z = \frac{x}{x^2+4}$:

$$\delta z = \left|\frac{4-x^2}{(x^2+4)^2}\right|\delta x$$

Let's examine several common function types:

### Powers and Roots

```{admonition} Power Functions
:class: note
For $z = x^n$:
$$\delta z = |nx^{n-1}|\delta x$$

Expressed as relative uncertainty:
$$\frac{\delta z}{z} = n\frac{\delta x}{x}$$
```

This reveals an important principle: the relative uncertainty in the result equals the relative uncertainty in the measurement multiplied by the power. This applies to both positive powers (multiplication) and negative powers (division/roots).

```{admonition} Examples
:class: example
- Calculating a circle's area ($A = \pi r^2$) from a radius measurement doubles the relative uncertainty
- Calculating a cube's volume ($V = s^3$) triples the relative uncertainty
- Taking a square root halves the relative uncertainty
```

### Exponential Functions

```{admonition} Exponential Functions
:class: note
For $z = e^x$:
$$\delta z = |e^x|\delta x = e^x\delta x$$
```

### Logarithmic Functions

```{admonition} Logarithmic Functions
:class: note
For $z = \ln x$:
$$\delta z = \left|\frac{1}{x}\right|\delta x = \frac{\delta x}{|x|}$$
```

### Trigonometric Functions

```{admonition} Trigonometric Functions
:class: note
For $z = \sin x$:
$$\delta z = |\cos x|\delta x$$

For $z = \cos x$:
$$\delta z = |\sin x|\delta x$$
```

## Uncertainty in Multi-Variable Functions

When dealing with functions of multiple variables, we calculate the maximum possible uncertainty by taking the sum of the absolute values of all contributing uncertainties. This approach ensures we account for the worst possible case where all uncertainties combine to maximize the final uncertainty.

### Sum and Difference of Variables

```{admonition} Sum and Difference
:class: note
For both addition ($z = x + y$) and subtraction ($z = x - y$):

The maximum uncertainty is the sum of the absolute uncertainties:
$$\delta z = |\delta x| + |\delta y|$$

This accounts for the worst case where uncertainties combine to maximize the total uncertainty.
```

### Products and Quotients

```{admonition} Products and Quotients
:class: note
For a product ($z = xy$):
$$\delta z = |y|\delta x + |x|\delta y$$

For a quotient ($z = x/y$):
$$\delta z = \left|\frac{1}{y}\right|\delta x + \left|\frac{x}{y^2}\right|\delta y$$
```

## General Approach for Multi-Variable Functions

```{admonition} General Approach
:class: note
For any function $z = f(x,y,...)$, the maximum uncertainty is found by summing the absolute values of all partial derivatives multiplied by their respective uncertainties:

$$\delta z = \left|\frac{\partial f}{\partial x}\right|\delta x + \left|\frac{\partial f}{\partial y}\right|\delta y + ...$$

This ensures we capture the maximum possible uncertainty in our final result.
```

### Complex Functions

For more complex functions, break them down into simpler components and apply the chain rule, always using absolute values to ensure maximum uncertainty:

```{admonition} Example
:class: example
For $z = \sqrt{x^2 + y^2}$:

$$\delta z = \left|\frac{x}{\sqrt{x^2 + y^2}}\right|\delta x + \left|\frac{y}{\sqrt{x^2 + y^2}}\right|\delta y$$
```


## Significant Figures

Calculations often produce more digits than are justified by our measurement precision. We must quote results sensibly.

```{admonition} Example
:class: example
If we measure voltage as $9.2 \pm 0.2$ V and current as $2.1 \pm 0.1$ A, our calculated resistance might appear as $4.380952...$ ohms. But calculating the uncertainty shows $\delta R = 0.3$ ohms. Therefore, reporting "$R = 4.380952 \pm 0.3$ ohms" would be nonsensical.

A reasonable statement would be "$R = 4.4 \pm 0.3$ ohms."
```

```{admonition} Rules for Significant Figures
:class: important
We should:
1. Ensure uncertainty values match the precision of original measurements
2. Keep only significant digits in the final value that match the uncertainty
3. Avoid mismatched precision statements like "12.3456 ± 0.2" or "12 ± 0.00001"
```

## Glossary

:::{glossary}
absolute uncertainty
: The uncertainty of a measurement expressed in the same units as the measurement itself.

relative uncertainty
: The uncertainty of a measurement expressed as a fraction or percentage of the measured value.

systematic error
: Errors that affect all measurements in a consistent way, often due to calibration issues or methodological flaws.

precision
: The degree of reproducibility or agreement between repeated measurements.

accuracy
: The closeness of a measurement to the true value.

significant figures
: The digits in a measurement that carry meaningful information about the precision of the measurement.

zero error
: A systematic error where an instrument gives a non-zero reading when the true value is zero.

propagation of uncertainty
: The process of determining how uncertainties in individual measurements combine to affect the uncertainty in a calculated result.
:::

## Problems

```{admonition} Problem 1
:class: question
I measure a window pane's width between 68.3 cm and 68.9 cm. Express this as a central value with uncertainty, and calculate the relative uncertainty.
```

```{admonition} Problem 2
:class: question
A digital scale displays 235.8 g when weighing a sample. If the scale rounds to the nearest 0.1 g, what is the absolute uncertainty?
```

```{admonition} Problem 3
:class: question
If my measuring tape has absolute uncertainty ±0.5 mm, what's the shortest distance I can measure while maintaining relative uncertainty below 0.5%?
```

```{admonition} Problem 4
:class: question
I measure the dimensions of a rectangular sheet as $(25.4 \pm 0.2) \text{ cm} \times (18.6 \pm 0.2) \text{ cm}$. What is the absolute uncertainty in the calculated area?
```

```{admonition} Problem 5
:class: question
A capacitance value is calculated using $C = \frac{\varepsilon_0 A}{d}$ with measurements:
   - Area $A = (0.025 \pm 0.001) \text{ m}^2$
   - Distance $d = (0.5 \pm 0.02) \text{ mm}$
   - $\varepsilon_0 = 8.85 \times 10^{-12} \text{ F/m}$ (exact)
   
Calculate the value and uncertainty of $C$.
```

```{admonition} Problem 6
:class: question
When determining wave velocity using $v = \lambda f$, I measure wavelength $\lambda = (0.75 \pm 0.05) \text{ m}$ and frequency $f = (440 \pm 5) \text{ Hz}$. Find the absolute and relative uncertainty in velocity.
```

```{admonition} Problem 7
:class: question
A value is reported as $583.2417 \pm 0.15$. Rewrite this with appropriate significant figures.
```

```{admonition} Problem 8
:class: question
The resistance of a wire is measured at two temperatures:
- $R_1 = (125.3 \,\pm\, 0.4)\,\Omega$ at $T_1 = 20°\text{C}$
- $R_2 = (138.1 \,\pm\, 0.4)\,\Omega$ at $T_2 = 50°\text{C}$
   
Calculate the temperature coefficient of resistance and its uncertainty using $\alpha = \frac{R_2-R_1}{R_1(T_2-T_1)}$.
```
