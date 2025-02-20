# The Principle of Least Squares\label{A2}
## Least Squares and Sample Means\label{secA2_1}
Consider that we make `N` measurements, `x_i` of a quantity that contains random fluctuation.
Let us calculate that value, `X`, whose deviations from the `x_i` are minimized in accordance with the principle of least squares. `X` will be obtained from the condition
```math
\sum\left(x_i-X\right)^2=\textrm{minimum}
```
Let `\bar{x}` be the mean of the `x_i`.
Then,
\begin{align*}
    \sum \left(x_i - X\right)^2 &= \sum\left[\left(x_i - \bar{x}\right) + \left(\bar{x}-X\right)\right]^2]


    &= \sum\left[\left(x_i - \bar{x}\right)^2 + \left(\bar{x}-X\right)^2 + 2\left(x_i - \bar{x}\right)\left(\bar{x}-X\right)\right]


\end{align*}
or, since `\sum\left(x_i-\bar{x}\right)=0`,
\[\sum \left(x_i - X\right)^2 = \sum\left[\left(x_i - \bar{x}\right)^2 + \left(\bar{x}-X\right)^2\right]\]
This last expression clearly has a minimum value when `\bar{x} = X`, thus confirming that the use of the mean as the most probable value for a sample is consistent with the principle of least squares.

## Least-Squares Fitted to Straight Lines\label{secA2_2}
Consider a set of observations `(x_i, y_i)` to which we wish to fit a linear relation
```math
y = mx +b
```
We assume that the `x` values are precise, that all the uncertainty is contained in the `y` values, and that the weights of the `y` values are equal.
(For the definition of the concept of ``weights,'' see Appendix {ref}`secA2_3`.) The deviations of the observed points from the straight line `y = mx + b` are of the form
```math
\delta y_i = y_i - (mx_i +b)
```
and we wish to have a minimum value for the sum of the squares of these quantities.
We have
\begin{align*}
    \left(\delta y_i\right)^2 &= \left[y_i - (mx_i +b)\right]^2


    &= y_i^2 + m^2x_i^2 +b^2 +2mx_ib-2mx_iy_i - 2y_ib
\end{align*}
If there are `N` pairs of observations, the sum of the squares, `M`, is given by
\begin{align*}
    M &= \sum\left(\delta y_i\right)^2


    &= \sum y_i^2 + m^2\sum x_i^2 + Nb^2 + 2mb\sum x_i - 2m\sum x_iy_i - 2b\sum y_i
\end{align*}
The condition for the best choice of `m` and `b` is that `\sum\left(\delta y_i\right)^2` should be a minimum.
We need, therefore,
```math
\frac{\partial M}{\partial m}=0 \hspace{0.25in} {\textrm and} \hspace{0.25in} \frac{\partial M}{\partial b}=0
```
The first condition gives
```math
2m\sum x_i^2 + 2b\sum x_i -2\sum\left(x_iy_i\right) = 0
```
and the second condition gives
```math
2Nb + 2m\sum x_i -2\sum y_i = 0
```
Solution of the two simultaneous equations for `m` and `b` gives
```math
m = \frac{N\sum\left(x_iy_i\right) - \sum x_i\sum y_i}{N\sum x_i^2 - \left(\sum x_i\right)^2}
```
```math
b = \frac{\sum x_i^2 \sum y_i - \sum x_i\sum \left(x_i y_i\right)}{N\sum x_i^2 - \left(\sum x_i\right)^2}
```

