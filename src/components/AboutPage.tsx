import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => {
  return (
    <div>
      <section>
        <h2>Om projektet</h2>
        <p>
          Superklädhjälten är en interaktiv webbapplikation som hjälper barn att välja rätt kläder baserat på aktuella
          väderförhållanden. Den är skapad inom ramen av mitt examensarbete som front end developer på Medieinstitutet -
          2024
        </p>
      </section>
      <section>
        <h2>Tech stack</h2>
        <ul>
          <li>
            <p>React</p>
            <span>
              <FontAwesomeIcon icon={faReact} />
            </span>
          </li>
          <li>
            <p>TypeScript</p>
            <span></span>
          </li>
          <li>
            <p>Scss</p>
            <span>
              <FontAwesomeIcon icon={faSass} />
            </span>
          </li>
          <li>
            <p>Vite</p>
          </li>
          <li>
            <p>React Router</p>
          </li>
          <li>
            <p>Formik</p>
          </li>
          <li>
            <p>Axios</p>
          </li>
          <li>
            <p>OpenWeatherMap Api</p>
          </li>
          <li>
            <p>localStorage</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
