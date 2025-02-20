# Appendix I: The Gaussian Distribution - Mathematical Properties and Derivation

## The Equation of the Gaussian Distribution Curve

> [!info] The Gaussian distribution (also called the normal distribution) is fundamental to statistical analysis and appears naturally in many physical phenomena. Let's see how it emerges from first principles.

Let's derive the equation that describes the Gaussian distribution, beginning with a fundamental model of random variation.

Consider a quantity whose true value is $X$, but when measured, it's subject to random uncertainty. We'll model this uncertainty as arising from many small, independent fluctuations that can be either positive or negative with equal probability.

Specifically, imagine that our measurement is affected by $2n$ small fluctuations, each with magnitude $E$. Each fluctuation has equal probability of being positive or negative. The measured value $x$ can therefore range from $X-2nE$ (if all fluctuations are negative) to $X+2nE$ (if all are positive).

> [!note] Why this model makes sense
> This model reflects many real-world measurement situations. Think about measuring the length of an object with a ruler - your eye position, slight movements of your hand, tiny variations in lighting, and many other small factors all contribute small random errors to your measurement.

What we want to determine is the probability distribution for observing a particular deviation $R$ within this range of possible values. This probability depends on how many different ways a specific deviation can occur.

### Understanding the Combinatorial Basis

Think about extreme deviations first. A deviation of exactly $+2nE$ can happen in only one way - when all $2n$ fluctuations are positive. Similarly, a deviation of $-2nE$ also happens in only one way.

A deviation of $(2n-2)E$ is more likely because it can happen whenever exactly one of the fluctuations is negative (and the rest positive). Since any one of the $2n$ fluctuations could be that negative one, there are $2n$ different ways this deviation could occur.

> [!example] Concrete example
> Imagine just 4 fluctuations (so $n=2$), each with magnitude $E=0.1$ units:
> - A deviation of $+0.4$ requires all fluctuations to be $+0.1$ (only 1 way)
> - A deviation of $+0.2$ requires 3 positive and 1 negative fluctuation (4 possible ways)
> - A deviation of $0$ requires 2 positive and 2 negative fluctuations (6 possible ways)
    > And so on. Notice how the middle values are more likely!

More generally, if we want a total deviation $R$ equal to $2rE$ (where $r ≤ n$), this means that out of our $2n$ fluctuations, $(n+r)$ must be positive and $(n-r)$ must be negative. The number of ways to select $(n+r)$ positions from $2n$ positions is:

$$\frac{(2n)!}{(n+r)!(n-r)!}$$

This quantity represents the number of possible arrangements that yield our desired deviation. To convert this to a probability, we multiply by the probability of getting any specific arrangement of $(n+r)$ positive and $(n-r)$ negative fluctuations, which is:

$$\left(\frac{1}{2}\right)^{n+r}\left(\frac{1}{2}\right)^{n-r} = \left(\frac{1}{2}\right)^{2n}$$

The probability of deviation $R$ is therefore:

$$\frac{(2n)!}{(n+r)!(n-r)!}\left(\frac{1}{2}\right)^{2n}$$

### Simplifying with Stirling's Approximation

> [!theorem] Stirling's Approximation
> For large values of $n$:
> $$n! \approx \sqrt{2\pi n}\left(\frac{n}{e}\right)^n$$

To evaluate our expression for large $n$, we need Stirling's approximation. Here's why this approximation works:

Consider that
$$\int_1^n \ln x \, dx = [x\ln x - x]_1^n = n\ln n - n + 1$$

The integral approximates the sum $\ln 1 + \ln 2 + \ln 3 + ... + \ln n$, which equals $\ln(n!)$.

![Logarithm approximation](/figures/A1/FigA1_1.png)
*The area under the curve of ln(x) approximates the sum of logarithms*

Therefore:
$$\ln(n!) \approx n\ln n - n$$
$$n! \approx e^{-n}n^n$$

This gives us the basic form, though the complete approximation includes the $\sqrt{2\pi n}$ factor.

### The Continuous Limit

