import "./Features.css";

const items = [
  {
    title: "For Project Creators",
    desc: "Post your project, define skills needed, duration, and compensation type.",
  },
  {
    title: "For Collaborators",
    desc: "Show your skills, availability, and expectations. Get matched to real projects.",
  },
  {
    title: "Auto Matching",
    desc: "A clear match score based on skills + availability + preference compatibility.",
  },
  {
    title: "Analytics",
    desc: "See views, interest, and demand trends—use data to improve your listing/profile.",
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__container">
        <h2 className="section__title">What you get</h2>
        <p className="section__subtitle">
          Start simple. Validate fast. Scale into a full platform later.
        </p>

        <div className="features__grid">
          {items.map((it) => (
            <div className="feature" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
