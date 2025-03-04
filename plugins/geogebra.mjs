/**
 * MyST Plugin for embedding GeoGebra simulations
 * Usage: {geogebra} material-id
 * Options:
 *   width: Width of the iframe (default: 800px)
 *   height: Height of the iframe (default: 600px)
 *   placeholder: Path to placeholder image for static exports
 *   appName: GeoGebra app to use (default: classic, options: graphing, geometry, 3d, cas, classic)
 *   showToolBar: Show the toolbar (default: false)
 *   showAlgebraInput: Show the algebra input (default: false)
 *   showMenuBar: Show the menu bar (default: false)
 *   showResetIcon: Show the reset icon (default: true)
 *   enableLabelDrags: Enable label drags (default: false)
 *   enableShiftDragZoom: Enable shift-drag zoom (default: true)
 *   enableRightClick: Enable right-click menu (default: false)
 * Directive Body (parsed)
 *   If provided, this will be the iframe caption.
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

// Export the plugin
const plugin = {
  name: 'GeoGebra Simulations',
  directives: [geogebraDirective]
};

export default plugin;
