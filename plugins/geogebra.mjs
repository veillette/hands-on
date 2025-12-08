/**
 * @fileoverview MyST Plugin for embedding GeoGebra Interactive Mathematics
 *
 * This plugin provides a custom MyST directive for embedding interactive mathematics
 * visualizations from GeoGebra. GeoGebra is a dynamic mathematics software that brings
 * together geometry, algebra, spreadsheets, graphing, statistics, and calculus.
 *
 * @module plugins/geogebra
 * @see {@link https://www.geogebra.org/ GeoGebra Website}
 * @see {@link https://wiki.geogebra.org/en/Reference:Material_Embedding GeoGebra Embedding Reference}
 * @see {@link https://mystmd.org/guide/plugins MyST Plugin Documentation}
 *
 * @example
 * // Basic usage with a GeoGebra material ID:
 * ```{geogebra} agxadfzzivgh
 * ```
 *
 * @example
 * // Using the graphing calculator app with custom dimensions:
 * ```{geogebra} pythagorean-theorem
 * :appName: graphing
 * :width: 100%
 * :height: 500px
 * :showToolBar: true
 *
 * Interactive demonstration of the Pythagorean theorem
 * ```
 *
 * @example
 * // 3D geometry with full controls:
 * ```{geogebra} 3d-vectors
 * :appName: 3d
 * :showAlgebraInput: true
 * :showMenuBar: true
 * :enableRightClick: true
 * ```
 */

/**
 * GeoGebra simulation directive configuration object.
 *
 * This directive embeds GeoGebra materials as iframes within MyST documents.
 * It supports both material IDs (short strings) and base64-encoded GeoGebra files.
 * The URL is constructed with various parameters to control the GeoGebra interface.
 *
 * @type {Object}
 * @property {string} name - The directive name used in MyST markdown
 * @property {string} doc - Human-readable description of the directive
 * @property {Object} arg - Configuration for the required argument
 * @property {Object} body - Configuration for the optional body content
 * @property {Object} options - Available options for the directive
 * @property {Function} run - The function that processes the directive
 */
const geogebraDirective = {
  name: 'geogebra',
  doc: 'Embed a GeoGebra simulation from geogebra.org',
  arg: {
    type: String,
    doc: 'The material ID or base64 encoded GeoGebra file, e.g. "agxadfzzivgh" or a base64 string',
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
    appName: {
      type: String,
      doc: 'GeoGebra app to use (default: classic, options: graphing, geometry, 3d, cas, classic)'
    },
    showToolBar: {
      type: Boolean,
      doc: 'Show the toolbar (default: false)'
    },
    showAlgebraInput: {
      type: Boolean,
      doc: 'Show the algebra input (default: false)'
    },
    showMenuBar: {
      type: Boolean,
      doc: 'Show the menu bar (default: false)'
    },
    showResetIcon: {
      type: Boolean,
      doc: 'Show the reset icon (default: true)'
    },
    enableLabelDrags: {
      type: Boolean,
      doc: 'Enable label drags (default: false)'
    },
    enableShiftDragZoom: {
      type: Boolean,
      doc: 'Enable shift-drag zoom (default: true)'
    },
    enableRightClick: {
      type: Boolean,
      doc: 'Enable right-click menu (default: false)'
    }
  },
  /**
   * Processes the GeoGebra directive and returns AST nodes.
   *
   * @function run
   * @param {Object} data - The directive data provided by MyST
   * @param {string} data.arg - The material ID or base64-encoded GeoGebra file (required)
   * @param {Array} [data.body] - Optional markdown content for caption
   * @param {Object} [data.options] - Configuration options
   * @param {string} [data.options.width='800px'] - Width of the iframe
   * @param {string} [data.options.height='600px'] - Height of the iframe
   * @param {string} [data.options.appName='classic'] - GeoGebra app type
   * @param {boolean} [data.options.showToolBar=false] - Show the toolbar
   * @param {boolean} [data.options.showAlgebraInput=false] - Show algebra input
   * @param {boolean} [data.options.showMenuBar=false] - Show the menu bar
   * @param {boolean} [data.options.showResetIcon=true] - Show reset icon
   * @param {boolean} [data.options.enableLabelDrags=false] - Enable label dragging
   * @param {boolean} [data.options.enableShiftDragZoom=true] - Enable shift-drag zoom
   * @param {boolean} [data.options.enableRightClick=false] - Enable right-click menu
   * @param {string} [data.options.placeholder] - Path to placeholder image
   * @returns {Array<Object>} Array of AST nodes (iframe and optional caption)
   */
  run: function(data) {
    // Extract the material ID from the argument
    const materialId = data.arg;

    if (!materialId) {
      return [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Error: GeoGebra material ID is required.'
            }
          ]
        }
      ];
    }

    // Set default values or use provided options
    const width = data.options?.width || '800px';
    const height = data.options?.height || '600px';
    const appName = data.options?.appName || 'classic';

    // Set default parameters for the GeoGebra app
    const showToolBar = data.options?.showToolBar === true ? 'true' : 'false';
    const showAlgebraInput = data.options?.showAlgebraInput === true ? 'true' : 'false';
    const showMenuBar = data.options?.showMenuBar === true ? 'true' : 'false';
    const showResetIcon = data.options?.showResetIcon === false ? 'false' : 'true';
    const enableLabelDrags = data.options?.enableLabelDrags === true ? 'true' : 'false';
    const enableShiftDragZoom = data.options?.enableShiftDragZoom === false ? 'false' : 'true';
    const enableRightClick = data.options?.enableRightClick === true ? 'true' : 'false';

    // Check if the material ID is a base64 string or a regular ID
    let geogebraUrl;
    if (materialId.length > 30) {
      // Assume it's a base64 string
      geogebraUrl = `https://www.geogebra.org/material/iframe/id/prerelease/app/${appName}/?ggbBase64=${encodeURIComponent(materialId)}&showToolBar=${showToolBar}&showAlgebraInput=${showAlgebraInput}&showMenuBar=${showMenuBar}&showResetIcon=${showResetIcon}&enableLabelDrags=${enableLabelDrags}&enableShiftDragZoom=${enableShiftDragZoom}&enableRightClick=${enableRightClick}`;
    } else {
      // Regular material ID
      geogebraUrl = `https://www.geogebra.org/material/iframe/id/${materialId}/app/${appName}/?showToolBar=${showToolBar}&showAlgebraInput=${showAlgebraInput}&showMenuBar=${showMenuBar}&showResetIcon=${showResetIcon}&enableLabelDrags=${enableLabelDrags}&enableShiftDragZoom=${enableShiftDragZoom}&enableRightClick=${enableRightClick}`;
    }

    // Create the iframe element
    const iframe = {
      type: 'iframe',
      src: geogebraUrl,
      width,
      height
    };

    // If a placeholder is provided, add it to the iframe
    if (data.options?.placeholder) {
      iframe.placeholder = data.options.placeholder;
    }

    // If body content is provided, use it as the caption
    if (data.body && data.body.length > 0) {
      return [
        iframe,
        {
          type: 'caption',
          children: data.body
        }
      ];
    }

    return [iframe];
  }
};

/**
 * MyST plugin export object.
 *
 * This object is the default export and conforms to the MyST plugin specification.
 * It registers the geogebra directive with MyST, making it available for use in
 * MyST markdown documents.
 *
 * @type {Object}
 * @property {string} name - Human-readable name of the plugin
 * @property {Array<Object>} directives - Array of directive configurations
 */
const plugin = {
  name: 'GeoGebra Simulations',
  directives: [geogebraDirective]
};

export default plugin;
