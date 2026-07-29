import { Poppins, Inter } from 'next/font/google';
import Projects from './components/Projects';
import ExperienceScroll from './components/ExperienceScroll';
import Faq from './components/Faq';

const display = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--ff-display',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-body',
});

const STATS = [
  { value: '3+', label: 'Years Experience', icon: 'users', bg: 'var(--violet-soft)', fg: 'var(--violet-dark)' },
  { value: '10+', label: 'Projects Completed', icon: 'gift', bg: 'var(--coral-soft)', fg: 'var(--coral)' },
  { value: '30+', label: 'Happy Clients', icon: 'smile', bg: 'var(--amber-soft)', fg: '#b9770e' },
  { value: '100%', label: 'Client Satisfaction', icon: 'rocket', bg: 'var(--teal-soft)', fg: '#158f70' },
];

const SERVICES = [
  {
    title: 'WordPress Development',
    desc: 'Custom WordPress themes, plugins and websites built from scratch.',
    icon: 'wordpress',
    bg: 'var(--violet-soft)',
    fg: 'var(--violet-dark)',
  },
  {
    title: 'WooCommerce',
    desc: 'E-commerce solutions with WooCommerce customization and integrations.',
    icon: 'cart',
    bg: 'var(--coral-soft)',
    fg: 'var(--coral)',
  },
  {
    title: 'LMS & Community',
    desc: 'BuddyBoss and LearnDash platforms for online courses and communities.',
    icon: 'graduation',
    bg: 'var(--teal-soft)',
    fg: '#158f70',
  },
  {
    title: 'Performance Optimization',
    desc: 'Speed optimization, SEO-friendly structure and best practices.',
    icon: 'speed',
    bg: 'var(--amber-soft)',
    fg: '#b9770e',
  },
  {
    title: 'Responsive Design',
    desc: 'Pixel-perfect, mobile-friendly designs that look great on all devices.',
    icon: 'devices',
    bg: 'var(--violet-soft)',
    fg: 'var(--violet-dark)',
  },
  {
    title: 'Shopify Storefronts',
    desc: 'Custom Shopify themes, product pages and conversion-tuned checkout.',
    icon: 'shopify',
    bg: 'var(--coral-soft)',
    fg: 'var(--coral)',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Website maintenance, bug fixes and ongoing support when you need it.',
    icon: 'wrench',
    bg: 'var(--teal-soft)',
    fg: '#158f70',
  },
];

const TECH = [
  { name: 'HTML5', bg: '#e34f26' },
  { name: 'CSS3', bg: '#1572b6' },
  { name: 'JS', bg: '#f0b90b' },
  { name: 'PHP', bg: '#777bb3' },
  { name: 'MySQL', bg: '#4479a1' },
  { name: 'WP', bg: '#21759b' },
  { name: 'Woo', bg: '#96588a' },
  { name: 'Boot', bg: '#7952b3' },
  { name: 'jQ', bg: '#0769ad' },
  { name: 'Git', bg: '#f05033' },
  { name: 'Fig', bg: '#a259ff' },
];

const EXPERIENCE = [
  {
    title: 'WordPress & Front-End Developer',
    org: 'E-Marketing.io — Jaipur',
    period: 'Apr 2023 — Present',
    bullets: [
      'Built and maintained 5+ WordPress LMS platforms on BuddyBoss and LearnDash, supporting 500+ active learners.',
      'Customised 10+ themes and plugins, cutting site load time by ~35% through performance work.',
      'Integrated WooCommerce payments for 3 e-commerce clients and built Shopify storefronts (Homeloomers, Kozeecub).',
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
    ],
  },
];

const TESTIMONIALS = [
  { initials: 'A', name: 'Add client name', role: 'Replace with a real testimonial' },
  { initials: 'B', name: 'Add client name', role: 'Replace with a real testimonial' },
  { initials: 'C', name: 'Add client name', role: 'Replace with a real testimonial' },
];

