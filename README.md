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
CNAME                   Custom domain for GitHub Pages
.nojekyll                Disables Jekyll processing on GitHub Pages
```

## Local preview

No build tools required — serve the directory with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Served via GitHub Pages, deploying from the `main` branch root on every push. `CNAME` maps the custom domain (`www.zillerukhmushtaq.website`); `.nojekyll` tells Pages to serve the files as-is instead of running them through Jekyll.

One-time setup in the GitHub UI (Settings → Pages):
- Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
- Custom domain: `www.zillerukhmushtaq.website` (matches the `CNAME` file)
- Enforce HTTPS: on, once GitHub finishes issuing the certificate

DNS records needed at your domain registrar:
- `CNAME` record: `www` → `zillrh35-farzillaw.github.io`
- `A` records for the apex domain (`zillerukhmushtaq.website`), pointing to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
