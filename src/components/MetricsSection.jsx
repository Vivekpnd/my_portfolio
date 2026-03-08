export default function MetricsSection({ metrics }) {
  return (
    <section className="metrics-grid" data-reveal>
      {metrics.map((metric) => (
        <article className="metric-card" key={metric.label}>
          <h2>{metric.value}</h2>
          <p>{metric.label}</p>
        </article>
      ))}
    </section>
  );
}