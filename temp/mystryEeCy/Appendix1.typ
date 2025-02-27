// Created with jtex v.1.0.20
#import "lapreprint.typ": *
#show: template.with(
  title: "Appendix I: The Gaussian Distribution - Mathematical Properties and Derivation",
  date: datetime(
    year: 2025,
    month: 1,
    day: 1,
  ),
  keywords: ("physics","laboratory","experimental design","data analysis","scientific writing",),
  authors: (
    (
      name: "Martin Veillette",
    ),
  ),
  affiliations: (
  ),
  margin: (
  ),
)

#import "myst-imports.typ": *

/* Written by MyST v1.3.23 */

= The Equation of the Gaussian Distribution Curve

#quote(block: true)[\[!info\] The Gaussian distribution (also called the normal distribution) is fundamental to statistical analysis and appears naturally in many physical phenomena. Let's see how it emerges from first principles.]Let's derive the equation that describes the Gaussian distribution, beginning with a fundamental model of random variation.

Consider a quantity whose true value is $X$, but when measured, it's subject to random uncertainty. We'll model this uncertainty as arising from many small, independent fluctuations that can be either positive or negative with equal probability.

Specifically, imagine that our measurement is affected by $2 n$ small fluctuations, each with magnitude $E$. Each fluctuation has equal probability of being positive or negative. The measured value $x$ can therefore range from $X -2 n E$ (if all fluctuations are negative) to $X + 2 n E$ (if all are positive).

#noteBlock[
Why this model makes sense This model reflects many real-world measurement situations. Think about measuring the length of an object with a ruler - your eye position, slight movements of your hand, tiny variations in lighting, and many other small factors all contribute small random errors to your measurement.
]

What we want to determine is the probability distribution for observing a particular deviation $R$ within this range of possible values. This probability depends on how many different ways a specific deviation can occur.

== Understanding the Combinatorial Basis

Think about extreme deviations first. A deviation of exactly $+ 2 n E$ can happen in only one way - when all $2 n$ fluctuations are positive. Similarly, a deviation of $-2 n E$ also happens in only one way.

A deviation of $(2 n -2) E$ is more likely because it can happen whenever exactly one of the fluctuations is negative (and the rest positive). Since any one of the $2 n$ fluctuations could be that negative one, there are $2 n$ different ways this deviation could occur.

#quote(block: true)[\[!example\] Concrete example Imagine just 4 fluctuations (so $n = 2$), each with magnitude $E = 0. 1$ units:

- A deviation of +0.4 requires all fluctuations to be +0.1 (only 1 way)
- A deviation of +0.2 requires 3 positive and 1 negative fluctuation (4 possible ways)
- A deviation of 0 requires 2 positive and 2 negative fluctuations (6 possible ways) And so on. Notice how the middle values are more likely!]More generally, if we want a total deviation $R$ equal to $2 r E$ (where $r ≤ n$), this means that out of our $2 n$ fluctuations, $(n + r)$ must be positive and $(n -r)$ must be negative. The number of ways to select $(n + r)$ positions from $2 n$ positions is:

$ frac((2 n)!, (n + r)! (n -r)!) $
This quantity represents the number of possible arrangements that yield our desired deviation. To convert this to a probability, we multiply by the probability of getting any specific arrangement of $(n + r)$ positive and $(n -r)$ negative fluctuations, which is:

$ (frac(1, 2))^(n + r) (frac(1, 2))^(n -r) = (frac(1, 2))^(2 n) $
The probability of deviation $R$ is therefore:

$ frac((2 n)!, (n + r)! (n -r)!) (frac(1, 2))^(2 n) $
== Simplifying with Stirling's Approximation

#quote(block: true)[\[!theorem\] Stirling's Approximation For large values of $n$:

$ n! approx sqrt(2 pi n) (frac(n, e))^n $]To evaluate our expression for large $n$, we need Stirling's approximation. Here's why this approximation works:

Consider that

$ integral_1^n ln x thin d x = [ x ln x -x ]_1^n = n ln n -n + 1 $
The integral approximates the sum $ln 1 + ln 2 + ln 3 +... + ln n$, which equals $ln (n!)$.

