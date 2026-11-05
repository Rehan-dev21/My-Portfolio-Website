import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "1.4rem" }}>
        <h2 className="section-title" style={{ margin: 0 }}>
          Skills <span>tools I use</span>
        </h2>
        <Link to="/skills" className="work-link">
          Explore skills →
        </Link>
      </div>
      <div className="skills-list">
        <Link to="/skills"><span className="skill-chip">HTML</span></Link>
        <Link to="/skills"><span className="skill-chip">CSS</span></Link>
        <Link to="/skills"><span className="skill-chip">JS</span></Link>
        <Link to="/skills"><span className="skill-chip">REACT</span></Link>
        <Link to="/skills"><span className="skill-chip">BOOTSTRAP</span></Link>
      </div>
    </section>
  );
};

export default Skills;
