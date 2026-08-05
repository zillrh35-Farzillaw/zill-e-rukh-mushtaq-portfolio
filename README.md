# Zill E Rukh Mushtaq — Portfolio

Personal portfolio site for Zill E Rukh Mushtaq — Legal Professional, Accredited Mediator (SIMI · IMI · CMC UK), Associate Arbitrator & Published Researcher.

Live at [zillerukhmushtaq.website](https://www.zillerukhmushtaq.website/).

## Structure

Static site — no build step, no dependencies.

```
index.html            Single-page site (markup, CSS, and JS inline)
robots.txt             Search engine crawl rules
sitemap.xml             Sitemap for search engines
favicon.ico, favicon-*.png, apple-touch-icon.png    Site icons (must stay at root)
assets/images/          Hero photo, profile photo, Open Graph image
gallery/                 Achievements gallery
  logos/                    Institutional / accreditation logos
  reviews/                  Reviewer avatar photos
  g*.jpg                    Event and engagement photos
netlify.toml            Netlify deploy configuration
```

## Local preview

No build tools required — serve the directory with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This repo is connected to Netlify for continuous deployment — pushes to `main` publish automatically. `netlify.toml` sets the publish directory (`.`) and caching headers for `assets/` and `gallery/`.
