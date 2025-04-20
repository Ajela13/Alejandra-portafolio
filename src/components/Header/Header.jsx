import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
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
