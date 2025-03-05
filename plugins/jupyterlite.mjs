/**
 * MyST Plugin for embedding JupyterLite REPL
 * Usage: {jupyterlite} code-to-execute
 * Options:
 *   width: Width of the iframe (default: 100%)
 *   height: Height of the iframe (default: 400px)
 *   kernel: Kernel to use (default: 'python', options: 'python', 'xeus-python', 'javascript')
 *   theme: Theme to use (default: 'JupyterLab Light')
 *   toolbar: Whether to show the toolbar (default: true)
 *   autorun: Whether to automatically run the code (default: false)
 *   placeholder: Path to placeholder image for static exports
 * Directive Body (parsed)
 *   The Python code to be executed in the notebook.
 */

const jupyterliteDirective = {
  name: 'jupyterlite',
  doc: 'Embed a JupyterLite REPL for interactive code execution',
  arg: {
    type: String,
    doc: 'Optional title or identifier for the REPL'
  },
  body: {
    type: 'markdown',
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
    const jupyterliteBaseUrl = 'https://veillette.github.io/jupyterlite/lab/index.html';

    // Construct URL with parameters
    const querystringParams = new URLSearchParams({
      kernel: kernel,
      toolbar: showToolbar ? 'true' : 'false',
      theme: theme,
      code: encodedCode,
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

// Export the plugin
const plugin = {
  name: 'JupyterLite REPL',
  directives: [jupyterliteDirective]
};

export default plugin;
