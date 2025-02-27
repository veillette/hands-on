/* Written by MyST v1.3.23 */

#import "myst-imports.typ": *

= Measurement and Uncertainty

== Understanding the Measuring Process

#quote(block: true)[When you can measure what you are speaking about and express it in numbers, you know something about it; but when you cannot express it in numbers, your knowledge remains meager and unsatisfactory. -- Lord Kelvin]Measurement lies at the heart of our scientific understanding. Though perhaps overstated, this sentiment captures an essential truth - proper measurement forms the foundation of meaningful experimentation.

#noteBlock[
At its core, measurement involves comparing an object or phenomenon with some reference standard. These reference standards (meters, kilograms, seconds, etc.) must be universally agreed upon, which is why international organizations establish and maintain measurement standards.
]

Let's begin with a simple example to understand the fundamental nature of measurement. Imagine measuring the height of a coffee mug with a ruler marked in millimeters. You might report "87 mm," but does this mean the mug is exactly 87.00000... mm tall? Of course not. What you're really doing is determining that the height falls within some interval - perhaps between 86.5 mm and 87.5 mm.

Through this dual process of approaching from above and below, we identify an interval - the smallest range within which we're confident the true value lies. This reveals measurement's essential nature: we don't determine exact values but rather intervals of possibility.

#importantBlock[
When reporting measurements, we must specify both the central value and the interval width. This determination requires careful judgment based on numerous factors: scale precision, lighting conditions, object definition, visual acuity, and more.
]

We must assess each situation individually rather than following oversimplified rules (like assuming uncertainty equals half the smallest scale division). A well-defined object under perfect conditions might allow precision well beyond the smallest marked division, while a poorly defined object might create uncertainty spanning several divisions.

== Understanding Digital Readouts and Rounding

Digital instruments present their own interpretive challenges. When a digital multimeter displays "3.82 V," what exactly does this mean? The answer depends on the instrument's design.

#tipBlock[
Most commonly, the reading indicates the value falls between 3.815 V and 3.825 V - the instrument rounds to the nearest displayed digit.
]

However, some digital timers might operate differently, showing "10:15" for any time between exactly 10:15:00 and 10:15:59. Each instrument type requires understanding its specific operation.

This highlights a broader concept: rounding introduces its own form of uncertainty. When we write $pi$ = 3.14, we understand this isn't exactly true. Rather, we mean the value lies between 3.135 and 3.145.

#warningBlock[
"Rounding uncertainty" may seem trivial, but it can significantly impact calculations, especially when:

+ Many rounded values accumulate errors throughout a calculation
+ Two nearly equal values are subtracted, making relative errors much larger
+ High powers are involved, amplifying small errors
]

With modern calculators, it's wise to maintain extra digits throughout calculations, rounding appropriately only at the final step. Similarly, statements like "measured to the nearest millimeter" inadequately convey measurement uncertainty, as they establish only minimum bounds for the measurement interval.

== Absolute and Relative Uncertainty

Measurements should represent the range within which we believe the true value lies. For instance, we might determine a tabletop's length lies between 152.7 cm and 153.1 cm. While this interval representation is entirely valid, we often restate it as 152.9 $plus.minus$ 0.2 cm.

This uncertainty value ($plus.minus$0.2 cm) represents the *absolute uncertainty* of our measurement. However, the significance of any uncertainty depends on the measurement's magnitude. An uncertainty of $plus.minus$0.2 cm would be:

#show figure: set block(breakable: breakableDefault)
#figure(
  tablex(columns: 2, header-rows: 1, repeat-header: true, ..tableStyle, ..columnStyle,
[
Context
],
[
Impact of $plus.minus$0.2 cm
],
[
Measuring microchip components
],
[
Substantial
],
[
Measuring furniture
],
[
Acceptable
],
[
Measuring astronomical distances
],
[
Negligible
],
),
  caption: [
Impact of Uncertainty in Different Contexts
],
  kind: "table",
  supplement: [Table],
)

To better evaluate a measurement's quality, we use *relative uncertainty*, defined as:

$ "Relative Uncertainty" = frac("Absolute Uncertainty", "Measured Value") $
For our tabletop example:

