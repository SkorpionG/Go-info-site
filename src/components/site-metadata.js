/**
 * SiteMetadata Web Component
 *
 * Usage:
 *   <site-metadata root="./"></site-metadata>                     <!-- index.html -->
 *   <site-metadata title="..." description="..." root="../../"></site-metadata> <!-- subpages -->
 *
 * Attributes:
 *   title         — Page title (sets <title>, og:title, twitter:title)
 *   description   — Meta description (sets description, og:description, twitter:description)
 *   keywords      — Meta keywords
 *   root          — Relative path back to the project root (e.g. "./" or "../../")
 *   url           — Canonical / og:url (optional; defaults to the current page URL)
 *   og-image      — og:image URL (optional; defaults to ${root}public/assets/og-image.png)
 *   twitter-image — twitter:image URL (optional; defaults to ${root}public/assets/twitter-image.png)
 */
class SiteMetadata extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '圍棋資訊網';
    const description = this.getAttribute('description') || '';
    const keywords = this.getAttribute('keywords') || '';
    const root = this.getAttribute('root') || './';

    // Dynamically derive the base URL from the current window location
    let baseUrl = window.location.href;
    try {
      const parsed = new window.URL(window.location.href);
      // Ensure trailing slash for directory paths without file extension so relative paths resolve correctly
      if (
        !parsed.pathname.endsWith('/') &&
        !parsed.pathname.split('/').pop().includes('.')
      ) {
        parsed.pathname += '/';
      }
      parsed.search = '';
      parsed.hash = '';
      baseUrl = parsed.href;
    } catch {
      baseUrl = window.location.href;
    }

    const toAbsoluteUrl = (path) => {
      try {
        return new window.URL(path, baseUrl).href;
      } catch {
        return path;
      }
    };

    const urlAttr = this.getAttribute('url');
    const url = urlAttr ? toAbsoluteUrl(urlAttr) : baseUrl;

    const ogImageAttr = this.getAttribute('og-image');
    const ogImage = ogImageAttr
      ? toAbsoluteUrl(ogImageAttr)
      : toAbsoluteUrl(`${root}public/assets/og-image.png`);

    const twitterImageAttr = this.getAttribute('twitter-image');
    const twitterImage = twitterImageAttr
      ? toAbsoluteUrl(twitterImageAttr)
      : toAbsoluteUrl(`${root}public/assets/twitter-image.png`);

    const favicon = `${root}public/favicon.svg`;

    // Handle title safely
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: '圍棋資訊網' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: '圍棋資訊網' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: twitterImage },
    ];

    const linkTags = [
      { rel: 'icon', type: 'image/svg+xml', href: favicon },
      { rel: 'apple-touch-icon', href: favicon },
    ];

    const fragment = document.createDocumentFragment();

    metaTags.forEach((tag) => {
      const key = tag.name ? 'name' : 'property';
      const value = tag[key];
      let el = document.head.querySelector(`meta[${key}="${value}"]`);
      if (el) {
        el.setAttribute('content', tag.content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(key, value);
        el.setAttribute('content', tag.content);
        fragment.appendChild(el);
      }
    });

    linkTags.forEach((tag) => {
      let el = document.head.querySelector(`link[rel="${tag.rel}"]`);
      if (el) {
        if (tag.type) el.setAttribute('type', tag.type);
        el.setAttribute('href', tag.href);
      } else {
        el = document.createElement('link');
        el.setAttribute('rel', tag.rel);
        if (tag.type) el.setAttribute('type', tag.type);
        el.setAttribute('href', tag.href);
        fragment.appendChild(el);
      }
    });

    document.head.appendChild(fragment);
  }
}

customElements.define('site-metadata', SiteMetadata);
