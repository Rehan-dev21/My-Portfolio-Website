import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="work">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "1.4rem" }}>
        <h2 className="section-title" style={{ margin: 0 }}>
          Featured work <span>recent projects</span>
        </h2>
        <Link to="/projects" className="work-link">
          View all projects →
        </Link>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-icon">📊</div>
          <h3>Analytics Dashboard</h3>
          <p>
            Interactive dashboard with charts, filters and real-time data
            updates.
          </p>
          <span className="project-tag">React · D3</span>
        </div>

        <div className="project-card">
          <div className="project-icon">🛒</div>
          <h3>Marketplace UI</h3>
          <p>
            A clean e‑commerce frontend with cart, product filters, and checkout
            flow.
          </p>
          <span className="project-tag">React · Stripe</span>
        </div>

        <div className="project-card">
          <div className="project-icon">📝</div>
          <h3>Task Manager</h3>
          <p>
            Drag‑and‑drop task board with local storage persistence and dark
            mode.
          </p>
          <span className="project-tag">React · Context</span>
        </div>

        <div className="project-card">
          <div className="project-icon">🌦️</div>
          <h3>Weather App</h3>
          <p>
            Live weather forecast using external API, geolocation, and dynamic
            backgrounds.
          </p>
          <span className="project-tag">React · API</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
