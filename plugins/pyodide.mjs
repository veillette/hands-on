/**
 * @fileoverview MyST Plugin for executing Python code in the browser using Pyodide
 *
 * This plugin provides a custom MyST directive for running Python code directly
 * in the browser using Pyodide, a Python distribution compiled to WebAssembly.
 * Unlike the JupyterLite plugin, this creates a lightweight, self-contained
 * Python execution environment without the full Jupyter interface.
 *
 * The plugin generates inline HTML with embedded JavaScript that:
 * - Lazy-loads the Pyodide runtime from CDN
 * - Provides a "Run" button for manual code execution
 * - Captures and displays stdout/stderr output
 * - Supports loading additional Python packages
 *
 * @module plugins/pyodide
 * @see {@link https://pyodide.org/ Pyodide Documentation}
 * @see {@link https://pyodide.org/en/stable/usage/packages-in-pyodide.html Available Packages}
 * @see {@link https://mystmd.org/guide/plugins MyST Plugin Documentation}
 *
 * @example
 * // Basic usage with Python code:
 * ```{run-python}
 * print("Hello, World!")
 * for i in range(5):
 *     print(f"Count: {i}")
 * ```
 *
 * @example
 * // With a title and autorun enabled:
 * ```{run-python} Calculate Fibonacci
 * :autorun: true
 *
 * def fibonacci(n):
 *     a, b = 0, 1
 *     for _ in range(n):
 *         a, b = b, a + b
 *     return a
 *
 * print(f"Fibonacci(10) = {fibonacci(10)}")
 * ```
 *
 * @example
 * // With additional packages:
 * ```{run-python} NumPy Example
 * :packages: ["numpy"]
 *
 * import numpy as np
 * arr = np.array([1, 2, 3, 4, 5])
 * print(f"Array: {arr}")
 * print(f"Mean: {arr.mean()}")
 * print(f"Standard deviation: {arr.std()}")
 * ```
 *
 * @example
 * // Hide code, only show output:
 * ```{run-python}
 * :showCode: false
 * :autorun: true
 *
 * print("This output appears automatically!")
 * ```
 */

/**
 * Run Python directive configuration object.
 *
 * This directive creates an interactive Python code runner that executes
 * Python code directly in the browser using the Pyodide WebAssembly runtime.
 * The generated HTML includes all necessary JavaScript for lazy-loading
 * Pyodide and handling code execution.
 *
 * @type {Object}
 * @property {string} name - The directive name used in MyST markdown
 * @property {string} doc - Human-readable description of the directive
 * @property {Object} arg - Configuration for the optional title argument
 * @property {Object} options - Available options for the directive
 * @property {Function} run - The function that processes the directive
 */
