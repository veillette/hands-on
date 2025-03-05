/**
 * MyST Plugin for executing Python code in the browser using Pyodide
 * Usage: {run-python} optional-title
 * Options:
 *   showCode: Whether to show the code (default: true)
 *   showOutput: Whether to show the output (default: true)
 *   autorun: Whether to automatically run the code (default: false)
 *   packages: Array of additional Pyodide packages to load
 *   width: Width of the container (default: 100%)
 *   height: Height of the output container (default: auto)
 * Directive Body:
 *   The Python code to be executed
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

// Helper function to escape HTML
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Export the plugin
const plugin = {
  name: 'Run Python',
  directives: [runPythonDirective]
};

export default plugin;