> [!important] As $n$ becomes very large, our discrete model approaches a continuous distribution - the Gaussian.

Applying Stirling's approximation to our probability expression and taking the limit as $n$ approaches infinity (with appropriate simplifications that involve several algebraic steps), we eventually obtain:

$$\frac{1}{\sqrt{n\pi}}e^{-\frac{r^2}{n}}$$

This gives us the essence of the Gaussian form: **the probability decreases exponentially with the square of the deviation**. Converting to standard notation with $x$ representing the deviation from the mean value $X$, and using a parameter $h$ related to the width of the distribution:

$$P(x) = \frac{h}{\sqrt{\pi}}e^{-h^2x^2}dx$$

Where $P(x)dx$ represents the probability of finding a deviation between $x$ and $x+dx$.

## Standard Deviation of the Gaussian Distribution

The standard deviation provides a measure of the typical spread of values in the distribution. For a Gaussian distribution, we find the standard deviation by calculating:

$$\sigma^2 = \frac{1}{N}\int_{-\infty}^{\infty}\frac{Nh}{\sqrt{\pi}}e^{-h^2x^2}x^2\,dx = \frac{h}{\sqrt{\pi}}\int_{-\infty}^{\infty}x^2e^{-h^2x^2}\,dx$$

> [!tip] Mathematical note
> This integral can be evaluated using the formula:
> $$\int_{-\infty}^{\infty} x^{2n}e^{-ax^2}dx = \frac{(2n-1)!!}{2^n a^n}\sqrt{\frac{\pi}{a}}$$
> where $(2n-1)!! = (2n-1)(2n-3)...(3)(1)$

This integral equals $\frac{\sqrt{\pi}}{2h^3}$, giving us:

$$\sigma^2 = \frac{1}{2h^2}$$

Therefore:
$$\sigma = \frac{1}{\sqrt{2}h}$$

This allows us to rewrite the probability function in terms of the standard deviation:

$$P(x)dx = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{x^2}{2\sigma^2}}dx$$

> [!success] Important result
> This is the standard form of the Gaussian distribution used in statistical analysis. Notice how knowing $\sigma$ completely determines the shape of the distribution.

## Areas Under the Gaussian Distribution Curve

A key practical question is: what fraction of measurements will fall within certain limits? To answer this, we need to find the area under portions of the Gaussian curve.

The probability that a measurement falls between $0$ and $x$ is:

$$\int_0^x \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{x^2}{2\sigma^2}}dx$$

> [!warning] This integral can't be evaluated in closed form (there's no elementary antiderivative). We must use numerical methods or look up values in tables.

This integral has been calculated numerically and tabulated. The table below shows these probabilities for different values of $x/\sigma$:

| $x/\sigma$ | Probability of deviation between 0 and $x$ |
|------------|--------------------------------------------|
| 0.0 | 0.0 |
| 0.5 | 0.19 |
| 1.0 | 0.34 |
| 1.5 | 0.43 |
| 2.0 | 0.48 |
| 3.0 | 0.499 |

![Gaussian Distribution Area](/figures/A1/gaussian_area.svg)
*Figure A1.1: The shaded area represents the probability of a deviation falling between 0 and x.*

For the probability that a measurement falls within $\pm x/\sigma$ of the mean (the symmetric interval), we double these values.

> [!key] Key values to remember
> - Approximately 68% of all measurements fall within $\pm 1\sigma$ of the mean
> - Approximately 95% fall within $\pm 2\sigma$
> - Approximately 99.7% fall within $\pm 3\sigma$ (the "three-sigma rule")

These probabilities form the foundation of statistical inference. When we make statements about the uncertainty of measurements, we often use these standard intervals - particularly the 68% confidence interval ($\pm 1\sigma$) and the 95% confidence interval ($\pm 2\sigma$).

> [!challenge] Think about it
> Why would scientists often choose to report uncertainties using the "one-sigma" (68%) interval rather than, say, a 90% interval? What are the tradeoffs between choosing wider versus narrower confidence intervals?
