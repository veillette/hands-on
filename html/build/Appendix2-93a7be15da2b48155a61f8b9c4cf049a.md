---
title: 'Appendix 2: The Principle of Least Squares'
exports:
  - format: md
    output: exports/Appendix2.md
  - format: pdf
    template: lapreprint-typst
    output: exports/Appendix2.pdf
  - format: docx
    template: curvenote
    output: exports/Appendix2.docx
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
edit_url: https://github.com/veillette/hands-on/blob/main/content/Appendix2.md
---
+++
## Least Squares and Sample Means

When we make multiple measurements of a quantity that contains random fluctuation, we need a method to determine the most probable value. The principle of least squares provides this method by finding the value that minimizes the squared deviations from our measurements.

Let’s say we make {math}`N` measurements, {math}`x_i`, of a quantity. To find the value {math}`X` whose deviations from our measurements are minimized according to the principle of least squares, we need:

```{math}
\sum(x_i-X)^2 = \text{minimum}
```

Let’s denote the mean of the measurements as {math}`\bar{x}`. We can rewrite the sum of squared deviations as:

```{math}
\sum (x_i - X)^2 = \sum[(x_i - \bar{x}) + (\bar{x}-X)]^2
```

Expanding the squared term:

```{math}
\sum (x_i - X)^2 = \sum[(x_i - \bar{x})^2 + (\bar{x}-X)^2 + 2(x_i - \bar{x})(\bar{x}-X)]
```

The cross-term {math}`\sum(x_i - \bar{x})` equals zero by definition of the mean, so:

```{math}
\sum (x_i - X)^2 = \sum(x_i - \bar{x})^2 + N(\bar{x}-X)^2
```

This expression clearly reaches its minimum value when {math}`X = \bar{x}`, confirming that using the sample mean as the most probable value is consistent with the principle of least squares.

## Fitting a Straight Line Using Least Squares

Consider a set of observations {math}`(x_i, y_i)` that we wish to fit with a linear relationship:

```{math}
y = mx + b
```

We’ll assume that uncertainty exists only in the {math}`y` values, and that all measurements have equal weight (we’ll address weighted least squares later).

For each observation, the deviation from our proposed line is:

```{math}
\delta y_i = y_i - (mx_i + b)
```

According to the principle of least squares, we want to minimize the sum of the squares of these deviations:

```{math}
\sum(\delta y_i)^2 = \sum[y_i - (mx_i + b)]^2
```

Expanding this expression:

```{math}
\sum(\delta y_i)^2 = \sum[y_i^2 + m^2x_i^2 + b^2 - 2mx_iy_i - 2by_i + 2mx_ib]
```

Or more compactly:

```{math}
M = \sum y_i^2 + m^2\sum x_i^2 + Nb^2 + 2mb\sum x_i - 2m\sum x_iy_i - 2b\sum y_i
```

Where {math}`M` represents the sum of squared deviations that we want to minimize.

To find the optimal values of {math}`m` and {math}`b`, we take partial derivatives with respect to each parameter and set them equal to zero:

```{math}
\frac{\partial M}{\partial m} = 0 \quad \text{and} \quad \frac{\partial M}{\partial b} = 0
```

From the first condition:

```{math}
2m\sum x_i^2 + 2b\sum x_i - 2\sum(x_iy_i) = 0
```

From the second condition:

```{math}
2Nb + 2m\sum x_i - 2\sum y_i = 0
```

Solving these equations simultaneously gives us:

```{math}
m = \frac{N\sum(x_iy_i) - \sum x_i\sum y_i}{N\sum x_i^2 - (\sum x_i)^2}
```

```{math}
b = \frac{\sum x_i^2 \sum y_i - \sum x_i\sum (x_i y_i)}{N\sum x_i^2 - (\sum x_i)^2}
```

Having determined the “best fit” line, we need to quantify the uncertainty in our calculated parameters. Since {math}`m` and {math}`b` are computed from measurements with uncertainty, we can calculate their standard deviations.

For the standard deviation of each {math}`y_i` value from our fitted line, we use:

```{math}
S_y = \sqrt{\frac{\sum(\delta y_i)^2}{N-2}}
```

The denominator uses {math}`N-2` rather than {math}`N` because we’ve estimated two parameters ({math}`m` and {math}`b`) from our data, reducing our degrees of freedom.

The standard deviations of the slope and intercept are then:

```{math}
S_m = S_y \sqrt{\frac{N}{N\sum x_i^2 - (\sum x_i)^2}}
```

```{math}
S_b = S_y \sqrt{\frac{\sum x_i^2}{N\sum x_i^2 - (\sum x_i)^2}}
```

These expressions provide statistical measures of uncertainty in our fitted parameters. When reporting results, we typically state values as {math}`m \pm S_m` and {math}`b \pm S_b`, indicating that the true parameter has about a 68% probability of falling within one standard deviation of our estimate.

## Weighted Least Squares

When measurements have different levels of precision, it makes sense to give more weight to more precise measurements. This approach is called weighted least squares.

### Weighted Mean of Observations

If we have independently measured quantities {math}`x_i`, each with a standard deviation {math}`S_i`, the weighted mean is:

```{math}
\bar{x} = \frac{\sum (x_i/S_i^2)}{\sum (1/S_i^2)}
```

The standard deviation of this weighted mean is:

```{math}
S^2 = \frac{\sum ((x-\bar{x})^2/S_i^2)}{(N-1)\sum(1/S_i^2)}
```

### Straight-Line Fitting with Weighted Least Squares

For observations with unequal precision, we modify our least squares approach by assigning weights. If the {math}`y` values have varying precision, but the {math}`x` values are considered exact, the equations for the slope and intercept become:

```{math}
m = \frac{\sum w \sum wxy - \sum wx\sum wy}{\sum w \sum wx^2-(\sum wx)^2}
```

```{math}
b = \frac{\sum wy \sum wx^2 - \sum wx\sum wxy}{\sum w \sum wx^2-(\sum wx)^2}
```

Where {math}`w_i` represents the weight of each observation, calculated as:

```{math}
w_i = \frac{1}{S_{yi}^2}
```

The weighted standard deviation about the best-fit line is:

```{math}
S_y = \sqrt{\frac{\sum w_i \delta_i^2}{N-2}}
```

And the standard deviations of the slope and intercept are:

```{math}
S_m^2 = \frac{S_y^2}{W}
```

```{math}
S_b^2 = S_y^2\left(\frac{1}{\sum w} + \frac{\bar{x}^2}{W}\right)
```

Where:

```{math}
W = \sum(w(x-\bar{x})^2)
```

And {math}`\bar{x}` is the weighted mean of the {math}`x` values:

```{math}
\bar{x} = \frac{\sum wx}{\sum w}
```

Weighted least squares is particularly valuable when measurements come from different sources with varying precision. By accounting for these differences in precision, we ensure that our fitted parameters are not unduly influenced by less reliable data points.

When reporting results from weighted analyses, it’s important to specify that weighted methods were used and to explain the basis for the weights assigned. This transparency allows others to properly interpret and potentially reproduce your analysis.