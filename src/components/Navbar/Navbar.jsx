import "./Navbar.css";
import Footer from "../Footer/Footer";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <a href="#header" className="nav__link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li>
          <a href="#resume" className="nav__link">
            Resume
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav__link">
            Portafolio
          </a>
        </li>
        <li>
          <a href="#contact" className="nav__link">
            contact
          </a>
        </li>
      </ul>
      <Footer />
    </nav>
  );
}

export default Navbar;
