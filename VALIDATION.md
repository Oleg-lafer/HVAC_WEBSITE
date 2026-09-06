# Local preview validation

- Production build: passed, five static HTML pages plus robots.txt and sitemap.xml.
- All generated internal links, asset references and section anchors resolve; every page has one H1, title and description.
- Homepage tested at 1440, 1280, 768, 390 and 320 CSS pixels. No horizontal overflow; mobile layout places the map before the CTA buttons.
- Sample, contact and about pages checked at 390px without horizontal overflow.
- Mobile menu opens and dismisses with Escape. Map previews open with click and keyboard Enter, and dismiss with Escape; focus returns to the marker.
- Text colour pairs tested at WCAG AA normal-text contrast; reduced-motion CSS disables the marker pulse.
- Exact pilot price is present on homepage and contact page. No VAT wording is displayed.
- Separate build with test-only domain/email confirmed canonical URLs, social metadata, four sitemap entries, robots.txt and mailto configuration. Those test values are absent from the delivered build.
- Local version deliberately has noindex metadata, an empty sitemap and an explicit contact-details-pending state.

The site has not been deployed. Physical-device touch testing and a screen-reader audit were not performed. Before launch, supply contact email/domain and review final tax wording.
