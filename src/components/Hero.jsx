export default function Hero({ floatingCardRef }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="hero-badge">
          Fullstack Developer • React • Next.js • Node.js
        </div>

        <h1>
          Hi, I'm <span>Vivek Kumar</span> — a full-stack developer building
          modern, scalable web and mobile applications.
        </h1>

        <p>
          I specialize in creating production-ready products using React,
          Next.js, Node.js and React Native. My work includes HR platforms,
          inventory management systems, mobile booking applications and
          headless e-commerce solutions.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-solid">
            View My Projects
          </a>

          <a
            href="/resume-vivek-template.pdf"
            download
            className="btn btn-ghost"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-mini-grid">
          <div>
            <strong>Frontend</strong>
            <span>React, Next.js, Tailwind CSS</span>
          </div>

          <div>
            <strong>Backend</strong>
            <span>Node.js, Express, REST APIs</span>
          </div>

          <div>
            <strong>Mobile</strong>
            <span>React Native Applications</span>
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-gradient" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <div className="dashboard-card card-main">
          <div className="top-line">
            <span className="pill">Selected Work</span>
            <span className="pill muted">Portfolio 2026</span>
          </div>

          <h3>
            Building real-world applications — from internal business platforms
            to scalable web products.
          </h3>

          <p>
            Focused on clean architecture, performance optimization and modern
            UI systems that deliver fast and reliable user experiences.
          </p>

          <div className="mini-panels">
            <div className="mini-card">
              <small>01</small>
              <strong>Full-Stack Web Platforms</strong>
            </div>

            <div className="mini-card">
              <small>02</small>
              <strong>Mobile Applications</strong>
            </div>
          </div>
        </div>

        <div className="dashboard-card card-side">
          <small>Experience</small>

          <strong>
            Hands-on experience developing HR systems, inventory management
            platforms, service booking mobile apps and headless e-commerce
            websites.
          </strong>
        </div>
      </div>

      <div className="floating-card" ref={floatingCardRef}>
        <div className="floating-screen">
          <div className="floating-header">
            <span />
            <span />
            <span />
          </div>

          <div className="floating-body">
            <p>Featured Skill</p>

            <h4>Building modern full-stack applications</h4>

            <div className="floating-bars">
              <em />
              <em />
              <em />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}