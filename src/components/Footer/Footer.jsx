import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© {year} CollabMatch. Built with React + FastAPI.</p>
        <p className="footer__links">
          <a href="#features">Features</a>
          <span>•</span>
          <a href="#how">How it works</a>
          <span>•</span>
          <a href="#cta">Waitlist</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
