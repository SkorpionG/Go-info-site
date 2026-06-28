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

    const titleEl = document.createElement('title');
    titleEl.textContent = title;
    document.head.appendChild(titleEl);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    document.head.appendChild(metaKeywords);

    const metaAuthor = document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', '圍棋資訊網');
    document.head.appendChild(metaAuthor);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    document.head.appendChild(ogDescription);

    const ogImageMeta = document.createElement('meta');
    ogImageMeta.setAttribute('property', 'og:image');
    ogImageMeta.setAttribute('content', ogImage);
    document.head.appendChild(ogImageMeta);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', url);
    document.head.appendChild(ogUrl);

    const ogSiteName = document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', '圍棋資訊網');
    document.head.appendChild(ogSiteName);

    const twitterCard = document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    document.head.appendChild(twitterCard);

    const twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', title);
    document.head.appendChild(twitterTitle);

    const twitterDescription = document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', description);
    document.head.appendChild(twitterDescription);

    const twitterImageMeta = document.createElement('meta');
    twitterImageMeta.setAttribute('name', 'twitter:image');
    twitterImageMeta.setAttribute('content', twitterImage);
    document.head.appendChild(twitterImageMeta);

    const faviconLink = document.createElement('link');
    faviconLink.setAttribute('rel', 'icon');
    faviconLink.setAttribute('type', 'image/svg+xml');
    faviconLink.setAttribute('href', favicon);
    document.head.appendChild(faviconLink);

    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.setAttribute('rel', 'apple-touch-icon');
    appleTouchIcon.setAttribute('href', favicon);
    document.head.appendChild(appleTouchIcon);
  }
}

customElements.define('site-metadata', SiteMetadata);
