# Mathematical Properties of the Gaussian or Normal Distribution\label{A1}
## The Equation of the Gaussian Distribution Curve\label{secA1_1}
To derive the equation of the Gaussian distribution curve, we consider a quantity, whose unperturbed value is `X`, to be subject to random uncertainty.
We assume that the uncertainty arises from a number, `2n`, of fluctuations from the central value, each of magnitude `E`, and equally likely to be positive or negative.
The measured value `x` can then range all the way from `X -2nE` if all the fluctuations have the same sign in the negative direction to `X + 2nE` if the same thing happened positively.
Intermediate values arise from various combinations of positive and negative contributions.
We wish to determine the form of the resulting distribution curve for a very large number of such measurements.
This form will be determined by the probability of encountering a particular deviation `R` within the total interval `\pm 2nE`.
The probability is governed by the number of ways in which a particular deviation can be generated.

For example, a deviation of the total value `2nE` can be generated in only one way: All the elementary contributions to the deviation must have the same sign simultaneously.
An error of magnitude `(2n -2)E`, on the other hand, can occur in many ways.
If any one of the elementary fluctuations had been negative, the total deviation would have added up to `(2n -2)E`, and this situation can arise in `2n` different ways.
A deviation of `(2n - 2)E` is, therefore, `2n` times as likely to happen as one of `2nE`.
A situation in which two of the elementary fluctuations have negative signs can, correspondingly, be generated in many more ways than for one, and so on.

The argument can be generalized by using the number of ways in which
a specific deviation `R` can be generated as a measure of the probability of the occurrence of that deviation and, consequently, as a measure of the frequency of its occurrence in a universe of observations.

Consider a total deviation `R` of magnitude `2rE` (where `r\leq n`). This must be the result of some combination of fluctuations of which `( n + r)` are positive and `(n-r)` are negative.
The number of ways in which this can happen can be calculated as follows.
The number of ways of selecting any particular arrangement of `2n` things is `(2n)!`.
However, not all these arrangements are different for our purpose, because we do not care if there is any internal rearrangement within the fluctuations in, say, the positive group.
We must, therefore, divide the total number of arrangements by the number of these insignificant rearrangements, that is, by `(n + r)!`.
Similarly we must divide by the number of internal rearrangements that are possible in the negative group, [i.e., by `(n - r)!`]. The total number of significant combinations is, therefore,
```math
\frac{\left(2n\right)!}{\left(n+r\right)!\left(n-r\right)!}
```
This quantity is not yet strictly a probability, although it is a measure of the likelihood of finding such a total deviation.
The probability itself is obtained by multiplying the foregoing number by the probability of this combination of `(n+r)` positive and `(n-r)` negative choices.
Because the probability of each choice is `1/2`, the required multiplier is
```math
\left(\frac{1}{2}\right)^{\left(n+r\right)}\left(\frac{1}{2}\right)^{\left(n-r\right)}
```
The final result for the probability of the deviation `R` is then
```{math}
\label{eqA1_1}
    \frac{\left(2n\right)!}{\left(n+r\right)!\left(n-r\right)!}\left(\frac{1}{2}\right)^{\left(n+r\right)}\left(\frac{1}{2}\right)^{\left(n-r\right)}

```

Our problem now is to evaluate this result as a function of the variable `r`.
This is done subject to the condition that `n` is very large, tending to infinity.
The evaluation requires two auxiliary results.

1.
The first auxiliary result:
```math
n! \approx \sqrt{2\pi n}\frac{n}{e}^n
```
This is known as Stirling's Theorem.
Although its full derivation is beyond our scope, its plausibility can be indicated as follows.

Note first that
\begin{align*}
    \int_1^n \log x dx &= \left[x\log x -x\right]\bigg|_1^n


    &= n\log n -n +1
\end{align*}
Now the graph of `\log x` versus `x` is shown in Figure {ref}`FigA1_1`, and it shows clearly that the value of the integral `\int_1^n \log x dx` can be approximated by the sum
```math
\log 1 + \log 2 + \log 3 + \cdots + \log n
```
which is `\log\left(1\times 2 \times 3 \times\dots n\right)` or `\log n!`.
We can, therefore, write approximately, if `n` is large,
```math
\log n! = n\log n -n
```
or
```math
n! = e^{-n}n^n
```
This is an approximation to the formula given above.
A full derivation is in the text by Margenau and Murphy listed in the Bibliography.
```{figure} figures/A1/FigA1_1.png
:Graph of `\log x` vs. `x`.
:FigA1_1
```

