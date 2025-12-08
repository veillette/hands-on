# Statistics of Measurement

:::{admonition} Learning Objectives
:class: note

By the end of this chapter, you will be able to:

- Recognize and characterize random variations in repeated measurements
- Describe the properties of the Gaussian (normal) distribution and apply the 68-95-99.7 rule
- Calculate sample mean, standard deviation, and standard error of the mean
- Distinguish between standard deviation (spread of data) and standard error (uncertainty in the mean)
- Apply statistical error propagation rules for addition, subtraction, multiplication, division, and powers
- Use Chauvenet's criterion to systematically identify potential outliers
- Construct and interpret confidence intervals for experimental results
- Determine appropriate sample sizes for achieving target precision levels
  :::

## Understanding Random Variation

When we make measurements, we often observe that repeated measurements of the same quantity show random variations. This is a fundamental aspect of experimental science that we must understand and account for.

:::{note}
These variations can arise from many sources:

- Environmental fluctuations (temperature, pressure, humidity changes)
- Instrument limitations (finite resolution, electronic noise)
- Human factors (reaction time variations, reading parallax)
- Quantum effects (in some cases, such as radioactive decay)
  :::

Consider measuring the radioactivity of a sample. Even with perfect equipment, the number of counts in a fixed time interval will vary randomly due to the inherent stochastic nature of radioactive decay. Similarly, optical measurements might show fluctuations due to air currents causing refractive index variations or thermal effects causing mechanical instabilities in the apparatus.

:::{admonition} The Nature of Random Variation
:class: tip
Rather than viewing these variations as "errors," we should understand them as inherent properties of the measurement process. Our goal is not to eliminate them but to understand their statistical properties and quantify their effects on our results.
:::

## The Gaussian Distribution

When we make many measurements of the same quantity, the results often follow a bell-shaped curve known as the Gaussian or normal distribution. This distribution is fundamental to understanding measurement uncertainty.

The mathematical form of the Gaussian distribution is:

$$y = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

where $\mu$ is the population mean and $\sigma$ is the population standard deviation.

:::{admonition} Properties of the Gaussian Distribution
:class: note

- Symmetric about the mean ($\mu$)
- Characterized by two parameters: mean ($\mu$) and standard deviation ($\sigma$)
- About 68% of measurements fall within $\pm 1\sigma$ of the mean
- About 95% fall within $\pm 2\sigma$
- About 99.7% fall within $\pm 3\sigma$
- The total area under the curve equals 1 (representing 100% probability)
  :::

These percentages are crucial for understanding measurement uncertainty. The 68-95-99.7 rule (sometimes called the empirical rule) provides a quick way to assess the likelihood that a measurement falls within certain bounds of the true value.

This distribution allows us to make meaningful statements about our measurements. For example, if we measure a length multiple times and find a mean of 10.5 cm with a standard deviation of 0.1 cm, we can say:

:::{important}
We are approximately 68% confident that any single measurement will fall between 10.4 cm and 10.6 cm, and 95% confident it will fall between 10.3 cm and 10.7 cm.
:::

## Sample Statistics and Population Parameters

When we make measurements, we're typically working with a sample from a larger population of possible measurements. Understanding the relationship between sample statistics and population parameters is essential.

:::{admonition} Key Concepts
:class: note

- **Sample mean** ($\bar{x}$) estimates **population mean** ($\mu$)
- **Sample standard deviation** ($s$) estimates **population standard deviation** ($\sigma$)
- **Standard error of the mean** (SEM) = $\frac{s}{\sqrt{N}}$
- **Sample size** ($N$) affects the precision of our estimates
  :::

The **sample mean** is calculated as:
$$\bar{x} = \frac{1}{N}\sum_{i=1}^{N} x_i$$

The **sample standard deviation** is:
$$s = \sqrt{\frac{\sum_{i=1}^{N}(x_i - \bar{x})^2}{N-1}}$$

where $N$ is the sample size and $x_i$ are individual measurements.

