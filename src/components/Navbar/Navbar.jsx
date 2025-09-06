import "./Navbar.css";
import Footer from "../Footer/Footer";
import useNavbarStore from "../../store/navbarStore";
import closeIcon from "../../assets/close.svg"; // importar como asset

function Navbar() {
  const menuOpen = useNavbarStore((state) => state.menuOpen);
  const toggleMenu = useNavbarStore((state) => state.toggleMenu);
  const closeMenu = () => {
    if (menuOpen) toggleMenu();
  };

  return (
    <nav className="nav">
      {/* Hamburger button for small screens */}
      <button
        className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {menuOpen ? (
          <img src={closeIcon} alt="Cerrar menú" className="nav__hamburger-x" />
        ) : (
          <>
            <span className="nav__hamburger-bar"></span>
            <span className="nav__hamburger-bar"></span>
            <span className="nav__hamburger-bar"></span>
          </>
        )}
      </button>
      <ul className={`nav__links${menuOpen ? " nav__links--open" : ""}`}>
        <li>
          <a href="#header" className="nav__link" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav__link" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#resume" className="nav__link" onClick={closeMenu}>
            Resume
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav__link" onClick={closeMenu}>
            Portafolio
          </a>
        </li>
        <li>
          <a href="#contact" className="nav__link" onClick={closeMenu}>
            contact
          </a>
        </li>
      </ul>
      <Footer />
    </nav>
  );
}

export default Navbar;