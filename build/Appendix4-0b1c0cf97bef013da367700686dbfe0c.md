# Specimen Experiment\label{A4}
## Experiment Design\label{secA4_1}
\subsection*{System}
We are given a spring suspended from a stand, a pan to hold weights attached to the lower end of the spring, a set of weights, and a stopwatch with a scale divided into fifths of a second.

\subsection*{Model}
We are told that, on the assumption that the extension of a spring is proportional to the load on it, the period of oscillation, `T`, of a suspended load, `m`, given by
```math
T= 2\pi\sqrt{\frac{m}{k}}
```
where `k` is a constant for a particular spring.

\subsection*{Requirement}
We are asked to measure `k` for the spring with an uncertainty not greater than 10\

\subsection*{Experiment Design}
Following the steps listed in Section {ref}`sec5_3`, we have the following:
1. The operating system consists of the spring alone.
We have been given no information about the pan for the weights or any way of weighing it, so we must proceed without that knowledge.
2. The model contains only two variables, load `m` and period of oscillation `T`, so it is simple to decide that our input variable, the one we can control, will be `m` and the output variable will be `T`.
3. To put the equation into straight-line form, our first idea might be to remove the square root.
Squaring both sides of the equation gives us
    ```math
T^2=4\pi^2\frac{m}{k}
```
    Comparison with the straight-line equation
    ```math
\mathrm{vertical variable = slope  \times  horizontal variable}
```
    suggests that we could choose
    \begin{align*}
        {\mathrm vertical  variable } &= T^2


        {\mathrm horizontal  variable } &= m


        {\mathrm slope } &= \frac{4\pi^2}{k}


    \end{align*}
    This is an acceptable choice, but the unknown, k, appears in the denominator of the slope.
To simplify later arithmetic, it is equally valid and more convenient to write the equation
    ```math
m = \frac{k}{4\pi^2}T^2
```
    where
    \begin{align*}
        {\mathrm vertical  variable } &= m


        {\mathrm horizontal  variable } &= T^2


        {\mathrm slope } &= \frac{k}{4\pi^2}


    \end{align*}
4. The range of the input variable, `m`, may be governed by the weights we have been given.
In addition, we should consider the possibility of overloading the spring.
Has anyone suggested, or is it written anywhere, that loads should be restricted?
We might try a few weights on the pan to see how the spring behaves.
One way or another, we can choose a range of `m` that we feel comfortable with.
The range of `T` values presents no problem because it is determined by the system.
5. Let us suppose that our weights are sufficiently precise so that their uncertainty need not be considered.
They are not totally precise, of course, and if we want to know what uncertainty they do have, we look in the supplier's catalogue.

The only uncertainty, therefore, arises from the timing measurements, and that uncertainty depends on the precision with which we are capable of timing the oscillations.
The only way to find that out is to try it.
We choose a typical load, start the oscillations, and measure the time interval for, say 10 oscillations.
We must now decide what determines the uncertainty of the measurement.
Is it the accuracy of reading the stopwatch, or is it our ability to watch the oscillations and start or stop the watch appropriately?
Obviously, we must test this by trying the measurement again, and we must continue to probe the measuring system in this way until we are sure we know our capabilities.
We may decide, as in the present case, that we are sure that we can measure time intervals with an uncertainty of `\pm 0.3` s.

This, however, does not complete our consideration of precision; we must evaluate the effect on our `k` values of this uncertainty in `T`.
It is difficult to plan ahead exactly, because we shall obtain our final value of `k` from the graph, but it is only prudent to check that our individual measurements have adequate precision to contribute significantly to the final result.

