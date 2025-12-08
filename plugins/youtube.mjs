/**
 * @fileoverview MyST Plugin for embedding YouTube Videos
 *
 * This plugin provides a custom MyST directive for embedding YouTube videos
 * into MyST documents. It uses the YouTube IFrame Player API and supports
 * various playback options including start/end times, autoplay, looping,
 * closed captions, and more.
 *
 * @module plugins/youtube
 * @see {@link https://www.youtube.com/ YouTube}
 * @see {@link https://developers.google.com/youtube/player_parameters YouTube IFrame API}
 * @see {@link https://mystmd.org/guide/plugins MyST Plugin Documentation}
 *
 * @example
 * // Basic usage with a video ID:
 * ```{youtube} dQw4w9WgXcQ
 * ```
 *
 * @example
 * // With custom dimensions and caption:
 * ```{youtube} dQw4w9WgXcQ
 * :width: 100%
 * :height: 400px
 * :title: Never Gonna Give You Up
 *
 * A classic music video from Rick Astley
 * ```
 *
 * @example
 * // Start at a specific time with closed captions:
 * ```{youtube} jNQXAC9IVRw
 * :start: 30
 * :end: 60
 * :cc_load_policy: true
 * :loop: true
 * ```
 *
 * @example
 * // Autoplay muted (required for autoplay in most browsers):
 * ```{youtube} dQw4w9WgXcQ
 * :autoplay: true
 * :mute: true
 * ```
 */

/**
 * YouTube video directive configuration object.
 *
 * This directive embeds YouTube videos as iframes within MyST documents.
 * It constructs the appropriate embed URL with query parameters based on
 * the provided options. The video ID is the 11-character string found in
 * YouTube URLs (e.g., youtube.com/watch?v=VIDEO_ID).
 *
 * @type {Object}
 * @property {string} name - The directive name used in MyST markdown
 * @property {string} doc - Human-readable description of the directive
 * @property {Object} arg - Configuration for the required argument
 * @property {Object} body - Configuration for the optional body content
 * @property {Object} options - Available options for the directive
 * @property {Function} run - The function that processes the directive
 */
const youtubeDirective = {
  name: 'youtube',
  doc: 'Embed a YouTube video',
  arg: {
    type: String,
    doc: 'The YouTube video ID, e.g. "dQw4w9WgXcQ"',
  },
  body: {
    type: 'markdown',
    doc: 'If provided, this will be the video caption',
  },
  options: {
    width: {
      type: String,
      doc: 'Width of the video iframe, e.g. "100%" or "560px" (default: 560px)'
    },
    height: {
      type: String,
      doc: 'Height of the video iframe, e.g. "315px" (default: 315px)'
    },
    placeholder: {
      type: String,
      doc: 'Path to a placeholder image for static exports'
    },
    title: {
      type: String,
      doc: 'Title attribute for the iframe (for accessibility)'
    },
    start: {
      type: Number,
      doc: 'Start time in seconds'
    },
    end: {
      type: Number,
      doc: 'End time in seconds'
    },
    autoplay: {
      type: Boolean,
      doc: 'Autoplay the video (default: false)'
    },
    controls: {
      type: Boolean,
      doc: 'Show video controls (default: true)'
    },
    cc_load_policy: {
      type: Boolean,
      doc: 'Show closed captions (default: false)'
    },
    modestbranding: {
      type: Boolean,
      doc: 'Hide YouTube logo (default: true)'
    },
    loop: {
      type: Boolean,
      doc: 'Loop the video (default: false)'
    },
    mute: {
      type: Boolean,
      doc: 'Mute the video (default: false)'
    },
    rel: {
      type: Boolean,
      doc: 'Show related videos (default: false)'
    }
  },
  /**
   * Processes the YouTube directive and returns AST nodes.
   *
   * @function run
   * @param {Object} data - The directive data provided by MyST
   * @param {string} data.arg - The YouTube video ID (required)
   * @param {Array} [data.body] - Optional markdown content for caption
   * @param {Object} [data.options] - Configuration options
   * @param {string} [data.options.width='560px'] - Width of the iframe
   * @param {string} [data.options.height='315px'] - Height of the iframe
   * @param {string} [data.options.title='YouTube video'] - Iframe title for accessibility
   * @param {number} [data.options.start] - Start time in seconds
   * @param {number} [data.options.end] - End time in seconds
   * @param {boolean} [data.options.autoplay=false] - Autoplay the video
   * @param {boolean} [data.options.controls=true] - Show video controls
   * @param {boolean} [data.options.cc_load_policy=false] - Show closed captions
   * @param {boolean} [data.options.modestbranding=true] - Hide YouTube logo
   * @param {boolean} [data.options.loop=false] - Loop the video
   * @param {boolean} [data.options.mute=false] - Mute the video
   * @param {boolean} [data.options.rel=false] - Show related videos
   * @param {string} [data.options.placeholder] - Path to placeholder image
   * @returns {Array<Object>} Array of AST nodes (iframe and optional caption)
   */
  run: function(data) {
    // Extract the video ID from the argument
    const videoId = data.arg;

    if (!videoId) {
      return [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Error: YouTube video ID is required.'
            }
          ]
        }
      ];
    }

    // Set default values or use provided options
    const width = data.options?.width || '560px';
    const height = data.options?.height || '315px';
    const title = data.options?.title || 'YouTube video';

    // Build YouTube parameters
    const params = new URLSearchParams();

    if (data.options?.start) params.append('start', data.options.start);
    if (data.options?.end) params.append('end', data.options.end);
    if (data.options?.autoplay === true) params.append('autoplay', '1');
    if (data.options?.controls === false) params.append('controls', '0');
    if (data.options?.cc_load_policy === true) params.append('cc_load_policy', '1');
    if (data.options?.modestbranding !== false) params.append('modestbranding', '1');
    if (data.options?.loop === true) {
      params.append('loop', '1');
      params.append('playlist', videoId);
    }
    if (data.options?.mute === true) params.append('mute', '1');
    if (data.options?.rel !== true) params.append('rel', '0');

    // Construct the YouTube URL
    let youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
    if (params.toString()) {
      youtubeUrl += `?${params.toString()}`;
    }

    // Create the iframe element
    const iframe = {
      type: 'iframe',
      src: youtubeUrl,
      width,
      height,
      title,
      allowFullScreen: true
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
 * It registers the youtube directive with MyST, making it available for use in
 * MyST markdown documents.
 *
 * @type {Object}
 * @property {string} name - Human-readable name of the plugin
 * @property {Array<Object>} directives - Array of directive configurations
 */
const plugin = {
  name: 'YouTube Videos',
  directives: [youtubeDirective]
};

export default plugin;