const FAQS = [
  { q: 'How long does a project take?', a: 'Most WordPress sites take 1-3 weeks depending on scope; LMS and e-commerce builds can take 3-6 weeks.' },
  { q: 'Will my website be mobile friendly?', a: 'Yes — every site is built and tested responsive across mobile, tablet and desktop.' },
  { q: 'Do you provide domain & hosting?', a: 'I can guide you through domain and cPanel hosting setup, or work with hosting you already have.' },
  { q: 'Do you offer support after delivery?', a: 'Yes, I offer post-launch maintenance and support — details depend on the project scope.' },
  { q: 'Can you redesign my existing website?', a: 'Yes — I regularly redesign and modernize existing WordPress and Shopify sites.' },
  { q: 'What is the cost of a website?', a: "Pricing depends on scope and features — let's talk about your project for an accurate quote." },
];

function StatIcon({ type }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'users':
      return <svg viewBox="0 0 24 24" {...common}><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" /><circle cx="17" cy="8" r="2.6" /><path d="M17 14c2.7.3 4.5 2.4 4.5 6" /></svg>;
    case 'gift':
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="9" width="18" height="4" /><path d="M12 9v12M3 13v8h18v-8" /><path d="M12 9c-1-4-6-4-6-1s3 1 6 1zm0 0c1-4 6-4 6-1s-3 1-6 1z" /></svg>;
    case 'smile':
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>;
    case 'rocket':
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 2c3 2 5 6 4 12l-4 4-4-4c-1-6 1-10 4-12z" /><circle cx="12" cy="9" r="1.6" /><path d="M9 16l-3 5M15 16l3 5" /></svg>;
    default:
      return null;
  }
}

function ServiceIcon({ type }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'wordpress':
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9" /><path d="M4 10l4 9M9 6l6 14 2-5M15 6l4 3" /></svg>;
    case 'cart':
      return <svg viewBox="0 0 24 24" {...common}><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M2 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" /></svg>;
    case 'graduation':
      return <svg viewBox="0 0 24 24" {...common}><path d="M2 8l10-4 10 4-10 4-10-4z" /><path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 8v6" /></svg>;
    case 'speed':
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="13" r="8" /><path d="M12 13l4-4M12 4v2M4 13H2M22 13h-2" /></svg>;
    case 'devices':
      return <svg viewBox="0 0 24 24" {...common}><rect x="2" y="4" width="14" height="10" rx="1.5" /><path d="M6 18h6" /><rect x="16" y="9" width="6" height="10" rx="1" /></svg>;
    case 'shopify':
      return <svg viewBox="0 0 24 24" {...common}><path d="M6 8l1-4h6l2 4" /><rect x="5" y="8" width="14" height="12" rx="1.5" /><path d="M9 12c0-1.2 1.3-1.8 2.5-1.2 1 .5 2.3 0 2.3-1.3" /></svg>;
    case 'wrench':
      return <svg viewBox="0 0 24 24" {...common}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" /></svg>;
    default:
      return null;
  }
}

