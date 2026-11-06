import { useState } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      category: "Web Apps",
      icon: "📊",
      desc: "Interactive dashboard with charts, filters, and real-time data updates for a SaaS product.",
      tags: ["React", "D3.js", "Tailwind"],
      variant: "",
      status: "Live",
    },
    {
      id: 2,
      title: "Marketplace UI",
      category: "Web Apps",
      icon: "🛒",
      desc: "A clean e-commerce frontend with product filtering, cart, and a smooth checkout flow.",
      tags: ["React", "Stripe", "CSS"],
      variant: "variant-2",
      status: "Live",
    },
    {
      id: 3,
      title: "Task Manager",
      category: "Web Apps",
      icon: "📝",
      desc: "Drag-and-drop task board with local storage persistence and a dark mode toggle.",
      tags: ["React", "Context", "LocalStorage"],
      variant: "variant-3",
      status: "Live",
    },
    {
      id: 4,
      title: "Weather App",
      category: "Web Apps",
      icon: "🌦️",
      desc: "Live weather forecasts using an external API, geolocation, and dynamic backgrounds.",
      tags: ["React", "API", "Geolocation"],
      variant: "variant-4",
      status: "Live",
    },
    {
      id: 5,
      title: "Design System",
      category: "UI/UX",
      icon: "🎨",
      desc: "A reusable component library with accessible patterns, tokens, and documentation.",
      tags: ["Figma", "Storybook", "CSS"],
      variant: "variant-5",
      status: "In progress",
    },
    {
      id: 6,
      title: "Dev Tools CLI",
      category: "Open Source",
      icon: "🔧",
      desc: "A command-line utility that scaffolds projects and automates repetitive dev tasks.",
      tags: ["Node.js", "CLI", "Open Source"],
      variant: "variant-6",
      status: "In progress",
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <>
      <div className="work-page-content">
        {/* <!-- ---------- Intro ---------- --> */}
        <section className="page-intro">
          <h1>
            My <span className="accent">Projects</span>
          </h1>
          <p>
            A selection of projects I've designed and built — from dashboards to
            full web apps.
          </p>
        </section>

        {/* <!-- ---------- Filter tabs ---------- --> */}
        <div className="filters">
          {["All", "Web Apps", "UI/UX", "Open Source"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? "active" : ""}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* <!-- ---------- Work grid ---------- --> */}
        <div className="work-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="work-card">
              <div
                className={`work-thumb ${project.variant ? project.variant : ""}`}
              >
                {project.icon}
                <span
                  className={`status-badge ${project.status === "Live" ? "live" : "wip"}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="work-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="work-link">
                  Discuss project
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* <!-- ---------- Footer ---------- --> */}
        <footer className="page-footer">
          <p>© 2025 Rehan — All rights reserved.</p>
          <Link to="/contact">Let's work together →</Link>
        </footer>
      </div>
    </>
  );
};

export default Work;
