# Statistics of Measurement

## Understanding Random Variation

When we make measurements, we often observe that repeated measurements of the same quantity show random variations. This is a fundamental aspect of experimental science that we must understand and account for.

:::{note}
These variations can arise from many sources:

- Environmental fluctuations
- Instrument limitations
- Human factors
- Quantum effects (in some cases)
  :::

Consider measuring the radioactivity of a sample. Even with perfect equipment, the number of counts in a fixed time interval will vary randomly. Similarly, optical measurements might show fluctuations due to air currents or thermal effects.

:::{admonition} The Nature of Random Variation
:class: tip
Rather than viewing these variations as "errors," we should understand them as inherent properties of the measurement process. Our goal is not to eliminate them but to understand their statistical properties.
:::

## The Gaussian Distribution

When we make many measurements of the same quantity, the results often follow a bell-shaped curve known as the Gaussian or normal distribution.

:::{admonition} Properties of the Gaussian Distribution
:class: note

- Symmetric about the mean
- Characterized by two parameters: mean ($\mu$) and standard deviation ($\sigma$)
- About 68% of measurements fall within $\pm 1 \sigma$ of the mean
- About 95% fall within $\pm 2 \sigma$
- About 99.7% fall within $\pm 3 \sigma$
  :::

This distribution allows us to make meaningful statements about our measurements. For example, if we measure a length multiple times and find a mean of 10.5 cm with a standard deviation of 0.1 cm, we can say:

:::{important}
We are 95% confident that the true value lies between 10.3 cm and 10.7 cm.
:::

## Sample Statistics and Population Parameters

When we make measurements, we're typically working with a sample from a larger population of possible measurements.

:::{admonition} Key Concepts
:class: note

- Sample mean (x̄) estimates population mean ($\mu$)
- Sample standard deviation (s) estimates population standard deviation ($\sigma$)
- Standard error of the mean (SEM) = $s/\sqrt{n}$
  :::

The standard error of the mean tells us how precisely we've determined the population mean. As our sample size increases, this uncertainty decreases.

:::{warning}
Don't confuse standard deviation (variation in individual measurements) with standard error (uncertainty in the mean).
:::

## Propagation of Statistical Uncertainty

When we calculate derived quantities from multiple measurements, we need to understand how the uncertainties combine.

:::{admonition} Rules for Error Propagation
:class: tip
For addition/subtraction:
$$\sigma_z^2 = \sigma_x^2 + \sigma_y^2$$

For multiplication/division:
$$ \left(\frac{\sigma_z}{z}\right)^2 = \left(\frac{\sigma_x}{x}\right)^2 + \left(\frac{\sigma_y}{y}\right)^2 $$ {#eq-error-prop}
:::

:::{note}
These rules assume the measurements are independent and the uncertainties are random (not systematic).
:::

## Identifying Outliers

Sometimes our measurements include values that seem unusually different from the others. These outliers require careful consideration.

When handling potential outliers, we should follow a systematic approach. First, verify the measurement was recorded correctly and check for obvious experimental problems. For statistical assessment, methods like Chauvenet's criterion can be applied - this calculates the probability that a given measurement would occur based on the sample's mean and standard deviation, typically rejecting data points with less than 1/(2n) probability where n is the sample size. Any rejected measurements must be thoroughly documented with the reasoning. However, we must never reject data simply because it doesn't fit our expectations - every measurement provides valuable information about the experimental conditions.

## Glossary

:::{glossary}
Gaussian distribution
: A bell-shaped probability distribution that describes many random phenomena.

standard deviation
: A measure of the spread of a distribution, indicating how much variation exists from the mean.

standard error
: The standard deviation of the sampling distribution of a statistic.

outlier
: A data point that appears to deviate markedly from other observations.

confidence interval
: A range of values that is likely to contain the true value of a parameter.

propagation of uncertainty
: The process of determining how uncertainties in individual measurements affect the uncertainty in a calculated result.
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

If we measure a rectangle's length as $(25.4 \pm 0.2)$ cm and width as $(18.6 \pm 0.2)$ cm, what is the uncertainty in the area?
```

```{exercise}
:label: prob-sample-size

How many measurements would be needed to reduce the standard error by a factor of 2 compared to Problem 1?
```
