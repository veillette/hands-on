# Plugin Tests

This directory contains test files to verify that the MyST plugins work correctly.

## Running Tests

### Prerequisites

Ensure you have MyST installed:

```bash
npm install
```

### Running the Test Build

From the repository root, run:

```bash
cd plugins/tests
npx myst build
```

Or to start a development server with live reload:

```bash
cd plugins/tests
npx myst start
```

This will build/serve all test markdown files and you can verify that each plugin renders correctly.

### Manual Verification

After building, open the generated HTML files and verify:

1. **PhET Tests** (`test-phet.md`)
   - Iframes load with correct PhET simulation URLs
   - Width/height options are applied
   - Captions render when provided
   - Error message appears when simulation name is missing

2. **GeoGebra Tests** (`test-geogebra.md`)
   - Iframes load with correct GeoGebra URLs
   - Different app types (graphing, geometry, 3d) work
   - UI options (toolbar, menu bar, etc.) are applied
   - Base64 material detection works

3. **YouTube Tests** (`test-youtube.md`)
   - Videos embed correctly
   - Start/end times work in URL parameters
   - Playback options (autoplay, mute, loop) are encoded
   - Accessibility title is present

4. **JupyterLite Tests** (`test-jupyterlite.md`)
   - REPL iframes load correctly
   - Code is passed via URL parameters
   - Kernel and theme options work
   - Title headings render when provided

5. **Pyodide Tests** (`test-pyodide.md`)
   - Container HTML renders correctly
   - Run button is present
   - Code block displays
   - Output area is shown
   - Autorun triggers code execution

## Test Structure

Each test file contains:

- **Basic usage tests**: Minimal directive usage
- **Option tests**: All available options
- **Edge case tests**: Error handling, empty inputs
- **Integration tests**: Combining multiple options

## Expected Results

All tests should:
- Build without errors
- Generate valid HTML output
- Render interactive elements when viewed in a browser
- Display error messages for invalid inputs

## Troubleshooting

### Build Errors

If you encounter build errors, ensure:
1. Plugins are correctly registered in `myst.yml`
2. All plugin files exist in `../` relative to this directory
3. No syntax errors in plugin files

### Runtime Errors

If embeds don't load:
1. Check browser console for errors
2. Verify external service URLs are accessible
3. Check for CORS issues with third-party content

## Adding New Tests

When adding tests for a new plugin:

1. Create a new `test-{plugin-name}.md` file
2. Include basic, option, and edge case tests
3. Document expected behavior in comments
4. Update this README with verification steps
