import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error-card">
      <div className="error-code">404</div>

      <div className="error-emoji">🧭</div>

      <h1 className="error-title">Oops! Page not found</h1>
      <p className="error-desc">
        The page you're looking for doesn't exist, may have been moved, or is
        temporarily unavailable.
      </p>

      <div className="btn-group">
        <Link to="/" className="btn">
          Go to homepage
        </Link>
        <Link to="/contact" className="btn btn-outline">
          Contact me
        </Link>
      </div>

      <div className="helpful-links">
        <p>You might find these helpful</p>
        <div className="link-row">
          <Link to="/projects">💼 My projects</Link>
          <Link to="/skills">⚡ My skills</Link>
          <Link to="/contact">✉️ Contact</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
