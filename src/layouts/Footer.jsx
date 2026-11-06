import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-links">
        <a href="mailto:Rehan@gmail.com">✉️ Rehan@gmail.com</a>
        <a href="tel:1234567890">📞 1234567890</a>
        <Link to="/contact" className="work-link">
          Contact page →
        </Link>
      </div>
      <div className="footer-note">© 2026 Rehan</div>
    </footer>
  );
};
export default Footer;
