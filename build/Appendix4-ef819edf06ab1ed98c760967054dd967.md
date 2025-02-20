# Appendix 4: Model Experiment

## 4.1 Experiment Design

### System
For our experiment, we have:
- A spring suspended from a rigid stand
- A pan for holding weights attached to the lower end of the spring
- A set of calibrated weights
- A stopwatch with 0.2-second precision

### Model
According to basic physics principles, if we assume that a spring's extension is proportional to the applied load (Hooke's Law), the period of oscillation (T) of a suspended mass (m) is given by:

$$T = 2\pi\sqrt{\frac{m}{k}}$$

Where k represents the spring constant (N/m).

### Requirement
Our task is to measure the spring constant k with an uncertainty no greater than 10%.

### Experiment Design
Following a systematic approach:

1. **Identifying the system**: Our primary focus is on the spring itself, whose properties we want to characterize.

2. **Selecting variables**: The model contains two measurable variables—the load m (input variable we control) and the period of oscillation T (output variable).

3. **Arranging the equation**: To convert our model into straight-line form, we rearrange:
   $$T = 2\pi\sqrt{\frac{m}{k}}$$
   
   Squaring both sides:
   $$T^2 = \frac{4\pi^2}{k}m$$
   
   This can be rewritten as:
   $$m = \frac{k}{4\pi^2}T^2$$
   
   Where:
   - Vertical variable = m
   - Horizontal variable = T²
   - Slope = k/4π²
   
   This approach allows us to determine k directly from the slope.

4. **Determining variable ranges**: We should consider:
   - The available weights in our set
   - The potential elastic limit of the spring to avoid permanent deformation
   - The practical range for timing oscillations

5. **Evaluating precision requirements**: If we aim for 10% uncertainty in k, we need better precision in our measurements of m and T.

   For time measurements: If we estimate a timing uncertainty of ±0.3s and want this to contribute no more than 5% uncertainty to the period T (since T² has approximately twice the relative uncertainty of T), we need:

   $$\frac{0.3}{t} < 0.05$$
   
   Which means:
   $$t > \frac{0.3}{0.05} = 6\text{ seconds}$$
   
   Therefore, we should time multiple oscillations so that the total measured time exceeds 6 seconds for each measurement.

### Measurement Program
Based on our design considerations, we'll prepare a measurement table with the following columns:
- Load, m (kg)
- Number of oscillations
- Total time, t (s)
- Period, T (s)
- Period², T² (s²)
- Absolute uncertainty in T², ΔT² (s²)

This structured approach will help us collect and organize all necessary data for analysis.

## 4.2 Experimental Results

The measurements are presented in Table 1, where each entry includes its associated uncertainty.

**Table 1: Variation of Oscillation Period with Load**
| Load, m (kg) | # of Osc. | Time, t (s) | Period, T (s) | Period², T² (s²) | ΔT² (s²) |
|-------------|-----------|-------------|---------------|-------------------|----------|
| 0.10 | 10 | 8.2 ± 0.3 | 0.82 ± 0.03 | 0.67 | 0.05 |
| 0.15 | 10 | 9.8 | 0.98 | 0.96 | 0.06 |
| 0.20 | 10 | 10.7 | 1.07 | 1.14 | 0.06 |
| 0.25 | 10 | 11.5 | 1.15 | 1.32 | 0.07 |
| 0.30 | 10 | 12.5 | 1.25 | 1.56 | 0.08 |
| 0.35 | 10 | 13.0 | 1.30 | 1.69 | 0.08 |
| 0.40 | 10 | 13.8 | 1.38 | 1.90 | 0.08 |
| 0.45 | 10 | 14.5 | 1.45 | 2.10 | 0.09 |
| 0.50 | 10 | 15.2 | 1.52 | 2.31 | 0.09 |

These measurements need to be graphed to visualize the relationship between load and period squared. Figure 1 shows the initial plotting of the data points with their uncertainty ranges.

![Graph of m vs. T²](figure_placeholder_1.jpg)
*Figure 1: Plotting of the measured values with uncertainty ranges.*

To analyze this data properly, we need to:
1. Assess whether the points follow the expected linear relationship
2. Determine the best-fit line and limiting cases
3. Calculate the spring constant k from the slope

After plotting the data and drawing the best-fit line through the points (Figure 2), we calculate the slopes at three points:

![Final graph with best-fit line](figure_placeholder_2.jpg)
*Figure 2: Final graph of m vs. T² with best-fit line and uncertainty limits.*

From the graph, we identify key coordinates for calculating slopes:

**Steepest line:**
$$\text{slope} = \frac{0.55-0.03}{2.44-0.44} = 0.260 \text{ kg/s²}$$

