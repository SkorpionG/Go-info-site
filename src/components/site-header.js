/**
 * SiteHeader Web Component
 *
 * Usage:
 *   <site-header active="home"   root="./"></site-header>       <!-- index.html     -->
 *   <site-header active="korea"  root="../../"></site-header>   <!-- src/pages/*.html -->
 *
 * Attributes:
 *   active  — key of the currently active page
 *             (one of: home | korea | japan | china | taiwan)
 *   root    — relative path from the current file back to the project root
 *             e.g. "./" for index.html, "../../" for pages inside src/pages/
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute("active") || "home";
    const root = this.getAttribute("root") || "./";

    // All nav entries — hrefs are resolved from the project root
    const pages = [
      { key: "home",   label: "網站首頁", href: `${root}index.html`            },
      { key: "korea",  label: "韓國棋院", href: `${root}src/pages/korea.html`  },
      { key: "japan",  label: "日本棋院", href: `${root}src/pages/japan.html`  },
      { key: "china",  label: "中國棋院", href: `${root}src/pages/china.html`  },
      { key: "taiwan", label: "海峰棋院", href: `${root}src/pages/taiwan.html` },
    ];

    const navItems = pages
      .map(
        (p) => `
        <li class="nav-items">
          <a class="nav-links${p.key === active ? " active" : ""}"
             href="${p.key === active ? "#" : p.href}">
            ${p.label}
          </a>
        </li>`
      )
      .join("");

    this.innerHTML = `
      <header class="header">
        <div class="topbar">
          <h1>圍棋資訊網</h1>
          <h3>圍棋是一種策略棋類，使用格狀棋盤及黑白二色棋子進行對弈。起源於中國，中國古時有「弁」、「基」、「手談」等多種稱謂，屬琴棋書畫四藝。</h3>
        </div>
        <nav class="navbar">
          <ul class="nav-list">
            ${navItems}
          </ul>
        </nav>
      </header>`;
  }
}

customElements.define("site-header", SiteHeader);