Note the $(N-1)$ in the denominator, known as Bessel's correction, which provides an unbiased estimate of the population standard deviation.

The **standard error of the mean** tells us how precisely we've determined the population mean. As our sample size increases, this uncertainty decreases as $1/\sqrt{N}$.

:::{warning}
Don't confuse **standard deviation** (variation in individual measurements) with **standard error** (uncertainty in the mean). The standard deviation describes the spread of the data, while the standard error describes how precisely we know the mean.
:::

### Distinction Between Standard Deviation and Standard Error

This distinction is crucial and frequently misunderstood:

- **Standard Deviation ($s$)**: Describes the variability of individual measurements around the sample mean. It tells us about the inherent scatter in our data.

- **Standard Error of the Mean ($s_m = s/\sqrt{N}$)**: Describes the uncertainty in our estimate of the population mean. It tells us how precisely we know the "true" value.

For example, if we measure the same quantity 25 times and get $s = 2.0$ units:

- The standard deviation remains 2.0 units (describing individual measurement scatter)
- The standard error of the mean is $2.0/\sqrt{25} = 0.4$ units (our uncertainty in the mean)

## Propagation of Statistical Uncertainty

When we calculate derived quantities from multiple measurements, we need to understand how the uncertainties combine. The propagation formulas depend on whether we're dealing with estimated uncertainties or statistical uncertainties.

### General Error Propagation Rules

For a function $z = f(x, y)$ where $x$ and $y$ are independent variables with standard deviations $\sigma_x$ and $\sigma_y$:

$$\sigma_z^2 = \left(\frac{\partial f}{\partial x}\right)^2 \sigma_x^2 + \left(\frac{\partial f}{\partial y}\right)^2 \sigma_y^2$$

:::{admonition} Rules for Error Propagation
:class: tip
**For addition/subtraction**: $z = x \pm y$
$$\sigma_z^2 = \sigma_x^2 + \sigma_y^2$$

**For multiplication/division**: $z = xy$ or $z = x/y$
$$\left(\frac{\sigma_z}{z}\right)^2 = \left(\frac{\sigma_x}{x}\right)^2 + \left(\frac{\sigma_y}{y}\right)^2$$

**For powers**: $z = x^n$ where $n$ is a constant
$$\frac{\sigma_z}{z} = |n| \frac{\sigma_x}{x}$$
:::

:::{note}
These rules assume the measurements are independent and the uncertainties are random (not systematic). For systematic errors, the propagation rules are different.
:::

:::{admonition} Example
:class: example

If we measure a rectangle's length as $(25.4 \pm 0.2)$ cm and width as $(18.6 \pm 0.2)$ cm, what is the uncertainty in the area?

**Solution**:

1. Calculate the area: $A = L \times W = 25.4 \text{cm} \times 18.6 \text{cm} = 472.44 \text{cm}^2$
2. Calculate relative uncertainties:
   - $\frac{\sigma_L}{L} = \frac{0.2}{25.4} \approx 0.00787$
   - $\frac{\sigma_W}{W} = \frac{0.2}{18.6} \approx 0.01075$
3. Combine relative uncertainties: Then use the multiplication rule:
   $$\left(\frac{\sigma_A}{A}\right)^2 = (0.00787)^2 + (0.01075)^2 \approx 0.0000619 + 0.0001156 = 0.0001775$$
   $$\frac{\sigma_A}{A} = \sqrt{0.0001775} \approx 0.0133$$
   $$
   \sigma_A = 0.0133 \times 472.44 \approx
   $$\sigma_A = \sqrt{0.0001775} \times 472.44 \text{cm}^2 \approx 6.3 \ \text{cm}^2$$
   $$
4. Final result: $A = (472 \pm 6) \ \text{cm}^2$
:::

### Statistical vs. Estimated Uncertainties

When combining different types of uncertainties (e.g., some estimated, some statistical), we need to ensure compatibility. If one uncertainty represents a 68% confidence interval (1 standard deviation) and another represents outer limits (~100% confidence), they cannot be directly combined using the standard propagation formulas.

