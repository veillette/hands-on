# Experiment Evaluation\label{ch6}
## General Approach\label{sec6_1}
Even when we have finished making the measurements in an experiment, an equally significant part of the process still
remains -- we must evaluate the significance in what has been done.
Our objective in doing an experiment is to be
able to make some statement, usually about the relationship between some system and a model.
It is important to
identify clearly the statement we wish to make and to ensure that the statement is as accurate and complete as
possible and fully justified by our measurements.
The precise way in which we evaluate the experiment as a whole
depends on the type of experimenting we have been doing.
As described in Chapters {ref}`ch4` and {ref}`ch5`, we may
have been operating with or without a theoretical model, and our measurements may or may not have been dominated by
statistical variance.
The procedures we must now follow will vary accordingly.

Before we proceed, we must note two general points.
First, we should always remember that experimental results are
precious.
They have often been obtained from an extensive experimental program involving many people and large
amounts of money.
At any level of cost, the results may be unique and irretrievable.
We should accept the obligation
to extract every available bit of information from the observations and to ensure that our final statement is as
complete as possible.
The second general remark concerns objectivity.
It is almost impossible to avoid approaching an
experiment without some preconception of what ``ought'' to happen.
We must discipline ourselves to be as objective as
we can, and if the outcome of the experiment is different from what we expected or hoped for or is disappointing in
some way, we must be prepared to state the result honestly and realistically and to obtain from it the guidance
required for future work.

In the teaching laboratory, where it is sometimes difficult to keep our ultimate objectives clearly in mind and easy
to forget that the experiments serve to simulate real tasks in the working world, we commonly encounter the mistaken
belief that the objective is to reproduce the known values of experimental quantities.
If we measure the acceleration
of gravity and obtain a value of 9.60 m s`^{-2}`, our answer is different from the ``right'' answer and so we are
``wrong.'' The ``error'' can then be conveniently blamed on the apparatus.
Because there are no ``right'' answers for
experimental quantities, the situation really involves the comparison of two measured values for a quantity.
Each
measured value has its own characteristics, and each has its own range of uncertainty.
To assess the significance of
a discrepancy between two independently measured values of a quantity is actually a complex and difficult task.
It is
far better first to develop the ability to make our own measurements as reliably as possible and to assess their
range of uncertainty as accurately as possible; we can worry later about comparing our measurements with those of
other people.

So when we make measurements on quantities for which we are sure we already know a more precise value, it is best to
discipline ourselves to avoid thinking about the more precise, or ``standard,'' value; it is better to acquire
experience and build up confidence in our \textit{own} work.
This confidence will be necessary later as we undertake
professional experimenting, in which we must take responsibility for the experiments and measure things that have
never been measured before.

So if we obtain 9.60 m s`^{-2}` for `g`, we must be equally aware that the measured uncertainty is `\pm`O.3 m s`^{-2}` and that the result is not as bad as we might think at first.
If we are going to grumble about anything, let it be the `\pm`O.3 m s`^{-2}`, but we must not feel guilty about it if the experimental apparatus, with normal effort, is not capable of precision better than 3\
We must not be misled by the way in which accepted values for physical quantities are quoted in textbooks.
The values are often mentioned rather casually, and the texts rarely make it clear that these numbers represent the outcome of sophisticated work by generations of expert scientists.
It is instructive to read the detailed history of such measurements.
Excellent accounts of some of them are in the book by Shamos listed in the Bibliography.
We should not be too casual about numbers such as these and should not hope to reproduce
them exactly in two hours of work in an elementary laboratory.

The main point is to state the result of the experiment honestly and objectively.
The experimenter should strive
earnestly to maximize the yield of the experiment by making the final answer as reliable as possible and the limits
of uncertainty as close as the experiment will permit, but in all cases it is important to be realistic.


## The Stages of Experiment Evaluation\label{sec6_2}
The process of evaluating the result of an experiment has several parts.
First, we must obtain the values of the
basic measurements and their uncertainties.
Second, we must assess the degree of correspondence between the
properties of the system and of the model.
Third, we must calculate the values of whatever property of the system we
set out to measure.
Last, we must make an estimate of the overall precision of the experiment.
Let us consider each of
these steps in turn.

\subsection*{Computation of Elementary Quantities}
The first step in working out the result of an experiment consists of calculating the elementary quantities of which
the experiment is composed.
For example, an experiment on a simple pendulum that has the purpose of obtaining a value
for `g` will probably yield, as its input variable, a set of measurements of length `\ell` .
The output variable will
be presented by a set of measurements of the times required for a certain number of oscillations, and from them
values of the period `T` can be calculated.
Our present purpose is to compute the values of `\ell` and `T` and their
uncertainties; these will be the basis of the subsequent graphical analysis.
The choice of procedure here depends on
whether we have elected to make a subjective assessment of the uncertainty range of each measurement or have decided
that random fluctuation is sufficiently prominent that statistical treatment is desirable.

\subsection*{Estimated Uncertainty}
In the case of the simple pendulum, the first variable to consider is `\ell`.
Here we may have found that measuring
the length of the pendulum with a meter stick has enabled us to identify intervals, as described in Section {ref}`sec2_3`, within which we are almost certain our values lie.
Our experimental results will therefore take the form
of a set of values for `\ell` in the form: value `\pm` uncertainty.
It is conceivable, too, if we have been counting
swings and measuring the times with a stopwatch, that we are similarly able to identify intervals on the time scale
within which we are almost certain that our values for time lie.
These, too, would be expressed as time value `\pm`
uncertainty.
This, however, is not our variable `T`.
We might have counted 15 oscillations of the pendulum, obtaining
a time value of `18.4 \pm 0.2` s, and the value for the period, the time required for \textit{one} oscillation, must
be obtained by division as `1.227 \pm 0.013` sec.
Notice that not only the central value must be calculated in this
way but also the value of the uncertainty.
In simple algebraic terms

```math
\left(\frac{1}{15}\right)\left(18.4 \pm 0.2\right)=\frac{18.4}{15}\pm\frac{0.2}{15} = 1.227 \pm 0.013
```

Do not ignore this kind of significant modification of the uncertainty value; it is necessary whenever any arithmetic
process is carried out on the basic measurements.

The end result of this experiment will be a set of `\ell` and `T` values, complete with uncertainties, and we shall
then be ready to start drawing our graph.

\subsection*{Statistical Uncertainty}
If repetition of our measuring process has shown random fluctuation in one or more of the variables, we may have
decided, as described in Section {ref}`sec5_3`, to take a sample of readings, the number of readings being chosen on
the basis of the apparent magnitude of the scatter to give the precision we require.
Because we must reduce the
resulting set of readings to a form suitable for plotting, we must express the sample in the form: central value `\pm` uncertainty.
As described in Section {ref}`sec3_10`, the most suitable form to choose is usually the sample mean and the standard deviation of the mean because of the readily identifiable significance of these quantities.
Provided we make it clear in our report that we are quoting sample means and standard deviations of means, everyone will understand that we are specifying intervals that have a 68\

While we are making these claims about the numerical significance of our measurements, we must remember the warnings
given in Section {ref}`sec3_5`.
The measurement samples encountered in the work of the physics laboratory are
frequently too small to permit any assessment of the actual frequency distribution of the universe from which the
measurements were taken.
We are therefore making an assumption when we ascribe the numerical properties of the
Gaussian distribution to our sample.
It is usually a good enough assumption, but we should remember that it is an
only assumption.

At this point, remember also the warnings about `\sigma` estimates from small samples that were given in Section {ref}`sec3_11` and check that the computations are significant.
In general, it is not worth using a statistical approach with fewer than 10 observations; for some particular purposes, many more may be required.

It is useful to think in advance about the interpretation of the uncertainty regions on the graph.
If both variables
in the experiment have similar statistical character, the mean and standard deviation of the mean for each point will
enable us to draw, for each point on the graph, a little rectangle whose interpretation will be clear.
We may have a
little more of a problem if the experiment has yielded variables of two different kinds.
It is quite conceivable in,
say, the experiment on free fall under gravity, which was used as an example in Section {ref}`sec4_2`, that one
variable, the distance of fall, will have an estimated uncertainty and the other will require a statistical treatment
yielding standard deviations of the mean.
If we were to plot values derived from these two different types of
treatment, the uncertainty ranges along the two axes would be different.
The uncertainty interval in one dimension
would give almost 100\
would be only 68\
It would be difficult to know how to interpret the graph, and it would be better to bring the two
variables into better correspondence.
Remembering that a range of twice the standard deviation of the mean gives us a
95\
variable, thus giving a range of uncertainty for each point on the graph with roughly the same significance in both
dimensions.

At this stage, by one process or another, the measurement of every quantity in the experiment will nave been reduced
to a central value and its uncertainty, but we are not yet quite ready to start drawing the actual graph.
If the
graph is to be drawn with one variable on one axis and the other variable on the second axis (like load vs.
extension
for a spring or current vs.
potential difference for a resistor), then we can proceed directly.
If, however, the
process of rectifying the equation for the model has led to a choice of more complicated variables for plotting (such
as `T^2` vs. `\ell` for the simple pendulum, or `h^2` vs. `T^2h` for the compound pendulum, etc.), we must construct
these variables by some process of arithmetic computation.
We obviously have no problem in performing such simple
arithmetic calculations, but we must not forget that the uncertainty values also must be recalculated.
If we are
going to plot values of `T^2` on the graph, the uncertainty bars or rectangles must give the actual interval over
which `T^2` itself is uncertain.
All such computed quantities must be provided with their own uncertainty intervals,
and only then are we ready to start drawing the graph.