function SocialIcon({ type }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'linkedin':
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M12 17v-4.5c0-1.4 1-2.5 2.3-2.5S17 11.1 17 12.5V17M12 17v-7" /></svg>;
    case 'github':
      return <svg viewBox="0 0 24 24" {...common}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5 0-1-.4-1.8-1-2.5.1-.3.4-1.3-.1-2.6 0 0-.8-.3-2.8 1a9.4 9.4 0 0 0-5 0c-2-1.3-2.8-1-2.8-1-.5 1.3-.2 2.3-.1 2.6-.6.7-1 1.5-1 2.5 0 3.5 2 4.3 4 4.5-.4.4-.5.9-.5 1.5V21" /></svg>;
    case 'instagram':
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7h.01" /></svg>;
    case 'twitter':
      return <svg viewBox="0 0 24 24" {...common}><path d="M22 5.9c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1 7.6 7.6 0 0 1-2.4.9 3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.9 4.9a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1a3.8 3.8 0 0 0 3 3.7c-.5.2-1.1.2-1.7.1a3.8 3.8 0 0 0 3.5 2.6A7.6 7.6 0 0 1 3 17.4a10.7 10.7 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.4-1.2 1.9-2z" /></svg>;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className={`${display.variable} ${body.variable}`}>
      <header className="site-header">
        <div className="wrap">
          <div className="mark">
            Sakshi<span>.</span>
          </div>
          <nav>
            <a href="#home" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">Let's Talk →</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <span className="hero-badge">👋 Hello, I'm Sakshi</span>
            <h1>
              WordPress &amp; Front-End Developer who ships{' '}
              <mark className="hl hl-violet">production</mark> sites,{' '}
              <mark className="hl hl-coral">not drafts</mark>.
            </h1>
            <p className="hero-sub">
              I build fast, responsive and user-friendly WordPress, WooCommerce and
              Shopify websites with clean code and attention to detail.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View My Work →</a>
              <a className="btn btn-ghost" href="#contact">Contact Me →</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-blob-accent" />
            <div className="hero-blob" />
            <div className="hero-avatar">
              {/* Swap this for a real photo: replace the div below with
                  <img src="/your-photo.jpg" alt="Sakshi Saini" /> and add the file to /public */}
              <span className="hero-avatar-initials">SS</span>
            </div>
            <span className="hero-float f1" title="WordPress">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#21759b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M4 10l4 9M9 6l6 14 2-5M15 6l4 3" />
              </svg>
            </span>
            <span className="hero-float f2" title="Code">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6c4cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" />
              </svg>
            </span>
            <span className="hero-float f3" title="Responsive">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2ad3a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8" />
              </svg>
            </span>
          </div>
        </div>

        <div className="wrap">
          <div className="stats-row">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-icon" style={{ background: s.bg, color: s.fg }}>
                  <StatIcon type={s.icon} />
                </span>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What I Do</span>
            <h2 className="section-title">Services I Provide</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-icon" style={{ background: s.bg, color: s.fg }}>
                  <ServiceIcon type={s.icon} />
                </span>
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Tech Stack</span>
            <h2 className="section-title">Technologies I Work With</h2>
          </div>
          <div className="tech-grid">
            {TECH.map((t) => (
              <span className="tech-chip" key={t.name}>
                <span className="tech-mono" style={{ background: t.bg }}>{t.name.slice(0, 2)}</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">Where I've Worked</h2>
          </div>
          <ExperienceScroll items={EXPERIENCE} />
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Featured Work</span>
            <h2 className="section-title">Recent Projects</h2>
          </div>
          <Projects />
          <div className="view-all-wrap">
            <a className="btn btn-ghost" href="https://linkedin.com/in/sakshisaini26" target="_blank" rel="noopener noreferrer">
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">What Clients Say</h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-quote">"</div>
                <p className="testi-text">{t.role}</p>
                <div className="testi-who">
                  <span className="testi-avatar">{t.initials}</span>
                  <div>
                    <div className="testi-name">{t.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <span className="footer-badge">Hire Me</span>
              <div className="footer-headline">
                I have the skills to help you get your <mark className="hl hl-violet">next project</mark> done!
              </div>
              <div className="footer-actions">
                <a className="btn btn-primary" href="mailto:sakshisaini12102001@gmail.com">Let's Work Together</a>
                <a className="btn btn-ghost" href="mailto:sakshisaini12102001@gmail.com">Download CV ↓</a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Let's Connect</h4>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', marginTop: -8, marginBottom: 16 }}>
                Have a project in mind? Let's discuss how I can help you.
              </p>
              <ul className="footer-contact">
                <li>✉️ sakshisaini12102001@gmail.com</li>
                <li>📞 +91 81601 41898</li>
                <li>📍 Amber, Jaipur, Rajasthan</li>
              </ul>
              <div className="footer-socials">
                <a className="footer-social" href="https://linkedin.com/in/sakshisaini26" target="_blank" rel="noopener noreferrer"><SocialIcon type="linkedin" /></a>
                <a className="footer-social" href="https://github.com/sakshisaini12102001-ui" target="_blank" rel="noopener noreferrer"><SocialIcon type="github" /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Sakshi Saini. All Rights Reserved.</span>
            <span>Built with Next.js, deployed on Vercel</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
