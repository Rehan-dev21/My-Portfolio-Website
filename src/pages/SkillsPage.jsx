import { Link } from "react-router-dom";

const SkillsPage = () => {
  const skillsData = [
    {
      name: "HTML",
      icon: "🌐",
      desc: "Semantic and accessible markup for modern, SEO-friendly web structures.",
      level: "Proficient",
    },
    {
      name: "CSS",
      icon: "🎨",
      desc: "Responsive design, Flexbox, CSS Grid, custom layouts, and modern styling.",
      level: "Proficient",
    },
    {
      name: "JS",
      icon: "⚡",
      desc: "JavaScript (ES6+), DOM manipulation, async logic, and interactive experiences.",
      level: "Proficient",
    },
    {
      name: "REACT",
      icon: "⚛️",
      desc: "Component-based architecture, hooks, state management, and modern SPA development.",
      level: "Proficient",
    },
    {
      name: "BOOTSTRAP",
      icon: "📦",
      desc: "Rapid responsive prototyping, mobile-first grid system, and utility styling.",
      level: "Proficient",
    },
  ];

  return (
    <div className="skills-page">
      <section className="page-intro">
        <h1>
          My <span className="accent">Skills</span>
        </h1>
        <p>
          Here are the tools, languages, and frameworks I use to build clean,
          responsive, and engaging user experiences.
        </p>
      </section>

      <div className="skills-list" style={{ marginBottom: "2.5rem" }}>
        {skillsData.map((skill) => (
          <span key={skill.name} className="skill-chip">
            {skill.name}
          </span>
        ))}
      </div>

      <div className="projects-grid">
        {skillsData.map((skill) => (
          <div key={skill.name} className="project-card">
            <div className="project-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
            <span className="project-tag">{skill.level}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>
          Ready to see these skills in action or discuss a new project?
        </p>
        <div className="btn-group">
          <Link to="/projects" className="btn">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

