'use client';

import { useState } from 'react';

const BUILDS = [
  {
    name: 'Reva Cranes',
    url: 'revacranes.com',
    tag: 'Custom WordPress',
    category: 'WordPress',
    desc: 'Fully custom WordPress build on a hand-rolled PHP template for an industrial crane manufacturer.',
    stack: 'WordPress · PHP · Custom Template',
    accent: '#6c3bf5',
    icon: 'industrial',
  },
  {
    name: 'Advance Laminates',
    url: 'advancelaminates.in',
    tag: 'WordPress',
    category: 'WordPress',
    desc: 'Product portfolio site for decorative laminates — rebuilt navigation and layout for faster browsing.',
    stack: 'WordPress · HTML5 · CSS3',
    accent: '#ff5470',
    icon: 'layers',
  },
  {
    name: 'Drillman India',
    url: 'drillmanindia.com',
    tag: 'WordPress',
    category: 'WordPress',
    desc: 'Corporate site for a drilling equipment company, optimised for performance and mobile.',
    stack: 'WordPress · Responsive',
    accent: '#00c2a8',
    icon: 'drill',
  },
  {
    name: 'Wirefabrik',
    url: 'wirefabrik.com',
    tag: 'WordPress',
    category: 'WordPress',
    desc: 'Business site with a clean UI and cross-device layout, customised and deployed end to end.',
    stack: 'WordPress · Cross-device QA',
    accent: '#ffb220',
    icon: 'wire',
  },
  {
    name: 'TextShala',
    url: 'textshala.com',
    tag: 'WooCommerce',
    category: 'WooCommerce',
    desc: 'Online bookstore for engineering, medical and agriculture titles, built for students across India.',
    stack: 'WordPress · WooCommerce',
    accent: '#6c3bf5',
    icon: 'book',
  },
  {
    name: 'Homeloomers',
    url: 'homeloomers.com',
    tag: 'Shopify',
    category: 'Shopify',
    desc: 'Home furnishings storefront with custom theme elements and a conversion-tuned checkout.',
    stack: 'Shopify · Liquid',
    accent: '#ff5470',
    icon: 'home',
  },
  {
    name: 'Kozeecub',
    url: 'kozeecub.com',
    tag: 'Shopify',
    category: 'Shopify',
    desc: 'Kids & lifestyle storefront — mobile-first, with custom product pages and payment integration.',
    stack: 'Shopify · Liquid',
    accent: '#00c2a8',
    icon: 'cube',
  },
];

const TABS = ['All', 'WordPress', 'WooCommerce', 'Shopify'];

function Icon({ type }) {
  const common = { fill: 'none', stroke: '#ffffff', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'industrial':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M8 40h48" {...common} />
          <path d="M14 40V18l18-10 18 10v22" {...common} />
          <path d="M32 8v10" {...common} />
          <path d="M14 40h36" {...common} />
          <path d="M22 40V26h20v14" {...common} />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M32 8 8 20l24 12 24-12z" {...common} />
          <path d="M8 28l24 12 24-12" {...common} />
          <path d="M8 36l24 12 24-12" {...common} />
        </svg>
      );
    case 'drill':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M8 24h20" {...common} />
          <path d="M28 16h16v16H28z" {...common} />
          <path d="M44 20h8l4 4-4 4h-8" {...common} />
          <path d="M8 24l6-4v8z" {...common} />
        </svg>
      );
    case 'wire':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M6 24c6-10 10 10 16 0s10-10 16 0 10 10 16 0" {...common} />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M32 12c-6-4-16-4-22-1v26c6-3 16-3 22 1" {...common} />
          <path d="M32 12c6-4 16-4 22-1v26c-6-3-16-3-22 1" {...common} />
          <path d="M32 12v27" {...common} />
        </svg>
      );
    case 'home':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M12 24 32 10l20 14" {...common} />
          <path d="M16 22v18h32V22" {...common} />
          <path d="M28 40V28h8v12" {...common} />
        </svg>
      );
    case 'cube':
      return (
        <svg viewBox="0 0 64 48">
          <path d="M32 8 50 17v14L32 40 14 31V17z" {...common} />
          <path d="M14 17l18 9 18-9" {...common} />
          <path d="M32 26v14" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

function shotUrl(url, w, h) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(`https://${url}`)}?w=${w}&h=${h}`;
}

export default function LiveBuilds() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? BUILDS : BUILDS.filter((b) => b.category === active);

  return (
    <div>
      <div className="build-tabs" role="tablist" aria-label="Filter builds by platform">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            className={`tab-btn${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
            <span className="tab-count">
              {tab === 'All' ? BUILDS.length : BUILDS.filter((b) => b.category === tab).length}
            </span>
          </button>
        ))}
      </div>

      <div className="builds-grid">
        {filtered.map((b) => (
          <a
            key={b.name}
            className="build-card"
            href={`https://${b.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="chrome-bar">
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="chrome-url">{b.url}</span>
            </div>
            <div className="build-visual" style={{ background: b.accent }}>
              <img
                className="build-shot"
                src={shotUrl(b.url, 900, 2400)}
                alt={`${b.name} homepage preview`}
                loading="lazy"
              />
              <span className="build-icon-badge" style={{ background: b.accent }}>
                <Icon type={b.icon} />
              </span>
              <span className="scroll-hint">Hover to preview full page ↓</span>
            </div>
            <div className="build-body">
              <span className="build-tag">{b.tag}</span>
              <div className="build-title">{b.name}</div>
              <p className="build-desc">{b.desc}</p>
              <div className="build-stack">{b.stack}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