## Central Limit Theorem and Sampling

The Central Limit Theorem explains why the Gaussian distribution is so prevalent in measurement science. It states that the distribution of sample means approaches a normal distribution as the sample size increases, regardless of the shape of the original population distribution.

This theorem justifies our use of Gaussian statistics even when individual measurements might not follow a perfect Gaussian distribution.

## Identifying and Handling Outliers

Sometimes our measurements include values that seem unusually different from the others. These outliers require careful consideration and systematic analysis.

### Chauvenet's Criterion

Chauvenet's criterion provides a statistical method for identifying potential outliers. The criterion states that a measurement should be rejected if the probability of obtaining a deviation as large or larger is less than $1/(2N)$, where $N$ is the total number of measurements.

**Procedure for Chauvenet's Criterion:**

1. Calculate the sample mean ($\bar{x}$) and standard deviation ($s$)
2. For each measurement $x_i$, calculate the deviation: $d_i = |x_i - \bar{x}|$
3. Express this as a number of standard deviations: $t_i = d_i/s$
4. Find the probability that a measurement would deviate by $t_i$ or more standard deviations (using Gaussian tables)
5. If this probability is less than $1/(2N)$, the measurement is a candidate for rejection

**Example**: For $N = 10$ measurements, reject if probability < 0.05 (about $2\sigma$)
For $N = 20$ measurements, reject if probability < 0.025 (about $2.2\sigma$)

:::{warning}
**Important Guidelines for Outlier Rejection:**

1. **Never reject data simply because it doesn't fit expectations**
2. **Check for obvious experimental errors first** (misreading, equipment malfunction)
3. **Apply statistical criteria systematically, not arbitrarily**
4. **Document all rejected data with reasoning**
5. **Remember that outliers sometimes indicate important physics**
   :::

### Systematic Approach to Outliers

When handling potential outliers, follow this systematic approach:

