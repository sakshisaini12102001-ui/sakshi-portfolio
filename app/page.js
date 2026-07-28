import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--ff-display',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-body',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--ff-mono',
});

const STATS = [
  { value: '3+', label: 'Years shipping' },
  { value: '10+', label: 'Sites delivered' },
  { value: '500+', label: 'Active LMS learners' },
  { value: '35%', label: 'Avg. load-time cut' },
];

const BUILDS = [
  {
    name: 'Reva Cranes',
    url: 'revacranes.com',
    tag: 'Custom WordPress',
    desc: 'Fully custom WordPress build on a hand-rolled PHP template for an industrial crane manufacturer.',
    stack: 'WordPress · PHP · Custom Template',
    accent: '#1f4b8f',
    icon: 'industrial',
  },
  {
    name: 'Advance Laminates',
    url: 'advancelaminates.in',
    tag: 'WordPress',
    desc: 'Product portfolio site for decorative laminates — rebuilt navigation and layout for faster browsing.',
    stack: 'WordPress · HTML5 · CSS3',
    accent: '#d97f0c',
    icon: 'layers',
  },
  {
    name: 'Drillman India',
    url: 'drillmanindia.com',
    tag: 'WordPress',
    desc: 'Corporate site for a drilling equipment company, optimised for performance and mobile.',
    stack: 'WordPress · Responsive',
    accent: '#2f7a4f',
    icon: 'drill',
  },
  {
    name: 'Wirefabrik',
    url: 'wirefabrik.com',
    tag: 'WordPress',
    desc: 'Business site with a clean UI and cross-device layout, customised and deployed end to end.',
    stack: 'WordPress · Cross-device QA',
    accent: '#1f4b8f',
    icon: 'wire',
  },
  {
    name: 'TextShala',
    url: 'textshala.com',
    tag: 'WooCommerce',
    desc: 'Online bookstore for engineering, medical and agriculture titles, built for students across India.',
    stack: 'WordPress · WooCommerce',
    accent: '#7a3fae',
    icon: 'book',
  },
  {
    name: 'Homeloomers',
    url: 'homeloomers.com',
    tag: 'Shopify',
    desc: 'Home furnishings storefront with custom theme elements and a conversion-tuned checkout.',
    stack: 'Shopify · Liquid',
    accent: '#d97f0c',
    icon: 'home',
  },
  {
    name: 'Kozeecub',
    url: 'kozeecub.com',
    tag: 'Shopify',
    desc: 'Kids & lifestyle storefront — mobile-first, with custom product pages and payment integration.',
    stack: 'Shopify · Liquid',
    accent: '#2f7a4f',
    icon: 'cube',
  },
];

const STACK = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    title: 'CMS & Platforms',
    items: ['WordPress', 'BuddyBoss', 'LearnDash', 'WooCommerce', 'Shopify'],
  },
  {
    title: 'Tools',
    items: ['cPanel', 'Web Hosting', 'Git'],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
];

const EXPERIENCE = [
  {
    title: 'WordPress & Front-End Developer',
    org: 'E-Marketing.io — Jaipur',
    period: 'Apr 2023 — Present',
    bullets: [
      'Built and maintained 5+ WordPress LMS platforms on BuddyBoss and LearnDash, supporting 500+ active learners.',
      'Customised 10+ themes and plugins, cutting site load time by ~35% through performance work.',
      'Integrated WooCommerce payments for 3 e-commerce clients for seamless online transactions.',
      'Built and customised Shopify storefronts (Homeloomers, Kozeecub) with conversion-tuned checkout flows.',
      'Deployed production sites via cPanel with a structured release process, reducing deployment errors.',
    ],
  },
  {
    title: 'WordPress & Front-End Developer',
    org: 'Webinfo Software Pvt. Ltd. — Jaipur',
    period: 'Aug 2022 — Mar 2023',
    bullets: [
      'Shipped 8+ responsive WordPress sites with HTML5, CSS3, JavaScript and Bootstrap, on time and in scope.',
      'Built custom UI components, lifting client-reported engagement by ~25% on average.',
      'Partnered with designers and backend developers to ship high-quality client work.',
      'Maintained multiple client sites at 99%+ uptime, in line with security standards.',
    ],
  },
  {
    title: 'WordPress Developer — Internship',
    org: 'Tech at Biz — Jaipur',
    period: 'Jan 2022 — Jun 2022',
    bullets: [
      'Developed and customised WordPress sites and LMS platforms on BuddyBoss and LearnDash.',
      'Configured themes and plugins across the full WordPress development lifecycle.',
      'Supported senior developers on client deliverables, speeding up routine customisation turnaround.',
    ],
  },
];

