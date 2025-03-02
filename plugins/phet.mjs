/**
 * MyST Plugin for embedding PhET simulations
 * Usage: {phet} simulation-name
 * Options:
 *   width: Width of the iframe (default: 800px)
 *   height: Height of the iframe (default: 600px)
 *   placeholder: Path to placeholder image for static exports
 *   lang: Language code (default: en)
 *   urlOptions: Additional URL parameters
 * Directive Body (parsed)
 *   If provided, this will be the iframe caption.
 */

const phetDirective = {
  name: 'phet',
  doc: 'Embed a PhET simulation from phet.colorado.edu',
  arg: {
    type: String,
    doc: 'The name of the PhET simulation, e.g. "geometric-optics"',
  },
  body: {
    type: 'markdown',
    doc: 'If provided, this will be the iframe caption',
  },
  options: {
    width: {
      type: String,
      doc: 'Width of the simulation iframe, e.g. "100%" or "800px" (default: 800px)'
    },
    height: {
      type: String,
      doc: 'Height of the simulation iframe, e.g. "600px" (default: 600px)'
    },
    placeholder: {
      type: String,
      doc: 'Path to a placeholder image for static exports'
    },
    lang: {
      type: String,
      doc: 'Language code for the simulation (default: en)'
    },
    urlOptions: {
      type: String,
      doc: 'Additional URL parameters, e.g. ?screens=2'
    },
  },
  run: function( data ) {
    // Extract the simulation name from the argument
    const simulationName = data.arg;

    if ( !simulationName ) {
      return [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Error: PhET simulation name is required.'
            }
          ]
        }
      ];
    }

    // Set default values or use provided options
    const width = data.options?.width || '800px';
    const height = data.options?.height || '600px';
    const lang = data.options?.lang || 'en';
    const urlOptions = data.options?.urlOptions || '';

    // Construct the PhET URL
    const phetUrl = `https://phet.colorado.edu/sims/html/${simulationName}/latest/${simulationName}_${lang}.html${urlOptions}`;

    // Create the iframe element
    const iframe = {
      type: 'iframe',
      src: phetUrl,
      width,
      height
    };

    // If a placeholder is provided, add it to the iframe
    if ( data.options?.placeholder ) {
      iframe.placeholder = data.options.placeholder;
    }

    // If body content is provided, use it as the caption
    if ( data.body && data.body.length > 0 ) {
      return [
        iframe,
        {
          type: 'caption',
          children: data.body
        }
      ];
    }

    return [ iframe ];
  }
};

// Export the plugin
const plugin = {
  name: 'PhET Simulations',
  directives: [phetDirective]
};

export default plugin;
