import "./About.css";
import profilePicture from "../../assets/profilePicture.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__header-title">
          Mathematician - Software Engineer - Data scientist - Data analyst
        </p>
        <img
          src={profilePicture}
          alt="profile picture"
          className="about__header-image"
        />
      </div>
      <h3 className="about__title">ABOUT</h3>
      <p className="about__description">
        I'm Alejandra Mariño Parra, a mathematics graduate from Colombia with a
        strong foundation in analytical thinking and problem-solving. My
        academic background has equipped me with the skills to approach complex
        challenges with precision and logic. I enhanced my English proficiency
        while living in the United States, achieving an advanced level of
        fluency, and I am a native Spanish speaker. Currently, I am focused on
        advancing my expertise in Machine Learning and Artificial Intelligence,
        driven by a deep passion for technology, innovation, and continuous
        learning.
      </p>
    </section>
  );
}

export default About;
