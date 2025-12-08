# Plugin Test Suite

This test suite verifies that all MyST plugins work correctly.

## Test Files

- [PhET Simulations](test-phet.md) - Tests for the `{phet}` directive
- [GeoGebra Simulations](test-geogebra.md) - Tests for the `{geogebra}` directive
- [YouTube Videos](test-youtube.md) - Tests for the `{youtube}` directive
- [JupyterLite REPL](test-jupyterlite.md) - Tests for the `{jupyterlite}` directive
- [Pyodide Python Runner](test-pyodide.md) - Tests for the `{run-python}` directive

## Running Tests

Build the tests with:

```bash
npx myst build
```

Or start a dev server:

```bash
npx myst start
```

## Verification

After building, manually verify each plugin:

1. Check that embeds render correctly
2. Verify options are applied
3. Test interactive features
4. Confirm error messages for invalid inputs
