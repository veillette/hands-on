# YouTube Plugin Tests

This file tests the `{youtube}` directive for embedding YouTube videos.

## Test 1: Basic Usage

The simplest usage with just a video ID.

```{youtube} dQw4w9WgXcQ
```

**Expected:** A 560x315px YouTube video embed with default settings.

---

## Test 2: Custom Dimensions

Testing width and height options.

```{youtube} dQw4w9WgXcQ
:width: 100%
:height: 400px
```

**Expected:** A full-width video with 400px height.

---

## Test 3: Custom Title (Accessibility)

Testing the title attribute for accessibility.

```{youtube} dQw4w9WgXcQ
:title: Rick Astley - Never Gonna Give You Up (Official Music Video)
:width: 560px
:height: 315px
```

**Expected:** Video with accessible title for screen readers.

---

## Test 4: Start Time

Testing start time parameter.

```{youtube} dQw4w9WgXcQ
:start: 43
:width: 560px
:height: 315px
```

**Expected:** Video starts at 43 seconds (the iconic moment).

---

## Test 5: End Time

Testing end time parameter.

```{youtube} dQw4w9WgXcQ
:start: 43
:end: 60
:width: 560px
:height: 315px
```

**Expected:** Video plays from 43 to 60 seconds only.

---

## Test 6: Autoplay with Mute

Testing autoplay (requires mute in most browsers).

```{youtube} dQw4w9WgXcQ
:autoplay: true
:mute: true
:width: 560px
:height: 315px
```

**Expected:** Video autoplays muted when page loads.

---

## Test 7: Hide Controls

Testing controls visibility.

```{youtube} dQw4w9WgXcQ
:controls: false
:width: 560px
:height: 315px
```

**Expected:** Video plays without visible controls.

---

## Test 8: Closed Captions

Testing closed captions option.

```{youtube} dQw4w9WgXcQ
:cc_load_policy: true
:width: 560px
:height: 315px
```

**Expected:** Video shows closed captions by default.

---

## Test 9: Show YouTube Branding

Testing modest branding option (default hides logo).

```{youtube} dQw4w9WgXcQ
:modestbranding: false
:width: 560px
:height: 315px
```

**Expected:** Video shows full YouTube branding.

---

## Test 10: Loop Video

Testing video looping.

```{youtube} dQw4w9WgXcQ
:loop: true
:width: 560px
:height: 315px
```

**Expected:** Video loops continuously.

---

## Test 11: Mute Video

Testing mute option without autoplay.

```{youtube} dQw4w9WgXcQ
:mute: true
:width: 560px
:height: 315px
```

**Expected:** Video is muted by default.

---

## Test 12: Show Related Videos

Testing related videos option (default is off).

```{youtube} dQw4w9WgXcQ
:rel: true
:width: 560px
:height: 315px
```

**Expected:** Related videos from other channels show at end.

---

## Test 13: Caption

Testing body content as caption.

```{youtube} dQw4w9WgXcQ
:width: 100%
:height: 400px

Rick Astley's classic 1987 hit "Never Gonna Give You Up" -
the song that launched a thousand rickrolls.
```

**Expected:** Video with a caption underneath.

---

## Test 14: All Options Combined

Testing comprehensive configuration.

```{youtube} jNQXAC9IVRw
:width: 100%
:height: 450px
:title: First YouTube Video - Me at the zoo
:start: 0
:end: 18
:autoplay: false
:controls: true
:cc_load_policy: false
:modestbranding: true
:loop: false
:mute: false
:rel: false

The first video ever uploaded to YouTube, featuring co-founder Jawed Karim at the San Diego Zoo.
```

**Expected:** First YouTube video with all options explicitly set.

---

## Test 15: Different Videos

Testing various video types to ensure ID handling works.

### Educational Video
```{youtube} GtxQMlLQJ5g
:width: 560px
:height: 315px
:title: Python Tutorial
```

### Music Video
```{youtube} kJQP7kiw5Fk
:width: 560px
:height: 315px
:title: Despacito
```

### Short Form Content
```{youtube} 9bZkp7q19f0
:width: 560px
:height: 315px
:title: Gangnam Style
```

**Expected:** Three different videos embed correctly.

---

## Test 16: Placeholder Image (Static Export)

Testing placeholder for PDF/static exports.

```{youtube} dQw4w9WgXcQ
:placeholder: /figures/youtube-placeholder.png
:width: 560px
:height: 315px

This caption appears with a placeholder image in PDF exports.
```

**Expected:** In HTML, the video loads. In PDF, the placeholder image appears.

---

## Summary

| Test | Feature | Status |
|------|---------|--------|
| 1 | Basic usage | Verify manually |
| 2 | Custom dimensions | Verify manually |
| 3 | Accessibility title | Verify manually |
| 4 | Start time | Verify manually |
| 5 | End time | Verify manually |
| 6 | Autoplay with mute | Verify manually |
| 7 | Hide controls | Verify manually |
| 8 | Closed captions | Verify manually |
| 9 | YouTube branding | Verify manually |
| 10 | Loop video | Verify manually |
| 11 | Mute video | Verify manually |
| 12 | Related videos | Verify manually |
| 13 | Caption | Verify manually |
| 14 | All options | Verify manually |
| 15 | Different videos | Verify manually |
| 16 | Placeholder | Verify manually |