Standard deviations for `m` and `b` can be calculated as follows.
Consider `m` first.
Because `m` is a computed value that is calculated in terms of the uncertain quantities `y_1, y_2`, and the like, we can apply the equation that we had earlier (Equation {ref}`eq3_9`) for the standard deviation of a computed value, `z`, that is a function of variables. `x, y,` and so on.
It was
```math
S_z^2 = \left(\frac{\partial f}{\partial x}\right)^2S_x^2 + \left(\frac{\partial f}{\partial y}\right)^2S_y^2 + \cdots
```
We apply this result to our case by noting that the `x` and `y` of the formula are the `y_1, y_2`, and so on that appear in the expression for `m`.
We can write, therefore,
```math
S_m^2 = \left(\frac{\partial m}{\partial y_1}\right)^2S_{y_1}^2 + \left(\frac{\partial m}{\partial y_2}\right)^2S_{y_2}^2 + \cdots
```
Now, in making our set of measurements of the `x` and `y` values, we would not normally have measured explicitly the standard deviation for each `y` value.
In the absence of these we assume that the values of the various `S_y` can be replaced by a quantity based on the scatter of the `y` values about the line whose `m` and `b` values we have calculated.
These intervals. `\delta y_i`, have a standard deviation
whose value (Equation {ref}`eq6_5`) was
```math
S_y = \sqrt{\frac{\sum\left(\delta y_i\right)^2}{N-2}}
```
and this is the value that we shall use in place of all the separate `S_{y_1} S_{y_2},` and so on.
Justification of the term `N - 2` is not attempted here.
It is associated with the fact that the `\delta y_i`, are not independent but are connected by the existence of the best line that is specified by the values of `m` and `b`.
The equation for the standard deviation of the slope can therefore be written
```math
S_m^2 = \left(\frac{\partial m}{\partial y_1}\right)^2S_y^2 + \left(\frac{\partial m}{\partial y_2}\right)^2S_y^2 + \cdots
```
or
\[S_m^2 = S_y^2\left[\left(\frac{\partial m}{\partial y_1}\right)^2 + \left(\frac{\partial m}{\partial y_2}\right)^2 + \cdots\right]\]
Let us write
```math
S_m^2 = S_y^2\sum_k \left(\frac{\partial m}{\partial y_k}\right)^2
```
where we have introduced a second index `k` to denote terms in the summation for the standard deviation.
We must now evaluate the partial derivatives `\frac{\partial m}{\partial y_k}`.

The value of `m` is given by
\[m = \frac{1}{N\sum x_i^2 - \left(\sum x_i\right)^2}\left[Nx_1y_1-y_1\sum x_i + Nx_2y_2 - y_2\sum x_i + \cdots\right]\]
and we can see that differentiation with respect to `y` gives us, for `y_1` as an example
\[\frac{\partial m}{\partial y_1} = \frac{1}{N\sum x_i^2 - \left(\sum x_i\right)^2}\left[Nx_1-\sum x_i\right]\]
or in general, for the `k^{th}` term
\[\frac{\partial m}{\partial y_k} = \frac{1}{N\sum x_i^2 - \left(\sum x_i\right)^2}\left[Nx_k-\sum x_i\right]\]
and
\[\left(\frac{\partial m}{\partial y_k}\right)^2 = \frac{1}{\left[N\sum x_i^2 - \left(\sum x_i\right)^2\right]^2}\left[N^2x_k^2+\left(\sum x_i\right)^2 - 2Nx_k\sum x_i\right]\]

To obtain the value of `S_m` this must now be summed over the index `k`.
If we write
\[\sum_k\left(\frac{\partial m}{\partial y_k}\right)^2 = \frac{1}{\left[N\sum x_i^2 - \left(\sum x_i\right)^2\right]^2}\sum_k\left[N^2x_k^2+\left(\sum x_i\right)^2 - 2Nx_k\sum x_i\right]\]
and remember that `\sum_k x_k` is the same thing as `\sum_i x_i`, we can easily perform the summation over the index `k` to obtain
\begin{align*}
\sum_k\left(\frac{\partial m}{\partial y_k}\right)^2 &= \frac{1}{\left[N\sum x_i^2 - \left(\sum x_i\right)^2\right]^2}\left[N^2\sum x_i^2+N\left(\sum x_i\right)^2 - 2N\left(\sum x_i\right)^2\right]


