import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Cylinder,
  Factory,
  Gauge,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Ruler,
  ScanLine,
  ShieldCheck,
  Workflow,
  Wrench,
  X,
} from 'lucide-react';

const routes = {
  about: { eyebrow: '02 / Company', title: <>A partner<br />on the ground.</> },
  fabrication: {
    eyebrow: '04 / Fabrication',
    title: <>Made to your<br />measure.</>,
    image: 'fabrication-work.webp',
    imageAlt: 'Fabricated metalwork and site engineering in an industrial plant',
    subhead: 'The practical advantage',
    statement: <>One brief.<br />Fewer gaps.</>,
    copy: 'Keep design intent, fabrication, and site realities connected from the beginning.',
  },
  conveyors: {
    eyebrow: '05 / Conveyors',
    title: <>Movement,<br />made simple.</>,
    image: 'conveyor-systems.webp',
    imageAlt: 'Automated industrial conveyor system in factory',
    subhead: 'Built around flow',
    statement: <>Less handling.<br />More control.</>,
    copy: 'From a single conveyor section to a connected production line, we focus on the journey your product needs to take.',
  },
  structural: {
    eyebrow: '06 / Structural steel',
    title: <>Strength that<br />makes space.</>,
    image: 'structural-steel.webp',
    imageAlt: 'Heavy industrial structural steel framework and mezzanine platform',
    subhead: 'Useful infrastructure',
    statement: <>Make room<br />to grow.</>,
    copy: 'Smart structural work gives your people and equipment the room to perform.',
  },
  tanks: {
    eyebrow: '07 / Storage tanks',
    title: <>Engineered for<br />containment.</>,
    image: 'storage-tanks.webp',
    imageAlt: 'Industrial stainless steel storage tanks and pressure vessels fabrication',
    subhead: 'Certified containment',
    statement: <>Secure storage.<br />Zero compromise.</>,
    copy: 'Custom industrial tanks, chemical storage vessels, silos, and pressure vessels engineered for safety, structural integrity, and longevity.',
  },
  installation: {
    eyebrow: '08 / Site installation',
    title: <>Ready for the<br />real world.</>,
    image: 'site-installation.webp',
    imageAlt: 'Turnkey industrial equipment and piping installation',
    subhead: 'On-site execution',
    statement: <>Built around<br />your operation.</>,
    copy: 'Measured installation and modifications carried out with care around active production environments.',
  },
  maintenance: {
    eyebrow: '09 / Maintenance',
    title: <>Keep the line<br />alive.</>,
    image: 'equipment-maintenance.webp',
    imageAlt: 'Industrial equipment maintenance, gearbox servicing, and mechanical repair',
    subhead: 'Continuous uptime',
    statement: <>Prevent downtime.<br />Extend life.</>,
    copy: 'Scheduled preventative servicing and responsive repairs that extend equipment life and protect production schedules.',
  },
  industries: {
    eyebrow: '10 / Industries',
    title: <>Where industry<br />gets moving.</>,
    image: 'site-installation.webp',
    imageAlt: 'Industrial equipment and manufacturing facility',
    subhead: 'Different site. Same standard.',
    statement: <>Understand<br />the job.</>,
    copy: 'The right solution starts with knowing what success looks like for the people running the operation.',
  },
  process: { eyebrow: '11 / Approach', title: <>Clear from<br />the outset.</> },
  quality: { eyebrow: '12 / Quality', title: <>Built with<br />discipline.</> },
};
routes['storage-tanks'] = routes.tanks;

const services = [
  ['01', 'Custom fabrication', 'Made-to-measure components, assemblies, and metalwork.', 'fabrication'],
  ['02', 'Conveyor systems', 'Movement designed around your product and your process.', 'conveyors'],
  ['03', 'Structural steel', 'Strong frameworks, platforms, racks, and access solutions.', 'structural'],
  ['04', 'Storage tanks', 'Custom process vessels, silos, and certified containment systems.', 'tanks'],
  ['05', 'Site installation', 'Measured installation and modifications around live operations.', 'installation'],
  ['06', 'Maintenance', 'Repairs and upgrades that extend the life of your equipment.', 'maintenance'],
];

const serviceIcons = {
  fabrication: Ruler,
  conveyors: Layers3,
  structural: Factory,
  tanks: Cylinder,
  installation: HardHat,
  maintenance: Wrench,
};

