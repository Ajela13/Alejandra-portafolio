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
            I hold a Bachelor's degree in Mathematics, have completed courses in
            Machine Learning, and recently graduated from a Software Engineering
            Bootcamp with TripleTen, where I gained hands-on experience in
            full-stack web development.
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
            </p>
            <p className="resume__experience-description">
              I've worked with Matillion, a powerful data integration platform
              that helps organizations extract, transform, and load data into
              cloud-based data warehouses.
            </p>
            <p className="resume__experience-description">
              I also have proficiency in Python and its libraries such as
              Pandas, Matplotlib, and NumPy, allowing me to perform data
              analysis and visualization efficiently.
            </p>
            <p className="resume__experience-description">
              Additionally, I have experience with BigQuery, a versatile and
              scalable data warehouse by Google Cloud, which I've used to
              explore and analyze large datasets.
            </p>
            <p className="resume__experience-description">
              Beyond data work, I’ve built and deployed full-stack web
              applications using technologies like JavaScript, React, Node.js,
              Express, and MongoDB. These projects included implementing RESTful
              APIs, handling user authentication, and managing dynamic front-end
              functionality.
            </p>
            <p className="resume__experience-description">
              I have also worked with CSS and HTML to create responsive and
              user-friendly interfaces, ensuring a seamless user experience.
            </p>
            <p className="resume__experience-description">
              More recently, I gained hands-on experience with modern front-end
              frameworks and tools such as React, Next.js, Redux, and HeroUI, 
              further enhancing my ability to create scalable, interactive, 
              and visually appealing applications.
            </p>
            <p className="resume__experience-description">
              While I've gained valuable experience in these areas, I’m
              currently focused on deepening my expertise in both Artificial
              Intelligence and Software Engineering, aiming to build intelligent
              and scalable solutions.
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
            <li className="resume__skills-item">Python</li>
            <li className="resume__skills-item">Pandas</li>
            <li className="resume__skills-item">Numpy</li>
            <li className="resume__skills-item">Matplotlib</li>
            <li className="resume__skills-item">BigQuery</li>
            <li className="resume__skills-item">Matillion</li>
            <li className="resume__skills-item">SQL</li>
            <li className="resume__skills-item">Microsoft Excel</li>
            <li className="resume__skills-item">HubSpot CRM</li>
            <li className="resume__skills-item">Front-end programming</li>
            <li className="resume__skills-item">HTML</li>
            <li className="resume__skills-item">CSS</li>
            <li className="resume__skills-item">tailwind</li>
            <li className="resume__skills-item">Javascript</li>
            <li className="resume__skills-item">Typescript</li>
            <li className="resume__skills-item">Next.js</li>
            <li className="resume__skills-item">Redux</li>
            <li className="resume__skills-item">HeroUI</li>
            <li className="resume__skills-item">C#</li>
            <li className="resume__skills-item">React</li>
            <li className="resume__skills-item">Back-end Engineering</li>
            <li className="resume__skills-item">Node.js</li>
            <li className="resume__skills-item">Express.js</li>
            <li className="resume__skills-item">RESTful API</li>
            <li className="resume__skills-item">MongoDB</li>
            <li className="resume__skills-item">Command Line</li>
            <li className="resume__skills-item">Git & Github</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
