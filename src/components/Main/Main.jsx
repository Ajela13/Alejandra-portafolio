import "./Main.css";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
function Main() {
  return (
    <main className="content">
      <About/>
      <Resume/>
<Portfolio/>
      <Contact/>
    </main>
  );
}

export default Main;