const logos = [
  ['pepsico logo.png', 'PepsiCo'],
  ['nishat chunian logo.png', 'Nishat Chunian'],
  ['izhar logo.png', 'Izhar'],
  ['jf logo.png', 'JF'],
];

function getPageList(eyebrow = '') {
  if (eyebrow.includes('Fabrication')) {
    return ['Frames & assemblies', 'Guards & chutes', 'Tanks & platforms', 'Repair & modification'];
  }
  if (eyebrow.includes('Conveyors')) {
    return ['Belt & roller conveyors', 'Modular line transfers', 'Sorting & elevation', 'Drive & motor integration'];
  }
  if (eyebrow.includes('Structural')) {
    return ['Mezzanines & platforms', 'Equipment supports', 'Racks & storage', 'Stairs & walkways'];
  }
  if (eyebrow.includes('Storage') || eyebrow.includes('tanks')) {
    return ['Process vessels & silos', 'Stainless & carbon steel tanks', 'Agitators & jacketed tanks', 'Pressure vessels & manifolding'];
  }
  if (eyebrow.includes('installation')) {
    return ['Turnkey mechanical erection', 'Alignment & leveling', 'Piping & chute integration', 'Commissioning & testing'];
  }
  if (eyebrow.includes('Maintenance')) {
    return ['Preventative inspections', 'Component replacement', 'Emergency breakdown repairs', 'Refurbishment & upgrades'];
  }
  if (eyebrow.includes('Quality')) {
    return ['Material awareness', 'Dimensional care', 'Clean execution', 'Site respect'];
  }
  if (eyebrow.includes('Industries')) {
    return ['Food & beverage', 'Manufacturing', 'Warehousing', 'Industrial utilities', 'Construction & infrastructure'];
  }
  return [
    'Listen / understand the brief and the site.',
    'Plan / turn the need into a practical scope.',
    'Make / fabricate with care and control.',
    'Install / work safely around the operation.',
    'Hand over / leave it clear, clean, and ready.',
  ];
}

function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || 'home');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const serviceRoutes = ['fabrication', 'conveyors', 'structural', 'tanks', 'storage-tanks', 'installation', 'maintenance'];
    if (serviceRoutes.includes(route)) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (route === 'home' || !route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const timer = setTimeout(() => {
        const el = document.getElementById(route);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [route]);

  return route;
}

function useReveal(route) {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [route]);
}

function useActiveSection() {
  const [active, setActive] = useState(() => window.location.hash.slice(1) || 'home');

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', onHashChange);

    const sectionIds = ['home', 'about', 'services', 'projects', 'industries', 'process', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
      );

      sections.forEach((section) => observer.observe(section));
      return () => {
        window.removeEventListener('hashchange', onHashChange);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return active;
}

function Kicker({ children }) {
  return <div className="kicker">{children}</div>;
}

function ArrowLink({ children, href = '#contact' }) {
  return (
    <a className="arrow-link" href={href}>
      {children} <ArrowUpRight size={15} strokeWidth={1.7} />
    </a>
  );
}

function Button({ children, href = '#contact', outline = false }) {
  return (
    <a className={`btn ${outline ? 'outline' : ''}`} href={href}>
      {children} <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Metal Engineering home">
      <img
        src="/metal engineering logo.png"
        alt="Metal Engineering logo"
        className="brand-logo"
      />
      <span className="brand-text">
        METAL
        <br />
        <b>ENGINEERING</b>
      </span>
    </a>
  );
}

function Header({ showRail = true }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  const links = [
    ['Home', 'home'],
    ['Company', 'about'],
    ['Capabilities', 'services'],
    ['Projects', 'projects'],
    ['Approach', 'process'],
    ['Start a project', 'contact'],
  ];

  const railLinks = [
    ['about', 'Company'],
    ['services', 'Capabilities'],
    ['projects', 'Projects'],
    ['industries', 'Industries'],
    ['process', 'Approach'],
    ['contact', 'Contact'],
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.slice(1).map(([label, href]) => (
            <a
              className={active === href ? 'active' : ''}
              aria-current={active === href ? 'location' : undefined}
              key={href}
              href={`#${href}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map(([label, href], index) => (
          <a
            className={active === href ? 'active' : ''}
            aria-current={active === href ? 'location' : undefined}
            key={href}
            href={`#${href}`}
            onClick={() => setOpen(false)}
          >
            {label}
            <span>{String(index + 1).padStart(2, '0')}</span>
          </a>
        ))}
      </nav>

      {showRail && (
        <nav className="section-rail" aria-label="Page progress">
          {railLinks.map(([href, label], index) => (
            <a
              className={active === href ? 'active' : ''}
              key={href}
              href={`#${href}`}
              aria-label={`Go to ${label}`}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i />
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`back-to-top ${visible ? 'visible' : ''}`}
      href="#home"
      aria-label="Back to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          history.pushState(null, '', '#home');
        }
      }}
    >
      <ArrowUp size={18} strokeWidth={1.6} />
    </a>
  );
}

function LinkedInIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 448"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M416 0H31.9C14.3 0 0 14.5 0 32.3v383.4C0 433.5 14.3 448 31.9 448H416c17.6 0 32-14.5 32-32.3V32.3c0-17.8-14.4-32.3-32-32.3zM135.4 384H69V170.2h66.5V384zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 64 102.2 64c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V280c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V384h-66.4V170.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V384z" />
    </svg>
  );
}

function FacebookIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12Z" />
    </svg>
  );
}

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-wrap">
            <Logo />
          </div>
          <p className="footer-tagline">
            Precision-built solutions for the environments that keep industry moving.
          </p>
          <div className="footer-actions">
            <div className="footer-socials" aria-label="Social media channels">
              <a
                href="https://www.linkedin.com/in/the-metal-engineering-7a6a0143b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Metal Engineering on LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61594782787657&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Metal Engineering on Facebook"
                title="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
            <ArrowLink href="#contact">Talk to our team</ArrowLink>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Metal Engineering</span>
          <span className="footer-specs">Fabrication &bull; Automation &bull; Site Solutions</span>
          <a href="#contact" className="footer-location">Lahore, Pakistan</a>
          <span className="footer-credit">
            Powered by{' '}
            <a
              href="https://omnysync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="omnysync-link"
              title="OMNYSYNC - Technology & Digital Systems"
            >
              OMNYSYNC
            </a>
          </span>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img1-jpg.jpg"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/Hero-video.mp4" type="video/mp4" />
          <source src="/hero video.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <Kicker>Industrial engineering / Lahore, Pakistan</Kicker>
          <h1>Built for the work that matters.</h1>
          <p className="hero-copy">
            Metal Engineering turns demanding specifications into dependable structures, machines, and site-ready systems.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Start a conversation</Button>
            <Button href="#projects" outline>
              View our work
            </Button>
          </div>
        </div>
        <div className="hero-meta" aria-hidden="true">
          <div>
            <strong>01</strong>Precision
          </div>
          <div>
            <strong>02</strong>Practicality
          </div>
          <div>
            <strong>03</strong>Performance
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          Scroll to explore <ArrowDown size={14} strokeWidth={1.5} />
        </a>
      </section>

      <SignalStrip />
      <FieldScene />

      <section className="page intro" id="about">
        <div data-reveal>
          <Kicker>The work behind the work</Kicker>
          <p className="lead">
            Engineering is not just what we make. It is how confidently your operation moves after we leave.
          </p>
        </div>
        <div className="intro-copy" data-reveal>
          <p>
            From fabricated assemblies to complete industrial installations, our team works across the details that make a system reliable: accurate drawings, robust materials, disciplined execution, and a clean handover.
          </p>
          <ArrowLink href="#services">Explore our capabilities</ArrowLink>
          <div className="stats">
            <div>
              <strong>01</strong>
              <span>Single partner</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Hands-on approach</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Built to last</span>
            </div>
          </div>
        </div>
      </section>

      <Capabilities />
      <Projects />
      <IndustriesSection />
      <QualitySection />
      <ProcessSection />
      <Contact />
      <ClientCarouselSection />
    </>
  );
}

function SignalStrip() {
  const signals = [
    [Activity, 'Measured thinking'],
    [Gauge, 'Built for uptime'],
    [Workflow, 'One clear partner'],
    [ScanLine, 'Details that hold'],
  ];

  return (
    <section className="signal-strip" aria-label="Metal Engineering principles">
      {signals.map(([Icon, label], index) => (
        <div className="signal-item" key={label}>
          <span className="signal-icon">
            <Icon size={17} strokeWidth={1.4} />
          </span>
          <span>
            <small>0{index + 1}</small>
            {label}
          </span>
        </div>
      ))}
    </section>
  );
}

