export default function ResumeSection() {
  return (
    <section className="section-block resume-layout" id="resume" data-reveal>
      <div className="resume-card glass-card">
        <div>
          <p className="eyebrow">Resume</p>

          <h2>
            Interested in working together? Download my resume and learn more
            about my experience.
          </h2>

          <p>
            I am a full-stack developer experienced in building modern web and
            mobile applications using React, Next.js, Node.js and React Native.
            My work includes HR platforms, inventory systems, booking apps and
            headless e-commerce solutions.
          </p>
        </div>

        <div className="resume-actions">
          <a
            href="/resume-vivek-template.pdf"
            download
            className="btn btn-solid"
          >
            Download Resume
          </a>

          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}