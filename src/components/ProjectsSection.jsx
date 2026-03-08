function SplitTitle({ text }) {
  return (
    <h2 className="section-title">
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>{word}&nbsp;</span>
      ))}
    </h2>
  );
}

export default function ProjectsSection({ projects }) {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="section-block projects-section" id="projects" data-reveal>
      <div className="section-heading project-head-row">
        <div>
          <p className="eyebrow">Projects showcase</p>
          <SplitTitle text="Selected projects from my work." />
        </div>

        <p className="section-note">
          A mix of SaaS platforms, e-commerce systems, mobile apps and client
          websites built with modern web technologies.
        </p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <article className="project-card glass-card" key={project.title}>
            <div className="project-topline">
              <span>{project.category}</span>
              <span>0{index + 1}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="stack-row">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a href="/projects" className="inline-link">
              View details
            </a>
          </article>
        ))}
      </div>

      <div style={{ marginTop: "28px" }}>
        <a href="/projects" className="btn btn-ghost">
          View All Projects →
        </a>
      </div>
    </section>
  );
}