For example, suppose we time a certain number of oscillations that give a time interval, `t`, of 2 seconds.
What would be the contribution of our `\pm 0.3` s to the uncertainty in `k`? `k` is a function of `t^2`.
Therefore
```math
\mathrm{RU}(k) = 2 \times \frac{0.3}{2} = 30\
Clearly, such a measurement makes little significant contribution to the determination of `k` with 10\
If we want 10\
We can determine these limits as follows:

If
\[\mathrm{RU}(t) \mathrm{ must  not  be  greater  than } 5\
that is,
\[\frac{0.3}{t}<0.05
```
then
```math
t>\frac{0.3}{0.05} = 6\mathrm{ s}
```
Thus, whatever the actual value of `T`, if we time a number of oscillations that gives a total time interval of 6 seconds or more, the uncertainty in our timing measurements is likely to be acceptable.
For convenience we might choose a constant number of oscillations for the various loads, but if we were short of time in a long experiment, we could choose for each load the number of oscillations that gives us a satisfactory value of `t`.
6. Let us decide, as a first guess, that we shall measure the time for 10 oscillations, knowing that even for the lowest load this gives us a measured time interval in excess of 6 s, and that we shall time oscillations for loads of 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 004,0.45, and 0.5 kg.
Since we want to plot `m` versus `T^22` and incorporate the value of the absolute uncertainty in `T^2`, that is, `2T \times AU(T)`, we should layout the table that expresses our measurement program to have the following headings:
\begin{tabular}{ c c c c c c }
& Number of & & & Period`^2` & 


Load, `m (kg)` & Oscillations & Time, `t (s)` & Period, `T (s)` &  `T^2 (s^2)` & AU(`T^2`), `s^2`
\end{tabular}

\subsection*{Experimental Results}
The next step is to make the actual measurements and fill in the table with the measured values of `t` and the values calculated for Period and for Period`^2` with its absolute uncertainty.
The result of this process will then appear as in Table {ref}`tableA4_1`.

These values of `m` and `T^2` must now be graphed.
Each plotted value
must contain its range of uncertainty. `m` has no uncertainty and `T^2` is uncertain by the amount listed in the final column, so that each point on the graph will be a little horizontal line.
Once the values are plotted, the graph Will look as shown in Figure {ref}`FigA4_1`.
\begin{center}
```{list-table}
:Variation of Oscillation Period with Load.
:tableA4_1
:header-rows: 1

* - \hline
\textbf{Load, `m (kg)`}
  - \textbf{# of Osc.}
  - \textbf{Time, `t (s)`}
  - \textbf{Period, `T (s)`}
  - \textbf{Period`^2`, `T^2 (s^2)`}
  - \textbf{AU(`T^2`), `s^2`} 

 \hline
0.10
  - 10
  - 8.2 `\pm` 0.3
  - 0.82`\pm` 0.03
  - 0.67
  - 0.05 


0.15
  - 10
  - 9.8
  - 0.98
  - 0.96
  - 0.06


0.20
  - 10
  - 10.7
  - 1.07
  - 1.14
  - 0.06


0.25
  - 10
  - 11.5
  - 1.15
  - 1.32
  - 0.07


0.30
  - 10
  - 12.5
  - 1.25
  - 1.56
  - 0.08


0.35
  - 10
  - 13.0
  - 1.30
  - 1.69
  - 0.08


0.40
  - 10
  - 13.8
  - 1.38
  - 1.90
  - 0.08


0.45
  - 10
  - 14.5
  - 1.4S
  - 2.10
  - 0.09


0.50
  - 10
  - 15.2
  - 1.52
  - 2.31
  - 0.09

  \hline
```
\end{center}
```{figure} figures/A4/FigA4_1.jpg
:First stage of graphing `m` vs. `T^2`.
:FigA4_1
```

The next step is to interpret what we see in terms of the categories described in Section {ref}`sec6_4`.
We first observe the scatter of the points and consider if it is consistent with our prior estimate of the uncertainty.
In the present case there seems to be reasonable consistency between the scatter and the estimated uncertainty, and no further consideration of this point seem to be required at this stage.
The next point to consider is the extent to which the behavior of the system is consistent with the model.
The model predicted a straight line passing through the origin, and we must judge our graph against that.
We can see immediately that in our case the correspondence with straight-line behavior seems quite adequate over the whole range.
We are justified, therefore, in including all the points when we decide on our choice of lines.

With regard to intercept, however, the situation is different.
A glance at the graph makes it clear that we are going to have an intercept on the `T^2` axis that cannot be ascribed to measurement uncertainty.
We return to consider this discrepancy later, but in the meantime we can note that the final value of `k` will be obtained from the slope alone, and that the slope can be calculated even in the presence of an unexpected intercept.

```{figure} figures/A4/FigA4_2.jpg
:Final form of graph of `m` vs. `T^2`.
:FigA4_2
```
The next step is to draw lines so that we obtain values for the slopes.
One choice is to draw Our ``best'' line by eye and also lines that represent the maximum and minimum slopes permitted by the range of uncertainty in the scatter.
At this stage, the graph will look as shown in Figure {ref}`FigA4_2`.

