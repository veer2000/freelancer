import "./Navbar.css";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav__container">
        <div className="nav__brand">
          <span className="nav__logo">⚡</span>
          <span className="nav__title">CollabMatch</span>
        </div>

        <nav className="nav__links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#cta" className="nav__cta">
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
