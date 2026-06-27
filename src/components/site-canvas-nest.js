/**
 * SiteCanvasNest Web Component
 *
 * Usage:
 *   <site-canvas-nest color="252,244,3" point-color="28,3,252"></site-canvas-nest>
 *
 * How it works:
 *   canvas-nest.js 2.x auto-inits by reading the LAST <script> tag in the
 *   document via getElementsByTagName("script"). This component appends the
 *   canvas-nest CDN <script> with the color attributes set directly on it,
 *   so when it loads and runs it is the last <script> in the DOM and reads
 *   its own color attributes — identical to the original static approach.
 *
 * NOTE: This works correctly when opening files directly in the browser.
 *   If using a dev server that injects its own <script> (e.g. VS Code Live
 *   Server), the colors may not apply because the injected reload script
 *   becomes the last <script> after canvas-nest.js loads asynchronously.
 *   Simply open the HTML files directly in the browser to avoid this.
 *
 * Attributes:
 *   color       — RGB string for line/dot color   (default: "252,244,3")
 *   point-color — RGB string for node point color (default: "28,3,252")
 *   opacity     — opacity 0-1                     (default: "1")
 *   z-index     — CSS z-index for the canvas      (default: "-2")
 *   count       — number of nodes                 (default: "99")
 */
class SiteCanvasNest extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute('color') || '252,244,3';
    const pointColor = this.getAttribute('point-color') || '28,3,252';
    const opacity = this.getAttribute('opacity') || '1';
    const zIndex = this.getAttribute('z-index') || '-2';
    const count = this.getAttribute('count') || '99';

    // Append canvas-nest.js with color attrs set directly on the script tag.
    // canvas-nest reads config from the last <script> in the document, which
    // will be this element itself when it runs.
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('color', color);
    script.setAttribute('pointColor', pointColor);
    script.setAttribute('opacity', opacity);
    script.setAttribute('zIndex', zIndex);
    script.setAttribute('count', count);
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/canvas-nest.js/2.0.4/canvas-nest.js';
    script.integrity =
      'sha512-P+NGabN/TJDOnCVOFJO+E06TBm4i+M8dTT91lWg/8UpwLrzicEXIypmABPpA47D0x6r+yxFHjYIZKWhc1h7xlQ==';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';

    document.body.appendChild(script);
  }
}

customElements.define('site-canvas-nest', SiteCanvasNest);
