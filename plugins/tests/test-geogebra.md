# GeoGebra Plugin Tests

This file tests the `{geogebra}` directive for embedding GeoGebra materials.

## Test 1: Basic Usage

The simplest usage with just a material ID.

```{geogebra} xdgqpqjt
```

**Expected:** An 800x600px iframe showing a GeoGebra material using the classic app.

---

## Test 2: Custom Dimensions

Testing width and height options.

```{geogebra} xdgqpqjt
:width: 100%
:height: 500px
```

**Expected:** A full-width iframe with 500px height.

---

## Test 3: Graphing Calculator App

Testing the graphing calculator app type.

```{geogebra} zzbyudnq
:appName: graphing
:width: 800px
:height: 600px
```

**Expected:** Material opens in the graphing calculator app.

---

## Test 4: Geometry App

Testing the geometry app type.

```{geogebra} xdgqpqjt
:appName: geometry
:width: 800px
:height: 600px
```

**Expected:** Material opens in the geometry app.

---

## Test 5: 3D App

Testing the 3D graphing app type.

```{geogebra} wbvsexap
:appName: 3d
:width: 800px
:height: 600px
```

**Expected:** Material opens in the 3D graphing app.

---

## Test 6: CAS (Computer Algebra System) App

Testing the CAS app type.

```{geogebra} xdgqpqjt
:appName: cas
:width: 800px
:height: 600px
```

**Expected:** Material opens in the CAS app.

---

## Test 7: Show Toolbar

Testing toolbar visibility option.

```{geogebra} xdgqpqjt
:showToolBar: true
:width: 800px
:height: 600px
```

**Expected:** GeoGebra material with visible toolbar.

---

## Test 8: Show Algebra Input

Testing algebra input visibility.

```{geogebra} zzbyudnq
:appName: graphing
:showAlgebraInput: true
:width: 800px
:height: 600px
```

**Expected:** Graphing calculator with algebra input field visible.

---

## Test 9: Show Menu Bar

Testing menu bar visibility.

```{geogebra} xdgqpqjt
:showMenuBar: true
:width: 800px
:height: 600px
```

**Expected:** GeoGebra material with visible menu bar.

---

## Test 10: Hide Reset Icon

Testing reset icon visibility (default is true).

```{geogebra} xdgqpqjt
:showResetIcon: false
:width: 800px
:height: 600px
```

**Expected:** GeoGebra material without the reset icon.

---

## Test 11: Enable Label Drags

Testing label drag functionality.

```{geogebra} xdgqpqjt
:enableLabelDrags: true
:width: 800px
:height: 600px
```

**Expected:** Users can drag labels in the material.

---

## Test 12: Disable Shift-Drag Zoom

Testing zoom control (default is enabled).

```{geogebra} xdgqpqjt
:enableShiftDragZoom: false
:width: 800px
:height: 600px
```

**Expected:** Shift-drag zoom is disabled.

---

## Test 13: Enable Right-Click Menu

Testing right-click menu functionality.

```{geogebra} xdgqpqjt
:enableRightClick: true
:width: 800px
:height: 600px
```

**Expected:** Right-clicking shows the GeoGebra context menu.

---

## Test 14: Full Featured Setup

Testing all UI options enabled.

```{geogebra} zzbyudnq
:appName: graphing
:width: 100%
:height: 700px
:showToolBar: true
:showAlgebraInput: true
:showMenuBar: true
:showResetIcon: true
:enableLabelDrags: true
:enableShiftDragZoom: true
:enableRightClick: true
```

**Expected:** Full-featured graphing calculator with all controls visible.

---

## Test 15: Caption

Testing body content as caption.

```{geogebra} xdgqpqjt
:width: 800px
:height: 600px

This GeoGebra material demonstrates geometric concepts interactively.
```

**Expected:** GeoGebra material with a caption underneath.

---

## Test 16: Minimal Setup (Clean View)

Testing minimal UI for presentations.

```{geogebra} zzbyudnq
:appName: graphing
:width: 800px
:height: 600px
:showToolBar: false
:showAlgebraInput: false
:showMenuBar: false
:showResetIcon: false
:enableLabelDrags: false
:enableShiftDragZoom: false
:enableRightClick: false
```

**Expected:** Clean view with no UI controls visible.

---

## Summary

| Test | Feature | Status |
|------|---------|--------|
| 1 | Basic usage | Verify manually |
| 2 | Custom dimensions | Verify manually |
| 3 | Graphing app | Verify manually |
| 4 | Geometry app | Verify manually |
| 5 | 3D app | Verify manually |
| 6 | CAS app | Verify manually |
| 7 | Show toolbar | Verify manually |
| 8 | Show algebra input | Verify manually |
| 9 | Show menu bar | Verify manually |
| 10 | Hide reset icon | Verify manually |
| 11 | Enable label drags | Verify manually |
| 12 | Disable zoom | Verify manually |
| 13 | Enable right-click | Verify manually |
| 14 | All features | Verify manually |
| 15 | Caption | Verify manually |
| 16 | Minimal UI | Verify manually |
