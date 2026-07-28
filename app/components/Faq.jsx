'use client';

import { useState } from 'react';

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-grid">
      {items.map((item, i) => (
        <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={item.q}>
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {item.q}
            <span className="faq-plus">+</span>
          </button>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  );
}
