import "./Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <h2 className="resume__title">RESUME</h2>
      <div className="resume__content">
        <div className="resume__education">
          <h3 className="resume__education-title resume__subtitle">
            MY EDUCATION:
          </h3>
          <p className="resume__education-description  resume__description">
            I have a bachelor degree in Mathematics, I took machine learning
            courses and I’m currently enrolled in a Software Engineering
            bootcamp with TripleTen.
          </p>
        </div>

        <div className="resume__experience">
          <h3 className="resume__experience-title resume__subtitle">
            MY EXPERIENCE:
          </h3>
          <div className="resume__description">
            <p className="resume__experience-description">
              In addition to my academic background, I have practical experience
              in the world of data and analytics.
              <p className="resume__experience-description">
                I've worked with Matillion, a powerful data integration platform
                that helps organizations extract, transform, and load data into
                cloud-based data warehouses.
              </p>
              <p className="resume__experience-description">
                I also have proficiency in Python and it’s libraries such as
                Pandas, Matplotlib, and NumPy, allowing me to perform data
                analysis and visualization efficiently.
              </p>
              <p className="resume__experience-description">
                Additionally, I have experience with BigQuery, a versatile and
                scalable data warehouse by Google Cloud, which I've used to
                explore and analyze large datasets.
              </p>
              <p className="resume__experience-description">
                While I've gained valuable experience in these areas, my current
                focus is on expanding my knowledge in Machine Learning and
                Artificial Intelligence.
              </p>
            </p>
          </div>
        </div>

        <div className="resume__skills">
          <h3 className="resume__skills-title resume__subtitle">
            MY SKILLS & TECHNOLOGIES:
          </h3>
          <ul className="resume__skills-list resume__description">
            <li className="resume__skills-item">Data analysis</li>
            <li className="resume__skills-item">Data visualization</li>
            <li className="resume__skills-item">Front-end programming</li>
            <li className="resume__skills-item">Back-end Engineering</li>
            <li className="resume__skills-item">Python</li>
            <li className="resume__skills-item">Pandas</li>
            <li className="resume__skills-item">Matplotlib</li>
            <li className="resume__skills-item">Numpy</li>
            <li className="resume__skills-item">BigQuery</li>
            <li className="resume__skills-item">Command Line</li>
            <li className="resume__skills-item">CSS</li>
            <li className="resume__skills-item">HTML</li>
            <li className="resume__skills-item">Javascript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