```{figure} figures/A4/FigA4_3b.jpg
:The identification of intersections at the top and at the bottom of the graph to permit calculation of the slopes.
:FigA4_3
```
We now have to read values off the graph that will enable us to calculate these slopes.
For each line we look for convenient intersections with the graph paper, illustrated in Figure {ref}`FigA4_3`, that give us the coordinates of points at the top and bottom of the line.

On the present graph, the chosen intersections are indicated by arrows, and the appropriate coordinates are marked.
Given these coordinates, it is easy to calculate the slopes.

Steepest line:
\begin{align*}
    {\mathrm slope } &= \frac{0.55-0.03}{2.44-0.44}


    &= 0.260\mathrm{ kg/s^2}
\end{align*}

Central line:
\begin{align*}
    {\mathrm slope } &= \frac{0.60-0.05}{2.72-0.48}


    &= 0.2455\mathrm{ kg/s^2}
\end{align*}

Least steep line:
\begin{align*}
    {\mathrm slope } &= \frac{0.57-0.09}{2.68-0.60}


    &= 0.231\mathrm{ kg/s^2}
\end{align*}

The corresponding values of `k` can now be calculated by using
```math
\mathrm{slope } = \frac{k}{4\pi^2}
```
which gives

Highest value:
```math
k = 10.26 \mathrm{ kg/s^2}
```

Central value:
```math
k = 9.69 \mathrm{ kg/s^2}
```

Lowest value:
```math
k = 9.12 \mathrm{ kg/s^2}
```

Now that we have a measure of the overall uncertainty of the `k` values, we can round off the values to obtain our final statement about `k` and its uncertainty:
```math
k = 9.7 \pm 0.57 \mathrm{ kg/s^2}
```

The final figure for the uncertainty at 6\
If any further reconsideration is forced on us, we could go back to the beginning and reassess our basic measurement uncertainty in timing.
Certainly, the low scatter of the points in comparison with the estimated uncertainty in the upper part of the graph suggests that we were slightly pessimistic about our estimate of `\pm O.3` s in timing, and reappraisal might allow us to refine that estimate.

Given the completion of our calculations for `k`, we now have to return to the question of the unexpected intercept.
For example, the central line gives
```math
b = 0.6 - 0.2455\times 2.72 = -0.068 \mathrm{ kg}
```
or when `m=0`
```math
T = \sqrt{\frac{0.068}{0.2455}} = 0.526 \mathrm{ s}
```
We satisfied ourselves that it was harmless because our `k` value was obtained from the slope, and that could be determined accurately even in the presence of the intercept.
Nevertheless, we should not ignore it altogether, because it constitutes failure of correspondence between the model and the system, and it is not good practice if), experimenting to leave things like that unconsidered.
In guessing at possible sources of the discrepancy, we note that it seems to be associated with some load not counted in the `m` values, for when our added load, `m`, is zero, the graph tells us that we would still observe a finite frequency of oscillation.
What could give rise to such uncounted mass?
One obvious guess would be the pan on which the weights were placed.
Another obvious guess would be the mass of the spring itself.
Without further investigation, we cannot be certain that either of these guesses is good, but our explanation for the unexpected intercept seems reasonable enough so that we are probably justified in terminating our present experiment at this point and leaving confirmation of our guesses to further experimenting.

\renewcommand\thefigure{\arabic{figure}}
\setcounter{figure}{0}
\renewcommand\thetable{\arabic{table}}
\setcounter{table}{0}
\renewcommand\theequation{\arabic{equation}}
\setcounter{equation}{0}
## Report\label{secA4_2}
In this section we give a version of a final report that could be written on the basis of the experiment that we have just described.
The report is written according to the suggestions offered in Chapter {ref}`ch7`.
Only the final version of the report is given; the details of its construction and their correspondence with the suggestions in Chapter {ref}`ch7` can be elucidated by comparing the report with the various sections of Chapter {ref}`ch7`.
\vspace{0.25in}
\begin{center}
{\textbf MEASUREMENT OF A SPRING CONSTANT BY AN OSCILLATION METHOD}


\end{center}

