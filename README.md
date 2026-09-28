# Site24x7 → OpManager Nexus cloud: mobile help docs comparison

A single-page report comparing the OpManager Nexus cloud mobile app help pages with the Site24x7 pages they were copied from. It covers:

- **Page map:** all 19 page pairs, and the few real content changes.
- **Rename leftovers:** 13 places that still say or link to Site24x7.
- **Screenshots:** 11 of 82 still show Site24x7 branding (thumbnails in `images/`).
- **Confirm for Nexus:** 14 Site24x7 product claims the product team needs to verify. Each has a Yes/No box. Answers are shared with the whole team through a small Catalyst API (`nexusvotes` in the Site24x7MOM project), and each answer shows the voter's name. Voting needs the team passcode, which you get from the report owner. If the API can't be reached, answers are saved in your own browser only.
- **Issues and copy fixes:** 12 issues and 30 copy fixes you can filter and copy.

Snapshot taken 28 Sep 2026. Nexus pages come from the staging host `www.localmanageengine.com/it-operations-management/cloud-help/native-apps/`.

## View

Open `index.html` in a browser, or use the GitHub Pages URL for this repo. It's a static page with no build step. `support.js` is its runtime and must sit next to `index.html`. React 18.3.1 is served from `assets/vendor/`. These files are byte-identical to the unpkg builds, which is checked against the SRI hashes in `support.js`, so the page doesn't depend on any CDN. Fonts load from Google Fonts.

The page is one long scroll. To link to a section, add `#summary`, `#map`, `#leftovers`, `#shots`, `#confirm`, `#issues` or `#fixes` to the URL.

## Full audit

`audit/index.html` is the complete Site24x7 Mobile Docs Audit that this comparison grew out of. It uses the same design, from `assets/ui.css` and `assets/shell.js`, and needs no runtime. On GitHub Pages it's served at `/audit/`, with sections `#overview`, `#platform`, `#features`, `#release`, `#mentions`, `#nexus` and `#fixes`.
