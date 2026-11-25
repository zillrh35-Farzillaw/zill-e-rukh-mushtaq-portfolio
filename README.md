# Zill E Rukh Mushtaq — Portfolio

Personal portfolio site for Zill E Rukh Mushtaq — Accredited Mediator (IMI · CMC UK · SIMI), Associate Arbitrator & Published Researcher.

Live at [zillerukhmushtaq.website](https://www.zillerukhmushtaq.website/).

## Structure

Static multi-page site — plain HTML with one shared stylesheet and script, no build step or dependencies.

```
index.html              Home
about/                  Profile, experience, education, competencies
practice/               Areas of practice and the mediation process
credentials/            Accreditations, qualifications, memberships
publications/           Published and forthcoming works
engagements/            Speaking, adjudication, honours, conferences, delegations
gallery/                Media gallery page (index.html) and the event photos (g*.jpg)
  reviews/                Reviewer avatar photos
contact/                Consultation request (opens WhatsApp) and contact details
assets/site.css         Shared styles for every page
assets/site.js          Shared behaviour (menu, reveals, gallery lightbox, booking form)
assets/logos/           Institution logos in original colours
assets/images/          Hero photo, profile photo, Open Graph image
robots.txt, sitemap.xml Search engine files
favicon.ico, favicon-*.png, apple-touch-icon.png    Site icons (must stay at root)
CNAME                   Custom domain for GitHub Pages
.nojekyll               Disables Jekyll processing on GitHub Pages
```

Every page carries the same header and footer; when editing navigation, update it on all pages.
Old one-page links such as `/#booking` are redirected to the matching new page by `assets/site.js`.

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

Last published: 25 November 2026.