1. **Verify the measurement** was recorded correctly
2. **Check for obvious experimental problems** (equipment malfunction, environmental disturbance)
3. **Apply statistical assessment** (such as Chauvenet's criterion)
4. **Document thoroughly** the reasoning for any rejected measurements
5. **Never reject data simply because it doesn't fit expectations**

The probability guidelines from the Gaussian distribution help us make these decisions:

- Outside $2\sigma$ limits: 5% probability (might be legitimate outlier)
- Outside $3\sigma$ limits: 0.3% probability (likely candidate for rejection)
- Outside $4\sigma$ limits: 0.006% probability (very likely experimental error)

## Confidence Intervals and Uncertainty Statements

Understanding how to make proper uncertainty statements is crucial for communicating experimental results.

### Confidence Intervals

A confidence interval provides a range of values that likely contains the true population parameter. For a 95% confidence interval of the mean:

$$\text{CI}_{95\%} = \bar{x} \pm 1.96 \times \frac{s}{\sqrt{N}}$$

This means we're 95% confident the true population mean lies within this range.

### Proper Uncertainty Statements

When reporting results:

- **68% confidence**: $\bar{x} \pm s_m$ (1 standard error)
- **95% confidence**: $\bar{x} \pm 1.96 \times s_m$ (≈ 2 standard errors)
- **99.7% confidence**: $\bar{x} \pm 3 \times s_m$ (3 standard errors)

## Sample Size Effects

The size of our sample dramatically affects the reliability of our statistical estimates.

### Effect on Standard Error

The standard error of the mean decreases as $1/\sqrt{N}$:

- To halve the uncertainty in the mean, need 4 times as many measurements
- To reduce uncertainty by factor of 10, need 100 times as many measurements

### Reliability of Standard Deviation Estimates

For small samples, our estimate of the population standard deviation is quite uncertain. The standard deviation of the standard deviation is approximately:

$$\sigma_s \approx \frac{\sigma}{\sqrt{2(n-1)}}$$

This means:

- With $N = 5$: our $s$ estimate has ~35% uncertainty
- With $N = 10$: our $s$ estimate has ~25% uncertainty
- With $N = 25$: our $s$ estimate has ~15% uncertainty

:::{important}
**Minimum Sample Size Guidelines:**

- For meaningful statistics: $N \geq 10$
- For reliable standard deviation estimates: $N \geq 20$
- For precise confidence intervals: $N \geq 30$
  :::

## Combining Different Types of Uncertainty

In practice, we often need to combine uncertainties that have different statistical meanings (e.g., some estimated, some statistical).

### Making Uncertainties Compatible

If combining a statistically-based uncertainty (68% confidence) with an estimated range uncertainty (~100% confidence), we need to make them compatible:

- Convert estimated range to ~68% confidence by multiplying by 0.67
- Or convert statistical uncertainty to ~100% range by multiplying by 1.5

### Root Sum of Squares

For independent uncertainties of the same confidence level:

$$\sigma_{total} = \sqrt{\sigma_1^2 + \sigma_2^2 + \sigma_3^2 + \ldots}$$

This assumes the uncertainties are:

- Independent (not correlated)
- Random (not systematic)
- Of the same confidence level

## Distribution Shapes and Assumptions

While we often assume Gaussian distributions, real measurements may deviate from this ideal.

### When Gaussian Assumptions Fail

- **Small number statistics**: For counting experiments with few counts, use Poisson statistics
- **Skewed distributions**: May occur with certain measurement processes
- **Multiple peaks**: Could indicate multiple measurement modes or systematic effects

### Checking Gaussian Assumptions

Simple tests for Gaussian behavior:

- Plot histogram of residuals from the mean
- Check if ~68% fall within 1 standard deviation
- Look for systematic patterns in the data

## Practical Measurement Strategy

A well-planned measurement strategy can minimize uncertainties and improve data quality.

Before starting measurements:

1. **Estimate expected uncertainty** based on instrument resolution and known fluctuations
2. **Determine required sample size** based on target precision
3. **Choose measurement sequence** to minimize systematic effects
4. **Plan for outlier detection** and handling procedures

## Glossary

:::{glossary}
Gaussian distribution
: A bell-shaped probability distribution that describes many random phenomena in nature.

standard deviation
: A measure of the spread of a distribution, indicating how much variation exists from the mean.

standard error
: The standard deviation of the sampling distribution of a statistic, most commonly the standard error of the mean.

outlier
: A data point that appears to deviate markedly from other observations in a dataset.

confidence interval
: A range of values that is likely to contain the true value of a parameter with a specified level of confidence.

propagation of uncertainty
: The process of determining how uncertainties in individual measurements affect the uncertainty in a calculated result.

Chauvenet's criterion
: A statistical rule for identifying potential outliers based on the probability of observing such deviations.

sample mean
: The arithmetic average of a set of sample values, used to estimate the population mean.

population mean
: The true average value of a quantity if we could measure it an infinite number of times.

central limit theorem
: A statistical theorem stating that sample means approach a normal distribution as sample size increases, regardless of the original population distribution.
:::

## Problems

```{exercise}
:label: prob-histogram
:class: exercises

Construct a histogram of the following measurements (in cm):
12.3, 12.5, 12.4, 12.6, 12.3, 12.4, 12.5, 12.4, 12.3, 12.5
```

```{exercise}
:label: prob-statistics

Calculate the mode, median, mean, standard deviation, and standard error for the measurements in Problem 1.
```

```{exercise}
:label: prob-confidence

For the measurements in Problem 1, find the 95% confidence interval for the true value.
```

```{exercise}
:label: prob-outliers

Using Chauvenet's criterion, determine if any of the measurements in Problem 1 should be considered outliers.
```

```{exercise}
:label: prob-propagation

If we measure a rectangle's length as $(12.5 \pm 0.5)$ cm and width as $(18.6 \pm 0.2)$ cm, what is the uncertainty in the perimeter?
```

```{exercise}
:label: prob-sample-size

How many measurements would be needed to reduce the standard error by a factor of 2 compared to Problem 1?
```
