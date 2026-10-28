import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { assetPath } from "./utils/assetPath";
import HeroExperience from "./components/hero/HeroExperience";

const profile = {
  linkedin: "https://www.linkedin.com/in/om-prakash-backend/",
  github: "https://github.com/Omp2311",
  phone: "+91 7087655951",
  phoneHref: "tel:+917087655951",
  email: "omprakashraj100078@gmail.com",
  emailHref: "mailto:omprakashraj100078@gmail.com",
  avatar: assetPath("/images/om-prakash-avatar.png"),
};

const skills = {
  "Backend engineering": ["Python", "Django", "FastAPI", "Node.js", "REST APIs"],
  "Data & systems": ["PostgreSQL", "Redis", "Database Design", "Authentication", "API Integration"],
  "Cloud & delivery": ["AWS", "Docker", "Git", "GitHub", "Linux"],
  "AI engineering": ["GenAI", "RAG", "LangChain", "Embeddings", "Streamlit"],
  "Frontend collaboration": ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
};

const projects = [
  {
    eyebrow: "AI Automation / Lead Outreach",
    title: "OutreachPilot — Autonomous Lead Outreach",
    description:
      "An autonomous cold-outreach platform that discovers prospects, creates personalized outreach, supports email and WhatsApp workflows, follows up automatically, and stops outreach when a lead replies.",
    stack: ["Python", "Django/FastAPI", "GenAI", "Automation", "APIs"],
    image: assetPath("/images/outreachpilot.png"),
    detail:
      "Built around practical lead generation and outreach automation, with the goal of reducing repetitive manual prospecting work.",
    features: [
      "Prospect discovery and lead qualification workflows",
      "AI-assisted hyper-personalized outreach messages",
      "Email and WhatsApp outreach orchestration",
      "Automated follow-ups with reply-aware stopping rules",
      "Pipeline-ready architecture for high-volume outreach",
    ],
  },
  {
    eyebrow: "Cold Storage Management System",
    title: "MKV CSM — Cold Store Management",
    description:
      "A cold-storage operations platform for companies, clients, chambers, stores, staff, inventory and inventory-gate workflows, with dashboard views for day-to-day management.",
    stack: ["Python", "Django", "Database", "JavaScript", "Operations"],
    image: assetPath("/images/coldstore-dashboard.png"),
    detail:
      "Includes chamber visualization with floors, blocks and storage-capacity views so operators can understand cold-store occupancy and structure quickly.",
    features: [
      "Company, client, store and staff management",
      "Inventory and inventory-gate workflows",
      "Chamber, floor and block-level visualization",
      "Storage occupancy and capacity monitoring",
      "Operational dashboard for day-to-day cold-store activity",
    ],
  },
  {
    eyebrow: "Property / Real Estate Platform",
    title: "MK NRI Solutions — Property Marketplace",
    description:
      "A real-estate web platform for discovering houses, flats, commercial buildings, industrial and agricultural properties for sale or rent through searchable property categories.",
    stack: ["Python", "Django", "HTML/CSS", "JavaScript", "Database"],
    image: assetPath("/images/mknri-home.png"),
    detail:
      "Supports property discovery, buy/sell and rent flows, category browsing, budget-based search and property listings.",
    features: [
      "Property listings for residential and commercial assets",
      "Buy, sell and rental discovery flows",
      "Category and location-oriented browsing",
      "Budget-based property search and filtering",
      "Responsive listing experience for buyers and renters",
    ],
  },
  {
    eyebrow: "Social Media Web App",
    title: "SocialConnect — Social Media Platform",
    description:
      "A Django social-media application with user profiles, photo posts, following relationships and a personalized social experience.",
    stack: ["Python", "Django", "Authentication", "Media Uploads", "Database"],
    image: assetPath("/images/social-media.png"),
    detail:
      "Implemented core social features including profiles, posts, followers/following and user-generated image content.",
    features: [
      "User registration, authentication and profile pages",
      "Create and display image-based social posts",
      "Follow and unfollow user relationships",
      "Personal profile grids and post counters",
      "Media handling backed by Django models and database logic",
    ],
  },
  {
    eyebrow: "AI Assistant / Voice Search",
    title: "Jarvis AI Assistant",
    description:
      "An AI assistant that works like an interactive search engine, accepts queries, returns conversational answers and can speak each result through a voice feature.",
    stack: ["Python", "AI/NLP", "Voice", "Search", "PDF"],
    image: assetPath("/images/jarvis-ai.png"),
    detail:
      "Adds voice output plus conversation recording/export so users can preserve the complete interaction as a PDF for later reference.",
    features: [
      "Natural-language query and search-style interaction",
      "AI-generated conversational responses",
      "Text-to-speech playback for every answer",
      "Conversation capture for later review",
      "One-click export of conversation history to PDF",
    ],
  },
];

