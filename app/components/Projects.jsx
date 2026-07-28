'use client';

import { useState } from 'react';

const BUILDS = [
  {
    name: 'Reva Cranes',
    url: 'revacranes.com',
    tag: 'Custom WordPress Website',
    category: 'WordPress',
  },
  {
    name: 'Advance Laminates',
    url: 'advancelaminates.in',
    tag: 'WordPress Website',
    category: 'WordPress',
  },
  {
    name: 'Drillman India',
    url: 'drillmanindia.com',
    tag: 'WordPress Website',
    category: 'WordPress',
  },
  {
    name: 'Wirefabrik',
    url: 'wirefabrik.com',
    tag: 'WordPress Website',
    category: 'WordPress',
  },
  {
    name: 'TextShala',
    url: 'textshala.com',
    tag: 'WooCommerce Bookstore',
    category: 'WooCommerce',
  },
  {
    name: 'Homeloomers',
    url: 'homeloomers.com',
    tag: 'Shopify Store',
    category: 'Shopify',
  },
  {
    name: 'Kozeecub',
    url: 'kozeecub.com',
    tag: 'Shopify Store',
    category: 'Shopify',
  },
];

const TABS = ['All', 'WordPress', 'WooCommerce', 'Shopify'];

function shotUrl(url, w, h) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(`https://${url}`)}?w=${w}&h=${h}`;
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1c1b2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? BUILDS : BUILDS.filter((b) => b.category === active);

  return (
    <div>
      <div className="build-tabs" role="tablist" aria-label="Filter projects by platform">
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
            <div className="build-visual">
              <img
                className="build-shot"
                src={shotUrl(b.url, 700, 2000)}
                alt={`${b.name} homepage preview`}
                loading="lazy"
              />
              <span className="build-link-badge">
                <LinkIcon />
              </span>
            </div>
            <div className="build-body">
              <div className="build-title">{b.name}</div>
              <div className="build-sub">{b.tag}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
