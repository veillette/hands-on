/**
 * @fileoverview MyST Plugin for embedding PhET Interactive Simulations
 *
 * This plugin provides a custom MyST directive for embedding interactive physics
 * simulations from PhET (Physics Education Technology) at the University of Colorado Boulder.
 * PhET simulations are free, research-based, and designed to engage students in learning
 * through exploration and discovery.
 *
 * @module plugins/phet
 * @see {@link https://phet.colorado.edu/ PhET Interactive Simulations}
 * @see {@link https://mystmd.org/guide/plugins MyST Plugin Documentation}
 *
 * @example
 * // Basic usage in MyST markdown:
 * ```{phet} geometric-optics
 * ```
 *
 * @example
 * // With custom dimensions and caption:
 * ```{phet} projectile-motion
 * :width: 100%
 * :height: 500px
 * :lang: es
 *
 * Explore the physics of projectile motion!
 * ```
 *
 * @example
 * // With URL options to select specific screens:
 * ```{phet} circuit-construction-kit-dc
 * :urlOptions: ?screens=2
 * ```
 */

/**
 * PhET simulation directive configuration object.
 *
 * This directive embeds PhET simulations as iframes within MyST documents.
 * It constructs the appropriate URL based on the simulation name and options,
 * and returns an AST node that MyST can render.
 *
 * @type {Object}
 * @property {string} name - The directive name used in MyST markdown
 * @property {string} doc - Human-readable description of the directive
 * @property {Object} arg - Configuration for the required argument
 * @property {Object} body - Configuration for the optional body content
 * @property {Object} options - Available options for the directive
 * @property {Function} run - The function that processes the directive
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
  /**
   * Processes the PhET directive and returns AST nodes.
   *
   * @function run
   * @param {Object} data - The directive data provided by MyST
   * @param {string} data.arg - The simulation name (required)
   * @param {Array} [data.body] - Optional markdown content for caption
   * @param {Object} [data.options] - Configuration options
   * @param {string} [data.options.width='800px'] - Width of the iframe
   * @param {string} [data.options.height='600px'] - Height of the iframe
   * @param {string} [data.options.lang='en'] - Language code for the simulation
   * @param {string} [data.options.placeholder] - Path to placeholder image
   * @param {string} [data.options.urlOptions] - Additional URL query parameters
   * @returns {Array<Object>} Array of AST nodes (iframe and optional caption)
   */
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

/**
 * MyST plugin export object.
 *
 * This object is the default export and conforms to the MyST plugin specification.
 * It registers the phet directive with MyST, making it available for use in
 * MyST markdown documents.
 *
 * @type {Object}
 * @property {string} name - Human-readable name of the plugin
 * @property {Array<Object>} directives - Array of directive configurations
 */
const plugin = {
  name: 'PhET Simulations',
  directives: [phetDirective]
};

export default plugin;