2. The second auxiliary result is:
```math
\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n = e
```
This can be proved as follows.
The expansion for `\left[1+\left(1/n\right)\right]^n` is
```math
1+\frac{n}{1!}\frac{1}{n} + \frac{n\left(n-1\right)}{2!}\left(\frac{1}{n}\right)^2 + \frac{n\left(n-1\right)\left(n-2\right)}{3!}\left(\frac{1}{n}\right)^3 + \dots
```
As `n` becomes larger, all the terms involving `n` clearly tend to unity, so that the series tends to
```math
1+ \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \dots
```
and the sum of this series to infinity has the value `e`, which gives us the required result.

We are now in a position to evaluate the expression {ref}`eqA1_1`.
We apply Stirling's Theorem to the terms `(2n!), (n+r)!,` and `(n-r)!`.
We obtain
```math
(2n)! = (2n)^{2n} e^{-2n} \sqrt{2\pi\times2n}= 2^{2n}n^{\left(2n+\frac{1}{2}\right)}e^{-2n}\sqrt{4\pi}
```
\begin{align*}
    \left(n+r\right)! &= \left(n+r\right)^{\left(n+r\right)}e^{-\left(n+r\right)}\sqrt{2\pi\left(n+r\right)}


    &= n^{\left(n+r+\frac{1}{2}\right)}\left(1+\frac{r}{n}\right)^{\left(n+r+\frac{1}{2}\right)}e^{\left(-n-r\right)}\sqrt{2\pi}
\end{align*}
```math
\left(n-r\right)! = n^{\left(n-r+\frac{1}{2}\right)}\left(1-\frac{r}{n}\right)^{\left(n-r+\frac{1}{2}\right)}e^{\left(-n+r\right)}\sqrt{2\pi}
```
Therefore,
```math
\left(n+r\right)!\left(n-r\right)! = n^{\left(2n+1\right)}\left(1-\frac{r^2}{n^2}\right)^{\left(n+\frac{1}{2}\right)}\left(1+\frac{r}{n}\right)^r\left(1-\frac{r}{n}\right)^{-r}\left(2\pi e^{-2n}\right)
```
The variable part of equation {ref}`eqA1_1` can now be written
\begin{multline*}
    \left(1-\frac{r^2}{n^2}\right)^{\left(-n-\frac{1}{2}\right)}\left(1+\frac{r}{n}\right)^{-r}\left(1-\frac{r}{n}\right)^{r}


    =\left(1-\frac{r^2}{n^2}\right)^{-\left(\frac{n^2}{r^2}\right)\left(\frac{r^2}{n}\right)}\left(1-\frac{r^2}{n^2}\right)^{-\frac{1}{2}}\left(1+\frac{r}{n}\right)^{\frac{n}{r}\left(-\frac{r^2}{n}\right)}\left(1-\frac{r}{n}\right)^{-\frac{n}{r}\left(-\frac{r^2}{n}\right)}
\end{multline*}

Thus, expression {ref}`eqA1_1` can now be written
```math
\frac{1}{\sqrt{n\pi}}\left(1-\frac{r^2}{n^2}\right)^{-\left(\frac{n^2}{r^2}\right)\left(\frac{r^2}{n}\right)}\left(1-\frac{r^2}{n^2}\right)^{-1/2}\left(1+\frac{r}{n}\right)^{\frac{n}{r}\left(-\frac{r^2}{n}\right)}\left(1-\frac{r}{n}\right)^{-\frac{n}{r}\left(-\frac{r^2}{n}\right)}
```
Now, as `\frac{n}{r}\leftarrow \infty`, we have
\begin{equation*}
    \left(1-\frac{r^2}{n^2}\right)^{-\frac{n^2}{r^2}} \leftarrow e


    \left(1-\frac{r^2}{n^2}\right)^{-\frac{1}{2}} \leftarrow 1


    \left(1+\frac{r}{n}\right)^{-\frac{n}{r}} \leftarrow e


    \left(1-\frac{r}{n}\right)^{-\frac{n}{r}} \leftarrow e


