import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <p className="hero__badge">For students • Founders • Indie builders</p>

          <h1 className="hero__title">
            Find the right people for your project — and the right projects for your skills.
          </h1>

          <p className="hero__subtitle">
            CollabMatch connects <strong>Project Creators</strong> with <strong>Collaborators</strong>
            using skill-based matching and clear availability.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#cta">
              Join waitlist
            </a>
            <a className="btn btn--secondary" href="#features">
              See features
            </a>
          </div>

          <div className="hero__stats">
            <div className="stat">
              <div className="stat__num">⚙️</div>
              <div className="stat__text">Skill-based matching</div>
            </div>
            <div className="stat">
              <div className="stat__num">📅</div>
              <div className="stat__text">Flexible availability</div>
            </div>
            <div className="stat">
              <div className="stat__num">📊</div>
              <div className="stat__text">Analytics for both sides</div>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="mock">
            <div className="mock__top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="mock__body">
              <p className="mock__label">Match Preview</p>

              <div className="mock__card">
                <p className="mock__title">Project: Campus Food Delivery MVP</p>
                <p className="mock__meta">Skills needed: React, FastAPI, UI</p>
                <div className="mock__bar">
                  <div className="mock__fill" style={{ width: "78%" }} />
                </div>
                <p className="mock__score">Match score: 78%</p>
              </div>

              <div className="mock__card">
                <p className="mock__title">Collaborator: Frontend Developer</p>
                <p className="mock__meta">Availability: 10 hrs/week</p>
                <div className="mock__bar">
                  <div className="mock__fill" style={{ width: "86%" }} />
                </div>
                <p className="mock__score">Match score: 86%</p>
              </div>

              <p className="mock__hint">Rule-based matching now, AI later.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
