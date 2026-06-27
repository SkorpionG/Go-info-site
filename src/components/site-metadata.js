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

    const html = `
      <title>${title}</title>
      
      <!-- SEO Metadata -->
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords}" />
      <meta name="author" content="圍棋資訊網" />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${ogImage}" />
      <meta property="og:url" content="${url}" />
      <meta property="og:site_name" content="圍棋資訊網" />

      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image" content="${twitterImage}" />

      <!-- Favicon -->
      <link rel="icon" type="image/svg+xml" href="${favicon}" />
      <link rel="apple-touch-icon" href="${favicon}" />
    `;

    document.head.insertAdjacentHTML('beforeend', html);
  }
}

customElements.define('site-metadata', SiteMetadata);