$ "Relative Uncertainty" = frac(0. 2 "cm", 152. 9 "cm") = 0. 0013 "or"0. 13 % $
#noteBlock[
This relative value provides a more meaningful assessment of precision. We often call this the *precision* of our measurement. Absolute uncertainty carries the same units as the measurement itself, while relative uncertainty is a dimensionless ratio.
]

== Identifying Systematic Errors

The uncertainties discussed so far arise from natural limitations in measurement processes. However, another category - systematic errors - affects all measurements in a consistent way.

These systematic errors, particularly *calibration errors*, require vigilance. Always check instrument zeros before measurement and verify calibration when possible.

#warningBlock[
Don't be misled by sophisticated digital displays with multiple "precise" digits - our laboratory once received electronic timers claiming millisecond precision that actually contained calibration errors exceeding 12%! Approach all instruments with healthy skepticism.
]

== Calculating Uncertainty in Derived Quantities

Rarely does a single measurement complete our work. Usually, we need to calculate some quantity based on multiple measurements or apply mathematical operations to our measured values.

In each case, uncertainty in primary measurements creates uncertainty in calculated results. For this section, we'll assume our uncertainty ranges represent intervals within which we're "almost certain" the true values lie. We'll calculate the maximum possible uncertainty by assuming the worst-case scenario - that all component uncertainties combine to maximize the final uncertainty.

== Uncertainty in Single-Variable Functions

Consider a measured quantity $x_0$ with uncertainty $plus.minus delta x$, and a calculated result $z = f (x)$. The range of possible values for $x$ (from $x_0 -delta x$ to $x_0 + delta x$) creates a corresponding range for $z$ from $z_0 -delta z$ to $z_0 + delta z$.

This straightforward approach works well even for complex functions. Consider $z = frac(x, x^2 + 4)$:

$ frac(d z, d x) = frac((x^2 + 4) -x (2 x), (x^2 + 4)^2) = frac(4 -x^2, (x^2 + 4)^2) $
Therefore:

$ delta z = frac(4 -x^2, (x^2 + 4)^2) delta x $
Let's examine several common function types:

=== Powers and Roots

This reveals an important principle: the relative uncertainty in the result equals the relative uncertainty in the measurement multiplied by the power. This applies to both positive powers (multiplication) and negative powers (division/roots).

=== Exponential Functions

#warningBlock[
Exponential functions can be extremely sensitive to uncertainty, especially as the exponent grows larger than 1.
]

=== Logarithmic Functions

=== Trigonometric Functions

#tipBlock[
When using this result, remember that angle uncertainty ($delta x$) must be expressed in radians.
]

== Uncertainty in Multi-Variable Functions

When calculating uncertainty for functions with multiple variables, we could take a pessimistic approach - assuming all component uncertainties combine in the worst possible way. Or we could recognize that some errors might partially cancel others. For now, we'll calculate maximum possible uncertainty.

=== Sum of Variables

=== Difference of Variables

#warningBlock[
This highlights a critical issue: when subtracting similar quantities, relative uncertainty can become enormous. If $x$ and $y$ have similar values, their difference will be small, but the uncertainty remains the sum of their individual uncertainties.
]

#tipBlock[
The solution? Whenever possible, measure differences directly. Don't measure two large values and subtract them when you can measure their difference directly.
]

== Calculus Approach for Multi-Variable Functions

=== Products

#importantBlock[
For products, relative uncertainties add together.
]

=== General Power Functions

#tipBlock[
This approach works for any number of variables with any powers, including negative powers (representing division).
]

=== Implicit Differentiation

#tipBlock[
This gives us $d f \/ f$ directly without having to solve for $f$ explicitly.
]

== Compensating Errors

Sometimes variables are not independent. Consider calculating refractive index using:

$ n = frac(sin (frac(A + D_m, 2)), sin (frac(A, 2))) $
#warningBlock[
If we have uncertainties in both $A$ and $D_m$, we cannot treat the numerator and denominator as independent variables. An increase in $A$ affects both the numerator and denominator in ways that partially compensate each other.
]

#tipBlock[
The solution is either to rewrite the equation with truly independent variables or return to the fundamental partial derivative approach. Watch for such compensating errors, as incorrect treatment can introduce significant calculation errors.
]

== Significant Figures

Calculations often produce more digits than are justified by our measurement precision. We must quote results sensibly.

== Problems