const visualProjects = [
  {
    title: "OutreachPilot — Lead Outreach Automation",
    eyebrow: "Featured system · AI outreach",
    image: assetPath("/images/outreachpilot.png"),
    description:
      "Autonomous prospect discovery, personalized outreach and follow-up workflows designed to reduce repetitive manual lead generation.",
    tags: ["AI Outreach", "Automation", "Email + WhatsApp"],
  },
  {
    title: "MK NRI Solutions — Property Marketplace",
    eyebrow: "Featured system · Property management",
    image: assetPath("/images/mknri-home.png"),
    description:
      "A property discovery experience for houses, flats, commercial, industrial and agricultural listings with buy, sell and rental flows.",
    tags: ["Django", "Property Search", "Buy / Sell / Rent"],
  },
  {
    title: "MK NRI Solutions — Property Listings",
    eyebrow: "Featured system · Search & listings",
    image: assetPath("/images/mknri-properties.png"),
    description:
      "Searchable property cards, categories and budget-driven discovery that help users quickly move from browsing to relevant listings.",
    tags: ["Listings", "Filters", "Responsive UI"],
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Novagito Pvt Ltd",
    date: "Jun 2026 — Present",
    meta: "Full-time · Remote",
    points: [
      "Building scalable web systems with a backend-first engineering approach.",
      "Working across Python, Django/FastAPI, PostgreSQL, APIs, Docker and cloud-oriented delivery workflows.",
      "Contributing to AI integrations alongside production web application development.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Novagito Pvt Ltd",
    date: "Apr 2026 — Jun 2026",
    meta: "Internship · Remote",
    points: [
      "Developed backend features and strengthened practical API and database engineering skills.",
      "Worked in a team codebase with Git-based development and real product requirements.",
      "Progressed into a full-time Software Engineer role after the internship.",
    ],
  },
  {
    role: "Python Developer",
    company: "MKV Infosoft Pvt Ltd",
    date: "Mar 2 — Feb 15",
    meta: "On-site",
    points: [
      "Worked on Python-based development tasks in a professional onsite environment.",
      "Strengthened backend fundamentals, debugging habits and practical software delivery skills.",
      "Collaborated on implementation work while improving code readability and reliability.",
    ],
  },
];

const profileFacts = [
  ["Current role", "Software Engineer"],
  ["Company", "Novagito"],
  ["Location", "Remote · Bengaluru, India"],
  ["Email", profile.email],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-9 9M18 13v6H5V6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7 9h4M7 13h7M17 9h.01M17 13h.01" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.4 12h3.2M12 10.4v3.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.2 14.4A7.8 7.8 0 0 1 9.6 3.8 8.6 8.6 0 1 0 20.2 14.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionVisual({ variant }) {
  const chipMap = {
    career: ["Learn", "Build", "Ship"],
    profile: ["APIs", "Data", "Cloud", "RAG"],
    stack: ["Python", "React", "AWS", "Redis"],
    work: ["Django", "FastAPI", "Docker", "AI"],
  };
  const chips = chipMap[variant] || chipMap.profile;

  return (
    <div className={`section-visual section-visual-${variant}`} aria-hidden="true">
      <span className="section-visual-ring ring-one" />
      <span className="section-visual-ring ring-two" />
      <span className="section-visual-pulse" />
      <span className="section-visual-node node-one"><CodeIcon /></span>
      <span className="section-visual-node node-two"><DatabaseIcon /></span>
      <span className="section-visual-node node-three"><AiIcon /></span>
      <strong>OM</strong>
      <div className="section-visual-line" />
      <div className="section-visual-chips">
        {chips.map((chip) => <span key={chip}>{chip}</span>)}
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, copy, visual }) {
  return (
    <div className="section-heading">
      <div className="section-heading-side">
        <p className="kicker">{kicker}</p>
        {visual}
      </div>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);
  const [flippedProject, setFlippedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "day" || savedTheme === "night") return savedTheme;
    return "night";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  const emailConfig = {
    serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  };
  const emailReady = Object.values(emailConfig).every(Boolean);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ type: "idle", message: "" });

    if (!emailReady) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setFormState({
        type: "success",
        message: "Your email app is opening with this message addressed to me.",
      });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          ...form,
          to_email: profile.email,
        },
        {
          publicKey: emailConfig.publicKey,
        }
      );
      setForm({ name: "", email: "", message: "" });
      setFormState({
        type: "success",
        message: "Message sent successfully. I’ll get back to you as soon as I can.",
      });
    } catch (error) {
      console.error("EmailJS error", error);
      setFormState({
        type: "error",
        message:
          "The message could not be delivered. Please contact me through LinkedIn or GitHub instead.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className={`om-loader ${loading ? "is-visible" : "is-hidden"}`} aria-hidden={!loading}>
        <div className="om-loader-grid" />
        <div className="om-loader-orbit orbit-one" />
        <div className="om-loader-orbit orbit-two" />
        <div className="om-loader-mark">
          <span>OM</span>
        </div>
        <p>Building dependable systems</p>
        <div className="om-loader-line"><i /></div>
      </div>
      <div className={`site-shell ${loading ? "site-loading" : ""}`}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Om Prakash home">
          <img className="brand-avatar" src={profile.avatar} alt="Om Prakash" />
          <span className="brand-copy">
            <strong>Om Prakash</strong>
            <small>Software Engineer</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-switch"
            type="button"
            onClick={() => setTheme((current) => (current === "night" ? "day" : "night"))}
            aria-label={`Switch to ${theme === "night" ? "day" : "night"} mode`}
            aria-pressed={theme === "day"}
            title={`Switch to ${theme === "night" ? "day" : "night"} mode`}
          >
            <span className="theme-switch-track">
              <span className="theme-switch-thumb">
                {theme === "night" ? <MoonIcon /> : <SunIcon />}
              </span>
            </span>
          </button>
          <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ExternalIcon />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="aurora aurora-one" />
          <div className="aurora aurora-two" />

          <div className="hero-copy-block">
            <div className="availability-pill">
              <span className="status-dot" /> Software Engineer @ Novagito
            </div>
            <p className="hero-kicker">Backend systems · cloud delivery · practical AI</p>
            <h1>
              Building the <span>engine behind</span> digital products.
            </h1>
            <p className="hero-summary">
              I’m Om Prakash, a Software Engineer in Chandigarh focused on backend engineering,
              scalable web systems and useful AI integrations. My work spans Python, Django,
              FastAPI, PostgreSQL, Redis, Docker, AWS and modern product development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ExternalIcon />
              </a>
            </div>
            <div className="hero-proof" aria-label="Professional highlights">
              <div>
                <strong>Backend-first</strong>
                <span>APIs, auth, data & integrations</span>
              </div>
              <div>
                <strong>Production-minded</strong>
                <span>Docker, AWS & reliable delivery</span>
              </div>
              <div>
                <strong>AI capable</strong>
                <span>RAG, GenAI & automation workflows</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrap" aria-label="Interactive 3D developer workspace">
            <div className="hero-world-card">
              <div className="world-card-head">
                <span><i className="live-dot" /> Interactive workspace</span>
                <small>drag to explore</small>
              </div>
              <div className="hero-canvas">
                <HeroExperience />
              </div>
              <div className="world-orbit orbit-a" />
              <div className="world-orbit orbit-b" />
              <div className="floating-profile-card">
                <img src={profile.avatar} alt="Om Prakash" />
                <div>
                  <strong>Om Prakash</strong>
                  <span>Software Engineer · Novagito</span>
                  <small>Backend · Cloud · AI</small>
                </div>
              </div>
              <div className="floating-code-card">
                <CodeIcon />
                <div>
                  <span>shipping</span>
                  <strong>backend systems</strong>
                </div>
                <i>200 OK</i>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-ribbon section-wrap" id="profile" aria-label="Profile overview">
          {profileFacts.map(([label, value]) => (
            <div className="profile-fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        <section className="focus-section section-wrap" id="about">
          <SectionHeading
            kicker="Complete profile"
            title="A backend engineer who thinks about the whole product system."
            copy="I care about the parts users do not see: data models, API contracts, security, integrations, failure states, deployment and the engineering decisions that keep a product dependable."
            visual={<SectionVisual variant="profile" />}
          />
          <div className="focus-grid">
            <article className="focus-card focus-card-featured">
              <span className="card-number">01</span>
              <div className="focus-icon"><ApiIcon /><span>API</span></div>
              <h3>Backend architecture</h3>
              <p>
                Designing maintainable APIs, service logic, authentication flows and database-backed
                features with clear boundaries.
              </p>
              <div className="mini-tags"><span>Python</span><span>Django</span><span>FastAPI</span></div>
            </article>
            <article className="focus-card">
              <span className="card-number">02</span>
              <div className="focus-icon"><DatabaseIcon /><span>DB</span></div>
              <h3>Data & delivery</h3>
              <p>
                Thinking beyond local development with PostgreSQL, Redis, containerized services and
                cloud-oriented deployment.
              </p>
              <div className="mini-tags"><span>PostgreSQL</span><span>Redis</span><span>Docker</span><span>AWS</span></div>
            </article>
            <article className="focus-card">
              <span className="card-number">03</span>
              <div className="focus-icon"><AiIcon /><span>AI</span></div>
              <h3>Practical AI integrations</h3>
              <p>
                Adding useful AI capabilities through retrieval, embeddings, LLM APIs and automation
                instead of AI for decoration.
              </p>
              <div className="mini-tags"><span>RAG</span><span>LangChain</span><span>GenAI</span></div>
            </article>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionHeading
            kicker="Selected work"
            title="Production-focused projects I have built and worked on."
            copy="Lead outreach automation, cold-storage operations, real estate, social networking and an AI voice assistant — showing my work across backend systems, automation and complete web products."
            visual={<SectionVisual variant="work" />}
          />
          <div className="project-grid">
            {projects.map((project, index) => {
              const isFlipped = flippedProject === index;
              return (
                <article
                  className={`project-card ${isFlipped ? "is-flipped" : ""}`}
                  key={project.title}
                  onClick={() => setFlippedProject(isFlipped ? null : index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setFlippedProject(isFlipped ? null : index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${project.title}. ${isFlipped ? "Show project preview" : "Show project details and features"}`}
                >
                  <div className="project-card-inner">
                    <div className="project-face project-front">
                      <div className="project-media">
                        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                        <div className="project-media-shade" />
                        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                        <span className="project-flip-hint">Click for details <ArrowIcon /></span>
                      </div>
                      <div className="project-body">
                        <p className="project-eyebrow">{project.eyebrow}</p>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="stack-list">
                          {project.stack.map((item) => <span key={item}>{item}</span>)}
                        </div>
                      </div>
                    </div>

                    <div className="project-face project-back" aria-hidden={!isFlipped}>
                      <div className="project-back-top">
                        <span className="project-index project-index-back">{String(index + 1).padStart(2, "0")}</span>
                        <span className="project-back-label">Project details</span>
                      </div>
                      <div className="project-back-content">
                        <p className="project-eyebrow">{project.eyebrow}</p>
                        <h3>{project.title}</h3>
                        <p className="project-detail">{project.detail}</p>
                        <div className="project-feature-block">
                          <span className="feature-title">Key features</span>
                          <ul>
                            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                          </ul>
                        </div>
                        <div className="project-back-footer">
                          <div className="stack-list compact">
                            {project.stack.map((item) => <span key={item}>{item}</span>)}
                          </div>
                          <span className="project-flip-back">Click to return to preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="more-work-head">
            <div>
              <p className="kicker">More builds</p>
              <h3>A closer look at OutreachPilot and the property management platform.</h3>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ExternalIcon /></a>
          </div>
          <div className="visual-project-grid">
            {visualProjects.map((project) => (
              <article className="visual-project" key={project.title}>
                <div className="visual-project-image">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                </div>
                <div className="visual-project-meta">
                  <span>{project.eyebrow}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="visual-project-tags">
                    {project.tags.map((tag) => <em key={tag}>{tag}</em>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="career-section section-wrap" id="experience">
          <SectionHeading
            kicker="Career"
            title="From backend internship to Software Engineer."
            copy="My current focus is professional backend and full-stack delivery at Novagito, with AI integrations where they add practical value."
            visual={<SectionVisual variant="career" />}
          />
          <div className="career-layout">
            <div className="timeline-list">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.role}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-content">
                    <div className="timeline-head">
                      <div>
                        <h3>{experience.role}</h3>
                        <p>{experience.company}</p>
                        <span className="timeline-meta">{experience.date} · {experience.meta}</span>
                      </div>
                    </div>
                    <ul>
                      {experience.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <aside className="profile-side-stack">
              <div className="identity-card">
                <img src={profile.avatar} alt="Om Prakash" />
                <div>
                  <p className="kicker">Professional identity</p>
                  <h3>Om Prakash</h3>
                  <span>Software Engineer @ Novagito</span>
                  <small>Chandigarh, India</small>
                </div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">View LinkedIn <ExternalIcon /></a>
              </div>
              <div className="education-card">
                <p className="kicker">Education</p>
                <h3>B.E. Computer Science & Engineering</h3>
                <p className="education-school">Chandigarh Engineering College, Landran</p>
                <div className="education-meta">
                  <span>CGPA</span><strong>7.91</strong>
                </div>
                <p className="education-copy">
                  Built a strong base in computer science while continuously shipping web, backend
                  and AI projects outside the classroom.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="stack-section section-wrap" id="stack">
          <SectionHeading
            kicker="Technical stack"
            title="The tools I use to move from idea to reliable system."
            copy="Grouped by how I actually use them — backend, data, delivery, AI and frontend collaboration."
            visual={<SectionVisual variant="stack" />}
          />
          <div className="skills-board">
            {Object.entries(skills).map(([group, items], index) => (
              <div className="skill-row" key={group}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group}</h3>
                <div className="skill-items">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="kicker">Contact</p>
              <h2>Have a backend problem worth solving?</h2>
              <p>
                If you want to discuss backend engineering, scalable web systems, APIs or practical
                AI integrations, send a message or connect with me directly.
              </p>
              <div className="contact-profile">
                <img src={profile.avatar} alt="Om Prakash" />
                <div><strong>Om Prakash</strong><span>Software Engineer · Chandigarh</span></div>
                <i className="status-dot" />
              </div>
              <div className="contact-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span><strong>LinkedIn</strong><small>Professional profile & messages</small></span><ExternalIcon />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <span><strong>GitHub</strong><small>Code and public projects</small></span><ExternalIcon />
                </a>
                <a href={profile.phoneHref}>
                  <span><strong>Phone</strong><small>{profile.phone}</small></span><ExternalIcon />
                </a>
                <a href={profile.emailHref}>
                  <span><strong>Email</strong><small>{profile.email}</small></span><ExternalIcon />
                </a>
              </div>
              <div className={`delivery-status ${emailReady ? "ready" : "needs-config"}`}>
                <span className="status-dot" />
                <div>
                  <strong>{emailReady ? "Direct message form is online" : "Email fallback is ready"}</strong>
                  <small>{emailReady ? "You can send a message directly from this page." : `Messages open in your email app addressed to ${profile.email}.`}</small>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-title"><span>New message</span><small>All fields required</small></div>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Name"
                minLength="2"
                required
              />
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@example.com"
                required
              />
              <label htmlFor="message">What would you like to discuss?</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Tell me a little about the project or role..."
                minLength="10"
                rows="6"
                required
              />
              <button className="button button-primary form-button" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send message"} <ArrowIcon />
              </button>
              {formState.message && (
                <p className={`form-message ${formState.type}`} role="status" aria-live="polite">
                  {formState.message}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <div className="footer-id">
          <img src={profile.avatar} alt="" />
          <div><strong>Om Prakash</strong><span>Software Engineer · Chandigarh, India</span></div>
        </div>
        <p>Backend systems, APIs, data, cloud delivery and AI integrations.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
      </div>
    </>
  );
}

export default App;
