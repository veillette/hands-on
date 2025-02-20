# Difference Tables and the Calculus of Finite Differences\label{A3}
## Mathematical Foundations\label{secA3_1}
The calculus of finite differences supplies a powerful tool for the treatment of measured variables.
For the moment, however, let us consider the situation wholly from the mathematical point of view.
After we have established mathematically the results we need, we can proceed to apply them to measurements.

```{figure} figures/A3/FigA3_1.png
:Graph of the function `y=f(x)`.
:FigA3_1
```
Consider a known function `y = f(x)` (sec Figure {ref}`FigA3_1`) that can be expressed in terms of a Taylor expansion about the value `x=a`:
```math
f(x)  f(a) + (x-a)\left(\frac{df}{dx}\right)_a + \frac{\left(x-a\right)^2}{2!}\left(\frac{d^2f}{dx^2}\right)_a + \cdots
```
Such a function is said to be analytic at the point `x = a`.
Any good book on calculus will provide more detail.
The function is defined along a continuous range of values on the scale of `x`, and, to make the theory applicable to measured variables, we must convert the formulation so that it refers to \textit{discrete} values of `x`.
Let these discrete values of `x` be spaced equidistantly upward from `x = a` at intervals of `h`, so that the values of `x` in which we are interested are
```math
x = a, x = a + h, x = a + 2h, x + 3h, \dots
```
We can now calculate corresponding values of `y` for these discrete values of `x`.
They are
```math
f(a), f(a+h), f(a+2h), f(a+3h), \dots
```
and we can illustrate these values on a graph as shown in Figure {ref}`FigA3_2`.

If we concentrate our attention on these discrete values of `x` and `y`, and if we wish to find a form of the Taylor expansion applicable to the discrete values, we can simulate the required derivatives by using finite differences.
We define the quantity `\Delta f(a)` to be
```math
\Delta f(a) = f(a+h)-f(a)
```
Correspondingly, we also have,
```math
\Delta f\left(a+h\right) = f\left(a+2h\right) -f\left(a+h\right)
```
and so on, and these quantities are related to the first derivatives of the function at the various values of `x`.
In a similar way we define the second differences
```math
\Delta^2 f(a) = \Delta f(a + h) - \Delta f(a)
```
and so on for third and higher differences.
```{figure} figures/A3/FigA3_2.png
:Values of `f(x)` at values of `x` near `x=a`.
:FigA3_2
```

When we arrange all these differences beside the tabulated values of `f(x)`, we obtain a \textbf{difference table} for the values.
A difference table for the function
```math
y = 2x+x^3
```
is shown in Table {ref}`tableA3_1`.
```{list-table}
:Difference Table for the function `y=2+x^3`.
:tableA3_1
:header-rows: 1

* - \hline
        `x`
  - \hspace{0.25in}`y`
  - \hspace{0.25in} `\Delta`
  - \hspace{0.25in}`\Delta^2`
  - \hspace{0.25in} `\Delta^3`
  - \hspace{0.25in}`\Delta^4`

 \hline
        1
  - \hspace{0.25in} 3
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 9
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}


        2
  - \hspace{0.25in} 12
  - \hspace{0.25in}
  - \hspace{0.25in} 12
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 21
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        3
  - \hspace{0.25in} 33
  - \hspace{0.25in}
  - \hspace{0.25in} 18
  - \hspace{0.25in}
  - \hspace{0.25in} 0
  - \hspace{0.25in}
  - \hspace{0.25in} 39
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        4
  - \hspace{0.25in} 72
  - \hspace{0.25in}
  - \hspace{0.25in} 24
  - \hspace{0.25in}
  - \hspace{0.25in} 0
  - \hspace{0.25in}
  - \hspace{0.25in} 63
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        5
  - \hspace{0.25in} 135
  - \hspace{0.25in}
  - \hspace{0.25in} 30
  - \hspace{0.25in}
  - \hspace{0.25in} 0
  - \hspace{0.25in}
  - \hspace{0.25in} 93
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        6
  - \hspace{0.25in} 228
  - \hspace{0.25in}
  - \hspace{0.25in} 36
  - \hspace{0.25in}
  - \hspace{0.25in} 0
  - \hspace{0.25in}
  - \hspace{0.25in} 129
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        7
  - \hspace{0.25in} 357
  - \hspace{0.25in}
  - \hspace{0.25in} 42
  - \hspace{0.25in}
  - \hspace{0.25in} 0
  - \hspace{0.25in}
  - \hspace{0.25in} 171
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        8
  - \hspace{0.25in} 528
  - \hspace{0.25in}
  - \hspace{0.25in} 48
  - \hspace{0.25in}
  - \hspace{0.25in} 0
  - \hspace{0.25in}
  - \hspace{0.25in} 219
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}


        9
  - \hspace{0.25in} 747
  - \hspace{0.25in}
  - \hspace{0.25in} 54
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 273
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}


        10
  - \hspace{0.25in} 1020
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}


        \hline
```
This table illustrates several important features of difference tables, including, for this example, the constancy of the third differences and the consequently zero value of the fourth differences.