&=  \frac{1}{\left[N\sum x_i^2 - \left(\sum x_i\right)^2\right]^2}\left[N^2\sum x_i^2-N\left(\sum x_i\right)^2\right]


&= \frac{N}{N\sum x_i^2 - \left(\sum x_i\right)^2}
\end{align*}
so that, finally, the value of `S_m` is given by
```math
S_m = S_y \times \sqrt{\frac{N}{N\sum x_i^2 - \left(\sum x_i\right)^2}}
```
The value for `S_b` can be found using the same procedure.

## Weighting in Statistical Calculations\label{secA2_3}
When we perform some statistical calculation, such as obtaining the mean of a set of observations or fitting a function to observations by using the least-squares principle, the equations in Sections {ref}`sec3_3` and {ref}`sec6_7` are valid only when all the observations are equally precise.
If the measurements are of unequal precision, it is obviously fallacious to allow them to make equal contributions toward the final answer.
Clearly, the more precise measurements should play a more important part in the calculation than the less precise values.
To accomplish this we assign to the observations \textbf{weights} that are inversely proportional to the standard deviations of the observations.
The derivations of the resulting equations can be found in the standard texts on statistics.
We simply quote me results here.

\subsection*{Weighted Mean of a Set of Observations}
Consider that we have a set of independently measured quantities.
Xi' each of which has arisen from a statistical process that has yielded a value for its standard deviation, `S_i`.
The \textbf{weighted mean} of the set of `x` values is defined to be
```math
\bar{x} = \frac{\sum \left(x_i/S_i^2\right)}{\sum \left( 1/S_i^2\right)}
```
and the standard deviation of the weighted mean by
```math
S^2 = \frac{\sum \left(\left(x-\bar{x}\right)^2/S_i^2\right)}{\left(N-1\right)\sum\left(1/S_i^2\right)}
```

\subsection*{Straight-Line Fitting by Weighted Least Squares}
Consider that we have a set of values of a variable `y` measured as a function of `x`.
As in Section {ref}`sec6_7` we assume that the `x` values are precise and that all the uncertainty is confined to the `y` values.
We assume also that the `y` values are of unequal precision and have been assigned weights `w`.
The equations by which we can calculate the slope `m` and the intercept `b` of the best line can be written as follows:
```math
m = \frac{\sum w \sum wxy - \sum wx\sum wy}{\sum w \sum wx^2-\left(\sum wx\right)^2}
```
```math
b =\frac{\sum wy \sum wx^2 - \sum wx\sum wxy}{\sum w \sum wx^2-\left(\sum wx\right)^2} 
```
Because of the cumbersome nature of these equations, we have used abbreviated notation in which we have dropped the suffix `i` that should be attached to each of the quantities.
Also, the term `w_i` that is used for the weight of each pair of measured values `(x_i, y_i)` is calculated in terms of the standard deviations of the `y` values as
```math
w_i = \frac{1}{S_{y_i}^2}
```

The best estimates of the standard deviations for `m` and `b` can be written (as they were in Section {ref}`sec6_7`) in terms of the deviations of the measured points from the best line.
For a weighted least-squares fit, these deviations must now be weighted.
The weighted value of `S_y` is given by
```math
S_y = \sqrt{\frac{\sum w_i \delta_i^2}{N-2}}
```
The best estimates of the standard deviation for the slope and intercept can now be written as
```math
S_m^2 = \frac{S_y^2}{W}
```
```math
S_b^2 = S_y^2\left(\frac{1}{\sum w} = \frac{\bar{x}^2}{W}\right)
```
where
```math
W = \sum\left(w\left(x-\bar{x}\right)^2\right)
```
and `\bar{x}` is the weighted mean of the `x` values, given by
```math
\bar{x} = \frac{\sum wx}{\sum w}
```
The suffix `i` has, as before, been omitted.
Further detail on weighted least-squares fitting to straight lines is in the text by Squires that is listed in the Bibliography.
