export default function Navbar() {
  return (
    <header className="nav">
      <a href="/" className="brand">
        Vivek<span>/</span>Dev
      </a>

      <nav>
        <a href="/#projects">Projects</a>
        <a href="/projects">All Projects</a>
        <a href="/vivek-kumar-resume.pdf" download>
          Resume
        </a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}