import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__container">
        <div className="cta__box">
          <h2>Join the early access waitlist</h2>
          <p>
            Be the first to try matching for projects & collaborators. No spam.
          </p>

          <form
            className="cta__form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Saved! (We’ll connect this to backend later)");
            }}
          >
            <input type="email" placeholder="you@example.com" required />
            <button type="submit">Notify me</button>
          </form>

          <p className="cta__hint">
            Next: profiles, projects, matching engine, analytics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
