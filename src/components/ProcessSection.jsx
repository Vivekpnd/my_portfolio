export default function ProcessSection({ processSteps }) {
  return (
    <section className="section-block process-layout" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Workflow</p>
        <h2 className="section-title">Show how you think</h2>
      </div>

      <div className="process-grid">
        {processSteps.map((item, index) => (
          <article className="process-card glass-card" key={item}>
            <span className="process-index">0{index + 1}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}