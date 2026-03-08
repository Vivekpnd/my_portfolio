import ContactSection from "../components/ContactSection";
import ProjectFilters from "../components/ProjectFilters";
import { projects } from "../data/content";

function SplitTitle({ text }) {
  return (
    <h2 className="section-title">
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>{word}&nbsp;</span>
      ))}
    </h2>
  );
}

export default function ProjectsPage() {
  return (
    <main className="content-shell">
      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Complete portfolio</p>
            <SplitTitle text="All projects and client work." />
          </div>

          <p className="section-note">
            Explore SaaS platforms, mobile apps, e-commerce builds and design
            projects.
          </p>
        </div>

        <ProjectFilters projects={projects} />
        <ContactSection />
      </section>
    </main>
  );
}