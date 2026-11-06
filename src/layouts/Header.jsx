import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="portfolio-header">
      <div className="brand">
        <Link to="/" style={{ textDecoration: "initial" }}>
          Rehan
        </Link>
      </div>

      <nav className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active-nav" : ""}
        >
          Home
        </Link>
        <Link
          to="/skills"
          className={location.pathname === "/skills" ? "active-nav" : ""}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" || location.pathname === "/work"
              ? "active-nav"
              : ""
          }
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-nav" : ""}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
