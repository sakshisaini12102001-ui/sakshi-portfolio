'use client';

import { useEffect, useRef, useState } from 'react';

function ExpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export default function ExperienceScroll({ items }) {
  const [active, setActive] = useState(0);
  const markerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    markerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  const goTo = (i) => {
    markerRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const current = items[active];

  return (
    <div className="exp-scroll">
      <div className="exp-track">
        {items.map((_, i) => (
          <div
            key={i}
            className="exp-marker"
            data-index={i}
            ref={(el) => (markerRefs.current[i] = el)}
          />
        ))}
      </div>

      <div className="exp-sticky-panel">
        <div className="exp-rail">
          {items.map((_, i) => (
            <div className="exp-rail-step" key={i}>
              <button
                className={`exp-dot${i <= active ? ' filled' : ''}${i === active ? ' current' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to experience ${i + 1}`}
              />
              {i < items.length - 1 && (
                <span className={`exp-connector${i < active ? ' filled' : ''}`} />
              )}
            </div>
          ))}
        </div>

        <div className="exp-card" key={active}>
          <span className="exp-icon"><ExpIcon /></span>
          <div className="exp-body">
            <div className="exp-top">
              <div className="exp-role">{current.title}</div>
              <span className="exp-period">{current.period}</span>
            </div>
            <div className="exp-org">{current.org}</div>
            <div className="exp-desc">
              <ul>
                {current.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="exp-progress-label">
          {active + 1} / {items.length}
        </div>
      </div>
    </div>
  );
}
