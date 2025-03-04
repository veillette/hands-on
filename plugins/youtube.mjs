/**
 * MyST Plugin for embedding YouTube videos
 * Usage: {youtube} video-id
 * Options:
 *   width: Width of the iframe (default: 560px)
 *   height: Height of the iframe (default: 315px)
 *   placeholder: Path to placeholder image for static exports
 *   title: Title attribute for the iframe (accessibility)
 *   start: Start time in seconds
 *   end: End time in seconds
 *   autoplay: Autoplay the video (default: false)
 *   controls: Show video controls (default: true)
 *   cc_load_policy: Show closed captions (default: false)
 *   modestbranding: Hide YouTube logo (default: true)
 *   loop: Loop the video (default: false)
 *   mute: Mute the video (default: false)
 *   rel: Show related videos (default: false)
 * Directive Body (parsed)
 *   If provided, this will be the iframe caption.
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

// Export the plugin
const plugin = {
  name: 'YouTube Videos',
  directives: [youtubeDirective]
};

export default plugin;
