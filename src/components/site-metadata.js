class SiteMetadata extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '圍棋資訊網';
    const description = this.getAttribute('description') || '';
    const keywords = this.getAttribute('keywords') || '';
    const url =
      this.getAttribute('url') || 'https://skorpiong.github.io/Go-info-site/';
    const root = this.getAttribute('root') || './';
    const ogImage =
      'https://skorpiong.github.io/Go-info-site/public/assets/og-image.png';
    const twitterImage =
      'https://skorpiong.github.io/Go-info-site/public/assets/twitter-image.png';
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