Now let us consider the problem of obtaining values of `y` at values of `x` intermediate between the discrete values of `x`.
Furthermore, let us find a way of calculating these intermediate values from the known values of `y`, instead of calculating them directly from the function itself.
The advantage of such a procedure is that it will be available for later use on values for which we do not know the relevant function.
To calculate these intermediate values, we must rewrite the Taylor expansion in a form that is compatible with the quantities found in the difference table and that also is suitable for the calculation of intermediate values.
In Figure {ref}`FigA3_3` the gradient of the function `f` at `x = a` can be approximated by the ratio `\Delta/h)`.
Corresponding values for the second derivative can be calculated in terms of the second difference `\Delta^2`, and
so on for higher derivatives.
```{figure} figures/A3/FigA3_3.png
:Approximation for the gradient of `f(x)` at `x=a`.
:FigA3_3
```

Consider also a value of `x` intermediate between `x = a` and `x=a + h`, and let it be specified by a new variable `u` that is defined by
```math
x = a+uh
```
The Taylor expansion can now be rewritten in terms of the above-mentioned quantities to yield the intermediate values of `y` as
```math
y = f(a) +u\Delta +\frac{1}{2!}u(u-1)\Delta^2 + \frac{1}{3!}u(u-1)(u-2)\Delta^3 + \dots
```
This form of the Taylor expansion is known as the Gregory-Newton formula for interpolation.
It can be used to calculate intermediate values whenever we have tabulated values of two variables.
For example, such methods used to be commonly employed for interpolating in tabulated values of logarithms, trigonometric functions, and the like.

To use the Gregory-Newton formula, we construct a difference table as far as those differences that become either zero or else small enough that the error involved in the interpolation calculation becomes acceptably small.
If We construct the table so that the value we are seeking lies between `x = a` and `x = a + h`, the various differences we need for insertion in the formula will be found along the upper edge of the table.
If we are seeking a value that lies between `x = a + h` and `x = a + 2h`, the differences we need will be found along the next lower row, and so on.

Extrapolation can be carried out by a similar process.
Suppose we have a set of values of `y` for values of `x` ranging from `x = a` to `x = a + (n -1)h`.
If we wish to calculate a value for `y` appropriate to `x = a + nh`, we must start with the supposition that the `y` values beyond `x = a + (n-1)h` are determined by the same function as for the lower values.
On the basis of that assumption, there is a simple method of finding `y` for `x=a+nh`; it is based on a process of extending the basic difference table.
Starting with the column of differences that are constant, or sufficiently close to constancy for our purposes, we calculate successively the lower differences in terms of the higher until we reach the required value of `y`.
The process is illustrated in Table {ref}`tableA3_2`, in which we have pretended that we did not know the function that `y` was of `x`, that we knew the values of `y` only for values of `x` up to 6, and that we desired the value of `y` for `x=7`.
In this way, the table can be extended indefinitely to provide further values of the function as required.
```{list-table}
:The use of a Difference Table for extrapolation.
:tableA3_2
:header-rows: 1

* - \hline
        `x`
  - \hspace{0.25in}`y`
  - \hspace{0.25in} `\Delta`
  - \hspace{0.25in}`\Delta^2`
  - \hspace{0.25in} `\Delta^3`

 \hline
        2
  - \hspace{0.25in} 8
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 19
  - \hspace{0.25in}
  - \hspace{0.25in}


        3
  - \hspace{0.25in} 27
  - \hspace{0.25in}
  - \hspace{0.25in} 18
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 37
  - \hspace{0.25in}
  - \hspace{0.25in} 6


        4
  - \hspace{0.25in} 64
  - \hspace{0.25in}
  - \hspace{0.25in} 24
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 61
  - \hspace{0.25in}
  - \hspace{0.25in} 6


        5
  - \hspace{0.25in} 125
  - \hspace{0.25in}
  - \hspace{0.25in} 30
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 91
  - \hspace{0.25in}
  - \hspace{0.25in} 


        6
  - \hspace{0.25in} 216
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 6
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 30+6
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} =36
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 91+36
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} =127
  - \hspace{0.25in}
  - \hspace{0.25in} 


        7
  - \hspace{0.25in} 216+127
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} =343
  - \hspace{0.25in}
  - \hspace{0.25in}
  - \hspace{0.25in} 


        \hline
```

