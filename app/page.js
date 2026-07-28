import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import LiveBuilds from './components/LiveBuilds';

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
          <span className="eyebrow" style={{ marginBottom: 24 }}>
            Jaipur, India · Open to new builds
          </span>
          <h1>
            WordPress &amp; front-end developer who ships{' '}
            <mark className="hl hl-violet">production</mark> sites —{' '}
            <mark className="hl hl-coral">not drafts</mark>.
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
          <LiveBuilds />
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