**Central (best) line:**
$$\text{slope} = \frac{0.60-0.05}{2.72-0.48} = 0.2455 \text{ kg/s²}$$

**Least steep line:**
$$\text{slope} = \frac{0.57-0.09}{2.68-0.60} = 0.231 \text{ kg/s²}$$

Since slope = k/4π², we calculate k values:

**Highest k value:**
$$k = 4\pi^2 \times 0.260 = 10.26 \text{ kg/s²}$$

**Central k value:**
$$k = 4\pi^2 \times 0.2455 = 9.69 \text{ kg/s²}$$

**Lowest k value:**
$$k = 4\pi^2 \times 0.231 = 9.12 \text{ kg/s²}$$

The uncertainty in our k measurement is therefore:
$$\Delta k = \pm 0.57 \text{ kg/s²}$$

Our final result is:
$$k = 9.7 \pm 0.6 \text{ kg/s²}$$

This gives us a relative uncertainty of 6%, which is better than our target of 10%.

An interesting observation is the presence of a small negative intercept:
$$b = 0.6 - 0.2455 \times 2.72 = -0.068 \text{ kg}$$

This intercept, which gives T = 0.53 s when m = 0, suggests there may be unaccounted mass in the system, possibly from the pan or the spring itself. While this doesn't affect our k value (which depends only on the slope), it reveals an aspect of the physical system not captured in our simplified model.

## Report

# MEASUREMENT OF A SPRING CONSTANT BY AN OSCILLATION METHOD

### Introduction
The stiffness of a spring can be determined by measuring the oscillation period of attached masses. For an elastic spring (where extension is proportional to load), the period of oscillation T of a suspended mass m is given by:

$$T = 2\pi\sqrt{\frac{m}{k}}$$

where k is the spring constant. This experiment aims to measure k for a specific spring with uncertainty less than 10%.

The equation can be rewritten as:
$$m = \frac{k}{4\pi^2}T^2$$

This linear relationship between m and T² allows us to determine k from the slope of a graph plotting mass versus period squared.

### Procedure
Using a spring suspended from a support stand (Figure 1), we measured how oscillation period varies with different loads.

![Experimental setup](figure_placeholder_3.jpg)
*Figure 1: Diagram of spring with support and attached load m.*

We used a calibrated Cenco weight set ranging from 0.1 kg to 0.5 kg with a stated precision of 0.04%.

The period of oscillation was determined by timing multiple oscillations using a stopwatch graduated in fifths of a second.

### Results
The measurements of load and oscillation period are presented in Table 2.

**Table 2: Variation of Oscillation Period with Load**
| Load, m (kg) | # of Osc. | Time, t (s) | Period, T (s) | Period², T² (s²) |
|-------------|-----------|-------------|---------------|-------------------|
| 0.10 | 10 | 8.2 ± 0.3 | 0.82 | 0.67 ± 0.05 |
| 0.15 | 10 | 9.8 | 0.98 | 0.96 ± 0.06 |
| 0.20 | 10 | 10.7 | 1.07 | 1.14 ± 0.06 |
| 0.25 | 10 | 11.5 | 1.15 | 1.32 ± 0.07 |
| 0.30 | 10 | 12.5 | 1.25 | 1.56 ± 0.08 |
| 0.35 | 10 | 13.0 | 1.30 | 1.69 ± 0.08 |
| 0.40 | 10 | 13.8 | 1.38 | 1.90 ± 0.08 |
| 0.45 | 10 | 14.5 | 1.45 | 2.10 ± 0.09 |
| 0.50 | 10 | 15.2 | 1.52 | 2.31 ± 0.09 |

The uncertainties shown represent outer limits for possible values, determined by visual judgment. The graph of m versus T² is shown in Figure 2.

![Graph of results](figure_placeholder_4.png)
*Figure 2: Graph of m vs. T².*

From analysis of the three lines shown in the graph, we determined:
$$k = 9.7 \pm 1.0 \text{ kg/s²}$$

### Discussion
Using the oscillation method, we measured the spring constant to be $k = 9.7 \pm 1.0 \text{ kg/s²}$.

The model represented by equation (1) predicted a straight-line relationship between m and T² passing through the origin. Our experiment confirmed the linear relationship within measurement uncertainty. However, the graph shows a small intercept on the T² axis that cannot be attributed to measurement error.

Since our k value was obtained from the slope alone, this intercept doesn't affect our primary result. The intercept likely indicates the presence of unaccounted mass in the system—possibly from the weight pan or the spring itself. Although we haven't tested these hypotheses directly, they provide reasonable explanations for the observed behavior.