The difference table for actual observations does not work out as neatly as did the two foregoing examples.
For purposes of illustration these examples were constructed by using explicit mathematical functions, and absolute constancy was found at some level in the differences.
Real observations differ from these examples in two respects.
First, there is no guarantee, for a particular set of real observations, that a simple function that would lead to constancy of some difference column even exists.
Second, even if some elementary function is appropriate, the presence of uncertainty in the observations makes it impossible to obtain complete constancy in any of the difference columns.
We just use our best judgment in dealing with each situation as it arises.
The situation is considered further at the end of this Appendix.

We can also use a difference table to construct a polynomial that will either reproduce the actual functional relationship between `y` and `x` (if such exists) or else provide an adequate approximation to a set of experimental observations.
To do this we must rewrite the Gregory-Newton formula in a form suitable for our purpose.
We earlier wrote it in terms of the variable `u`; we now wish to write it in terms of the variable `x` while still incorporating the differences `\Delta`, rather than the derivatives `df/dx`.
Remembering the definition of `u` and using the equation
```math
x=a+uh
```
we have
```math
u = \frac{x-a}{h}
```
and the original form of the Gregory-Newton equation becomes
\begin{multline*}
    y=f(x)+\frac{1}{h}(x-a)\Delta + \frac{1}{2!}\frac{1}{h^2}(x-a)(x-a-1)\Delta^2


+\frac{1}{3!}\frac{1}{h^3}(x-a)(x-a-1)(x-a-2)\Delta^3 +\dots
\end{multline*}
The equation is now in the form we desire.
If we insert in it the appropriate values of `\Delta, \Delta^2, \Delta^3`, and so on, for a particular value such as `f(a)`, we generate the required polynomial in `x`.
As an example consider the difference table in Table {ref}`tableA3_1` and choose the values in the top row.
They are
```math
f(a)=3, a=1, h=1, \Delta =9, \Delta^2=12, \Delta^3=6, \Delta^4=0
```
Inserting these values and performing some elementary algebra we obtain
```math
y = 2x+x^3
```
Because this is the function we started with, we should not be surprised.
However, we have confirmed the suitability of the Gregory-Newton formula for generating a polynomial that is consistent with a set of tabulated values.
It is therefore of immense potential value for constructing a suitable polynomial when we are dealing with a set of measurements alone, with no idea of a suitable function to act as a model.

## Application of Difference Tables to Measured Values\label{secA3_2}
In the preceding section we illustrated the calculus of finite differences and difference tables by using mathematical functions.
When we turn to measured variables and seek to apply these techniques, we encounter two differences: (1) We may not know a function that will provide an adequate fit to the observations, and (2) the variables will show scatter arising from uncertainty of measurement.

Consider first the case in which the measurements are precise, so that the scatter is negligible in comparison with the measured values.
In this case the difference table will contain values that behave relatively regularly, and we can use it to perform immediately such procedures as interpolation and extrapolation.
Furthermore, if a polynomial of a certain order will serve as a good fit to the observations, the differences of the appropriate order will turn out to be nearly constant, and the next differences will scatter around zero.
We can then use the procedures of the preceding section to construct the appropriate polynomial.

If, on the other hand, our observations show larger scatter, we are faced with a somewhat different problem of interpretation.
It is in principle possible to fit a polynomial exactly to any set of values, no matter how much scatter they show.
In fact, to any set of values it is possible to fit an infinite number of polynomials, two of that infinity being represented by the curves in Figure {ref}`FigA3_4`.
```{figure} figures/A3/FigA3_4.png
:Fitting a polynomial to a set of observations.
:FigA3_4
```

So which polynomial do we want?
Is it going to be one like that represented by the solid line in Figure {ref}`FigA3_4`? Under some circumstances, this may be appropriate.
On many other occasions, however, we may have good reason to believe that, measurement uncertainty apart, the basic behavior of the system is regular, and we really want the function corresponding to the dot-dashed line in Figure {ref}`FigA3_4`.
We have to consider, therefore, \textbf{smoothing} the observations, by which we mean choosing a function or curve that follows the observations in general terms but ignores deviations smaller than a selected limit.
Many of the standard texts on measurement theory supply detailed descriptions of smoothing procedures.
See, for example, the text by Whittaker and Robinson listed in the Bibliography.

It is not always clear how far we have to go in smoothing observations; we trade off simplicity of representation against possible loss of genuine detail in the behavior of the system. This takes good judgment on the part of the experimenter, and our decisions are not always greeted with universal approval.
In any case, if we do want to make a choice of a certain order of polynomial to represent the observations, we can choose the corresponding difference column in the table to be constant and, on the basis of some averaged value of these differences, construct the polynomial we want.

If such a procedure is not to our liking and we are restricted to unavoidably noisy observations, our only alternative may be to use a least-squares procedure and thereby minimize the discrepancy between the observations and a function of a chosen type.
Notice, however, the important distinction between the use of the difference table and the least-squares procedure.
The difference table will tell us the coefficients of a polynomial that is implied by the observations; the least-squares procedure will simply give us the optimized parameters of a function whose general form we must choose for ourselves.
