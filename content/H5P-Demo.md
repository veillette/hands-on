---
title: H5P Interactive Questions Demo
description: Demonstration of H5P-style interactive questions for self-assessment
---

# H5P Interactive Questions Demo

This page demonstrates the H5P-style interactive question types available in this textbook. These questions provide immediate feedback to help students assess their understanding of key concepts.

## Question Types Available

The following interactive question types are supported:

1. **Multiple Choice** (`h5p-multichoice`) - Select one or more correct answers
2. **True/False** (`h5p-truefalse`) - Evaluate statements as true or false
3. **Fill in the Blanks** (`h5p-blanks`) - Complete sentences with missing words

---

## Example 1: Multiple Choice Question

Test your understanding of measurement uncertainty:

```{h5p-multichoice} Measurement Uncertainty Concepts
:question: When reporting a measurement as (4.52 ± 0.03) cm, what does the ± 0.03 cm represent?
:choices: ["The systematic error in the measurement", "The range within which the true value is expected to lie with some confidence", "The resolution of the measuring instrument", "The difference between repeated measurements"]
:correct: 1
:feedback: ["Systematic errors are typically not included in the stated uncertainty this way.", "Correct! The uncertainty indicates the interval where we expect the true value to be found, typically at a 68% or 95% confidence level.", "Resolution contributes to uncertainty but isn't the full picture.", "This describes precision/repeatability, which contributes to uncertainty but isn't the complete definition."]
:height: 450px
```

---

## Example 2: True/False Question

Evaluate this statement about statistical analysis:

```{h5p-truefalse} Standard Deviation vs Standard Error
:statement: The standard error of the mean decreases as the number of measurements increases, while the standard deviation of the sample remains approximately constant.
:correct: true
:feedbackTrue: The standard error σ_m = σ/√n decreases with more measurements (n), while the sample standard deviation σ estimates the population spread and doesn't systematically change with sample size.
:feedbackFalse: Actually, this statement is correct! The standard error (σ/√n) depends on sample size n, while standard deviation estimates the inherent variability in the data.
```

---

## Example 3: Fill in the Blanks

Complete the following statement about propagation of uncertainty:

```{h5p-blanks} Uncertainty Propagation Formula
:text: When two quantities are added or subtracted, their uncertainties are combined in *quadrature|quadrature addition*. This means we calculate the square *root* of the sum of the *squares|squared* of the individual uncertainties.
```

---

## Example 4: Multiple Choice with Context

```{h5p-multichoice} Chi-Square Test Interpretation
:question: If you calculate χ²/ν = 0.3 for a linear fit (where ν is the number of degrees of freedom), what does this suggest?
:choices: ["The fit is excellent and the model is correct", "The uncertainties may be overestimated", "The uncertainties may be underestimated", "The data has systematic errors"]
:correct: 1
:feedback: ["A χ²/ν much less than 1 actually suggests a problem.", "Correct! A χ²/ν significantly less than 1 often indicates that the uncertainties assigned to the data points are larger than they should be.", "This would be indicated by χ²/ν >> 1, not χ²/ν << 1.", "Systematic errors typically cause χ²/ν to be larger than expected, not smaller."]
:height: 450px
```

---

## Using These Questions in Your Content

To add interactive questions to any chapter, use the following directives:

### Multiple Choice Syntax

````markdown
```{h5p-multichoice} Question Title
:question: Your question text here
:choices: ["Option 1", "Option 2", "Option 3", "Option 4"]
:correct: 0
:feedback: ["Feedback for option 1", "Feedback for option 2", ...]
```
````

### True/False Syntax

````markdown
```{h5p-truefalse} Question Title
:statement: The statement to evaluate
:correct: true
:feedbackTrue: Feedback shown when user selects True
:feedbackFalse: Feedback shown when user selects False
```
````

### Fill in the Blanks Syntax

````markdown
```{h5p-blanks} Question Title
:text: Text with *answer* marked using asterisks. Use *option1|option2* for alternatives.
```
````

---

:::{note}
These interactive questions work in the HTML version of the textbook. In PDF exports, the questions will appear as static content.
:::
