/**
 * @fileoverview MyST Plugin for embedding JupyterLite REPL
 *
 * This plugin provides a custom MyST directive for embedding interactive
 * JupyterLite REPL (Read-Eval-Print Loop) environments directly into MyST documents.
 * JupyterLite is a WebAssembly-powered distribution of JupyterLab that runs
 * entirely in the browser without requiring a server.
 *
 * @module plugins/jupyterlite
 * @see {@link https://jupyterlite.readthedocs.io/ JupyterLite Documentation}
 * @see {@link https://jupyter.org/ Jupyter Project}
 * @see {@link https://mystmd.org/guide/plugins MyST Plugin Documentation}
 *
 * @example
 * // Basic usage with Python code:
 * ```{jupyterlite}
 * print("Hello, World!")
 * x = 5 + 3
 * print(f"The sum is: {x}")
 * ```
 *
 * @example
 * // With a title and custom kernel:
 * ```{jupyterlite} My Interactive Example
 * :kernel: python
 * :autorun: true
 * :height: 500px
 *
 * import math
 * print(f"Pi is approximately {math.pi:.4f}")
 * ```
 *
 * @example
 * // Using xeus-python kernel with custom theme:
 * ```{jupyterlite}
 * :kernel: xeus-python
 * :theme: JupyterLab Dark
 * :toolbar: false
 *
 * import numpy as np
 * arr = np.array([1, 2, 3, 4, 5])
 * print(arr.mean())
 * ```
 */

/**
 * JupyterLite REPL directive configuration object.
 *
 * This directive embeds JupyterLite REPL instances as iframes within MyST documents.
 * The code from the directive body is passed to the REPL via URL parameters.
 * The directive supports multiple kernels and various customization options.
 *
 * @type {Object}
 * @property {string} name - The directive name used in MyST markdown
 * @property {string} doc - Human-readable description of the directive
 * @property {Object} arg - Configuration for the optional title argument
 * @property {Object} body - Configuration for the code body content
 * @property {Object} options - Available options for the directive
 * @property {Function} run - The function that processes the directive
 */
const jupyterliteDirective = {
  name: 'jupyterlite',
  doc: 'Embed a JupyterLite REPL for interactive code execution',
  arg: {
    type: String,
    doc: 'Optional title or identifier for the REPL'
  },
  body: {
    type: 'String',
    doc: 'The code to be executed in the notebook'
  },
  options: {
    width: {
      type: String,
      doc: 'Width of the iframe (default: 100%)'
    },
    height: {
      type: String,
      doc: 'Height of the iframe (default: 400px)'
    },
    kernel: {
      type: String,
      doc: 'Kernel to use (default: python)'
    },
    theme: {
      type: String,
      doc: 'Theme to use (default: JupyterLab Light)'
    },
    toolbar: {
      type: Boolean,
      doc: 'Whether to show the toolbar (default: true)'
    },
    autorun: {
      type: Boolean,
      doc: 'Whether to automatically run the code (default: false)'
    },
    placeholder: {
      type: String,
      doc: 'Path to placeholder image for static exports'
    }
  },
  /**
   * Processes the JupyterLite directive and returns AST nodes.
   *
   * @function run
   * @param {Object} data - The directive data provided by MyST
   * @param {string} [data.arg] - Optional title for the REPL section
   * @param {Array<string>} [data.body] - Code lines to be executed in the REPL
   * @param {Object} [data.options] - Configuration options
   * @param {string} [data.options.width='100%'] - Width of the iframe
   * @param {string} [data.options.height='400px'] - Height of the iframe
   * @param {string} [data.options.kernel='python'] - Kernel to use (python, xeus-python, javascript)
   * @param {string} [data.options.theme='JupyterLab Light'] - JupyterLab theme
   * @param {boolean} [data.options.toolbar=true] - Show the toolbar
   * @param {boolean} [data.options.autorun=false] - Automatically run the code on load
   * @param {string} [data.options.placeholder] - Path to placeholder image
   * @returns {Array<Object>} Array of AST nodes (optional heading and iframe)
   */
  run: function(data) {
    // Set default values or use provided options
    const width = data.options?.width || '100%';
    const height = data.options?.height || '400px';
    const kernel = data.options?.kernel || 'python';
    const theme = data.options?.theme || 'JupyterLab Light';
    const showToolbar = data.options?.toolbar !== false; // Default to true
    const autorun = data.options?.autorun === true; // Default to false

    // Get the code from the body
    const code = data.body ? data.body.join('\n') : '';

    // Encode the code and settings for the URL
    const encodedCode = encodeURIComponent(code);

    // Create a unique ID for this JupyterLite instance
    const id = `jupyterlite-${Math.random().toString(36).substring(2, 11)}`;

    // Define base URL for JupyterLite
    const jupyterliteBaseUrl = 'https://veillette.github.io/jupyterlite/repl/index.html';

    // Construct URL with parameters
    const querystringParams = new URLSearchParams({
      kernel: kernel,
      toolbar: showToolbar ? 'true' : 'false',
      theme: theme,
      code: encodedCode,
      id: id,
      autorun: autorun ? 'true' : 'false'
    }).toString();

    const jupyterliteUrl = `${jupyterliteBaseUrl}?${querystringParams}`;

    // Create the iframe element
    const iframe = {
      type: 'iframe',
      src: jupyterliteUrl,
      width,
      height,
      attributes: {
        loading: 'lazy',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true
      }
    };

    // If a placeholder is provided, add it to the iframe
    if (data.options?.placeholder) {
      iframe.placeholder = data.options.placeholder;
    }

    // Create heading if a title arg is provided
    if (data.arg) {
      return [
        {
          type: 'heading',
          depth: 4,
          children: [{
            type: 'text',
            value: data.arg
          }]
        },
        iframe
      ];
    }

    return [iframe];
  }
};

/**
 * MyST plugin export object.
 *
 * This object is the default export and conforms to the MyST plugin specification.
 * It registers the jupyterlite directive with MyST, making it available for use in
 * MyST markdown documents.
 *
 * @type {Object}
 * @property {string} name - Human-readable name of the plugin
 * @property {Array<Object>} directives - Array of directive configurations
 */
const plugin = {
  name: 'JupyterLite REPL',
  directives: [jupyterliteDirective]
};

export default plugin;
