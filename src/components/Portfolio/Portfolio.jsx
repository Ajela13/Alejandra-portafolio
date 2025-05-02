import "./Portfolio.css";
import Project from "../Project/Project";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">PORTFOLIO</h2>
      <div className="portfolio__content">
        <ul className="portfolio__list">
          {projects.map((item) => {
            return <Project key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