function FieldScene() {
  return (
    <section className="field-scene" aria-label="Engineering in the field">
      <div className="scene-image scene-main" data-reveal>
        <img
          src="/built-in-context.webp"
          alt="Structural steel stairs, walkways and platforms installed on site"
          loading="lazy"
        />
        <span className="scene-caption">01 / Built in context</span>
      </div>
      <div className="scene-copy" data-reveal>
        <Kicker>Field note / 001</Kicker>
        <h2>
          The drawing
          <br />
          <em>meets</em> the site.
        </h2>
        <p>
          Every project changes once it meets the people, access routes, tolerances, and working conditions around it. That is where practical engineering starts.
        </p>
        <ArrowLink href="#about">See how we work</ArrowLink>
        <div className="scene-coordinate">
          <span>31°32' N</span>
          <span>74°21' E</span>
          <span>LHR / PK</span>
        </div>
      </div>
      <div className="scene-image scene-detail" data-reveal>
        <img
          src="/hands-on-engineering.webp"
          alt="Mechanical engineer performing precision hands-on equipment installation"
          loading="lazy"
        />
        <span className="scene-caption">02 / Hands on</span>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="page dark-section" id="services">
      <div className="section-head" data-reveal>
        <div>
          <Kicker>03 / Capabilities</Kicker>
          <h2>
            Capability
            <br />
            with purpose.
          </h2>
        </div>
        <p>
          Practical engineering for production floors, warehouses, utilities, and the spaces between them.
        </p>
      </div>
      <div className="service-grid">
        {services.map(([num, title, copy, href]) => {
          const Icon = serviceIcons[href];
          return (
            <a className="service-card" href={`#${href}`} key={num} data-reveal>
              <span className="num">{num}</span>
              <span className="service-icon">
                <Icon size={25} strokeWidth={1.35} />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="card-arrow">
                <ArrowUpRight size={22} strokeWidth={1.4} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ClientCarouselSection() {
  // Duplicate logos 3 times for a completely seamless, gap-free infinite scroll
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="client-section" id="clients" aria-label="Trusted by industry leaders">
      <div className="client-section-inner">
        <div className="client-section-head" data-reveal>
          <div className="kicker kicker-dark">Trusted by teams at</div>
          <h2>Industry leaders who rely on our engineering.</h2>
          <p>
            From multinational corporations to national infrastructure leaders, we build and maintain the systems keeping Pakistan's key industries moving.
          </p>
        </div>

        <div className="marquee-container" aria-label="Client logos moving carousel">
          <div className="marquee-track">
            {marqueeLogos.map(([src, alt], index) => (
              <div className="marquee-slide" key={`${alt}-${index}`}>
                <img src={`/${src}`} alt={`${alt} logo`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailPage({ page }) {
  const lists = getPageList(page.eyebrow);

  return (
    <>
      <section className="page dark-section detail-top">
        <div className="split">
          <div data-reveal>
            <a className="back-link" href="#services" aria-label="Back to all capabilities">
              ← All capabilities
            </a>
            <Kicker>{page.eyebrow}</Kicker>
            <h2>{page.title}</h2>
          </div>
          <div data-reveal>
            <p className="quote">
              Good engineering feels <em>quiet.</em> It fits, it holds, and it keeps the operation moving.
            </p>
            <p>
              Metal Engineering brings fabrication, installation, and practical problem-solving together under one roof. We are built for the moments when a drawing must become a working reality.
            </p>
            <div className="numbered-list">
              {lists.map((item, index) => (
                <div key={item}>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.image ? (
        <section className="image-band">
          <img src={`/${page.image}`} alt={page.imageAlt} loading="lazy" />
          <div className="band-copy" data-reveal>
            <Kicker>{page.subhead}</Kicker>
            <h2>{page.statement}</h2>
            <p>{page.copy}</p>
            <Button href="#contact">Discuss your project</Button>
          </div>
        </section>
      ) : (
        <section className="page intro">
          <div data-reveal>
            <Kicker>A grounded response</Kicker>
            <p className="lead">
              The project is not complete when the steel is in place. It is complete when the team knows what to do next.
            </p>
          </div>
          <div className="intro-copy" data-reveal>
            <p>
              We keep communication practical and documentation clear, so your people can operate, maintain, and build on the result.
            </p>
            <Button href="#contact">Start with a clear brief</Button>
          </div>
        </section>
      )}
    </>
  );
}

function Projects() {
  return (
    <section className="page dark-section" id="projects">
      <div className="section-head" data-reveal>
        <div>
          <Kicker>08 / Selected work</Kicker>
          <h2>
            Proof in
            <br />
            the details.
          </h2>
        </div>
        <p>A selection of the environments and systems our work is made for.</p>
      </div>
      <div className="project-grid">
        {[
          ['fabrication-work.webp', 'Fabrication / site work'],
          ['conveyor-systems.webp', 'Conveyor systems'],
          ['structural-steel.webp', 'Structural steel'],
        ].map(([src, caption], index) => (
          <figure key={src} data-reveal className={index === 0 ? 'featured' : ''}>
            <img src={`/${src}`} alt={caption} loading="lazy" />
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="project-note" data-reveal>
        <p>A finished object only matters when it performs in the place it was made for.</p>
        <ArrowLink href="#contact">Bring us your next brief</ArrowLink>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    'Listen / understand the brief and the site.',
    'Plan / turn the need into a practical scope.',
    'Make / fabricate with care and control.',
    'Install / work safely around the operation.',
    'Hand over / leave it clear, clean, and ready.',
  ];

  return (
    <section className="page dark-section" id="process">
      <div className="section-head" data-reveal>
        <div>
          <Kicker>11 / Approach</Kicker>
          <h2>
            Clear from
            <br />
            the outset.
          </h2>
        </div>
        <p>Good delivery is a sequence of useful conversations, well-held details, and decisive action.</p>
      </div>
      <div className="numbered-list process-list">
        {steps.map((step) => (
          <div key={step} data-reveal>
            <small>{String(steps.indexOf(step) + 1).padStart(2, '0')}</small>
            <span className="process-dot">
              <ShieldCheck size={16} strokeWidth={1.5} />
            </span>
            <h3>{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    'Food & beverage',
    'Manufacturing',
    'Warehousing',
    'Industrial utilities',
    'Construction & infrastructure',
  ];

  return (
    <section className="page dark-section" id="industries">
      <div className="split">
        <div data-reveal>
          <Kicker>10 / Industries</Kicker>
          <h2>
            Where industry
            <br />
            gets moving.
          </h2>
        </div>
        <div data-reveal>
          <p>
            We work with the teams behind production, processing, storage, and distribution. Different sectors, same need: engineering that works in the real world.
          </p>
          <div className="numbered-list">
            {industries.map((item, index) => (
              <div key={item}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QualitySection() {
  return (
    <section className="page intro" id="quality">
      <div data-reveal>
        <Kicker>12 / Quality</Kicker>
        <p className="lead">Make it robust. Make it clear. Make it useful.</p>
      </div>
      <div className="intro-copy" data-reveal>
        <p>
          Quality is the sum of small decisions. We bring focus to the things that affect service life, usability, and confidence long after installation.
        </p>
        <ArrowLink href="#contact">Start with a clear brief</ArrowLink>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="page contact" id="contact">
      <div data-reveal>
        <Kicker>13 / Contact</Kicker>
        <h2>
          Let's build
          <br />
          what's next.
        </h2>
        <div className="contact-info">
          <div>
            <span>
              <Mail size={13} /> Email
            </span>
            <a href="mailto:hello@metalengineering.pk">hello@metalengineering.pk</a>
          </div>
          <div>
            <span>
              <MapPin size={13} /> Location
            </span>
            <span>Lahore, Pakistan</span>
          </div>
          <div>
            <span>For projects, service, and site visits</span>
          </div>
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}`);
          const body = encodeURIComponent(
            `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
          );
          window.location.href = `mailto:hello@metalengineering.pk?subject=${subject}&body=${body}`;
          setSent(true);
        }}
        data-reveal
      >
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required placeholder="Name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="message">Tell us about the work</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="A little context helps us prepare."
            rows={4}
          />
        </div>
        <button className="btn" type="submit">
          {sent ? (
            'Email draft opened'
          ) : (
            <>
              Send enquiry <ArrowUpRight size={15} strokeWidth={1.8} />
            </>
          )}
        </button>
        {sent && (
          <p className="form-feedback">
            Your email client was opened. If it didn't launch automatically, write directly to hello@metalengineering.pk
          </p>
        )}
      </form>
    </section>
  );
}

function App() {
  const route = useRoute();
  useReveal(route);
  const serviceRoute = [
    'fabrication',
    'conveyors',
    'structural',
    'tanks',
    'storage-tanks',
    'installation',
    'maintenance',
  ].includes(route);

  return (
    <>
      <Header showRail={!serviceRoute} />
      <main
        id="main-content"
        key={serviceRoute ? route : 'home'}
        className="route-transition"
        tabIndex="-1"
      >
        {serviceRoute ? (
          <div id={route}>
            <DetailPage page={routes[route]} />
          </div>
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
