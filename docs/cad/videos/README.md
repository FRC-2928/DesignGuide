# Videos

Screen recordings for the guide live in this folder (`docs/videos/`). They play inline on the page with full controls, so they are smoother than GIFs.

## Recording

- **Windows:** Xbox Game Bar (Win+G, then record) or [ShareX](https://getsharex.com/) or OBS.
- Record the Onshape tab only, 1920x1080 or 1280x720, 10 to 40 seconds per step.
- Move the mouse slowly and pause on each menu so viewers can read it.
- Save as **MP4 (H.264)**. Keep each file under about 20 MB.
- Name it by rule and step, for example `rule6-step2-assign-material.mp4`.

## Embedding in a page

Put this in the Markdown file where the video should appear (change the path to match the page's folder; from a rule page it is `../videos/`):

```html
<video controls muted playsinline width="100%">
  <source src="../../videos/rule6-step2-assign-material.mp4" type="video/mp4">
</video>
```

Write the step text below the video, as in Rule 6.

For videos that are already on YouTube, paste the embed iframe instead.