#image("files/FigA1_1-dd18d0c81b86cd70d33c826cfa3511a4.png", width: 90%)

 _The area under the curve of ln(x) approximates the sum of logarithms_

Therefore:

$ ln (n!) approx n ln n -n $

$ n! approx e^(-n) n^n $
This gives us the basic form, though the complete approximation includes the $sqrt(2 pi n)$ factor.

== The Continuous Limit

#importantBlock[
As $n$ becomes very large, our discrete model approaches a continuous distribution - the Gaussian.
]

Applying Stirling's approximation to our probability expression and taking the limit as $n$ approaches infinity (with appropriate simplifications that involve several algebraic steps), we eventually obtain:

$ frac(1, sqrt(n pi)) e^(-frac(r^2, n)) $
This gives us the essence of the Gaussian form: *the probability decreases exponentially with the square of the deviation*. Converting to standard notation with $x$ representing the deviation from the mean value $X$, and using a parameter $h$ related to the width of the distribution:

$ P (x) = frac(h, sqrt(pi)) e^(-h^2 x^2) d x $
Where $P (x) d x$ represents the probability of finding a deviation between $x$ and $x + d x$.

= Standard Deviation of the Gaussian Distribution

The standard deviation provides a measure of the typical spread of values in the distribution. For a Gaussian distribution, we find the standard deviation by calculating:

$ sigma^2 = frac(1, N) integral_(-infinity)^infinity frac(N h, sqrt(pi)) e^(-h^2 x^2) x^2 thin d x = frac(h, sqrt(pi)) integral_(-infinity)^infinity x^2 e^(-h^2 x^2) thin d x $
#tipBlock[
Mathematical note This integral can be evaluated using the formula:

$ integral_(-infinity)^infinity x^(2 n) e^(-a x^2) d x = frac((2 n -1)!!, 2^n a^n) sqrt(frac(pi, a)) $
where $(2 n -1)!! = (2 n -1) (2 n -3)... (3) (1)$
]

This integral equals $frac(sqrt(pi), 2 h^3)$, giving us:

$ sigma^2 = frac(1, 2 h^2) $
Therefore:

$ sigma = frac(1, sqrt(2) h) $
This allows us to rewrite the probability function in terms of the standard deviation:

$ P (x) d x = frac(1, sqrt(2 pi sigma^2)) e^(-frac(x^2, 2 sigma^2)) d x $
#quote(block: true)[\[!success\] Important result This is the standard form of the Gaussian distribution used in statistical analysis. Notice how knowing $sigma$ completely determines the shape of the distribution.]= Areas Under the Gaussian Distribution Curve

A key practical question is: what fraction of measurements will fall within certain limits? To answer this, we need to find the area under portions of the Gaussian curve.

The probability that a measurement falls between 0 and $x$ is:

$ integral_0^x frac(1, sqrt(2 pi sigma^2)) e^(-frac(x^2, 2 sigma^2)) d x $
#warningBlock[
This integral can't be evaluated in closed form (there's no elementary antiderivative). We must use numerical methods or look up values in tables.
]

This integral has been calculated numerically and tabulated. The table below shows these probabilities for different values of $x \/ sigma$:

#tablex(columns: 2, header-rows: 1, repeat-header: true, ..tableStyle, ..columnStyle,
[
$x \/ sigma$
],
[
Probability of deviation between 0 and $x$
],
[
0.0
],
[
0.0
],
[
0.5
],
[
0.19
],
[
1.0
],
[
0.34
],
[
1.5
],
[
0.43
],
[
2.0
],
[
0.48
],
[
3.0
],
[
0.499
],
)
#noteBlock(heading: [Python Image: Click Me! 👈])[
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
import matplotlib.patches as patches

# Create the figure and axis
plt.figure(figsize=(10, 6))
ax = plt.subplot(111)

# Define the x range and calculate the Gaussian PDF
x = np.linspace(-4, 4, 1000)
sigma = 1.0
mu = 0.0
pdf = 1/(sigma * np.sqrt(2*np.pi)) * np.exp(-(x-mu)**2/(2*sigma**2))

# Plot the Gaussian curve
plt.plot(x, pdf, 'k-', lw=2, label='Gaussian Distribution')

