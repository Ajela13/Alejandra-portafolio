import "./Project.css";

function Project({ item }) {
  return (
    <div className="project">
      <div className="project__item-description">
        <h3 className="project__item-title">{item.name}</h3>
        <p className="project__item-text">{item.description}</p>
        <p className="project__item-tech">{item.technologies}</p>
        <a href={item.link} className="project__item-link">
          <p className="project__item-link-text">Learn more</p>
        </a>
      </div>
      <img
        src={item.image}
        alt="Project 1"
        className="project__item-image"
      ></img>
    </div>
  );
}

export default Project;
