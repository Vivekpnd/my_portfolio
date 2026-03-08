import { useState } from "react";

export default function ProjectFilters({ projects }) {

  const categories = [
    "All",
    "SaaS",
    "E-commerce",
    "WordPress",
    "Magento",
    "Mobile",
    "Business"
  ];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <>
      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "28px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className="pill"
            onClick={() => setActive(cat)}
            style={{
              cursor: "pointer",
              background:
                active === cat
                  ? "linear-gradient(135deg,var(--accent),#5be7c4)"
                  : "rgba(255,255,255,0.06)",
              color: active === cat ? "#08111f" : "#dfe6ff",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filtered.map((project, index) => (
          <article className="project-card glass-card" key={project.slug}>
            <div className="project-topline">
              <span>{project.category}</span>
              <span>{index + 1}</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="stack-row">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* Project Links */}
            <div style={{ marginTop: "auto", display: "flex", gap: "14px" }}>
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Visit Website →
                </a>
              )}

              <a href="/#contact" className="inline-link">
                Discuss Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}