\end{equation*}
and so, finally, the probability of deviation `R` is
```math
\frac{1}{\sqrt{n\pi}} e^{-\frac{r^2}{n}}
```
The significant feature of this result is the form `e^{-r^2}`.
It specifies the probability of a deviation `R` and is thus equivalent to Equation {ref}`eq3_3` in which the deviation is the difference between the unperturbed value `X` and the measured value `x`.
The only problem that remains in putting the equation into standard form is to redefine the constants.
Put
```math
hx = \frac{r}{\sqrt{n}}
```
for the value of the exponent, and in the constant replace `1/\sqrt{n}` by `h dx`.
The equation then reads
```math
P(x) = \frac{h}{\sqrt{\pi}}e^{-h^2x^2} dx
```
where `P(x) dx` is the probability of finding a deviation between `x` and `x+dx`.

## Standard Deviation of the Gaussian Distribution\label{secA1_2}
To calculate the standard deviation for the Gaussian distribution, we must calculate the standard deviation of a very large set of values that are distributed in a Gaussian distribution.
We must, therefore, calculate the sum of the squares of the deviations from the central value and divide it by the total number of observations.
Let there be `N` observations, where `N` can be assumed to be a very large number.
The number of deviations from the central value that occur between `x` and `x+dx` equals
```math
\frac{Nh}{\sqrt{\pi}} e^{-h^2x^2} dx
```
The value of the standard deviation, therefore, is given by
\begin{align*}
    \sigma^2 &= \frac{1}{N}\int_{-\infty}^{\infty}\frac{Nh}{\sqrt{\pi}} e^{-h^2x^2} \times x^2 dx


    &= \frac{h}{\sqrt{\pi}}\int_{-\infty}^{\infty}x^2  e^{-h^2x^2} \times x^2 dx
\end{align*}
The integral is a standard one and has a value `\sqrt{\pi}/2h^3`, and so the value of the standard deviation is
```math
\sigma^2 = \frac{h}{\sqrt{\pi}}\frac{\sqrt{\pi}}{2h^3} = \frac{1}{2h^2}
```

This provides the justification for Equation {ref}`eq3_4` and also enables us to rewrite the probability function `P(x)` in terms of the standard deviation as
```math
P(x)dx = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{x^2}{2\sigma^2}}dx
```
The equation is frequently used in this form.

## Areas Under the Gaussian Distribution Curve\label{secA1_3}
It is frequently desirable to know what fraction of the area under the Gaussian distribution is enclosed within certain limits on the horizontal scale because this tells us the probability that observations will occur within that interval.
To calculate these areas we proceed as follows.
The probability that a deviation falls between `x` and `x + dx`
```math
\frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{x^2}{2\sigma^2}}dx
```
Therefore, the probability that a deviation lies between 0 and `x` is
```math
\int_0^x \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{x^2}{2\sigma^2}}dx
```
Although this integral can be easily evaluated for infinite limits, it is not so simple for fixed limits as we now require.
Numerical methods of integration are used, with results that are given in Table {ref}`tableA1_1` (see also Figure {ref}`FigA1_2`).
```{list-table}
:Areas under the Gaussian Curve.
:tableA1_1
:header-rows: 1

* - \hline
  - Probability that a deviation lies 


 `x/\sigma`
  - between 0 and `x`

 \hline
0.0
  - 0.0


0.1
  - 0.04


0.2
  - 0.08


0.3
  - 0.12


0.4
  - 0.16


0.5
  - 0.19


0.6
  - 0.23


0.7
  - 0.26


0.8
  - 0.29


0.9
  - 0.32


1.0
  - 0.34


1.1
  - 0.36


1.2
  - 0.38


1.3
  - 0.40


1.4
  - 0.42


1.5
  - 0.43


1.6
  - 0.45


1.7
  - 0.46


1.8
  - 0.46


1.9
  - 0.47


2.0
  - 0.48


2.5
  - 0.49


3.0
  - 0.499

\hline
```
```{figure} figures/A1/FigA1_2.png
:The area evaluated in calculating the probability of occurrence of an error up to `x`.
:FigA1_2
```

If we require the probability that a deviation lies somewhere within the complete range on \textit{both} sides of the origin, that is, `\pm(x/\sigma)` , the value for the area is doubled.
For example, the entry at `x/\sigma = 1` is `0.34`, which gives the 68\
The table gives only an
indication of the way the probabilities run, and for serious statistical work reference should be made to one of the many statistical tables available (see the Bibliography under Lindley and Miller).
