import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="avatar">👨‍💻</div>
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="accent">Rehan</span> 👋
        </h1>
        <p className="subhead bio">
          Hello! how are you, this is my First Portfolio. Plz check it.
        </p>
        <div className="btn-group">
          <Link to="/projects" className="btn">
            View Projects ↗
          </Link>
          <Link to="/skills" className="btn btn-outline">
            View Skills
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