\subsubsection*{Introduction}
The stiffness of a spring can be measured by timing the oscillation of a suspended load.
For an elastic spring (extension `\propto` load) it can be proved that the period of oscillation, `T`, of a suspended mass, `m`, is given by
```{math}

    T=2\pi\sqrt{\frac{m}{k}}
    \label{eq1_report}

```
where `k` is a constant for a particular spring.
The objective of the present experiment is to measure the value of `k` for a spring with an uncertainty not greater than 10\
Equation {ref}`eq1_report` can be rewritten to read
```math
m = \frac{k}{4\pi^2}T^2
```
which is linear in `m` and `T^2` with slope `k/4\pi^2`.
Thus, by measuring the variation of oscillation period with load we shall be able to plot a graph of `m` versus `T^2` and obtain the value of `k` from the slope.



\subsubsection*{Procedure}
Using the apparatus shown in Figure {ref}`FigA4_1R`.
we measured the variation of oscillation period with load.
```{figure} figures/A4/FigA4_1R.jpg
:Diagram of spring with constant `k`, support, and load `m`.
:FigA4_1R
```

The loads consisted of a Cenco weight set ranging from 0.1 kg to 0.5 kg with a stated precision of 0.04\

The period of oscillation was measured by timing a number of oscillations using a stopwatch graduated in fifths of a second.



\subsubsection*{Results}
The measurements of load and oscillation period are shown in Table {ref}`tableA4_2`.
\begin{center}
```{list-table}
:Variation of Oscillation Period with Load.
:tableA4_2
:header-rows: 1

* - \hline
\textbf{Load, `m (kg)`}
  - \textbf{Num.
of Osc.}
  - \textbf{Time, `t (s)`}
  - \textbf{Period, `T (s)`}
  - \textbf{Period`^2`, `T^2 (s^2)`} 

 \hline
0.10
  - 10
  - 8.2 `\pm` 0.3
  - 0.82
  - 0.67 `\pm` 0.05 


0.15
  - 10
  - 9.8
  - 0.98
  - 0.96 `\pm` 0.06


0.20
  - 10
  - 10.7
  - 1.07
  - 1.14 `\pm` 0.06


0.25
  - 10
  - 11.5
  - 1.15
  - 1.32 `\pm` 0.07


0.30
  - 10
  - 12.5
  - 1.25
  - 1.56 `\pm` 0.08


0.35
  - 10
  - 13.0
  - 1.30
  - 1.69 `\pm` 0.08


0.40
  - 10
  - 13.8
  - 1.38
  - 1.90 `\pm` 0.08


0.45
  - 10
  - 14.5
  - 1.4S
  - 2.10 `\pm` 0.09


0.50
  - 10
  - 15.2
  - 1.52
  - 2.31 `\pm` 0.09

  \hline
```
\end{center}

The uncertainty shown for the measured times was estimated by visual judgment to be the outer limits for possible values of time, and so the calculated values for the uncertainty of `T^2` also represent outer limits of possibility.
The graph of the `m` and `T^2` values is shown in Figure {ref}`FigA4_2R`.
```{figure} figures/A4/FigA4_2R.png
:Graph of `m` vs. `T^2`.
:FigA4_2R
```

The value of `k` and its uncertainty was calculated from the slopes of the three lines shown, giving `k=9.7\pm 1.0 
\mathrm{kg/s^2}`

\subsubsection*{Discussion}
Using an oscillation method, we have measured the value of the stiffness constant for a spring to be `k=9.7\pm 1.0 
\mathrm{kg/s^2}`.
The model represented by equation (1) predicted for the `m` versus `T^2` graph a straight line passing through the origin.
In our experiment, the variation of `m` with `T^2` proved to be consistent with a straight line within the present limits of uncertainty.
Instead of passing through the origin, however, the lines shown in Figure 2 can be seen to have a finite intercept on the `T^2` axis that cannot be ascribed to measurement uncertainty.
Our value of `k`, however, was obtained from the slope alone and should be free from error arising from factors that would give rise to an intercept.

Because the intercept gives a finite value for `T` at `m = 0`, it seems to be associated with the presence of some load not included in the measured values of `m`.
Although we have not tested these possibilities, we can suggest that such extra load could arise from the pan supporting the weights and also from the mass of the spring itself.
