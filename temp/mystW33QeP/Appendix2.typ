// Created with jtex v.1.0.20
#import "lapreprint.typ": *
#show: template.with(
  title: "Appendix 2: The Principle of Least Squares",
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



/* Written by MyST v1.3.23 */

= Least Squares and Sample Means

When we make multiple measurements of a quantity that contains random fluctuation, we need a method to determine the most probable value. The principle of least squares provides this method by finding the value that minimizes the squared deviations from our measurements.

Let's say we make $N$ measurements, $x_i$, of a quantity. To find the value $X$ whose deviations from our measurements are minimized according to the principle of least squares, we need:

$ sum (x_i -X)^2 = "minimum" $
Let's denote the mean of the measurements as $macron(x)$. We can rewrite the sum of squared deviations as:

$ sum (x_i -X)^2 = sum [ (x_i -macron(x)) + (macron(x) -X) ]^2 $
Expanding the squared term:

$ sum (x_i -X)^2 = sum [ (x_i -macron(x))^2 + (macron(x) -X)^2 + 2 (x_i -macron(x)) (macron(x) -X) ] $
The cross-term $sum (x_i -macron(x))$ equals zero by definition of the mean, so:

$ sum (x_i -X)^2 = sum (x_i -macron(x))^2 + N (macron(x) -X)^2 $
This expression clearly reaches its minimum value when $X = macron(x)$, confirming that using the sample mean as the most probable value is consistent with the principle of least squares.

= Fitting a Straight Line Using Least Squares

Consider a set of observations $(x_i, y_i)$ that we wish to fit with a linear relationship:

$ y = m x + b $
We'll assume that uncertainty exists only in the $y$ values, and that all measurements have equal weight (we'll address weighted least squares later).

For each observation, the deviation from our proposed line is:

$ delta y_i = y_i -(m x_i + b) $
According to the principle of least squares, we want to minimize the sum of the squares of these deviations:

$ sum (delta y_i)^2 = sum [ y_i -(m x_i + b) ]^2 $
Expanding this expression:

$ sum (delta y_i)^2 = sum [ y_i^2 + m^2 x_i^2 + b^2 -2 m x_i y_i -2 b y_i + 2 m x_i b ] $
Or more compactly:

$ M = sum y_i^2 + m^2 sum x_i^2 + N b^2 + 2 m b sum x_i -2 m sum x_i y_i -2 b sum y_i $
Where $M$ represents the sum of squared deviations that we want to minimize.

To find the optimal values of $m$ and $b$, we take partial derivatives with respect to each parameter and set them equal to zero:

$ frac(diff M, diff m) = 0 quad "and"quad frac(diff M, diff b) = 0 $
From the first condition:

$ 2 m sum x_i^2 + 2 b sum x_i -2 sum (x_i y_i) = 0 $
From the second condition:

$ 2 N b + 2 m sum x_i -2 sum y_i = 0 $
Solving these equations simultaneously gives us:

$ m = frac(N sum (x_i y_i) -sum x_i sum y_i, N sum x_i^2 -(sum x_i)^2) $
$ b = frac(sum x_i^2 sum y_i -sum x_i sum (x_i y_i), N sum x_i^2 -(sum x_i)^2) $
Having determined the "best fit" line, we need to quantify the uncertainty in our calculated parameters. Since $m$ and $b$ are computed from measurements with uncertainty, we can calculate their standard deviations.

For the standard deviation of each $y_i$ value from our fitted line, we use:

$ S_y = sqrt(frac(sum (delta y_i)^2, N -2)) $
The denominator uses $N -2$ rather than $N$ because we've estimated two parameters ($m$ and $b$) from our data, reducing our degrees of freedom.

The standard deviations of the slope and intercept are then:

$ S_m = S_y sqrt(frac(N, N sum x_i^2 -(sum x_i)^2)) $
$ S_b = S_y sqrt(frac(sum x_i^2, N sum x_i^2 -(sum x_i)^2)) $
These expressions provide statistical measures of uncertainty in our fitted parameters. When reporting results, we typically state values as $m plus.minus S_m$ and $b plus.minus S_b$, indicating that the true parameter has about a 68% probability of falling within one standard deviation of our estimate.

= Weighted Least Squares

When measurements have different levels of precision, it makes sense to give more weight to more precise measurements. This approach is called weighted least squares.

== Weighted Mean of Observations

If we have independently measured quantities $x_i$, each with a standard deviation $S_i$, the weighted mean is:

$ macron(x) = frac(sum (x_i \/ S_i^2), sum (1 \/ S_i^2)) $
The standard deviation of this weighted mean is:

$ S^2 = frac(sum ((x -macron(x))^2 \/ S_i^2), (N -1) sum (1 \/ S_i^2)) $
== Straight-Line Fitting with Weighted Least Squares

For observations with unequal precision, we modify our least squares approach by assigning weights. If the $y$ values have varying precision, but the $x$ values are considered exact, the equations for the slope and intercept become:

$ m = frac(sum w sum w x y -sum w x sum w y, sum w sum w x^2 -(sum w x)^2) $
$ b = frac(sum w y sum w x^2 -sum w x sum w x y, sum w sum w x^2 -(sum w x)^2) $
Where $w_i$ represents the weight of each observation, calculated as:

$ w_i = frac(1, S_(y i)^2) $
The weighted standard deviation about the best-fit line is:

$ S_y = sqrt(frac(sum w_i delta_i^2, N -2)) $
And the standard deviations of the slope and intercept are:

$ S_m^2 = frac(S_y^2, W) $
$ S_b^2 = S_y^2 (frac(1, sum w) + frac(macron(x)^2, W)) $
Where:

$ W = sum (w (x -macron(x))^2) $
And $macron(x)$ is the weighted mean of the $x$ values:

$ macron(x) = frac(sum w x, sum w) $
Weighted least squares is particularly valuable when measurements come from different sources with varying precision. By accounting for these differences in precision, we ensure that our fitted parameters are not unduly influenced by less reliable data points.

When reporting results from weighted analyses, it's important to specify that weighted methods were used and to explain the basis for the weights assigned. This transparency allows others to properly interpret and potentially reproduce your analysis.
