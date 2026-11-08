# chasedoelling.com

Personal site. Plain HTML, CSS and JS, no build step, served by GitHub Pages.

- `index.html` holds the page, styles and renderer.
- `content.js` holds all copy (`window.SITE`). Edit text here.
- `assets/img`, `assets/video` hold the media.

Hero video: set `hero.video` in `content.js` to a file under `assets/video/`; until then the Denver photo shows.

Preview locally: `python3 -m http.server` then open http://localhost:8000.
