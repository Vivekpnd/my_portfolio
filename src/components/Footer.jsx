import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-col", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".footer-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="mt-32 border-t border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="footer-col space-y-5">
          <h3 className="text-xl font-semibold tracking-wide">
            Vivek<span className="opacity-40">/</span>Dev
          </h3>

          <p className="text-sm text-white/60 max-w-xs">
            Web developer focused on building scalable frontend applications,
            modern web platforms and performance-driven user experiences.
          </p>

          <div className="flex gap-4 text-sm text-white/70">
            <a
              href="https://github.com/Vivekpnd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/vivek-pandey-5176542a5/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

           
          </div>
        </div>

        {/* Sitemap */}
        <div className="footer-col flex flex-col gap-3 text-sm">
          <h4 className="font-semibold text-white">Sitemap</h4>

          <a href="#home" className="text-white/60 hover:text-white transition">
            Home
          </a>

          <a href="#projects" className="text-white/60 hover:text-white transition">
            Projects
          </a>

          <a href="#resume" className="text-white/60 hover:text-white transition">
            Resume
          </a>

          <a href="#contact" className="text-white/60 hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Services */}
        <div className="footer-col flex flex-col gap-3 text-sm">
          <h4 className="font-semibold text-white">Expertise</h4>

          <span className="text-white/60">React / Next.js Development</span>
          <span className="text-white/60">Node.js APIs</span>
          <span className="text-white/60">Full-Stack Web Apps</span>
          <span className="text-white/60">UI & Performance Optimization</span>
        </div>

        {/* Contact */}
        <div className="footer-col flex flex-col gap-3 text-sm">
          <h4 className="font-semibold text-white">Contact</h4>

          <a
            href="mailto:vivekpnd4321@gmail.com"
            className="text-white/60 hover:text-white transition"
          >
            vivekpnd4321@gmail.com
          </a>

          <a
            href="tel:+918287356303"
            className="text-white/60 hover:text-white transition"
          >
            +91 82873 56303
          </a>

          <span className="text-white/60">Delhi, India</span>

          <a
            href="/vivek-resume.pdf"
            download
            className="mt-3 inline-block px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom border-t border-white/10 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-white/50">
        <p>© {year} Vivek. Built with React & GSAP.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>

          <a href="#" className="hover:text-white transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}