function Icon({ type }) {
  const stroke = 'rgba(255,255,255,0.9)';
  const common = { fill: 'none', stroke, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
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

export default function Home() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <header className="site-header">
        <div className="wrap">
          <div className="mark">
            SAKSHI<span>.</span>SAINI
          </div>
          <nav>
            <a href="#builds">Live Builds</a>
            <a href="#stack">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <section className="hero grid-field">
        <div className="wrap">
          <span className="hero-kicker">Jaipur, India · Open to new builds</span>
          <h1>
            WordPress &amp; front-end developer who ships <em>production</em> sites, not drafts.
          </h1>
          <p className="hero-sub">
            3+ years building LMS platforms, WooCommerce stores and Shopify fronts for
            agencies and direct clients — 10+ sites live, from industrial B2B to student
            bookstores.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#builds">
              View live builds ↓
            </a>
            <a className="btn btn-ghost" href="mailto:sakshisaini12102001@gmail.com">
              Email me
            </a>
          </div>

          <div className="dims">
            {STATS.map((s) => (
              <div className="dim" key={s.label}>
                <div className="dim-bracket" />
                <div className="dim-value">{s.value}</div>
                <div className="dim-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="builds">
        <div className="wrap">
          <div className="eyebrow">Live Builds — Proof, Not Promises</div>
          <div className="builds-grid">
            {BUILDS.map((b) => (
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
                  <Icon type={b.icon} />
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
      </section>

      <section id="stack">
        <div className="wrap">
          <div className="eyebrow">Toolkit</div>
          <div className="stack-grid">
            {STACK.map((col) => (
              <div className="stack-col" key={col.title}>
                <h3>{col.title}</h3>
                <ul className="stack-list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="eyebrow">Experience</div>
          <div className="timeline">
            {EXPERIENCE.map((role) => (
              <div className="tl-item" key={role.title + role.period}>
                <div className="tl-role">
                  <div className="tl-title">{role.title}</div>
                  <div className="tl-period">{role.period}</div>
                </div>
                <div className="tl-org">{role.org}</div>
                <ul className="tl-bullets">
                  {role.bullets.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="eyebrow" style={{ marginTop: 64 }}>
            Education
          </div>
          <div className="edu-row">
            <span className="edu-degree">B.E., Computer Science — Jaipur Engineering College, Kukas</span>
            <span className="edu-meta">2017 — 2021</span>
          </div>
          <div className="edu-row">
            <span className="edu-degree">Python &amp; Django Training — Technoglobe Pvt Ltd</span>
            <span className="edu-meta">Certification</span>
          </div>
          <div className="edu-row">
            <span className="edu-degree">Web Development Training (PHP, CSS, Bootstrap) — Internshala</span>
            <span className="edu-meta">Certification</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-eyebrow">Next Build</div>
          <h2>Have a WordPress or Shopify project that needs shipping?</h2>
          <div className="contact-links">
            <a className="contact-link" href="mailto:sakshisaini12102001@gmail.com">
              sakshisaini12102001@gmail.com
            </a>
            <a className="contact-link" href="tel:+918160141898">
              +91 81601 41898
            </a>
            <a
              className="contact-link"
              href="https://linkedin.com/in/sakshisaini26"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sakshisaini26
            </a>
          </div>
          <div className="footer-meta">
            <span>Sakshi Saini — Amber, Jaipur, Rajasthan</span>
            <span>Built with Next.js, deployed on Vercel</span>
          </div>
        </div>
      </section>
    </main>
  );
}
