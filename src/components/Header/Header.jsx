import "./Header.css";
import resume from "../../assets/resume.pdf"

function Header() {
  return (
    <header className="header" id="header">
      {/* Download Resume Icon/Link in top right */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "30px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <a
          href={resume}
          download
          title="Download Resume"
          style={{
            color: "#222",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 13.586l4.293-4.293 1.414 1.414L10 16.414l-5.707-5.707 1.414-1.414L10 13.586zM4 4h12v2H4V4zm0 4h12v2H4V8z" />
          </svg>
          <span style={{ fontSize: "14px" }}>Download Resume</span>
        </a>
      </div>
      <div className="header__container">
        <div className="header__intro">
          <p className="header__intro-description">welcome to the</p>
          <div className="header__line"></div>
          <p className="header__intro-description">of</p>
        </div>
        <div className="header__description">
          <div className="header__title">
            <h1 className="header__title-first">SOFTWARE</h1>
            <h1 className="header__title-second">ENGINEERING </h1>
            <h1 className="header__title-third">PORTFOLIO</h1>
          </div>
          <p className="header__name">ALEJANDRA MARIÑO PARRA</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
