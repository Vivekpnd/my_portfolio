function SplitTitle({ text }) {
  return (
    <h2 className="section-title">
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>{word}&nbsp;</span>
      ))}
    </h2>
  );
}

export default function CapabilitiesSection({ capabilities }) {
  return (
    <section className="section-block" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <SplitTitle text="Skills and technologies I use to build modern web applications." />
      </div>

      <div className="capabilities-grid">
        {capabilities.map((item, index) => (
          <article className="capability-card glass-card" key={item.title}>
            <div className="tilt-icon">0{index + 1}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}