## Graphs\label{sec6_3}
Whether the graph is to be merely an illustration of the behavior of a physical system or whether it is to be the key
to assessing the experiment and calculating the answer, the aim is to set out the results in such a way that their
characteristics are displayed as clearly as possible.
This will involve appropriate choices of scale, proportions,
and so on.
First, ensure that the graph paper is large enough.
It is a waste of time to plot observations having a
precision of 0.1\
As
we shall see later, valuable information will be lost unless the uncertainties on the points are, clearly visible,
and so it is necessary to make sure that the graph paper is big enough.
Second, make the graph fill the available
area.
This can be done by choosing the scales so that the general course of the graph runs diagonally across the
paper and by suppressing the zero if necessary.
When plotting the resistance of a copper wire as a function of
temperature and the values run from 57 to 62 ohms, start the resistance scale at 55 ohms and run it to 65.
If the
scale is started at zero, the graph will look like a flat roof over a sheet of empty graph paper and convey little
information.

There are times when it may be important to preserve the origin as part of the graph.
It may be desirable or even
necessary to examine the behavior of the graph at the zero of one or both axes.
At other times, for purposes of
illustration, it may be useful to show clearly the scale of some, variation in relation to its zero value.
However,
for the purposes of the graphical analysis with which we are here concerned, it is generally best to make the graph
fill the graph paper.

The method of marking each measurement on the graph paper depends to some extent on preference.
One essential feature
is to make sure that the range of uncertainty is clearly indicated.
Only if this is done can the process of comparing
the behavior of the system and the model have any meaning and the uncertainty of any future calculations of slopes be
assessed.
To each point on the graph we can attach a cross with horizontal and vertical bars to indicate the range of
uncertainty, or we can make each point a little rectangle surrounding the measured value and indicating by its
horizontal and vertical dimensions the range of uncertainty in each coordinate.
So long as the ranges of uncertainty
are clearly indicated, it may not matter which method we choose; the important thing is to acquire the habit of
marking uncertainties on every graph.
It is also important to note on the graph itself, or in its caption, the nature
of the uncertainties, whether estimated outer limits of uncertainty, statistical uncertainties of `1S` or `2S`, or
other such information.
It can be very frustrating when trying to judge the significance of a graph if we have to
search through the text to find out what the uncertainty marks mean.
If several graphs are to be plotted on one piece
of paper, make sure they are clearly distinguished by the use of some different symbol or by color or by some other
means.


## Comparison Between Existing Models and Systems\label{sec6_4}\index{comparison between models and systems `ff`}
Once all our observations have been plotted on the graph paper, we are ready we to proceed with the next stage -- the
comparison between the properties of the system now displayed before us and the properties of any models we have
available.
The procedure depends on circumstances, and we describe the various situations in turn.
In all the
following we assume that, on account of the difficulty in representing nonlinear properties of models on hand-drawn
graphs, we have chosen or rearranged our variables so that the graphs take on
linear form.

Let us suppose, first, that we have a model that is fully specified and that has no undetermined quantities.
The
purpose of the investigation would then be only to see how well the properties of the model match the properties of
the system.
To do this we would simply draw on the graph, using the same scale, the graph of the function that
represents the properties of the model.
A typical case was illustrated in Figure {ref}`Fig4_10`, in which observations
of the time of fall of an object as a function of distance are compared with the behavior of the analytical expression
```math
t=0.4515 x^{1/2}
```
\noindent which represents the theoretical model of the situation.

But how are we to judge the degree of correspondence?
This is where the presence of the uncertainty intervals becomes
of dominating importance.
If we simply plot points without uncertainty bars, the inevitable scatter in the points
would mean that the probability of the line that represents the model's properties actually passing through even one
(not to say more than one) of the points would be vanishingly small So how can we say anything sensible about the
outcome of the comparison?
If, however, the points on the graph represent \textit{intervals} of possibility for the
location of the plotted values, it becomes possible to make logically satisfactory statements.
If, as was the case in
Figure {ref}`Fig4_10`, the line representing the model passed through the region of uncertainty of each point, we
could say just that.
Notice again that this does not mean that we have ``proved'' that the equation is ``true,'' or
``correct,'' or whatever.
All we can say is that the model and the system are ``consistent,'' or ``in agreement,'' or
``compatible,'' or some such phrase.
As we have said before, we must make sure that we use the right language, for
otherwise we may misrepresent the situation and have a good chance of misleading people.
Notice also that we must be
careful to say that we have found ``correspondence,'' ``consistency,'' ``agreement,'' or whatever between the model
and the system only at the level of precision of our experiment.
Nothing in our process entitles us to ignore the
fact that, at a higher level of precision of measurement, discrepancies might appear that were undetectable at the
level of precision in our experiment.

Now that we have considered the case in which a model and a system turned out to have properties that are
indistinguishable at the level of precision involved, we must consider the other possibilities in which the
properties of the model and the system do not overlap completely.

```{figure} figures/ch6/Fig6_1.png
:The comparison between systems and models.
:Fig6_1
```

\subsection*{No Detectable Discrepancy}
This is the case we have already considered in detail.
It is illustrated in Figure {ref}`Fig6_1`(a).

\subsection*{Correspondence over Part of the Range}
Sometimes a model provides a satisfactory description of a system, provided the value of some variable does not
exceed or fall below some limit.
In this case the graphical comparison would appear as in Figure {ref}`Fig6_1`(b) or {ref}`Fig6_1`(c).
An example of case (b) would be the flow of a fluid through a pipe, in which the proportionality between flow rate and pressure head is satisfactory only below the onset of turbulence.
Figure {ref}`Fig6_1`(c) could be a representation of the variation with temperature of the resistivity of a metal, for which the linear model breaks down at low temperatures.

In any case that comes within this category, we would state the result of the comparison using some phrasing such as
: We observed agreement (compatibility, consistency, etc.) between the model and the observations only over the range
so-and-so.
Or: The properties of the model and the system are observed to diverge significantly after the value such
and such.
Notice again that we must resist the temptation to think that something is ``wrong'' because we do not
encounter complete correspondence between models and systems over the whole range.
Both models and systems exist in
their own right, and we cannot prejudge the extent to which their properties overlap.
In fact, the detection of the
limits on the validity of a particular model can furnish important clues for its improvement.

\subsection*{Intercepts}
A frequently encountered circumstance involves intercepts.
The graph of the model's behavior may pass through the
origin, but the observed behavior of the system may not, as illustrated in Figures {ref}`Fig6_1`(d) and {ref}`Fig6_1`(e).
Such a discrepancy can arise from many different types of mismatch between the model and the system, and information about such intercepts can be helpful in analyzing experimental situations.
It is usually advisable, when drawing graphs, to check the behavior of the model and system at the origin; reference was made to this point in Section {ref}`sec6_3` on graph drawing.
As we saw in Section {ref}`sec4_5`, the graphical analysis of an experiment is invaluable for enabling us to obtain answers that are free from the systematic errors associated with unexpected intercepts.
Even with this protection, however, it is usually best to know whether an unexpected intercept exists so that we can check the overall degree of correspondence between the model and the system.

\subsection*{Unexpected Scatter of Points}
As was described in the chapter on experiment planning, we should have carefully judged the uncertainty of our
measurements before starting the experiment, and in the light of our target value for final precision, we should have
made appropriate choices for our measurement methods.
If we have done this satisfactorily, we shall find, on plotting
the graph, that there is consistency between the scatter of the points and the uncertainties of the measurements, as
illustrated in Figure {ref}`Fig6_1`(a).
However, things do not always work out as we wish, and we not uncommonly find
ourselves in the situation illustrated in Figure {ref}`Fig6_1`(f).
It results, simply, from the presence of factors in
our measurement methods that we failed to identify as we made the initial assessment of the uncertainty of the
measurements.

We should not be content to leave the situation like this.
It is worth checking the apparatus in an attempt to
discover the cause of the fluctuation.
It can be something as simple as a loose electrical connection or failure to
stir a heating bath, and it is always satisfying to see such a discrepancy disappear.
If for any reason it is not
possible to keep the experiment going and take steps to reduce the scatter, it may be necessary to work with the
results as they are and make the best statement we can about the degree of correspondence between the model and the
system.
We might be able to say something like: The observations are distributed uniformly about the line
representing the model.
For cases in which we have to obtain numerical information from lines drawn using such
experimental measurements, see Section {ref}`sec6_7`.

\subsection*{No Correspondence Between System and Model}
We rarely encounter circumstances in which the behavior of the system bears no resemblance at all to the behavior of
the model [Figure {ref}`Fig6_1`(g)]. If everything in the experiment is working as it should, this is a most unlikely
outcome.
Models may be in principle inadequate representations of the behavior of the physical world, but they would
not be models if they were as bad as we are suggesting.
Such complete failure of correspondence points clearly to an
actual error in the experiment.
It can be an error of interpretation of the variables, a mistake in the rectification
of the equation, an error in setting up the apparatus, or a mistake in making the observations, in calculating the
results, or in plotting the graph.
If possible, go back to the beginning, check everything, and start again.
If it is
not possible to check the instruments used in the experiment, check for errors in all the analytical and arithmetic
processes.
If every attempt to discover an error fails, state the outcome of the ,experiment honestly and objectively
.
There is always the chance that we have discovered something new.
In any case, if we are truly baffled by some
failure of correspondence between a well-checked piece of apparatus and a reliable model, an honest statement of the
situation is bound to be of interest to other people.

In all the foregoing we have stressed one important point: We must not think that an experiment is giving us a
``right'' or a ``wrong'' result.
We just carry out the experimental process as carefully as possible and then state
the outcome as honestly and objectively as we can.
It is not a bad thing to be reminded from time to time that models
may provide only partially satisfactory representation of the behavior of systems.
It is most important for us to
know the limits for the validity of models, and the manner in which models fail can furnish invaluable evidence to
those who seek to improve them.


