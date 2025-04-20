import "./Footer.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/Ajela13" target="_blank">
        <img className="footer__image" src={github} alt="github"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/alejandra-mari%C3%B1o-parra-996040230/"
        target="_blank"
      >
        <img className="footer__image" src={linkedin} alt="linkedin"></img>
      </a>
    </footer>
  );
}

export default Footer;