const runPythonDirective = {
  name: 'run-python',
  doc: 'Run Python code in the browser using Pyodide',
  arg: {
    type: String,
    doc: 'Optional title'
  },
  options: {
    showCode: {
      type: Boolean,
      doc: 'Whether to show the code (default: true)'
    },
    showOutput: {
      type: Boolean,
      doc: 'Whether to show the output (default: true)'
    },
    autorun: {
      type: Boolean,
      doc: 'Whether to automatically run the code (default: false)'
    },
    packages: {
      type: Array,
      doc: 'Array of additional Pyodide packages to load'
    },
    width: {
      type: String,
      doc: 'Width of the container (default: 100%)'
    },
    height: {
      type: String,
      doc: 'Height of the output container (default: auto)'
    }
  },
  /**
   * Processes the run-python directive and returns AST nodes.
   *
   * This function generates a complete HTML container with embedded JavaScript
   * that handles Pyodide loading, code execution, and output display. Each
   * instance gets a unique ID to prevent conflicts when multiple run-python
   * directives appear on the same page.
   *
   * @function run
   * @param {Object} data - The directive data provided by MyST
   * @param {string} [data.arg] - Optional title for the code block
   * @param {string} [data.body] - Python code to be executed
   * @param {Object} [data.options] - Configuration options
   * @param {boolean} [data.options.showCode=true] - Whether to display the code
   * @param {boolean} [data.options.showOutput=true] - Whether to display the output area
   * @param {boolean} [data.options.autorun=false] - Automatically run code on page load
   * @param {Array<string>} [data.options.packages=[]] - Additional Pyodide packages to load
   * @param {string} [data.options.width='100%'] - Width of the container
   * @param {string} [data.options.height='auto'] - Height of the output container
   * @returns {Array<Object>} Array containing a single HTML AST node
   */
  run: function(data) {
    // Generate a unique ID for this instance
    const id = `pyodide-${Math.random().toString(36).substring(2, 11)}`;

    // Set default values or use provided options
    const width = data.options?.width || '100%';
    const height = data.options?.height || 'auto';
    const showCode = data.options?.showCode !== false; // Default to true
    const showOutput = data.options?.showOutput !== false; // Default to true
    const autorun = data.options?.autorun === true; // Default to false
    const packages = data.options?.packages || [];

    // Get the code from the body
    const code = data.body ? data.body : '';

    // Create the container HTML
    const containerHTML = `
      <div id="${id}-container" class="pyodide-container" style="width: ${width}; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px; overflow: hidden;">
        ${data.arg ? `<div class="pyodide-title" style="background: #f5f5f5; padding: 0.5rem 1rem; border-bottom: 1px solid #ddd; font-weight: bold;">${data.arg}</div>` : ''}
        
        ${showCode ? `
          <div class="pyodide-code" style="position: relative; padding: 0.5rem; background: #f8f8f8; border-bottom: ${showOutput ? '1px solid #ddd' : 'none'};">
            <pre style="margin: 0; max-height: 300px; overflow: auto; white-space: pre-wrap;"><code id="${id}-code" style="font-family: 'Courier New', Courier, monospace;">${escapeHtml(code)}</code></pre>
            <button id="${id}-run" class="pyodide-run-button" style="position: absolute; top: 0.5rem; right: 0.5rem; padding: 0.25rem 0.5rem; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Run</button>
          </div>
        ` : ''}
        
        ${showOutput ? `
          <div id="${id}-output-container" class="pyodide-output" style="padding: 0.5rem; background: white; ${height !== 'auto' ? `height: ${height}; overflow: auto;` : ''}">
            <div id="${id}-status" style="color: #666; font-style: italic;">Ready to run code</div>
            <pre id="${id}-output" style="margin: 0.5rem 0 0 0; display: none;"></pre>
          </div>
        ` : ''}
      </div>
      
      <script>
        (function() {
          // Function to initialize and run Python code
          const container = document.getElementById('${id}-container');
          const runButton = document.getElementById('${id}-run');
          const outputContainer = document.getElementById('${id}-output-container');
          const statusEl = document.getElementById('${id}-status');
          const outputEl = document.getElementById('${id}-output');
          const codeEl = document.getElementById('${id}-code');
          
          // Flag to track if Pyodide has been loaded
          let pyodideLoaded = false;
          let pyodide = null;
          
          // Function to actually load Pyodide
          async function loadPyodide() {
            if (pyodideLoaded) return pyodide;
            
            try {
              statusEl.textContent = 'Loading Python interpreter...';
              
              // Load Pyodide from CDN
              if (typeof loadPyodideModule === 'undefined') {
                await loadScript('https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js');
              }
              
              pyodide = await loadPyodideModule();
              
              // Load additional packages if specified
              if (${JSON.stringify(packages)}.length > 0) {
                statusEl.textContent = 'Loading additional packages...';
                await pyodide.loadPackagesFromImports(${JSON.stringify(packages).replace(/"/g, "'")});
              }
              
              // Initialize standard output and error redirection
              pyodide.runPython(\`
                import sys
                import io
                
                class WebConsole(io.StringIO):
                    def __init__(self):
                        super().__init__()
                    
                    def write(self, text):
                        if text.strip():  # Skip empty writes
                            self._captured_output += text
                            return len(text)
                        return 0
                    
                    def getvalue(self):
                        return self._captured_output
                    
                    def clear(self):
                        self._captured_output = ""
                
                _stdout_console = WebConsole()
                _stderr_console = WebConsole()
                _stdout_console.clear()
                _stderr_console.clear()
                _stdout_console._captured_output = ""
                _stderr_console._captured_output = ""
                
                sys.stdout = _stdout_console
                sys.stderr = _stderr_console
              \`);
              
              statusEl.textContent = 'Python interpreter ready';
              pyodideLoaded = true;
              return pyodide;
            } catch (error) {
              statusEl.textContent = 'Error loading Python interpreter: ' + error.message;
              console.error('Error loading Pyodide:', error);
              throw error;
            }
          }
          
          // Function to run Python code
          async function runPythonCode() {
            if (!codeEl) return;
            
            const code = ${showCode ? 'codeEl.textContent' : JSON.stringify(code)};
            if (!code.trim()) {
              statusEl.textContent = 'No code to run';
              return;
            }
            
            try {
              // Load Pyodide if not already loaded
              if (!pyodideLoaded) {
                pyodide = await loadPyodide();
              }
              
              // Clear previous output
              if (outputEl) {
                outputEl.textContent = '';
                outputEl.style.display = 'none';
              }
              
              // Update status
              statusEl.textContent = 'Running...';
              
              // Clear previous output
              pyodide.runPython(\`
                _stdout_console.clear()
                _stderr_console.clear()
              \`);
              
              // Run the code
              const result = pyodide.runPython(code);
              
              // Get the output
              const stdout = pyodide.runPython('_stdout_console.getvalue()');
              const stderr = pyodide.runPython('_stderr_console.getvalue()');
              
              // Display the output
              let output = '';
              
              if (stdout) {
                output += stdout;
              }
              
              if (stderr) {
                output += '\\n\\n' + stderr;
              }
              
              if (result !== undefined && !output.includes(String(result))) {
                // Only add the result to output if it's not already part of stdout 
                // (which happens with print statements)
                if (output) output += '\\n';
                output += String(result);
              }
              
              if (output.trim()) {
                if (outputEl) {
                  outputEl.textContent = output;
                  outputEl.style.display = 'block';
                }
                statusEl.textContent = 'Execution completed';
              } else {
                statusEl.textContent = 'Execution completed (no output)';
              }
            } catch (error) {
              statusEl.textContent = 'Error';
              if (outputEl) {
                outputEl.textContent = error.message;
                outputEl.style.display = 'block';
              }
              console.error('Error running Python code:', error);
            }
          }
          
          // Function to load a script dynamically
          function loadScript(src) {
            return new Promise((resolve, reject) => {
              const script = document.createElement('script');
              script.src = src;
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            });
          }
          
          // Add event listener to the run button
          if (runButton) {
            runButton.addEventListener('click', runPythonCode);
          }
          
          // Auto-run if specified
          if (${autorun} && code.trim()) {
            // Wait for the DOM to be fully loaded
            if (document.readyState === 'complete') {
              loadPyodide().then(() => runPythonCode());
            } else {
              window.addEventListener('load', () => {
                loadPyodide().then(() => runPythonCode());
              });
            }
          }
        })();
      </script>
    `;

    return [{
      type: 'html',
      value: containerHTML
    }];
  }
};

/**
 * Escapes HTML special characters to prevent XSS vulnerabilities.
 *
 * This helper function converts special HTML characters to their entity
 * equivalents, ensuring that user-provided code can be safely displayed
 * in the HTML output without being interpreted as HTML markup.
 *
 * @function escapeHtml
 * @param {string} unsafe - The string containing potentially unsafe HTML characters
 * @returns {string} The escaped string safe for HTML insertion
 *
 * @example
 * escapeHtml('<script>alert("XSS")</script>')
 * // Returns: '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
 */
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * MyST plugin export object.
 *
 * This object is the default export and conforms to the MyST plugin specification.
 * It registers the run-python directive with MyST, making it available for use in
 * MyST markdown documents.
 *
 * @type {Object}
 * @property {string} name - Human-readable name of the plugin
 * @property {Array<Object>} directives - Array of directive configurations
 */
const plugin = {
  name: 'Run Python',
  directives: [runPythonDirective]
};

export default plugin;
