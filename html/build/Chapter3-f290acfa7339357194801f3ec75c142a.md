# Statistics of Observation\label{ch3}
## Statistical Uncertainty\label{sec3_1}

In the preceding chapter we considered measurements in which the uncertainty could be estimated by personal judgment.
In these, supposing that we have judged the situation accurately, repeated measurements should give consistent answers.
Sometimes, however, systems behave in a different way and repeated measuring gives clearly \textit{different} answers.
For example, if we are using a particle detection and counting system to measure the activity of a radioactive source and we decide, with given geometry, to obtain the number of counts in a 10-second interval, we find that the results obtained by counting in successive 10-second intervals are not the same.
We can encounter the same situation in measurements that involve visual judgment.
If, for example, we wish to find the image formed by a thin lens, we may be unable to judge the position of the image accurately enough to obtain repeatedly the same reading on a good, finely divided distance scale.
In many other systems, too, measurements show random fluctuation.
Whether the fluctuation is intrinsic to the system under investigation (as in the radioactive source, where it arises from the basic nature of radioactive decay) or whether the variation arises from difficulty we have in making the measurement, we must find out how to make sensible statements about measured values that show such
fluctuation.

What kind of statement will it be possible to make?
No longer is it possible for us to make such statements as we made earlier.
They had the form ``I am virtually certain that the answer lies within the interval...'' Now, when measured values appear seemingly at random along a scale, we are unable to identify the edges of an interval within which we can be almost certain our answer lies.
In fact, apart altogether from the impossibility of obtaining ``right'' answers, we find that the difficulty lies not so much in constructing sensible answers as in knowing the sensible questions to ask.
We discover that the only sensible questions involve, as before, intervals along the scale of values.
This time, however, we interpret these intervals in terms of \textit{probability} rather than certainty.
Our search for a solution is fairly lengthy, but at the end the answer turns out to be simple and elegant.

To start the search, we go back to the basic situation.
Assume that we have made a single measurement and that we
have made the measurement a second time to check our work.
This time we obtain a different value.
What are we
supposed to do?
We have no way of saying that one value is ``right'' and the other ``wrong.'' Which one should we
choose to be ``right''?
In response to this ambiguity, the natural reaction is to try a third time, hoping, perhaps, that the third reading will confirm one or other of the first two.
Very likely it will not be so obliging and will simply add to the confusion by supplying a third possibility.
Faced with growing complexity, we can decide to keep on making measurements to see what happens.
Suppose that our curiosity has prompted us to make a substantial number of repeated measurements say 100, and we now ask: What is the answer?
As was mentioned earlier, it is more significant to ask: What is the question?
That depends very much on the use to which we wish to put the measurements.
If we are measuring the position of an optical image, we may need a value that we can use in the design of some piece of optical equipment.
If we are measuring the activity of a radioactive source, we may wish to make a guess at the number of counts that will be observed in a certain 10-second interval tomorrow.
A sociologist counting political opinions wishes to predict the outcome of the next election, and so on.
There is no single question and no unique answer.
The treatment we give our fluctuating numbers depends on circumstances.
We now consider some of the possibilities.

## Histograms and Distributions\label{sec3_2}

Assume that we have made 100 measurements of some quantity and that we must now report our results.
The first response to the question -- What did you obtain?
-- is the rather feeble reply: ``I made the measurement 100 times and here are the 100 answers.'' This statement may be clear and free from the possibility of misinterpretation, but it is hardly helpful.
Our audience will find it difficult to make any sense out of a plain list of numbers, and questions will naturally arise, such as: Is there anything systematic about the numbers?
Are there any regularities?
Do any appear more frequently than others?
And so on.
To show the characteristics of the measurements more clearly, some kind of graphic display would
clearly be helpful.

One common mode of presentation is the \textbf{histogram}.
To construct this diagram, divide the scale along which the measurements are spread into intervals, and count the readings that fall within each interval.
Then plot these numbers on a vertical scale against the intervals themselves.
It is conventional to use a bar diagram to indicate the number of readings; and the result will be similar to Figure {ref}`Fig3_1`.
At once, we improve our comprehension of the measurements enormously because we can see at a glance how the values are distributed along the scale.
This distribution is the key to a satisfactory interpretation of the measurements.
Usually we find that the readings tend to occur more frequently in the middle of the range.
If this is so and we are unable to make any other sensible statement, we can always content ourselves with the simple assertion that the observations have central tendency.
This may suffice, and when we have drawn the histogram we may be able to stop.

Many spreadsheet programs for computers such as Microsoft Excel, WordPerfect Quattro Pro, and the like, have built-in programs for calculating and displaying frequency distributions and histograms.
These allow convenient and rapid statistical analysis of sets of observations, and it is good to use any available opportunity to practice with them.
Their very convenience, however, can be deceptive, and it is very important to know by personal experience what kind of calculation the machine is doing.
For this purpose start by first doing a few calculations by hand to see the way the numbers work.
The examples at the end of this chapter can be used for this purpose.

