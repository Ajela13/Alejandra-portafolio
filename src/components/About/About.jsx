import "./About.css";
import profilePicture from "../../assets/profilePicture.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__header-title">
          Mathematics - Software Engineer - Data scientist - Data analyst
        </p>
        <img
          src={profilePicture}
          alt="profile picture"
          className="about__header-image"
        />
      </div>
      <h3 className="about__title">ABOUT</h3>
      <p className="about__description">
        I'm Alejandra Mariño Parra, hailing from the vibrant country of
        Colombia. During my university years, I studied mathematics and acquired
        proficiency in Portuguese. I further honed my English skills during my
        time in the United States, reaching an advanced level of fluency.
        Spanish is my mother tongue. Currently, I'm also dedicated to expanding
        my knowledge in the fields of Machine Learning and Artificial
        Intelligence.
      </p>
    </section>
  );
}

export default About;