# Function to calculate the area (probability) between 0 and x_val
def area_between_0_and_x(x_val):
    return stats.norm.cdf(x_val) - stats.norm.cdf(0)

# Choose x/sigma value to illustrate - let's use x/sigma = 1.0
x_val = 1.0

# Fill the area from 0 to x_val
x_fill = np.linspace(0, x_val, 100)
y_fill = 1/(sigma * np.sqrt(2*np.pi)) * np.exp(-(x_fill-mu)**2/(2*sigma**2))
plt.fill_between(x_fill, y_fill, color='skyblue', alpha=0.6)

# Add probability value text
prob = area_between_0_and_x(x_val)
plt.text(x_val/2, 0.15, f"Area = {prob:.3f}",
         ha='center', va='center', fontsize=12,
         bbox=dict(facecolor='white', alpha=0.8))

# Add x/sigma = 1.0 vertical line
plt.axvline(x=x_val, color='blue', linestyle='--', alpha=0.7)
plt.axvline(x=0, color='blue', linestyle='--', alpha=0.7)

# Annotate the endpoints
plt.annotate('x/σ = 0', xy=(0, 0), xytext=(0, -0.02),
             arrowprops=dict(arrowstyle='->'), ha='center')
plt.annotate(f'x/σ = {x_val}', xy=(x_val, 0), xytext=(x_val, -0.02),
             arrowprops=dict(arrowstyle='->'), ha='center')

# Add a small table showing values
table_data = [
    ['x/σ', 'Probability'],
    ['0.0', '0.000'],
    ['0.5', '0.192'],
    ['1.0', '0.341'],
    ['1.5', '0.433'],
    ['2.0', '0.477'],
    ['3.0', '0.499']
]

# Create the table in the upper right corner
table = plt.table(cellText=table_data, loc='upper right', cellLoc='center',
                 colWidths=[0.1, 0.1], bbox=[0.7, 0.55, 0.28, 0.35])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.5)

# Customize the plot
plt.grid(alpha=0.3)
plt.title('Area Under the Gaussian Distribution Curve', fontsize=14)
plt.xlabel('x/σ (Standard Deviations from Mean)', fontsize=12)
plt.ylabel('Probability Density', fontsize=12)
plt.xlim(-3, 3)
plt.ylim(-0.03, 0.45)

# Add a descriptive caption as text under the plot
plt.figtext(0.5, 0.01,
           "Figure A1.1: The shaded area represents the probability of a \n"
           "deviation falling between 0 and x=1σ (34.1% of total area).",
           ha='center', fontsize=11)

# Add an explanation of the concept
plt.text(-2.8, 0.3,
        "The probability that a measurement\n"
        "falls between 0 and x is given by:\n"
        r"$\int_0^x \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{t^2}{2\sigma^2}}dt$",
        fontsize=10, bbox=dict(facecolor='lightyellow', alpha=0.9))

plt.tight_layout(rect=[0, 0.03, 1, 0.97])
plt.savefig('gaussian_area.svg', dpi=300)
plt.show()
```
]

#image("files/gaussian_area-04c47a00a2680dd5cce206f7b9e284b8.svg", width: 90%)

 _Figure A1.1: The shaded area represents the probability of a deviation falling between 0 and x._

For the probability that a measurement falls within $plus.minus x \/ sigma$ of the mean (the symmetric interval), we double these values.

#quote(block: true)[\[!key\] Key values to remember

- Approximately 68% of all measurements fall within $plus.minus 1 sigma$ of the mean
- Approximately 95% fall within $plus.minus 2 sigma$
- Approximately 99.7% fall within $plus.minus 3 sigma$ (the "three-sigma rule")]These probabilities form the foundation of statistical inference. When we make statements about the uncertainty of measurements, we often use these standard intervals - particularly the 68% confidence interval ($plus.minus 1 sigma$) and the 95% confidence interval ($plus.minus 2 sigma$).

#quote(block: true)[\[!challenge\] Think about it Why would scientists often choose to report uncertainties using the "one-sigma" (68%) interval rather than, say, a 90% interval? What are the tradeoffs between choosing wider versus narrower confidence intervals?]