Many results from measuring processes are presented simply by offering the histogram of the observations; readers can view the distribution and draw their own conclusions.
```{figure} figures/ch3/Fig3_1.png
:A set of observations and its histogram.
:Fig3_1
```
\begin{table}[htb]
    \centering
    \begin{tabularx}{\textwidth}{>{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X}
        85 & 109 & 114 & 121 & 127 & 131


        92 & 109 & 114 & 121 & 127 & 132


        96 & 110 & 114 & 122 & 127 & 133


        97 & 110 & 115 & 122 & 127 & 134


        97 & 111 & 116 & 122 & 128 & 134


        97 & 111 & 115 & 122 & 128 & 134


        100 & 111 & 115 & 122 & 128 & 134


        101 & 111 & 117 & 123 & 128 & 135


        101 & 111 & 117 & 123 & 128 & 136


        102 & 112 & 118 & 123 & 128 & 137


        102 & 112 & 118 & 123 & 130 & 137


        103 & 112 & 119 & 123 & 130 & 137


        103 & 113 & 119 & 124 & 130 & 144


        105 & 113 & 120 & 124 & 130 & 148


        106 & 113 & 120 & 124 & 130 & 149


        106 & 113 & 120 & 125 & 130 & 


        107 & 113 & 120 & 125 & 131 & 


        108 & 113 & 121 & 125 & 131 & 


        108 & 114 & 121 & 126 & 131 & 


    \end{tabularx}
    \caption{A set of observations.}
    \label{table3_1}
\end{table}


## Central Values of Distributions\label{sec3_3}
Frequently, however, we wish to go further.
If for example, we could find some single number that could be used as a substitute for the whole distribution, it might simplify the reporting of our results.
As candidates for a single number to represent the distribution as a whole, there are several possibilities, and we choose one or another, depending on the future use of the information.
The various possibilities are mode, median, and mean.

\subsection*{Mode}
Many distributions have a peak near the center.
If the peak is well defined, the value on the horizontal scale at which it occurs is called the \textbf{mode} of the distribution.
Whenever we wish to draw attention to such central concentration in our measured values, we quote the modal value.
Sometimes a distribution shows two peaks; we call it a \textbf{bimodal} distribution and quote the two modal values.

\subsection*{Median}
If we place all our readings in numerical order and divide the set into two equal parts, each containing the same number of readings, the value at which the dividing line comes is called the \textbf{median}.
Because it is obvious that areas under distribution graphs represent numbers of observations (the left-hand bar in Figure {ref}`Fig3_1` represents 1 observation, the second from the left represents 5, so that the two together represent 6, and so on), the median is that value at which a vertical line divides the distribution into two parts of equal area.
The median is frequently quoted in sociological work; people talk about median salaries for certain groups of employees, for example.

\subsection*{Mean}
The third of the commonly quoted numbers is a familiar arithmetic average, or \textbf{mean}.
For a group of `N` observations, `x_i`, the mean `\Bar{x}` is defined by

```{math}
\label{eq3_1}
    \bar{x} = \frac{\Sigma x_i}{N}
    
```
\noindent We shall discover that for our purposes the mean is the most useful of the three quantities we have defined.

Notice that for a symmetrical distribution the mean, median, and mode all coincide at the center of the distribution.
On the other hand, if the distribution is not symmetrical, each has a separate value.
For the histogram shown in Figure {ref}`Fig3_1`, the values of the mean, median, and mode are shown in Figure {ref}`Fig3_2`, which illustrates their relationship to the distribution as a whole.

If the distribution is markedly asymmetric, the difference between the mode, median, and mean can be substantial.
Consider, for example, the distribution of family income in a country.
The presence of the very wealthy, although they are relatively few in number, has an effect on the mean that counterbalances
many members of the population at the low end of the salary scale.
The
```{figure} figures/ch3/Fig3_2.png
:The relationship between a histogram and its mean, median, and mode.
:Fig3_2
```
mode and the mean thus differ substantially.
This example illustrates the care required in interpreting quoted statistics; people who quote statistics frequently do so in the way that best suits their particular purpose.

## The Breadth of Distributions\label{sec3_4}
Let us now turn to the question: To what extent is our chosen number representative of the distribution as a whole?
That is, how reliable is it to use a single number as a substitute for a whole distribution?
In answering that question, we have at the present stage no justification to offer for the procedures that will be described.
We rely, instead on an intuitive feeling that narrow distributions give us more confidence in the results than do broad distributions.

Let us, therefore, construct a quantity that is a measure of the breadth of the distribution.
We could invent many such quantities, but, for reasons that need not concern us at the moment, we define a quantity that is almost universally used.
Consider a set of `N` measurements `x_i` of which the mean is `x`.
We define the \textbf{standard deviation} of the set of values, `S`, to be
```{math}
\label{eq3_2}
    S = \sqrt{\frac{\Sigma (\Bar{x} - x_i)^2}{N}}

```

The definition is to some extent arbitrary, for in defining a measure of the breadth of the distribution we could have chosen other powers to which the quantity `(\Bar{x} - x_i)` could be raised, and we could have chosen other denominators.
There are, however, reasons for these choices; these reasons and the significance of the standard deviation will become clear shortly.

To calculate the standard deviation for a set of numbers, it is important to interpret the quantities in Equation {ref}`eq3_2` correctly.
Each of the quantities `\Bar{x} - x_i`; is the difference between the mean and an individual number in the set.
That difference may be positive or negative.
When we square these differences, we obtain a series of positive numbers whose sum is dependent on the breadth of the distribution and provides the numerator in the expression for `S`.
Almost all spreadsheet programs for computers and many calculators have built-in facilities for calculating standard deviations, and these greatly reduce the effort required.
As was mentioned earlier with regard to distribution curves, however, it is important to become personally familiar with the way the numbers work.
The examples at the end of the chapter, therefore, should be worked out by hand so that we may later know what calculators or
computers are doing.

We can pause at this stage to summarize the progress so far.
If we have made repeated measurements of a quantity and wish to state the result in numerical terms, we can do a number of things: (1) we can show the histogram, (2) we can quote the mode, median, or mean as a measure of the location of the distribution, and (3) we can quote the standard deviation as a measure of the breadth of the distribution.
We sometimes leave the outcome of a measuring process in this form; the quantities involved are universally understood, and the procedure is acceptable.

For our present purpose, however, we seek more detailed, numerical interpretation of the quoted values.

## Significance of the Mean and Standard Deviation\label{sec3_5}

In this and the following sections, for reasons that will become clear, we ignore the mode and median and restrict ourselves to numerical interpretation of the mean and the standard deviation.
Because the presence of random fluctuation has denied us the opportunity to identify a realistic interval within which we can feel certain our answer lies, we must alter our expectations of the measuring process.
As said before, it is not so much a matter of obtaining sensible answers to questions as of knowing the sensible questions to ask.
Specifically, it is not sensible to ask: What is the right answer?
It is not even sensible to ask: Having made 100 observations of a quantity, what shall I obtain when I make the measurement the next time?
The only sensible questions involve not certainty but probability, and several different questions about probabilities are possible.

For example, we could ask: What is the probability that the 101st reading will fall within a certain range on our scale of values?
That is a sensible question, and sensible answers can easily be imagined.
If, for example, of our 100 original readings, a certain fraction of the values fell within some particular range, we might feel justified in choosing that fraction as the probability that the 101st observation will fall within that interval.
This would not be an unrealistic guess, and we could attempt a standardized description of our distribution by quoting the fraction of the total number of readings that fall within various specified intervals.
This would satisfactorily convey information about our set of readings to other people, but a major problem appears when we discover that our answers for these probabilities are specific to our particular histogram.
If we were to make another series of 100 readings, holding all the conditions the same as they were before in the hope of obtaining the same histogram, we would be disappointed.
The new histogram would not duplicate the first exactly.
It might have similar general characteristics with respect to location and breadth, but its detailed structure would not be the same as before, and we would obtain different answers to questions about probabilities.

How, then, are we going to find answers to our questions that have some kind of widely understood numerical significance?
One solution is to abandon the attempt to describe our particular histogram and to start talking about defined theoretical distributions.
These may have the disadvantage of uncertain relevance to our particular set of observations, but there is the enormous advantage that, because they are defined theoretical constructs, they have properties that are definite, constant, and widely known.
Many such theoretical distributions have been constructed for special purposes, but we restrict ourselves to one only, the \textbf{Gaussian}, or \textbf{normal}, distribution.

We use the Gaussian distribution to interpret many kinds of physical measurement, partly because the mechanical circumstances of many physical measurements are in close correspondence with the theoretical foundations of the Gaussian distribution, and partly because experience has shown that Gaussian statistics do provide a reasonably accurate description of many real events.
For only one common type of physical measurement is another distribution more appropriate.
In counting events like radioactive decay we must use a distribution called the Poisson distribution, but even for it the difference from Gaussian statistics becomes significant only at low counting rates.
Further information about Poisson statistics can be found in books describing experimental methods in nuclear or high-energy physics.
Apart from these special cases, we can feel relatively confident that Gaussian statistics can be usefully applied to most real measurements.
Always remember, however, that unless we actually test our measurements for correspondence with the Gaussian distribution, we are making an \textit{assumption} that Gaussian statistics are applicable, and we should remain alert to any evidence that the assumption may be invalid.

## Gaussian Distributions and Sampling\label{sec3_6}
Even if to use it successfully we need not know very much about the origins of the Gaussian distribution, it is interesting to understand why its axiomatic foundations make it particularly relevant to many physical measurements.
The equation for the Gaussian distribution can be derived from the assumption that the total deviation of a measured quantity, `x`, from the unperturbed value `X` that would be obtained in the absence of perturbing fluctuations is the consequence of a large number of small fluctuations that occur randomly in positive and negative directions.
To construct a simple model of such a situation, suppose that there are `m` such contributions to the total deviation, each of equal magnitude `a` and equally likely to be positive or negative.
Any individual measured value, `x`, therefore, differs from `X` by an amount that contains a random number of positive contributions to the deviation and a corresponding number of negative contributions.
If we repeat the measuring process many times, therefore, we obtain a set of values that range from `X + ma ` for a measurement in which all the fluctuations happened to be positive simultaneously, to `X - ma` if the same happened in the negative direction.
Either of these possibilities is most unlikely.
If perturbations occur randomly, it is much more likely that they will occur in a mixture of positive and negative contributions, and so the total measured quantity `x` is more likely to be found near the middle of the range of possibilities than at the ends.

Such a situation, in which we have a random summation of positive and negative quantities, is similar to the so-called random walk.
In this, we depart from a starting point by deciding to take a step backward or forward, depending on whether a coin that we toss comes up heads or tails.
It can easily be demonstrated that our most probable location after any number of steps is the position from which we started.
It is the same with the measurements that have been perturbed by random perturbations.
The most probable sum of the perturbations is zero, meaning that for repeated measurements, `x`, the most common values are in the vicinity of `X`.
The distribution curve, therefore, has a peak in the middle, is symmetrical, and declines smoothly to zero at `X + ma` and `X - ma` .
If this concept is taken to the limiting case in which an infinite number of {ref}`Fig3_3`.
Treating the curve solely from the mathematical point of view for the moment, we can easily prove that its equation can be written

```{math}
\label{eq3_3}
    y = Ce^{-h^{2}(x-X)^{2}}

```
\noindent We need not be concerned about the derivation of this equation; for our purposes, it is sufficient to know the principles on which it is based and the resulting properties of the function.
If we wish to know more about the origins of the function, the full derivation is in Appendix {ref}`A1`.

```{figure} figures/ch3/Fig3_3.png
:Gaussian distributions with varying standard deviations.
:Fig3_3
```
In the equation, the constant `C` is a measure of the height of the curve since `y = C` for `x = X` at the center of the distribution.
The curve is symmetrical about `x = X` and approaches zero asymptotically.
The quantity `h` obviously governs the width of the curve, because it is only a multiplier on the `x` scale.
If `h` is large, the curve is narrow and high in relation to its width; if small, the curve is low and broad.
The quantity `h` clearly must be connected with the standard deviation of the distribution.
Now that we are dealing with a mathematically defined theoretical distribution instead of a finite set of \textit{real} observations, we modify our terminology a little.
We used the Latin letter `S` to denote the standard deviation of a finite set of real observations.
We use the Greek letter `\sigma` to represent the standard deviation that can be calculated for a \textit{mathematically defined} distribution, such as the Gaussian function.
For the Gaussian distribution, the relationship between its standard deviation `\sigma` and the geometrical measure of the width `h` is
```{math}
\label{eq3_4}
    \sigma = \frac{1}{\sqrt{2} h}

```
Now that we have a definite equation for the distribution, all the original ambiguity about interpreting the standard deviation in terms of probability disappears.
We now have definite, unique, and permanent values.
For example, the area enclosed within the interval `X \pm \sigma ` for a , Gaussian distribution is 68 percent of the total area under the curve, and Within the interval `X \pm 2 \sigma ` it is 95 percent and this is so for all Gaussian distributions.
The relation between the `\sigma` values and areas on the distribution, curve is shown in Figure {ref}`Fig3_4` by the lines drawn vertically at intervals of `1 \sigma ` and `2 \sigma ` from the central value.

```{figure} figures/ch3/Fig3_4.png
:The relationship of `1\sigma`, and `2\sigma` limits to the Gaussian distribution.
:Fig3_4
```
It is very comforting to have such definite numbers because we can say definitely that any particular value in a Gaussian set has a 68 percent chance of falling within the interval `X \pm \sigma ` and a 95 percent chance of falling within `X \pm 2 \sigma`, and we shall have the occasion to use these probability values repeatedly.
A more extensive account of the mathematical properties of the Gaussian distribution is in Appendix {ref}`A1`.

## Relation Between Gaussian Distributions and Real Observations\label{sec3_7}
The results given in the preceding section provide useful, precise methods for interpreting means and standard deviations, but a problem arises when we apply such thoughts to real measurements.
Numbers like 68 percent and 95 percent refer specifically to a theoretical construct, the Gaussian distribution.
When we engage in a real measuring process, all we have is one, or at most a few, actual measurements of our desired quantity.
We have at first no way of knowing which Gaussian distribution, with attached values of `X` and `\sigma`, is appropriate to our observations.
So what are we to do?
The answer lies in a concept that provides a bridge between the world of theoretical constructs and the world of real measurements.
For the particular circumstances of our measurement, we invent the concept of the infinite set of measurements that could be made.
For rather obvious reasons, this infinite set of measurements will never be made, but the concept enables us to interpret our real measurements.
The construct is called the \textbf{universe}, or \textbf{population}, for that particular measurement.
Once we have made, say, 100 measurements with a particular apparatus, we tend to feel that nothing exists but our 100 values.
We must now invert our thinking and view the measurements as a \textbf{sample} of the infinitely large universe, or population, of measurements that could be made.
The universe, however, is permanently inaccessible to us; we shall
never know the universe distribution or its mean or its standard deviation.
Our task is to construct \textit{inferences} about these quantities from the definitely known properties of our sample.

We do this on the basis of some assumptions.
First, we assume that the universe distribution is Gaussian, and we call the universe mean `X` and the universe standard deviation `\sigma`.
This assumption enables us to make statements such as: If we make just one measurement with our equipment, that one measurement has a 68 percent chance of falling within the interval `X \pm \sigma ` and a 95 percent chance of falling within `X \pm 2\sigma`: This seems like an encouragingly exact and explicit statement, but it has an overwhelming defect; we do not (and never shall) know the values of `X` and `\sigma`.
In other words, having made only one observation of a quantity that is subject to random fluctuation, we have gained practically nothing.
We can say only that our single measured value has a 68 percent chance of falling within something of somewhere, which is not too helpful.
Our only hope lies in obtaining some information, even if uncertain, about the universe distribution.
As already mentioned, we are never going to be able to determine the universe distribution exactly, because that would require an infinite number of readings.
We can only hope that, if we repeat our measuring process to obtain a sample from the universe, that sample will enable us to make some estimate of the universe parameters.

Because we make the basic assumption that the universe distribution is a mathematical, defined function (whether Gaussian or some other equally well-defined distribution), we can evaluate mathematically the properties of samples taken from that universe and compare the sample properties with those of the distribution of single observations.
We simply state these properties of samples without proof.
The reader who is curious about the mathematical derivation of these results is encouraged to turn to the standard texts on statistics, in which there are sections dealing with sampling theory.

The properties of samples become clear if we consider the concept of repeated sampling.
Consider that with a certain piece of apparatus, we make 100 observations.
This is our first sample; let us calculate its mean and standard deviation and record them.
Now, let us make another set of 100 observations and record the mean and standard deviation.
We continue such repetition until we have an infinite number of samples, each with its own mean and standard deviation, and we then plot the distribution curves of these sample means and of the sample standard deviations.
Of course, we shall never carry out a process like this with actual observations, but knowing the mathematical function for our original universe of single readings, we can simulate such repeated sampling mathematically and so derive the properties of the samples in comparison with those of the original universe of single readings.
The results of such calculations of the distribution of sample means and sample standard deviations are shown in Figure {ref}`Fig3_5` and Figure {ref}`Fig3_6`.
and they are described in the following sections.
```{figure} figures/ch3/Fig3_5.png
:Fig3_5
```

## Sample Means and Standard Deviation of the Mean\label{sec3_8}

```{figure} figures/ch3/Fig3_6.png
:The distribution of sample standard deviations.
:Fig3_6
```
If the universe distribution of single readings is Gaussian, the theory of sampling shows that the distribution of sample means is also Gaussian.
The distribution of sample means has two other very important properties.
First, it is centered on `X`, the center of the original distribution of single readings: second, it is narrower than the original distribution.
This narrowness is highly significant because it demonstrates immediately the improvement in precision that comes from samples as opposed to single readings; the means of samples cluster more closely around the universe mean than do single readings; The reduced scatter of sample means is represented by an important quantity-the standard deviation of the distribution of sample means.
This quantity is called the \textbf{standard deviation of the mean}; Its symbol is `\sigma_m` and sampling theory gives its value as
```{math}
\label{eq3_5}
\sigma_{m} = \frac{\sigma}{\sqrt{N}}

```
where `N` is the number of readings in the sample.
This result gives us the opportunity to make a very important statement.
A particular sample mean has a 68 percent chance of falling within the interval `X \pm \sigma_m ` and a 95 percent chance for the interval ` X \pm 2\sigma_m `.
These intervals are smaller than the corresponding intervals for single readings, and they supply a numerical measure of the improved precision that is available from sampling.

Notice that the statement about sample means, although precise and important, still does not help us much because it still involves the unknown quantities `X` and `\sigma`. The resolution of this difficulty and the significance of the standard deviation of the mean will become clear soon.
In the meantime, we turn our attention briefly to the other important property of samples-the distribution of sample standard deviations.

## Sample Standard Deviation\label{sec3_9}
It can be proved by sampling theory that the sample standard deviations also fall on a Gaussian distribution that is centered on the value of the universe standard deviation a.
The distribution is illustrated in Figure {ref}`Fig3_6`.
As will become clear, however, the variance of the sample standard deviations will not concern us as much as the variance of sample means, and we postpone to Section {ref}`sec3_11` further discussion of the variance of sample standard deviations.

## Application of Sampling Theory to Real Measurements\label{sec3_10}
The sample properties just presented are interesting, but how do they help us when we do not have access to the
actual distributions, either for sample means or sample standard deviations?
When making real measurements, we obtain
our lone sample with its mean and standard deviation, and we have no idea how these values relate to the universe
values.
The problem, therefore, is to find a connection between the theoretical results and the sample properties that allows us to infer the universe properties from the sample values.
We cannot expect to obtain exact information.
In addition, we must make one basic, obviously imprecise assumption.
Assume that our single number, the standard deviation of our sample, provides us with a value for the universe standard deviation.
In fact, it can be proved that the ``best estimate'' (a mathematically defined term) of the universe standard deviation is given by the quantity
```{math}
\label{eq3_6}
     S = \sqrt{\frac{\Sigma \left(\bar{x} - x_{i}\right)^2}{N-1}}

```

This quantity is only slightly different from the original value for the standard deviation of a set of observations.
The `N` in the denominator of the original expression has been replaced by `N-1`, and the difference between the two quantities is significant for only small values of `N`.
In the future, when we talk about a sample standard deviation, we shall assume that we are using the equation in the new form and that we are really talking about the ``best estimate'' of the universe value ` \sigma `.

Accepting the sample standard deviation as the best estimate of `\sigma`, we are now able to make a definite statement about the single sample.
We can rephrase Equation {ref}`eq3_5` and define
```{math}
\label{eq3_7}
 S_m = \frac{S}{\sqrt N}

```
as our standard deviation of the mean, now a known quantity obtained from our real sample.
We can now say: The sample mean `\bar{x}` has a 68\
This statement is close to what we want, but it is not yet completely
satisfactory.
It tells us something about a quantity that we know, `\bar{x}`, in terms of a quantity that we do not know, `X`.
We really want the statement to be the other way around; we want to be able to make an assertion about the unknown, `X`, in terms of a quantity, `\bar{x}`, of which we do know the value.
Fortunately, it is possible to prove that the above statement about probabilities can be inverted to yield the desired result.
We obtain thereby the statement toward which we have been working ever since we started the discussion of the statistics of fluctuating quantities.
The final statement is: There is a 68\
Along the scale of `x` values, we now have a real and known interval between `\bar{x} - S_m`, and `\bar{x} + S_m`, and we know that there is a 68\

This statement provides us with the answer we have been seeking and brings us as close as we can come to exact information about the unperturbed value of the measured quantity.
It is worth becoming familiar with the arguments that have been given in the preceding sections; there is more to measurement than simply making a few measurements and ``taking the average'' just because it seems to be the right thing to do.
We should understand fully the significance of what we are doing.

## Effect of Sample Size\label{sec3_11}
Clearly, in any sampling process, the larger the sample, the more precise the final statements.
Even though the precision of a mean value increases only as the square root of the number of observations in the sample [Equation {ref}`eq3_5`], it does increase, and larger samples have more precise means.
There may, however, be limitations of time or opportunity, and we cannot always obtain samples of the size we would like.
Usually, a compromise must be sought between the conflicting demands of precision and time, and good experiment design incorporates this compromise into the preliminary planning.
Nevertheless, it may occasionally be necessary to be content with small samples.
In this undesirable eventuality, we should be aware of the magnitude of the resulting loss of precision.
There is, first, the influence on the value of the standard deviation of the mean; the smaller `N` is, the larger the value of `S_m`and the longer the interval on the `x` scale that has the 68\

Second, for small samples, we must place declining faith in the use of the sample standard deviation `S` as the best estimate of the universe value `\sigma`, To illustrate this, recall the distribution curve for sample standard deviations shown in Figure {ref}`Fig3_6`.
It is worth asking: Given the existence of this distribution, how good is our best estimate of the universe standard deviation, and how does it vary with sample size?
The answer must be based on the width of the distribution of sample standard deviations, and so we should calculate the standard deviation of this distribution.
It is called the \textbf{standard deviation of the standard deviation}.
(This process could obviously go on indefinitely, but we stop at this stage:) The value of the standard deviation of the standard deviation, calculated mathematically by sampling theory on the basis of the equation of the Gaussian distribution, is
```{math}
\label{eq3_8}
\sigma_s = \frac{\sigma}{\sqrt{2(N-1)}}

```

The breadth of the distribution of sample standard deviation is thus related to its central value `\sigma` by the numerical factor `1/\sqrt{2(N-1)}`.
As one might expect, therefore, the accuracy of the sample standard deviation as the best estimate of the universe value depends on the sample size.
For example, with a sample size of 10, Equation {ref}`eq3_8` shows that the `S` value from the sample has a 68\
Correspondingly, the interval that has a 95\
This does not represent high precision of measurement.
We have, therefore, confirmed the warning given earlier: statistical exercises with small samples should be undertaken only when no alternative exists.
To provide an overall feeling for the reliability of `\sigma` estimates from samples of differing sizes.
Table {ref}`table3_1` contains some typical values of `\sqrt{2(N-1)}` for various of `N`.

These values are illustrated in Figure {ref}`Fig3_7` for `N = 3`, `N = 10`, and `N = 100`.
The `\pm 1\sigma_s` limits are marked on these curves, showing, for various sample sizes, the intervals within which there is a 68\
For values of `N` less than about 10, it is clear that the intervals for 68\
It is rarely worth attempting any kind of statistical analysis with samples containing fewer than about 10 observations.
When reporting the outcome of statistical work, it is essential to quote the sample size.
If we intend our values for the mean and standard deviation of the mean to be interpreted in accordance with the 68\


```{list-table}
:Accuracy of `\sigma` estimates from samples of varying size.
:table3_2
:header-rows: 1

* - \hline
    68\
    \hline
    `N`
  - `\sqrt{2\left(N-1\right)}`
  - `N`
  - `\sqrt{2\left(N-1\right)}`


    \hline
    2
  - 1.4
  - 2
  - 0.7


    3
  - 2.0
  - 3
  - 1.0


    4
  - 2.4
  - 4
  - 1.2


    5
  - 2.8
  - 5
  - 1.4


    6
  - 3.1
  - 6
  - 1.6


    7
  - 3.4
  - 7
  - 1.7


    8
  - 3.7
  - 8
  - 1.8


    9
  - 4.0
  - 9
  - 2.0


    10
  - 4.2
  - 10
  - 2.1


    15
  - 5.2
  - 15
  - 2.6


    20
  - 6.1
  - 20
  - 3.2


    50
  - 9.8
  - 50
  - 4.9


    100
  - 14.1
  - 100
  - 7.0


    \hline
```

```{figure} figures/ch3/Fig3_7.png
:Sample standard deviation distributions for samples of various sizes.
:Fig3_7
```
## Standard Deviation of Computed Values\label{sec3_12}

In Chapter 2 we considered the uncertainty of computed values `z`, and we assumed that the uncertainty of the basic measurements constituted intervals within which we were almost certain that the values lay.
We calculated the maximum range of variability of the computed answer on the pessimistic assumption that the errors in the various measured values had combined in a worst-case fashion to drive the computed answer as far away from the central value as it could go.
We have already suggested that this represents an unrealistically pessimistic approach and that a more useful quantity would be a \textit{probable} value for the uncertainty in `z` that is based on the various probabilities associated with deviation of the basic quantities `x`, `y`, and so on, from their central values.
The limits given by this quantity will naturally be smaller than the ` \pm \delta z` that we calculated before, but we can hope to find actual numerical significance for them.
Such statistical validity is available only if the uncertainties in `x` and `y` have statistical significance, and we assume in the following calculations that the measurements of `x` and `y` have been sufficiently numerous to justify a calculation of the standard deviations `S_x` and `S_y`.
We hope now to calculate a value for `S_z` that will have the same significance for `z` values as `S_x` and `S_y` had for the values of `x` and `y`.

We must first ask what we mean by `S_z`.
To construct an interpretation, we assume that the measuring process has given us `N` pairs of observations `x`, `y` that were obtained by repetition of the observing process under identical conditions (for example, the current through and the potential across a resistor that had been measured for the purpose of calculating the resistance `R`). Each pair of observations provides a value of `z` through some functional relation `z = f (x,y)`.
Because repetition of the basic measurements yielded `N` pairs, we now have a set of `N` values of `z`.
These are not identical because of fluctuations in the basic measurements `x` and `y`.
The `z` values therefore fall on a distribution curve, and the quantity we require, `S_z`, is the standard deviation
of this set of `z` values.
These individual values of `z` may, of course, never be calculated separately because a simpler mode of calculating our final answer exists.
We can calculate the means `x` and `y` of the sets of `x` and `y` values and obtain `z` directly by using the assumption (valid if `S_x`, `S_y`, and `S_z` are small compared, respectively, with `\overline{x}`, `\overline{y}`, and `\overline{z}`) that

```math
\overline{z} = f\left(\overline{x}, \overline{y}\right)
```

\noindent Even if we never calculate them individually, that distribution of separate z
values provides the significance of the `S`: that we are about to calculate.

If we assume that the universes of the separate `x`, `y`, and `z` values have Gaussian distributions, the quantity `\sigma_z`: (of which we are about to calculate the best estimate in terms of the various `S` values) has the usual significance (i.e., any particular `z` value has a 68\
As before, let

```math
z=f\left(x,y\right)
```

and consider perturbations `\delta x` and `\delta y` that lead to a perturbation `\delta z` in the
computed value of `z`.
The value of `\delta z` will be given, as before, by

```math
\delta z = \frac{\partial z}{\partial x}\delta x + \frac{\partial z}{\partial y}\delta y
```

\noindent This perturbation in `z` can be used to calculate a standard deviation for the `N` values of `z`.
Each perturbation in `z` is equivalent to the difference between a mean and a measured value that appears in the definition of a standard deviation.
Hence, the standard deviation of the set of `z` values is given by


```math
S_z = \sqrt{\frac{\Sigma(\delta z)^2}{N}}
```

\noindent Thus


\begin{align}\nonumber
(S^{2})_z & = \frac{1}{N} \sum \left(\frac{\partial z}{\partial x} \delta x + \frac{\partial z}{\partial y} \delta y \right)^2

\nonumber
        & = \frac{1}{N} \sum \left(\left(\frac{\partial z}{\partial x}\right)^2 (\delta x)^2 + \left (\frac{\partial z}{\partial y} \right)^2 (\delta y)^2 + 2 \frac{\partial z}{\partial x} \frac{\partial z}{\partial y} (\delta x \delta y) \right)

\nonumber
        & = \left (\frac{\partial z}{\partial x} \right)^2 \frac{1}{N} \sum (\delta x)^2 + \left (\frac{\partial z}{\partial y} \right)^2 \frac{1}{N} \sum (\delta y)^2 + \frac{2}{N} \frac{\partial z}{\partial x} \frac{\partial z}{\partial y} \sum (\delta x \delta y) \nonumber
\end{align}


```{math}
\nonumber
\text{But} \hspace{7mm}
\frac{1}{N} \sum (\delta x)^2 = {S_x}^2 \hspace{7mm}
\text{and} \hspace{7mm}
\frac{1}{N} \sum (\delta y)^2 = {S_y}^2

```

\noindent Also, because `\delta x` and `\delta y` may be considered for the present purpose to be independent perturbations,

```math
\sum\left(\delta x\delta y \right) = 0
```

\noindent Thus, finally,

```{math}
\label{eq3_9}
S_z = \sqrt{\left(\frac{\partial z}{\partial x}\right)^2S_x^2 + \left(\frac{\partial z}{\partial y}\right)^2S_y^2}

```

\noindent If `z` is a function of more than two variables, the equation is extended by adding similar terms.
Thus, if the components of a calculation have standard deviations with some degree of reliability, a value can be found for the probable uncertainty of the answer, where ``probable'' has real numerical significance.

The calculation has been performed in terms of the variance or standard deviation of the `x` and `y` distributions.
In actual practice, however, we do not use the sample variance directly; we must calculate the best estimates of `\sigma_x`, `\sigma_y`, and so on, and in accordance with Equation {ref}`eq3_6`, we use the modified value for standard deviation with denominator `N -1` instead of `N`.
The final result is then a best estimate for `\sigma_z`.
The standard deviation of the mean for `z` is then calculated by direct use of Equation {ref}`eq3_5` and gives the limits that have a 68\

Note that most experiments are not carried out in accordance with the restricted assumptions of the foregoing development.
If, for example, we are studying the flow rate of water through a pipe, we would measure the flow rate, pipe radius, and pipe length independently and would choose the number of readings in each sample on the basis of the intrinsic precision of the measurement.
We cannot, therefore, use Equation {ref}`eq3_9` directly, because the various `S's` are not compatible.
The solution is to calculate the standard deviation of the mean for each of the elementary quantities first.
If these are used in Equation {ref}`eq3_9`, the result of the calculation is immediately a
standard deviation of the mean for `z`.

## Standard Deviation of Computed Values: Special Cases\label{sec3_13}

Let us now apply Equation {ref}`eq3_8` to a few common examples.
In all the following cases the various `S_s` are all assumed to be the best estimates of the appropriate universe value `\sigma`.

\subsection*{Sum of Two Variables}

If

```{math}
\nonumber
z = x + y

```

then

```{math}
\nonumber
\frac{\delta z}{\delta x} = 1,  \hspace{7mm}
\frac{\delta z}{\delta y} = 1

```

and

```{math}
\nonumber
S_z = \sqrt{{{S}^2}_x + {{S}^2}_y}

```

Note that this result provides justification for Eq. {ref}`eq3_5`.
The mean value for
the sample, `\Sigma (x_i) / N `, is just such a function as `Z = x + Y`, where `x` and `y`
happen to be independent measurements of the \textit{same} quantity.
Thus, if

```{math}
\nonumber
z = \frac{1}{N} (x_1 + x_2 + x_3 +...)

```

```{math}
\nonumber
\frac{\delta z}{\delta x_1} = 1/N,  \hspace{7mm}
\frac{\delta z}{\delta x_2} = 1/N,
\hspace{5mm}
\text{and so on}

```

and

\begin{align}\nonumber
    S_z & = \sqrt{{\frac{1}{N}}^2 {S^2}_x + {\frac{1}{N}}^2 {S^2}_x +...}

\nonumber
    


    & = \sqrt{N{S^2}_x / N^2 }

\nonumber
    


    & = S_x / \sqrt{N}
\end{align}
which is the result we had earlier for the standard deviation of the mean.



\subsection*{Difference of Two Variables}

If
```math
z = x - y
```
```{math}
\nonumber
\frac{\delta z}{\delta x} = 1,  \hspace{7mm}
\frac{\delta z}{\delta y} = -1,

```

but, again,

```math
S_z = \sqrt{{S^2}_x + {S^2}_y}
```

Recalling Section {ref}`sec2_8`, we note that the earlier discussion of measured differences is still valid.
The standard deviations in x and y combine additively, even though the quantity `x - y` can have quite small values.

\subsection*{Product of Two Variables}

If

```math
z = xy
```

```{math}
\nonumber
\frac{\delta z}{\delta x} = y,  \hspace{7mm}
\frac{\delta z}{\delta y} = x,

```

and

```math
 S_z = \sqrt{y^2 {S^2}_x + x^2 {S^2}_y}
```

The specific value of `S_z` at any particular values of `x` and `y`, say `x_o` and `y_o`, can be obtained by substituting `x_o` and `y_o` in this expression.
As was the case for uncertainty in products, the equation is more clearly expressed in terms of relative values of `S_z`.
We obtain

```math
 \frac{S_z}{z} = \sqrt{\frac{{S^2}_x}{x^2} + \frac{{S^2}_x}{x^2}} 
```

\subsection*{Variables Raised to Powers}

If

\begin{align}\nonumber
   z & = x^a 

\nonumber
    & = \frac{\delta z}{\delta x} = ax^{a-1}
\end{align}

and
\begin{align}\nonumber
   S_z & = \sqrt{a^2 x^{2(a-1)} {S^2}_x}

\nonumber
    & = ax^{(a-1)} S_x
\end{align}

\noindent Again, this result is more instructive and more easily remembered when expressed in terms of relative values:

\begin{align}\nonumber
    \frac{S_z}{z} &= \frac{a x^{(a-1)} S_x}{x^a}

\nonumber
    &= a\frac{S_x}{x}
\end{align}

\subsection*{The General Case of Powers and Products}
If
```math
z = x^ay^b
```
\noindent the results of the two preceding sections can obviously be extended to give the result

```math
\frac{S_z}{z} = \sqrt{\left(\frac{a S_x}{x}\right)^2+\left(\frac{b S_y}{y}\right)^2}
```

\noindent In contrast to the case of combined uncertainty, negative powers in the original function need not be given special consideration; in the equation for `S_z` powers occur in squared form and automatically make a positive contribution.

If a function other than those we have listed is encountered, the use of Equation {ref}`eq3_9` yields the desired result.
Incidentally, we may note that for a function of a single variable, Equation {ref}`eq3_9` reduces to the same form as for uncertainties, Equation {ref}`eq2_1`.
This correspondence could easily have been predicted for a situation in which we do not have the probability-based interplay between two or more variables.

## Combination of Different Types of Uncertainty\label{sec3_14}
Unfortunately for the mathematical elegance of the development, we frequently require the uncertainty in a computed result to contain quantities having different types of uncertainty.
We may require the uncertainty in a function
```math
z = f(x,y)
```
\noindent in which, for example, `x` is a quantity to which have been assigned outer limits, `\pm\delta x`, within which we are ``almost certain'' that the actual value lies, and `y` is a quantity whose uncertainty is statistical in nature, a sample standard deviation, `S_y`, perhaps, or a standard deviation of the mean, `S_y/\sqrt{N}`.
We require an uncertainty for `z`.
The initial difficulty is even to define the uncertainty in `z`.
We are trying to combine two quantities that in effect have completely different distribution curves.
One is the standard Gaussian function; the other is a rectangle.
This rectangle is bounded by the values `x_o + \delta x` and `x_o - \delta x` and is flat on top because the actual value of `x` is equally likely to be anywhere within the interval `x_o \pm \delta x`.
Any general method of solving this problem is likely to be far too complex for general use, but a simple approximation is obtainable by using the following procedure.

In the calculation for `z` we could use the sample mean, `\bar{y}`, for the `y` value, implying that the universe mean has an approximately two-thirds chance of falling within the interval, `\bar{y} \pm S_y/\sqrt{N}`.
We, therefore, calculate limits for `x` that also have a two-thirds probability of enclosing the actual value.
Because the probability distribution for `x` is rectangular, two-thirds of
the area under the distribution curve is enclosed by limits that are separated by a distance equal to two-thirds of the total range of possibility (i.e., two-thirds of `2\delta x`). The total width of the region for two-thirds probability is therefore, `(4/3)\delta x` and the uncertainty limits are `\pm(2/3)\delta x`.

The quantity `\pm(2/3)\delta x` is compatible with `S_y/\sqrt{N}` because both refer to two-thirds probability, Equation {ref}`eq3_9` can now be used, inserting `\pm(2/3)\delta x` for the value of the standard deviation of the mean for `x` and `S_y/\sqrt{N}` for the `y` function, This yields a value for uncertainty in `z` which can be interpreted in accordance with the two-thirds prescription, Note that the limits for 95\

## Rejection of Readings\label{sec3_15}
One last practical property of distribution curves concerns outlying values, There is always the possibility of making an actual mistake, perhaps by misreading a scale or in accidentally moving an instrument between setting and reading, There is the temptation to assign some such cause to a single
reading that is well separated from an otherwise compact group of values, This is a dangerous temptation because the Gaussian curve does permit values remote from the central part of the curve, Furthermore, once we admit the possibility of pruning the observations, it can become difficult to know where to stop, We are dependent, on the judgment of the experimenter.
This is not unreasonable, because the experimenter knows more about the measurement than anyone else, but the criteria for making the choices can be
helpful, Many empirical ``rules'' for rejection of observations have been formulated, but they must be used with discretion, It would be foolish to use a rule to reject one reading that was just outside the limit set by the rule if there are other readings just inside it.
There is also the possibility that extra
information relating to the isolated reading was noted at the time it was made, and this can help us decide in favor of retention or rejection.

The guidance for making such decisions can be found in the properties of the Gaussian distribution, In a Gaussian distribution the probability of obtaining readings outside the `2\sigma` limits is 5\
is no more than `6 \times 10^-5`.
The decision to reject is still the responsibility of the experimenter, but we can say in general terms that readings that fall outside `3\sigma` limits are likely to be mistakes and candidates for rejection, However, a problem can arise because of our lack of information about the universe of readings and its parameters `X` and`\sigma`.
The better our knowledge of `\sigma`, the more confident we can be that any far-out and isolated reading arises from a genuinely extraneous cause such as personal error, malfunction of apparatus, and the like.
Thus, if we make 50 observations that cluster within 1\
The basic requirement before any rejection is justified is confidence in the main distribution of readings.
Clearly, there is no justification for taking two readings and then rejecting a third measurement on the basis of a `3\sigma` criterion.
Unless the case for rejection is completely convincing, the best course is to retain all readings, whether we like them or not.

It is wise also to remember that many of the greatest discoveries in physics had their origin in outlying measurements.

\section*{Problems}\label{sec3_16}
\addcontentsline{toc}{section}{\protect\numberline{}Problems}
The following observations of angles (in minutes of arc) were made while measuring the thickness of a liquid helium film.
Assume that the observations show random uncertainty, that they are a sample from a Gaussian universe, and use them in Problems 1 to 14.

\begin{table}[htb]
    \centering
    \begin{tabularx}{\textwidth}{>{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X}
        34 & 35 & 45 & 40 & 46


        38 & 47 & 36 & 38 & 34


        33 & 36 & 43 & 43 & 37


        38 & 32 & 38 & 40 & 33


        38 & 40 & 48 & 39 & 32


        36 & 40 & 40 & 36 & 34


    \end{tabularx}
    \caption*{Table of Gaussian distributed angle measurements.}
    \label{table3_probs}
\end{table}

1. Draw the histogram of the observations.
2. Identify the mode and the median.
3. Calculate the mean.
4. Calculate the best estimate of the universe standard deviation.
5. Calculate the standard deviation of the mean.
6. Calculate the standard deviation of the standard deviation.
7. \subitem (a) Within which limits does a single reading have a 68\
        \subitem (b) Which limits give a 95\
8. Within which limits does the mean have
        \subitem (a) a 68\
        \subitem (b) a 95\
9. Within which limits does the sample standard deviation stand
        \subitem (a) a 68\
        \subitem (b) a 95\
10. Calculate a value for the constant `h` in the equation for the Gaussian distribution.
11. If a single reading of 55 had been obtained in the set, would you have decided in favor of accepting it or rejecting it?
12. Take two randomly chosen samples of five observations each from the main set of readings.
Calculate their sample means and standard deviations to see how they compare with each other and with the more precise values obtained from the complete sample.
13. If the experiment requires that the standard deviation of the mean should not exceed 1\
14. If the standard deviation of the universe distribution must be known within 5\
15. Repeated measurements of the diameter of a wire of circular cross section gave a mean of 0.62 mm with a sample standard deviation of 0.04 mm.
What is the standard deviation for the calculated value of the cross-sectional area?
16. The wavelength of the two yellow lines in the sodium spectrum are measured to be `589.11 \times 10^{-9}` m and `589.68 \times 10^{-9}` m, each with a standard deviation of `0.15 \times 10^{-9}` m.
What is the standard deviation for the calculated difference in wavelength between the two lines?
17. A simple pendulum is used to measure `g` using ```math
T=2\pi\sqrt{\frac{\ell}{g}}
``` Twenty measurements of `T` gave a mean of 1.82 s and a sample standard deviation of 0.06 s.
Ten measurements of `\ell` gave a mean of 0.823 m and a sample standard deviation of 0.014 m.
What is the standard deviation of the mean for the calculated value of `g`?
