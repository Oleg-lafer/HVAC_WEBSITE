# Atlas

Static Astro website for UK commercial HVAC project intelligence. Uses custom CSS, locally hosted Manrope and a small vanilla-JavaScript map/menu enhancement. No application backend or customer data collection.

## Local development

Use Node.js 22.12 or newer (developed with Node 24) and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Astro prints the local URL. This version is local-only and is not published. Source business documents remain in the root folder. Build output is `dist/`.

## Content and configuration

Edit `src/data/site.js` for brand and pilot price. Supply `SITE_URL` (full HTTPS origin) and `CONTACT_EMAIL` as build environment variables. Optional `.env` values are loaded by the Astro configuration. Without a domain the site has no canonical or social-image URL, produces an empty sitemap and asks crawlers not to index it. Without an email, contact explicitly says enquiries are not collected.

The sample report and map are fictional demonstrations, never verified live opportunities. Founder content is limited to the supplied biography. No VAT wording is displayed.

## Cloudflare Pages (future launch)

Connect the Git repository after choosing where to host it. Set production branch to `main`, build command to `npm run build`, output directory to `dist`, and Node version to 24. Use a static Pages project; no Worker, adapter or server is required. Set the two build environment variables, attach the final custom domain and confirm HTTPS. `404.html` supplies the custom not-found page. Rebuild when contact or domain changes.

Before launch: supply the real contact email and domain, review business copy and final tax/VAT wording with the owner, check the resulting canonical/social/sitemap URLs, and verify contact links on the deployed domain. No live deployment or remote repository was created during the local-preview phase.

## Asset provenance

- UK geometry: Natural Earth 1:50m Admin 0 countries, public domain. Source: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson ; terms: https://www.naturalearthdata.com/about/terms-of-use/ . The UK subset is projected into `src/data/uk-path.json`; regenerate with `node scripts/create-map.mjs path/to/downloaded.geojson`. No map library or external API is loaded by visitors.
- Manrope: locally bundled through `@fontsource-variable/manrope`, SIL Open Font License (see package license).
- Atlas logo and favicon: original geometric brand assets.
- Social preview: original generated Atlas brand image.
- Barbour ABI is a design reference only; no branded assets, text or graphics are reused.
