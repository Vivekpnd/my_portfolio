function SplitTitle({ text }) {
  return (
    <h2 className="section-title">
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`}>{word}&nbsp;</span>
      ))}
    </h2>
  );
}

export default function AboutSection() {
  return (
    <section className="section-block section-story " data-reveal>
      <div className="section-heading">
        <p className="eyebrow">About this template</p>
        <SplitTitle text="Designed to feel like a Dribbble-inspired concept, but practical enough to edit." />
      </div>

      <div className="story-grid">
        <div className="story-copy glass-card">
          <p>
            This template uses strong gradients, soft glass panels, rounded cards and motion that
            supports the narrative. You can replace the text with your own company story or keep
            it personal as an individual portfolio.
          </p>
          <p>
            The moving floating card gives the site a premium “object travelling through the
            experience” feeling similar to modern showcase sites.
          </p>
        </div>

        <div className="story-side glass-card">
          <p className="label">Best for</p>
          <ul>
            <li>Freelance web developers</li>
            <li>Product-focused portfolios</li>
            <li>Agencies and small studios</li>
            <li>Animated case-study websites</li>
          </ul>
        </div>
      </div>
    </section>
  );
}