import "./Portfolio.css";
import ProjectList from "../ProjectList/ProjectList";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">PORTFOLIO</h2>
      <div className="portfolio__content">
        <ul className="portfolio__list">
          {projects.map((item) => {
            return <ProjectList key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
