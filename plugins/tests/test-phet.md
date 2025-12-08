# PhET Plugin Tests

This file tests the `{phet}` directive for embedding PhET simulations.

## Test 1: Basic Usage

The simplest usage with just a simulation name.

```{phet} geometric-optics
```

**Expected:** An 800x600px iframe showing the Geometric Optics simulation in English.

---

## Test 2: Custom Dimensions

Testing width and height options.

```{phet} projectile-motion
:width: 100%
:height: 500px
```

**Expected:** A full-width (100%) iframe with 500px height showing Projectile Motion.

---

## Test 3: Language Option

Testing Spanish language version.

```{phet} ohms-law
:lang: es
:width: 700px
:height: 450px
```

**Expected:** Ohm's Law simulation in Spanish with custom dimensions.

---

## Test 4: Caption

Testing body content as caption.

```{phet} least-squares-regression
:width: 800px
:height: 600px

This interactive simulation demonstrates the principle of least squares regression.
Use the controls to add data points and observe how the best-fit line changes.
```

**Expected:** Simulation with a caption underneath explaining the content.

---

## Test 5: URL Options

Testing additional URL parameters to select specific screens.

```{phet} circuit-construction-kit-dc
:urlOptions: ?screens=1
:width: 900px
:height: 600px
```

**Expected:** Circuit Construction Kit DC simulation with only the first screen.

---

## Test 6: All Options Combined

Testing all options together.

```{phet} pendulum-lab
:width: 100%
:height: 550px
:lang: en
:urlOptions: ?screens=2

Explore the physics of pendulum motion with this PhET simulation.
```

**Expected:** Full-width Pendulum Lab simulation with second screen, English language, and caption.

---

## Test 7: Different Simulations

Testing various PhET simulations to ensure URL construction works.

### Gravity and Orbits
```{phet} gravity-and-orbits
:height: 500px
```

### Wave Interference
```{phet} wave-interference
:height: 500px
```

### States of Matter
```{phet} states-of-matter
:height: 500px
```

**Expected:** Three different simulations load correctly.

---

## Test 8: Placeholder Image (Static Export)

Testing placeholder for PDF/static exports.

```{phet} coulombs-law
:placeholder: /figures/coulombs-law-placeholder.png
:width: 800px
:height: 600px

Coulomb's Law simulation - the placeholder image will appear in PDF exports.
```

**Expected:** In HTML, the simulation loads. In PDF, the placeholder image appears.

---

## Summary

| Test | Feature | Status |
|------|---------|--------|
| 1 | Basic usage | Verify manually |
| 2 | Custom dimensions | Verify manually |
| 3 | Language option | Verify manually |
| 4 | Caption | Verify manually |
| 5 | URL options | Verify manually |
| 6 | All options | Verify manually |
| 7 | Multiple simulations | Verify manually |
| 8 | Placeholder | Verify manually |