## Calculation of Values from Straight-Line Analysis\label{sec6_5}
In all the preceding sections, we have dealt with models that were completely specified, including the numerical
values of all quantities.
The purpose of experiments was simply to compare the behavior of the system and of the
model.
As was considered in Section {ref}`sec4_5`, however, it is also possible, indeed very common, to use straight
-line analysis in determining for some quantity in the model the numerical value that is appropriate for our system.
In such cases the model is not fully specified, because it contains a quantity or quantities of initially unknown
value.
It is not possible, therefore, to draw a graph for the model to compare with the points, for the graph
initially contains nothing but the points alone, as shown in Figure {ref}`Fig6_2`(a).
```{figure} figures/ch6/Fig6_2.png
:Fitting a straight line to observations.
:Fig6_2
```

Suppose that we have measured the values of current through, and the potential difference across, a resistor and we
wish to test the observations against the model
```math
V =IR
```
In the absence of a specified value for `R`, the behavior of the model is represented by all the lines on the `I-V`
plane that have the equation
```math
V  =  \textrm{constant} \times  I
```
where the constant can take all values from zero to infinity.
In principle, we can simply draw all these lines on the
same graph as the measurements, and determine first the extent to which the behavior of the system and of the model
overlap.
Second, from the bundle of lines that fall within the regions of uncertainty of all the points, we can
determine the range, of `R` values that are appropriate for our system (as illustrated in Figure {ref}`Fig4_11`.
For
our present purpose, It is not quite as simple as that because, on the basis of the measured values shown in Figure {ref}`Fig6_2`(a), we have no right to prejudge the behavior of the system at the origin.
It is best to leave the question of intercepts to a later stage and simply decide on the range of straight lines that is consistent with the observations.

There are several ways of doing this.
The most satisfactory, a statistical method, is described later.
In the
meantime we content ourselves with simpler, mechanical procedures and carry out the time-honored practice of drawing
the best straight line through the points.
To do this by eye requires some mechanical aid that does not obscure half
the points.
An opaque ruler cannot be used, but a transparent straight edge is acceptable.
Probably the most
satisfactory aid is a length of dark thread, which can be stretched over the points and easily moved until the most
satisfactory position is found.
If difficulty is encountered in judging visually the trend of a set of points, it is
often helpful to hold the graph paper at eye level and sight along the points.
This makes the clustering of the
points around a straight line or a systematic deviation from a straight line much clearer than in the direct view.

We can profitably identify several straight lines.
The ``best'' straight line (whatever we mean by ``best'') is one
obvious candidate.
In addition we can make a guess at how far we' can twist that ``best'' line in either direction
until it can no longer be regarded as an acceptable fit to the points.
These two extreme positions supply us with a
value for the uncertainty in the slope.
If, on account of wide scatter in the points we find it difficult to identify
a ``best'' line and its uncertainty limits, it is sometimes helpful to remember that the points and their
uncertainties are really a sample from a whole band of values on the plane.
The occupation of this band by the
measurements may be spotty on account of the limited number of observations, and this can make it difficult to choose
the lines.
If this is the case, it is often helpful to imagine the band to be populated by the million or so readings
that we could have made with the apparatus.
We can then try to guess from the graph where the center and the edges of
that band might be, and that will enable us to make our choice of lines.
In Figure {ref}`Fig6_2`(b) we could have
chosen `AB` as our ``best'' line, and we could have decided that the lines `CD` and `EF` would contain almost all the
infinite universe of points.
The lines `CF` and `ED` (not drawn) would then represent, respectively, the steepest and
least steep slope of the set of lines that are consistent with the observational points.

Once we have chosen the lines, we can set about determining the numerical value of their slopes so that we can obtain
the answer we want, such as, in the case of the `V = IR` example, the value of `R`.
For our purpose, the question of
slope has nothing to do with the angle made by the lines on the graph paper; we are talking about intervals of the
measured variables `I` and `V`, and so the slopes must be calculated analytically.
For a line such as `AB` on Figure {ref}`Fig6_3` look carefully near the ends, and identify as exactly as possible places at the top and bottom of the line where it crosses an intersection of lines on the graph paper.
Identify the coordinates `(I_1, V_1)` and `(I_2, V_2)` of these intersections and evaluate the slope as
```math
\mathrm{slope} = \frac{V_2-V_1}{I_2-I_1}
```
We then immediately have
```math
R = \mathrm{slope}
```
which gives us the answer we want.
In more complicated expressions, the value for the slope may give the desired
answer only after computation with other measured quantities.
```{figure} figures/ch6/Fig6_3.png
:The ``best'' slope and outer limits.
:Fig6_3
```

We carry out this process three times.
The line `AB` gives us our chosen ``best'' value for `R`, and the other two
lines, `CF` and `ED`, will give us the upper and lower limits, outside which we are ``almost certain'' the value for `R` does not lie.
It usually happens that these extreme values for the uncertainty range are roughly equidistant from the central value, and is then finally possible to state the value for `R` as
```math
R = \mathrm{value  \pm  uncertainty}
```

It may sometimes appear that the ``best'' line and the two outer limiting lines are not equally spaced.
The reason is
usually that the graph contains too few points to allow good assessment of the positions of the lines.
Although
circumstances occasionally appear in which experimenters feel obliged to express a result as
```math
\mathrm{value}\begin{Bmatrix}
                 + \mathrm{uncertainty} 1


                 - \mathrm{uncertainty} 2
\end{Bmatrix}
```
visual judgment of a graph is rarely sufficiently precise to justify such a procedure.
If it is genuinely difficult
to identify a ``best'' line, it is acceptable to delineate the edges of the band of values (lines `ED` and `CF` in
Figure {ref}`Fig6_3`) and to calculate simply the maximum slope (of the line `CD`) and the minimum slope (of the line `EF`). We can then give the experimental answer as the interval between these two slopes, or else we can calculate a central value for the slope as the average between these two extreme values with an uncertainty
equal to `\pm` half that interval.

If in our experiment the desired answer is not equal to the slope directly, the expression for the slope may contain
a number of quantities, and the unknown may have to be calculated from the slope by a separate arithmetic process.
If
these other quantities are themselves uncertain, the uncertainty in the answer will have to be found by combining the
uncertainty of the slope with the other uncertainties, using the techniques of Chapter {ref}`ch2`.

It is natural at this stage to think about the significance of the uncertainty associated with quantities obtained
from graphs.
The significance depends on the type of uncertainty marked on the graph.
If the bars indicate outer
limits of possible variation (subjectively assessed or `2S_m` in the case of statistical fluctuation), then the
limits on the slope will similarly be of this
nature.
If the points have been marked with `1S_m` limits, the limiting slopes `CF` and `ED` will probably represent
limits implying better than 68\

We have assumed in the foregoing that the scatter encountered in the actual results is within the predicted range of
uncertainty.
If this is a valid assumption, the use of the limiting lines gives rise to a fairly well-defined value
for the uncertainty in slope.
If, however, the scatter is well outside the expected range of uncertainty (owing to an
unsuspected source of fluctuation), then there may be no unique setting for lines within which we are ``almost
certain'' the answer lies.
In such a case and in all precise work, there is no substitute for the method of least
squares, which is described in Section {ref}`sec6_7`.

In choosing our three lines, we have deliberately excluded the origin as a factor in making the choice, precisely
because the behavior of the system at the origin may be one of the things we wish to examine.
If the graph of the
model's behavior does pass through the origin, we should inspect the three lines in that region.
It is most unlikely
that our central line will pass exactly
through the origin, but if the area between the two limiting lines does include the origin, we can say that we have
consistency between the model and the system, at least at the present level of precision.
Only if both limiting lines
clearly intersect an axis on one side of the origin can we claim that we have unambiguously identified an unexpected
intercept.

If the behavior of the model does lead us to expect an intercept from which we hope to obtain the value of some
quantity, the intersection of the three lines on the axis in question will give us that intercept directly in the
desired form: value `\pm` uncertainty.


## Cases of Imperfect Correspondence Between System and Model\label{sec6_6}
When the correspondence between model and system is only partial, we must be careful to obtain answers without
introducing systematic error from the discrepancies.
Refer to Figures {ref}`Fig6_1`(b) and {ref}`Fig6_1`(c) and
consider first the cases in which the measured values correspond adequately with the straight line of the model over
only a limited range.
Obviously, our evaluation of slopes should be confined to those regions in which the system and
model are compatible.
The points that deviate systematically from the line clearly arise from physical circumstances
that are not included in the model, and it is obviously inappropriate to include them in any calculations that are
based on the model.
We disregard, therefore, all points that deviate systematically from straight-line behavior by an
amount clearly in excess of the estimated uncertainties and observed scatter of the points, and we restrict our
calculations of the slope and its uncertainty to the linear region.

A second point concerns intercepts.
Even if the model's behavior passes through the origin, it is not uncommon to
find that the graph shows an intercept.
Such a deviation can arise from a variety of causes; fortunately, many of
these prove to be harmless.
If the discrepancy causing the intercept affects all the readings in the same way (like
an undetected zero error in an instrument or a spurious and constant emf in an electrical circuit), then the graph
will give a slope that is free of the systematic error that would otherwise be introduced.
It is wise, therefore, to
arrange the experiment so that the answer will be obtainable from the slope of the graph, whereas quantities that may
be subject to undetermined systematic error should be relegated to the role of intercepts.
The capacity of graphical
analysis to provide answers that are free
from many types of systematic error is one of its chief advantages.


## The Principle of Least Squares\label{sec6_7}
All the procedures described in the preceding sections have one characteristic in common; they are all based on the
use of visual judgment by the experimenter.
Thus, although the procedures are commonly used and are useful, they are
vulnerable to the criticism that, even when they are carefully carried out, we cannot be sure of the numerical
significance of the results.
It would be comforting if we could use some mathematical procedure to identify the
``best'' line for a set of points, for then we would be released from the insecurity of personal judgment.
In
addition, we could hope to find out what we mean by ``best'' and to assess the precision of that choice.

The procedure in question is based on  he statistic l principle of \textbf{least squares}.
We discuss the procedure
mostly in the restricted application to straight-line fitting to measured values.
It is possible, in addition, to use
the least-squares principle to fit other functions to sets of observations, and this is briefly considered later.
For
the moment, however, we restrict our attention to straight lines only, so that the discussion gives a clear and
simple illustration of the principle.
Further detail on the principle in general is in Appendix {ref}`A2`.

Consider that we have a set of `N` values of a variable `y` measured as a function of a variable `x`.
We must
restrict ourselves to the special case in which all the uncertainty is confined to the `y` dimension; that is, we
shall assume that the `x` values are known exactly or at least so much more precisely than the `y` values that the
uncertainty in the `x` dimension can be neglected.
Fortunately, many common experimental situations involve one
variable which if not exactly zero in uncertainty, is at least so much more precise than the other that the
assumption we are making is good enough.
If this condition cannot be satisfied, the simple treatment following is not
valid.
The least-squares method can be extended to cover the case of uncertainty in both dimensions, but the
procedure is not simple.
Anyone who wishes to pursue the subject can find an excellent treatment in the text by
Wilson listed in the Bibliography.

The questions now to be answered by our mathematical procedure are: Which of all possible lines on the `x-y` plane do
we choose as the best line?
What do we mean by ``best''?
The principle of least squares makes this choice on the
basis of the deviations of the points in a vertical direction from a line.
Let `AB` in Figure {ref}`Fig6_4` be one
candidate for the status of ``best'' line.
Consider all the vertical intervals between the points and the line, of
which `P_1Q_1` and `P_2Q_2` are typical.
We define the best line to be the one that makes the sum of the squares of
deviations such as `P_1Q_1` and `P_2Q_2` a minimum.
```{figure} figures/ch6/Fig6_4.png
:Fitting a straight line to a set of points by the principle of least squares.
:Fig6_4
```

Notice that we have no right to consider an invented criterion like this as providing any automatic path to ``truth
'' or to ``correct'' answers.
It is simply one choice of a criterion for optimizing the path of the line through the
points.
It does, however, offer some advantages over other possibilities, such as minimizing the third power of the
intervals, or the first power, and so on.
Although we need not in general be concerned with the rationale for the
principle of least squares as we use it, the basis for its claim to validity is of interest.
It can be proved that
the procedure of minimizing the squares of the deviations gives rise on repeated sampling to smaller variance of the
resulting parameters, such as slope, than does the use of any other criterion.
We consequently have greater
confidence in results obtained by using the principle of least squares than is the case for any competitor.
As a
result, use of the principle of least squares is almost universal.

We now put the least-squares principle into mathematical form.
We
define the best line to be that which leads to the minimum value of the sum
```math
\sum\left(P_1Q_1\right)^2
```
and we desire the values of the parameters, slope `m` and intercept `b`, of that best line.

Let the equation of the best line be
```math
y=mx+b
```
The magnitude of the deviation `P_1Q_1` is the interval between a certain measured value `y` and the `y` value of the
point, on the line, at that value of `x`.
This `y` value, `Y_i`, can be calculated from the corresponding `x` value
by using
```math
Y_i=mx_i+b
```
so that, if we call each difference `\delta y_i`, we have
\begin{align}
    \nonumber\label{eq6_1}
    \delta y_i &= y_i-Y_i


    &= y_i-\left(mx_i+b\right)
\end{align}
The criterion of least squares then enables us to obtain the desired values of `m` and `b` from the condition
\[\sum\left[y_i-\left(mx_i+b\right)\right]^2= \textrm{minimum}\]
Write
\[\sum\left[y_i-\left(mx_i+b\right)\right]^2=M\]
Then, the condition for the minimum is
```{math}

    \label{eq6_2}
    \frac{\partial M}{\partial m}=0\hspace{0.5in}{\textrm and}\hspace{0.5in}\frac{\partial M}{\partial b}=0

```
A brief algebraic exercise (given in full in Appendix {ref}`A2`) then allows us to obtain the value of slope and
intercept for the best fit line as
```{math}

    \label{eq6_3}
    m=\frac{N\sum\left(x_iy_i\right)-\sum x_i\sum y_i}{N\sum x_i^2-\left(\sum x_i\right)^2}

```
and
```{math}

    \label{eq6_4}
    b=\frac{\sum x_i^2\sum y_i-\sum x_i\sum \left(x_iy_i\right)}{N\sum x_i^2-\left(\sum x_i\right)^2}

```

We have now succeeded in replacing the sometimes questionable use of personal judgment by a mathematical procedure
that leads to results of well-identified significance and universal acceptability.
In addition, because there is some
statistical meaning in the new method, we can expect a more precise form of uncertainty calculation.
The least
squares principle allows us immediately to obtain values for the standard deviations of the slope and the intercept,
giving us uncertainties of known statistical significance.

The standard deviations of the slope and intercept are calculated in terms of the standard deviation of the
distribution of 8y values about the best line, which we call `S_y`.
It is given by
```{math}

    \label{eq6_5}
    S_y=\sqrt{\frac{\sum\left(\delta y_i\right)^2}{N-2}}

```
(Do not worry about a standard deviation being calculated with `N - 2` in the denominator instead of the familiar `N` or `N - 1`; it is a consequence of applying the definition of the standard deviation to the positioning of a line on a plane.) The values for the standard deviation of the slope, `S_m`, and for the standard deviation of the intercept `S_b` can then be calculated to be
```{math}

    \label{eq6_6}
    S_m = S_y \times \sqrt{\frac{N}{N\sum x_i^2-\left(\sum x_i\right)^2}}

```
and
```{math}

    \label{eq6_7}
    S_b = S_y \times \sqrt{\frac{\sum x_i^2}{N\sum x_i^2-\left(\sum x_i\right)^2}}

```
The full derivation of these equations can be found in Appendix {ref}`A2`.

These values for the standard deviations can be used in association with the values of `m` and `b` to determine
intervals with the normal meaning, namely, that intervals of one standard deviation give a 68\
the universe value, two standard deviations 95\
One important advantage of the least-squares method is,
therefore, that it supplies statistically significant values for the uncertainties in our slope and intercept.
Not
only are they statistically significant; they are in addition derived objectively from the actual scatter in the
points themselves, irrespective of any optimistic claims for the uncertainties of the measured values.

Besides the complete mathematical description of the least-squares method in Appendix 2, there is also an extension
to the method that we have excluded from the present discussion.
If, in the experiment, the points used in the least
-squares calculation are not equally precise, we should use some procedure that accords greater importance to the
more precise measurements.
This procedure is called weighting.
The use of weighting is not limited to straight-line
fitting.
The procedures are applicable whenever we wish to combine observations in some way, even in such a simple
process as determining the mean of a set of values of unequal precision.
The equations for finding a weighted mean
and for doing a weighted least-squares calculation are given in Appendix {ref}`A2`.


## Least-Squares Fit to Nonlinear Functions\label{sec6_8}
The procedures used in Section {ref}`sec6_7` to determine the slope and intercept of the best straight line can, in
principle at least, also be applied to nonlinear functions.
We can write an equation analogous to Equation {ref}`eq6_1` for any function, and we can still use a requirement similar to Equation {ref}`eq6_2` to express the minimizing of
the quantity `M` with respect to the parameters in our chosen model.
If the resulting equations for the parameters
are easy to solve, we can obtain their values just as we did for straight lines.

Frequently, however, it is not easy to solve the equations.
In such cases we abandon the attempt to obtain an
analytical solution to the problem and rely on the computer to provide us with approximate solutions by using
iterative techniques.
We construct a trial function, calculate the sum of the squared differences, and then vary the
chosen function until a minimum is found for that sum.
Descriptions of such computer-based methods are given in the
text by Draper and Smith that is listed in the Bibliography.
If, however, a method can be found to test a model in
linear form, this is certainly simpler.

In all cases, it is the responsibility of the experimenter to choose the type of function to be used.
All that the
least-squares method can do is to give us, for whatever function we choose, those values of the parameters that
provide the best fit with the observations.


## Precautions with Least-Squares Fitting\label{sec6_9}
The mathematical procedures for least-squares fitting are completely
objective and impartial.
The use of Equations {ref}`eq6_3` and {ref}`eq6_4` for linear fitting drives a straight line
through any set of points with complete disregard for the appropriateness of a straight-line function.
If, for
example, an experiment has given us a set of observations (Figure {ref}`Fig6_5` that clearly show the breakdown of a
linear model and we heedlessly use the least-squares procedure on the whole set of observations, we shall obtain the
parameters of a line, `AB`, that has no significance at all, neither for the model nor the system.
Unthinking use of
the least-squares procedures must be studiously avoided.

This warning is all the more important because of easy access to calculators and computers that can give, at the
touch of a few buttons, least-squares parameters for any set of numbers we care to insert.
We must remember that, if
we are comparing straight lines with our set of observations, it is because we have made the decision that this is a
reasonable thing to do.
We must not, therefore, even contemplate using a least-squares procedure until we have
plotted the observations on a graph and satisfied ourselves, by visual inspection and personal judgment, that linear
fitting is appropriate.
In addition, as has been mentioned, it may be necessary to decide that some of the
observations fall outside the scope of the model and are not appropriate for inclusion in the choice of the best
straight line.
Only after we have carefully considered the whole situation graphically and visually and are sure that
linear fitting is appropriate over all or part of the range of the observations, are we justified in starting the
least-squares procedure.
Failure to heed this warning can give rise to serious error in experiment interpretation.
```{figure} figures/ch6/Fig6_5.png
:Improper use of least-squares fitting.
:Fig6_5
```


## Function Finding\label{sec6_10}
All the foregoing discussion involved the assumption that we were already in possession of a model that we wished to
compare with a system.
Although this is commonly the case, it does happen sometimes that we have a set of
observations for which no model is available-for example, in research on a phenomenon that has never been observed
before or in work on a system that is so complex that a theoretical model will never be available.
The observations,
when plotted in elementary form, will probably show a curve of no readily identifiable form.
In the absence of a
model, what are we to do?

One thing we can do is try to find functions that have some degree of correspondence with the observations.
Such a
procedure can be very useful.
For example, in very complex systems for which there is little hope of constructing
theoretical models, it may be the only thing we can do.
An empirical model, even if is only a mathematical function
that is nothing more than a restatement in mathematical form of the actual behavior of the system, can facilitate
computer processing of the observations and is indispensable for procedures such as interpolation or extrapolation.
Such models can be used, for example, to predict the response of a country's GNP to a change in taxation or to obtain
measurements of temperature from the calibration curve of a resistance thermometer.

In simpler systems for which some hope of constructing a theoretical model from first principles exists, some
functions, if shown to be appropriate to the observations, may be able to give valuable guidance in model building by
suggesting the type of physical process involved in the phenomenon.
Even so we must be careful.
The fact that we have
identified a function that seems to be consistent with our set of observations at a particular level of precision
does not ``prove'' that we have found the ``right'' function.
Quite often, functions of widely varying type can show
closely similar variation, especially over a short range of the variables, and ``guidance'' from an inappropriately
identified function can be misleading.
It can retard genuine theoretical progress for years.
The history of physics
contains many examples of such failure to understand that any choice of an empirical function must be provisional.

With due attention, therefore, to the possibly limited significance of our procedures we describe some of the methods
used.
They can be quite simple in a few cases, and two of these are important because they involve functions that are
of relatively common occurrence.
Assume that we have made measurements of two variables that we can call `x` and `y`.

\subsection*{Power Law}
In the discussion of experiment planning, we have already described the nature of logarithmic plotting and the uses
to which it can be put.
For the sake of completeness in the topic of experiment evaluation, we briefly recapitulate
that description in this and the following section.
Consider the function
```math
y = x^a
```
where `a` is a constant.
We have
```math
\log y = a\log x
```
(where the logarithms can be taken to any base we please) and a graph of log `y` versus log `x` is a straight line
with slope `a`, Consequently, if we wish to test whether a power law is a good function for our observations, we can
plot them in the form log `y` versus log `x`, If the resulting points plotted ,in this, way correspond well with a
straight line, we can say that a function involving a simple power, positive or negative, integral or fractional as
determined by the graph, is a good fit with our observations, The value of the appropriate power `a` is derived from
the slope of the graph and is obtained within uncertainty limits that depend on the uncertainties plotted on the
points.
A graph like this can be plotted on ordinary graph paper by plotting the actual values of log `x` and log `y`, or we can use logarithmic, graph paper.
This paper has rulings that are spaced in proportion to the logarithms of the numbers, so that we can plot our observations directly on the paper.

\subsection*{Exponential Functions}
For many physical phenomena an exponential function is appropriate.
Consider
```math
y = a e^{bx}
```
where `a` and `b` are constant.
In this case
```math
\log_e y = \log_e a + bx
```
(where the logarithms \textit{must} be natural logarithms, taken to the base `e`), and the graph of the function is a
straight line when we plot `\log_e y` versus `x`, If there is reason to suspect that an exponential function is
appropriate to a particular system, we should do a semi-log plot, either on ordinary graph paper by obtaining the
values of `\log_e y`, or on semi-log graph paper, which has one logarithmic and one linear scale.
The appropriate
values of `a` and `b` are obtainable from the intercept and slope of the line, with uncertainties determined by the
plotted uncertainties of the measured values.


## Polynomial Representation\label{sec6_11}
If neither a simple power nor an exponential function, has been found to provide a good match to a set of
observations the probability of stumbling on a more complicated function that would be appropriate is very small.
In
such cases it is often useful to resort to a polynomial representation, which we can write in the form
```math
y = a_o + a_1 x + a_2 x^2 +\cdots
```
A recourse of this nature is really an admission that we have no idea what is going on in the system.
Although such a
representation may not contribute much insight regarding the fundamental theoretical basis for the operation of the
system, it at least offers some of the advantages of empirical models.
If nothing more, it allows computerized
processing of our knowledge of the system's behavior and provides a satisfactory basis for interpolation and
extrapolation.

The coefficients in such a polynomial expansion that make it appropriate for our particular system can be found by
using the least-squares principle.
Recalling the remarks of Section {ref}`sec6_8`, it will be appreciated that the
associated difficulties escalate rapidly with the number of terms that are required in the polynomial to give
satisfactory correspondence with the observations.
A fuller discussion of such methods is in the text by Draper and
Smith that is
listed in the Bibliography.

A similar method is available if the scatter in the observations is not too severe and if the highest precision is
not required.
The techniques of the calculus of finite differences can be applied to the observations, and a
difference table can be used for interpolation and extrapolation or for polynomial fitting.
A complete discussion of
difference-table methods is in the texts by Whittaker and Robinson and by Hornbeck that are listed in the
Bibliography, and an elementary description is in Appendix {ref}`A3`.


## Overall Precision of the Experiment\label{sec6_12}
At the beginning of the experiment, we guessed at the uncertainties that we were likely to encounter.
This was only
an estimate made for the purpose of supplying guidance for the conduct of the experiment.
At the end of the
experiment, we should look back and, by critical assessment of the results, evaluate the precision actually achieved
.
It does not matter very much what type of uncertainty We choose -- estimated range of possible value, standard
deviation, standard deviation of the mean, and so on -- provided only that we clearly state the kind of uncertainty
we are quoting.

To be useful, the overall uncertainty figure must be realistic and honest, even if the outcome of the experiment is
less favorable than we had hoped.
It should also include all identifiable sources of uncertainty.
If the balance
point cannot be identified within 2 to 3 mm or if errors are introduced by non-uniformities of the slide wire, there
is no point in claiming that potentials read on a 1 m slide-wire potentiometer are precise to 0.2\
the scale is graduated in millimeters.

Known contributions from systematic errors should not be included at this stage, because the appropriate corrections
to the measurements should already have been made.
On the other hand, a source of systematic error, whose presence we
suspect but whose contribution cannot be evaluated accurately, should be described and appropriate allowance made in
the overall range of uncertainty.
The final statement depends on the circumstances.

\subsection*{Result Is the Mean of a Set of Readings}
The best quantity to quote is the standard deviation of the mean, because it has recognizable numerical significance
.
Sometimes the standard deviation itself is quoted.
It is always essential to quote the number of readings so that
the reliability of the `\sigma` estimate can be judged.

\subsection*{Result Is the Consequence of a Single Calculation}
In the undesirable event that no graphical analysis has been possible and the result is obtained algebraically from a
number of measured quantities, use the methods of Chapter {ref}`ch3` to calculate either outer limits for the
uncertainty or else a standard deviation.

\subsection*{Result Is Obtained Graphically}
If the straight line has been established by a least-squares method, the uncertainties in the constants `m` and `b`
will have been obtained directly.
These uncertainties have the advantage that they have been obtained from the actual
scatter of the points, regardless of their estimated uncertainties.
(This does not mean that, if we intend to make a
least-squares fit to a straight line, we should not bother to plot the uncertainties or even not draw a graph at all
.
As was emphasized in Section {ref}`sec6_9`, the graph, with the uncertainties on the points, is still needed to
judge the range of matching between the model and the system before the least-squares calculation is done.) If the
straight line has been drawn by eye, the lines at the limits of possibility will give the possible range of slope and
intercept.
This uncertainty in slope may have to be combined with the uncertainties of some other quantities before
the final uncertainty of the answer can be stated.

As mentioned earlier, it probably does not matter much what kind of uncertainty is quoted, so long as one is quoted
and the nature of the quoted value is made clear.
Also, when one is working through lengthy uncertainty calculations
, the arithmetic may be simplified by dropping insignificant contributions to the total uncertainty.
There is no
point in adding a 0.01\
In the
final statement of uncertainty, it is not commonly valid, to quote uncertainties to more than two significant
figures; only work of high
statistical significance justifies more.

Once the overall uncertainty of the final answer has been obtained, the question of the number of significant figures
to be retained in the answer can be considered.
This matter has already been covered in Section {ref}`sec2_11`; we
repeat the discussion here simply for the sake of completeness as we discuss experiment evaluation.

There is no unique answer to the question of significant figures, but in general, one should not keep figures after
the first uncertain figure.
For example, `5.4387 \pm 0.2` should be quoted as `5.4 \pm 0.2`, because if the `4` is
uncertain, the `387` are much more so.
However, if the uncertainty is known more precisely, it might be justifiable
to keep one more figure.
Thus, if the uncertainty were known to be `0.15`, it would be valid to quote the answer as `
5.44 \pm 0.15`.

If a measurement is quoted with a percentage precision, the number of significant figures is automatically implied.
For example, what could be meant if a measurement were quoted as `527.64182 \pm 1\
uncertainty could be calculated to be `5.2764`.
The precision itself, however, is quoted to only one significant
figure (1\
uncertainty.
We shall call the absolute uncertainty `5`, and this implies that, if the `7` in the original number is
uncertain by `5`, the `0.64182` has no meaning.
The measurement could then be quoted as `528 \pm 5` or, alternatively
, `528 \pm 1\
If a set of readings has yielded a mean as the answer, the number of significant figures in the mean
will be governed by the standard deviation of the mean, and the number of significant figures in the standard
deviation will be governed in turn by the standard deviation of the standard deviation.

Finally, always be sure to quote an answer and its uncertainty in such a way that the two are consistent-that is,
neither as `16.2485 \pm 0.5` nor as `4.3 \pm 0.0002`.


## The Concept of Correlation\label{sec6_13}
Until now we have been considering the interpretation of experimental results in which relatively precise
observations were available and the models were relatively satisfactory.
We are not always so lucky, and much of
modern experimenting is less simple and clear-cut than the preceding sections might suggest.
In many areas of science
it is common to be concerned with subtle phenomena in which the effects we seek to measure can be wholly or partially
masked by statistical fluctuation or other perturbations.
In such cases, far from being able to make detailed
comparisons between the system and a model, we may find it difficult to obtain clear-cut evidence that the effect we
are considering even exists.This is a not uncommon situation in, for example, biological, medical, and environmental
studies.
We are all familiar with the discussion about the role of smoking in lung cancer, of low levels of ionizing
radiation in leukemia, or of diet in cardiovascular disease.
In such cases, the concept of ``proof'' is almost always
brought into the discussion in phrases such as: We have not proved that smoking causes lung cancer.
Can we prove that
heart attacks are less likely if we eat margarine instead of butter?
An so on.
In cases like these we are in a very
different area of operation from our earlier kind of experimenting, and it is worthwhile spending a moment to think
about what we mean by words like ``proof'' and ``cause.''

Consider two experiments.
One might be a measurement of the current through a resistor as a function of potential
difference across it, and the result might be as shown in Figure {ref}`Fig6_6`(a).
In this experiment, have we
``proved'' that the current is ``caused'' by the potential difference?
Certainly the current at the top end of the
range is different from that at the low end by an amount greatly in excess of the uncertainty of measurement, and
that gives us confidence that the variation actually existed.
Given that it existed, was it ``caused'' by the change
in potential difference?
On that one occasion we certainly did observe that the current did increase as the potential
difference increased.
However, it could be that the current has nothing to do with potential difference and that the
increase in current was caused by some totally separate factor, such as atmospheric pressure.
The apparent
relationship with potential difference could have been totally accidental.
Philosophers for hundreds of years have
been warning us that events observed to take place simultaneously are not necessarily causally related.
In the
present case, however, accumulated experience with the experiment, using multiple repetition and careful attention to
the control of other variables, will gradually convince us that the potential difference and current are genuinely
related.
Only a philosophical purist would quarrel with the claim that the potential difference caused the current to
flow.

```{figure} figures/ch6/Fig6_6.png
:Extremes of behavior with respect to cause-and-effect relationships.
:Fig6_6
```
The situation is quite different in less clear-cut cases.
Another experiment might yield the result shown in Figure {ref}`Fig6_6`(b).
This result would be likely if we were dealing with, perhaps, the number of colds experienced by the whole student body of a university as a function of the amount of ascorbic acid ingested daily.
Can we say that the number of colds is dependent on ascorbic acid dose or not?
We might conduct a well-designed experiment using an experimental group of 100 students who were given ascorbic acid every morning and [as described in Section {ref}`sec5_6`(b)], a control group of 100 students who unknowingly swallowed sugar pills instead of ascorbic acid every morning.
If we find that the control group had 125 colds in a particular period and that the experimental group who took ascorbic acid had a total of 106 colds, the questions we must ask are: Is this difference significant?
What do we mean by ``significant''?
If the difference is significant, can we attribute it to the ascorbic acid?
And so on.
Even painstaking attention to the details of experimenting, control over samples, elimination of extraneous variables, repetition of the experiment, and the like, may not clear up the situation very much.
Biological systems are so complex that we can rarely attain the degree of control over variables that characterized the electrical experiment.
It therefore becomes inappropriate to seek the kind of ``proof'' that is available in other systems.
We cannot say that we have ``proved'' that smoking causes lung cancer or that ascorbic acid reduces the incidence of colds in the same way that we can ``prove'' that a potential difference ``causes'' a current to flow.
We have to be content with another class of statement, which, although less exact, can still be adequately significant and completely convincing.

This type of statement can be illustrated by reference to a diagram such as Figure {ref}`Fig6_7`.
These measurements
were made to test the proposition: The number of counts obtained from a weak radioactive source depends on the length
of time of counting.
Here, statistical fluctuation is almost as big as the effect we seek to observe, but we can
still see that there is an upward trend in the observations and we say that there exists a \textbf{correlation}
between one variable and the other.
This means that we can observe a tendency for one variable to follow the other,
although fluctuations arising from other factors prevent the observation of a unique, one-to-one correspondence.
The
mathematical study of such correlation is called \textbf{regression analysis}, and it supplies a numerical measure of
the degree of correlation between two variables that we call a \textbf{correlation coefficient}.

We encounter the concept of correlation in two significant cases: (1) if, of two measured variables, one can be
regarded as the cause of the other but its effect is partially masked by random fluctuation, and (2) if two variables
can be regarded as simultaneous consequences of a common cause whose effect, as before, is partially obscured by
random fluctuation.
In either case we may be able to say that we can observe a certain degree of correlation
between one variable and the other.

```{figure} figures/ch6/Fig6_7.png
:The dependence of number of counts on counting time for a weak radioactive source.
:Fig6_7
```
The mathematical properties of correlated variables are described in the standard texts on statistics.
We confine
ourselves here to quoting the equation by which one calculates correlation coefficients.
For a pair of measured
variables `x` and `y`, the expression for the correlation coefficient, commonly called `r` or `R`, is
```math
r = \frac{\sum xy}{\sqrt{\sum x^2 \sum y^2}}
```
Values of `r` calculated in this way can vary all the way from 1, for perfect, fluctuation-free dependence of One
variable on another, to 0 if there is no connection whatsoever between the two variables, For intermediate values,
the correlation coefficient indicates the extent to which the observed variation in one quantity can be ascribed to
variation in another.
In case (1) it is the extent to which the variation in the output variable can be ascribed to
variation in the input variable; in case (2) it is the extent to which the variation in both variables can be
ascribed to variation in whatever is the common source of influence.
In the circumstances commonly found in the type
of experimenting we discussed in this text, values of `r` close to unity are usual.

Even when we do observe a correlation, we must still be careful about inferring \textit{causal} connection between
the various variables.
If we observe that one variable seems to correlate well with the another, we have not ``proved
'' that one variable ``causes'' the other in the same sense as we used these words in the example about electric
current.
The literature has many examples of false and misleading correlations.
One conference speaker illustrated
this point with a tongue-in-cheek claim to have discovered the cause of cancer.
He showed a graph of a quantity that
correlated beautifully with the increase in some type of cancer and only later revealed that the other variable was
the consumption of fuel oil in the British Navy.
In another case, intended apparently to be taken seriously, a 1920s
newspaper report described the ``discovery'' of the cause of polio, because the incidence of disease correlated well
with the number of motor cars on the roads.

However, such amusements do not discredit the study of correlations or the search for causal relations; they merely
serve as another reminder of the need for caution and clear thinking.
When treated with great care, and especially
when the correlation can be observed repeatedly, correlation studies can and do supply convincing evidence of causal
connection.
Because of the immense importance that many of such issues have in public affairs, it is important to
have a clear understanding of the nature of correlation and the methods available for significance testing.
Further
discussion is beyond the scope of this volume, but pursuit of the topic in the texts on statistics (listed in the
Bibliography) is earnestly recommended.


## Use of Computers in Experiment Evaluation\label{sec6_14}
Many software applications have facilities that aid in processing experimental observations.
Apart from word
processing, which is obviously helpful in the preparation of reports (considered in the next chapter), any
application that contains a spreadsheet or mathematical manipulation of data facility eases the burden of arithmetic
calculation enormously.
Advanced spreadsheet programs such as Microsoft Excel and Google Sheets have built-in
mathematical functions that can cope with all but the most
specialized requirements.
Even more advanced are applications such as MatLab or Jupyter Notebooks are also available
.
Nevertheless, some limitations and precautions must be kept in mind.
We consider a number of different aspects in
turn.

\subsection*{Graph Drawing}
Almost all spreadsheet programs produce attractive graphs of experimental observations, but their use in serious
experimenting is limited.
As has been stressed repeatedly, the function of a graph in experimenting is to enable the
experimenter to form a judgement about the degree of correspondence between the system and the model.
A graph can do
this only if it is large enough to show clearly both the scatter of the points and the uncertainty bars or boxes that
have been plotted on them.
This can require large sheets of graph paper for an experiment containing precise
measurements, but spreadsheet programs and normal printers usually produce graphs on 8.5-by-11-inch paper (if
printing).
These may be acceptable as illustrations in a report, but they are rarely satisfactory for accurate
analysis of experiments.
Unless the computer can produce output on a large plotter, there is no substitute for a good
, big, hand-drawn graph.

\noindent \textbf{(1) Uncertainties.} Apart from size, a problem appears with the common spreadsheet programs when we
try to represent uncertainties on the points.

They call it

It produces a vertical bar to represent the plotted


All of the analysis applications (Excel, Sheets, MatLab, Python, etc.) can be used to plot bar graphs, line graphs,
scatter plots and others.
The application of error bars representing the uncertainty is also possible.
Figure {ref}`Fig6_8` shows the observations from Table {ref}`table4_1` plotted using Python with \href{https://numpy.org/}{Numpy} and \href{https://matplotlib.org/}{Matplotlib} libraries.
The code to enter the data and generate this
plot are shown below.
Comments are included in the code to describe each line's purpose.
The data is plotted using
the \texttt{errorbar} function to make points with uncertainties.
```{figure} figures/ch6/Fig6_8.png
:The observations of Table \ref{table4_1
:Fig6_8
```
\begin{lstlisting}[language=Python,backgroundcolor=\color{lightgreen}]
import numpy as np
import matplotlib.pyplot as plt

#create an array of load (x) values
load = np.arange(0.05, 0.5, 0.05)
#creat an array of extension (y) values
extension = np.array([0.03, 0.04,0.08,0.13,0.19,0.3,0.34,0.38,0.39])
#create an array of uncertainties equal to 0.01 meters
exerr = np.ones(len(load))*0.01

#create a plot with error bars
plt.errorbar(load, extension, fmt='ok', yerr=exerr)
plt.xlabel('Load (kg)') #label the x-axis
plt.ylabel('Extension (m)') #label the y-axis
plt.title('Extension of Rubber with Load') #title the plot
plt.savefig('Fig6_8.png') #save the graph as an image
plt.show() #render the plot
\end{lstlisting}

Figure {ref}`Fig6_9` shows the observations from Table {ref}`table4_3` as re-plotted using Python in a Jupyter notebook
.
The Python code to generate this plot is shown below with comments.
The data is plotted using the \texttt{errorbar} function to make points with uncertainties.
This produces an indication on the graph of the vertical range of each measured point.
To draw the graph of the model function the \texttt{plot} function is used to plot a connected line for the model.
This function can also be used for plotting points without uncertainties included.
Such a diagram can serve as an acceptable illustration in a report.
Hence, saving the plot as an image. 
```{figure} figures/ch6/Fig6_9.png
:The observations of Table \ref{table4_3
:Fig6_9
```
\begin{lstlisting}[language=Python,backgroundcolor=\color{lightgreen}]
import numpy as np
import matplotlib.pyplot as plt

#create an array of distance values
distance = np.array([0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8])
#create an array of time values
time = np.array([0.148,0.196,0.244,0.290,0.315,0.352,0.385,0.403])
#create an arra of uncertainty values in the time measurements
t_unc = np.ones(len(time))*0.005
#create x and y arrays of the theoretical model
x_theory = np.linspace(0,1,11)
y_theory = 0.4515*x_theory**0.5

#plot the data as points with error bars
plt.errorbar(distance**0.5, time, fmt='ok', yerr=t_unc)
#plot the model as a line
plt.plot(x_theory**0.5, y_theory, '-k')
#label the axes
plt.xlabel('Distance (m)')
plt.ylabel('Time (s)')
#Add a title
plt.title('Time vs.
Square Root of Distance')
#save an image of the graph
plt.savefig('Fig6_9.png')
plt.show()
\end{lstlisting}

\noindent\textbf{Least Squares Analysis.} (2) Least Squares Analysis.
The spreadsheet programs such as Microsoft
Excel and Google Sheets, have built-in facilities that use the least-squares principle for fitting straight lines to
sets of observations.
These facilities can make the process fast, accurate, and simple -- almost too simple, in fact
-- and it is essential to bear in mind the warning given earlier about proceeding to least-squares analysis only
after adequate personal appraisal of the situation has been made by using an appropriately large graph.

To do a least-squares analysis, we enter the observations in two columns and then highlight a region of two columns
and five rows of empty cells.
In the formula bar we enter \texttt{=linest(known ys, known xs, calculate b, stats)},
where
- \texttt{known ys} is entered by highlight the column of measured time values.
- \texttt{known xs} is entered by highlight the column of measured Distance`^{1/2}` values.
- \texttt{calculate b} is TRUE so that the intercept is calculated as a model parameter and not forced to zero.
- \texttt{stats} is TRUE so that all of the regression statistics are printed in the output.
This immediately supplies values for the slope and intercept of the best line, as well as other information (all
highlighted in green and blue below the data) that we discuss in a moment.
We usually want to illustrate also the
best line on the graph of the actual observations, and we do this by calculating values that lie on the best line.
In
Figures {ref}`Fig6_10` we show both a printout of the work sheet and the resulting graph for the observations listed
in Table {ref}`table4_3`.

In the work sheet, Column A contains the measurements on distance.
Column B contains the square root of the distance measurements.
The spreadsheet can calculate these for you, e.g., by
entering \texttt{=sqrt(A2)} in cell B2. Column C contains the measurements of time.
Column D gives the calculated
values for ``Time of Fall``, which are calculated using the results of the regression analysis.

The meaning of the various items is described in Table {ref}`table6_1`.

```{list-table}
:Description of output from Excel and Sheets \texttt{linest
:table6_1
:header-rows: 1

* - `m`
  - slope                            


        `b`
  - intercept                        


        `S_m`
  - standard error of the slope      


        `S_b`
  - standard error of the intercept  


        `R^2`
  - correlation coefficient          


        `S_y`
  - standard error of the y estimate 


        `F`
  - the `F` statistic                


        `DOF`
  - degrees of freedom               


        `SS_{reg}`
  - regression sum of squares        


        `SS_{resid}`
  - residual sum of squares
```
and the first five represent a large part of what we require from the regression analysis.
The value `R^2` is
interpreted in the same fashion as the correlation coefficient `r` discussed in Section {ref}`sec6_13`; however, it is
calculated differently since it is the correlation between data and model.
We can see it is very close to `1` as we
would expect for a well-controlled experiment.
The quantity `S_y` is the standard deviation of the `y` values about
the best line.
This is the quantity that, in Section {ref}`sec6_7` was discussed.
```{figure} figures/ch6/Fig6_10a.png
:The least squares analysis of the falling ball experiment using Microsoft Excel.
:Fig6_10
```

After fitting a line to observations by using least squares, we usually want to illustrate the situation by using a
graph that shows the observations and the least-squares line together, as shown in Figure {ref}`Fig6_10`.

Alternatively, one may use Python to perform this analysis.
The code to do this is shown below with comments.
Most of
the code is the same from that used to produce Figure {ref}`Fig6_9`.
The new pieces of code are in the section that
creates a linear function, the least squares regression, and the calculation of the correlation coefficient `R^2`.
Let's go through each individually.

For the model, we are using a linear function.
In Python, we define the function \texttt{line_ fit}, which takes `x` value(s), a slope `m`, and an intercept `b` and returns the associated `y` value(s).

Perhaps the simplest least squares calculation is performed using the Python library \href{https://scipy.org/}{SciPy}
.
The function \texttt{curve_fit} is part of the \texttt{optimize} sub-library.
This function takes inputs of
- function name, \texttt{line_fit}
- `x` array, Distance`^{0.5}`
- `y` array, Time of Fall
- `y` uncertainty array or single value
- indication of whether the uncertainty is absolute or relative
The regression function returns the best fit parameters `m` and `b` and the covariance matrix containing the values `
S_m^2`, `S_{mb}^2`, `S_{bm}^2`, `S_b^2`.
We then use the fit parameters to create a model array for plotting.

The last new bit of code is related to the calculation of the correlation coefficient, `R^2`.
Because we are now
comparing our measurements to the fit, the correlation is calculated as
```math
R^2 = 1-\frac{SS_{res}}{SS_{tot}}
```
where `SS_{res}` is the sum of the squares of \textbf{residuals}.
```math
SS_{res} = \sum \left(y_i-f_i\right)^2
```
with `f_i = mx_i +b `. `SS_{tot}` is the total sum of the squares, proportional to the variance of the data (`S_y^2`)
```math
SS_{res} = \sum \left(y_i-\bar{y}\right)^2
```
\begin{lstlisting}[language=Python,backgroundcolor=\color{lightgreen}]
#Create a function for a line
def line_fit(x, m, b):
    return m*x + b

#Use SciPy to perform the linear least squares regression
from scipy.optimize import curve_fit
fit_params, fit_cov = curve_fit(line_fit, distance**0.5, time, sigma=t_unc, absolute_sigma=True)

#Create arrays to make the model
xx = np.linspace(0.0, 1., 51)
yy = line_fit(xx, fit_params[0], fit_params[1])

# Calculate the terms in the correlation coefficient
ave = np.mean(time)
SSres = np.sum((line_fit(distance**0.5, fit_params[0], fit_params[1])-time)**2)
SStot = np.sum((time-np.mean(time))**2)

# Calculate the correlation coefficient
R2 = 1-SSres/SStot

# Print the good stuff
print('[m, b] = ', fit_params)
print('[[S_m, Smb], [Sbm, Sb]] = ', np.abs(fit_cov)**0.5)
print('R^2 = ', R2)

#Create a plot of everything
plt.errorbar(distance**0.5, time, fmt='ok', yerr=t_unc)
plt.plot(xx, yy, '-k')
plt.xlabel('Distance (m)')
plt.ylabel('Time (s)')
plt.title('Time vs.
Square Root of Distance')
#plt.xlim(0,0.82)
#plt.ylim(0,0.42)
plt.savefig('Fig6_10.png')
plt.show()
\end{lstlisting}
The results of this Python model fitting is shown in Figure {ref}`Fig6_11`.
The printed results indicate that they are
the same as those produced by \texttt{linest} in Microsoft Excel.
```{figure} figures/ch6/Fig6_11a.png
:The least squares analysis of the falling ball experiment using Python (numpy, scipy, and matplotlib).
:Fig6_11
```
The graph was drawn in much the same way as was the one shown in Figure {ref}`Fig6_9`.
The points were produced by
exactly the same procedure, and the only difference lay in the way the line was produced.
For Figure {ref}`Fig6_9` we
wished to plot an explicit model function, and we had to calculate the `y` values for that function.
In Figures {ref}`Fig6_10` and {ref}`Fig6_11` we are pretending that we do not have an explicit model function, and we have used the
least-squares procedure to generate a function.
To plot the line, therefore, we must use the least-squares values of
slope and intercept to calculate `y` values on that line.
These values appear in Figures {ref}`Fig6_10` and {ref}`Fig6_11` table of results and in the graphing process.
As before, such a diagram makes a suitable illustration
for a report.

\noindent\textbf{(3) Function Finding.} We have already discussed in Sections {ref}`sec6_10` and {ref}`sec6_11` the
philosophy and logic of finding functions to fit observations for which no preexisting model is available.
There is
no need to repeat that discussion here except to emphasize again that, even if one does find an empirical function
that matches the observations to a certain extent, there is no necessary significance in that function.
It may be
useful for interpolation or, if treated with great caution, extrapolation, but it cannot be claimed to supply
anything more than that.
It may turn out to be useful as a guide in building a model based on basic principles, but
it also may not.

We have mentioned here (see also Appendix {ref}`A3`) some procedures
that can be used to find suitable functions by means of hand-done calculations, but he methods are slow and tedious.
Computers make the task easy, and one can quickly try various possible functions.
Most of these programs fit their
various functions by using the least-squares criterion, either directly and analytically, or else by some process of
successive approximations that use repeated iteration.
We used Python with Numpy, Matplotlib, and Scipy libraries to
create Figure {ref}`Fig6_12` with its various curves fitted to the observations from Table {ref}`table4_1`.

Figure {ref}`Fig6_12`(a) shows the observations plotted directly.
In
Figure {ref}`Fig6_12`(b) we see the result of fitting a straight line to the observations, (c) shows an exponential
function, (d) shows a logarithmic function, and (e) shows a power law (i.e., a function of the type `y = ax^b`.).
Clearly, none of these is a good fit to the observations, but if we had had some good reason to use such a function,
the program would give us the best choice of parameters for that chosen function on the basis of the least-squares
criterion.
Figure {ref}`Fig6_12`(f) shows a better fit.
It is for the sigmoidal
function, which has the form
```math
y = a_0 + \frac{a_1}{1+\exp{-\frac{x-a_2}{a_3}}}
```
and the program has given us the values of the various `a_n` optimized to meet the least-squares criterion using an
iterative process.
```{figure} figures/ch6/Fig6_12.png
:Various functions fitted to the observations of Table \ref{table4_1
:Fig6_12
```

Last, Figures {ref}`Fig6_12`(g) and {ref}`Fig6_12`(h) provide graphic illustration of an interesting and important
point.
Both represent polynomial fits to the observations, but they are calculated for two different orders in the
polynomial function.
In Figure {ref}`Fig6_12`(g) the polynomial chosen contained terms up to the third order -- that
is, the function was of the form
```math
y = a_0 + a_1x + a_2x^2 + a_3x^3
```
and the computer gave us the optimized values of the coefficients on the basis of least squares.
Figure {ref}`Fig6_12`(h) shows the result of fitting a sixth order polynomial to the measurements.
Both of these functions would obviously serve us well if we were interested in interpolation only (although it is apparent that the sixth order polynomial provides a slightly better fit than the other).
Their behavior outside the measured range, however, provides convincing evidence that, as was pointed out in Section {ref}`sec4_2`, extrapolation on the basis of a model that is wholly empirical (i.e., based on nothing other than the observations themselves), is a highly questionable exercise.

\section*{Problems}\label{sec6_15}
\addcontentsline{toc}{section}{\protect\numberline{}Problems}
1. An experiment was done to measure the impedance of a series `R-L` circuit.
The impedance `Z` is given as a
2. function of the resistance `R`, the frequency of the source `f` and the inductance `L` by
    ```math
Z^2 = R^2 + 4\pi^2 f^2 L^2
```
    The experiment was done by measuring `Z` as a function of `f` with the intention of plotting `Z^2` vertically and `f^2` horizontally to obtain `L` from the slope and `R` from the intercept.
The observations obtained are given in the table.
    \begin{center}
        \begin{tabular}{l l}
            \hline
            f (Hz)      & \hspace{1.0in} Z (`\Omega`)  

 \hline
            123 `\pm` 4 & \hspace{1.0in} 7.4 `\pm` 0.2 


            158         & \hspace{1.0in} 8.4           


            194         & \hspace{1.0in} 9.1           


            200         & \hspace{1.0in} 9.6           


            229         & \hspace{1.0in} 10.3          


            245         & \hspace{1.0in} 10.5          


            269         & \hspace{1.0in} 11.4          


            292         & \hspace{1.0in} 11.9          


            296         & \hspace{1.0in} 12.2          


            \hline
        \end{tabular}
    \end{center}
    \begin{enumerate}[label=(\alph*)]
3. Plot these readings in the appropriate fashion, and mark the uncertainties on the points.
Suggested
4. table headings to expedite the calculations are given above.
5. See if the observations can be interpreted in terms of a straight line for any part of the range or all
6. of it.
7. Obtain the slope of the best line.
8. Calculate the best value for `L`.
9. Obtain the slopes of the lines at the outer limits of possibility, and so state the range of
10. uncertainty for the slope.
11. Calculate the absolute uncertainty in the measurement of `L`.
12. Obtain the best value of `R` from the intercept.
13. Obtain the uncertainty for the `R` value.
14. State the complete result for the experiment with the appropriate number of significant figures in each
15. quantity.
    \item Ten observers report on the intensity of a lamp measured repeatedly by using a comparison photometer.
Their
    \item results (in arbitrary units) are as follows:
    \begin{center}
        \begin{tabular}{c c c}
            \hline
            Observer & Mean of Intensity Measurements & Std.
Dev.
of the Mean 

 \hline
            1        & 17.3                           & 2.1                   


            2        & 18.4                           & 1.9                   


            3        & 17.1                           & 2.5                   


            4        & 16.6                           & 2.8                   


            5        & 19.1                           & 3.2                   


            6        & 17.4                           & 1.2                   


            7        & 18.5                           & 1.8                   


            8        & 14.3                           & 4.5                   


            9        & 16.8                           & 2.3                   


            10       & 17.4                           & 1.6                   


            \hline
        \end{tabular}
    \end{center}
    What is the overall mean value for the intensity, and what is its standard deviation?
    \item An experiment has been carried out to investigate the temperature dependence of the resistance of a copper
    \item wire.
A common model is represented by the equation
    ```math
R = R_o(1 + \alpha T)
```
    where `R` is the resistance at temperature `T` i.e., `R_o` is the resistance at `0^{\circ}`C, and `\alpha` is the
    \item temperature coefficient of resistance.
The observations of `R` and `T` that were obtained follow:
    \begin{center}
        \begin{tabular}{c c}
            \hline
            `T(^{\circ}\textrm{C})` & \hspace{1.0in} R (`\Omega`) 

 \hline
            10                   & \hspace{1.0in} 12.3         


            20                   & \hspace{1.0in} 12.9         


            30                   & \hspace{1.0in} 13.6         


            40                   & \hspace{1.0in} 13.8         


            50                   & \hspace{1.0in} 14.5         


            60                   & \hspace{1.0in} 15.1         


            70                   & \hspace{1.0in} 15.2         


            80                   & \hspace{1.0in} 15.9         


            \hline
        \end{tabular}
    \end{center}
    Assume the uncertainty in the measurements of temperature can be neglected.
    1. Using the method of least squares (i.e., using directly the equations of Section {ref}`sec6_7`),
2. evaluate the slope and intercept of the graph of `R` versus `T`.
3. Hence, obtain the best value for `\alpha`.
4. Evaluate the standard deviation for the slope and for the intercept.
5. Hence, evaluate the standard deviation of `\alpha`.
6. State the final result of the experiment with the appropriate number of significant figures.
    \item It is desired to fit a set of observations to the function `y = a + bx^2` by using least squares.
Use the
    \item same procedures that are used in Appendix {ref}`A2`, Section {ref}`secA2_2`, for calculating the constants of
    \item a linear function to obtain equations for `a` and `b` in the parabolic function.
Hence, calculate the
    \item values of `a` and `b` appropriate to the following set of observations:
    \begin{center}
        \begin{tabular}{c c}
            \hline
            `x` & \hspace{1.0in} `y`  

 \hline
            0.5 & \hspace{1.0in} 1.5  


            1.0 & \hspace{1.0in} 6.3  


            1.5 & \hspace{1.0in} 12.4 


            2.0 & \hspace{1.0in} 12.6 


            2.5 & \hspace{1.0in} 18.0 


            3.0 & \hspace{1.0in} 32.8 


            3.5 & \hspace{1.0in} 40.2 


            4.0 & \hspace{1.0in} 47.4 


            \hline
        \end{tabular}
    \end{center}
    Assume that uncertainty is confined to the `y` variable.
    \item The following measurements were made in the investigation of phenomena for which no existing model was
    \item available.
In each case identify a suitable function and evaluate its constants.
    \begin{center}
        \begin{tabular}{c c c c c c}
            \hline
            `\nu` & `i`  & \hspace{0.5in} `x` & `y`   & \hspace{0.5in} `T` & `f`   

 \hline
            0.1   & 0.61 & \hspace{0.5in} 2   & 3.2   & \hspace{0.5in} 100 & 0.161 


            0.2   & 0.75 & \hspace{0.5in} 4   & 16.7  & \hspace{0.5in} 150 & 0.546 


            0.3   & 0.91 & \hspace{0.5in} 6   & 44.2  & \hspace{0.5in} 200 & 0.995 


            0.4   & 1.11 & \hspace{0.5in} 8   & 8.2   & \hspace{0.5in} 250 & 1.438 


            0.5   & 1.36 & \hspace{0.5in} 10  & 150.7 & \hspace{0.5in} 300 & 1.829 


            0.6   & 1.66 & \hspace{0.5in} 12  & 233.5 & \hspace{0.5in} 350 & 2.191 


            0.7   & 2.03 & \hspace{0.5in} 14  & 337.9 & \hspace{0.5in} 400 & 2.500 


            0.8   & 2.48 & \hspace{0.5in} 16  & 464.5 & \hspace{0.5in} 450 & 2.755 


            0.9   & 3.03 & \hspace{0.5in} 18  & 618.0 & \hspace{0.5in} 500 & 2.981 


            \hline
        \end{tabular}
    \end{center}
    \item The following results come from a study on the relationship between secondary-school matriculation averages
    \item and the students' overall averages at the end of first-year university.
The first number of the pair is the
    \item secondary-school average and the second is the university average.
    \begin{align*}
        \centering
        & 78,65; 80,60; 85,64; 77,59; 76.63; 83,59; 85.73; 74,58; 86,65; 80,56; 82,67


        & 81,66; 89,78; 88,68; 88,60; 93,84; 80,58; 77,61; 87,71; 80,66; 85,66; 87,76


        & 81,64; 77,65; 96,87; 76,59; 81,57; 84,73; 87,63; 74,58; 91,78; 92,77; 85,72


        & 86,61; 84,68; 82,66; 81,72; 91,74; 86,66; 90,68: 88,60
    \end{align*}
    1. Draw a scatter diagram of university averages plotted against school averages.
2. Evaluate the correlation coefficient.
    \item Evaluate the correlation coefficient for the values of `\sqrt{x}` and `t` in Table {ref}`table4_3`.
\end{enumerate}
