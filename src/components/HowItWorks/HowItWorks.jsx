import "./HowItWorks.css";

const steps = [
  {
    n: "01",
    title: "Creators list projects",
    desc: "Define skills, duration, and what you offer: paid, equity, or learning.",
  },
  {
    n: "02",
    title: "Collaborators create profiles",
    desc: "Add your skills, availability, and expectations in minutes.",
  },
  {
    n: "03",
    title: "Matching + shortlists",
    desc: "Both sides see ranked matches and can connect when there’s alignment.",
  },
];

function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="how__container">
        <h2 className="section__title">How it works</h2>
        <p className="section__subtitle">
          A simple, transparent flow designed for early-stage teams.
        </p>

        <div className="how__grid">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__num">{s.n}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
