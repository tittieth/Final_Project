import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <section>
        <h2>Om projektet</h2>
        <p>
          Superklädhjälten är en interaktiv webbapplikation som hjälper barn att välja rätt kläder baserat på aktuella
          väderförhållanden. Den är skapad inom ramen av mitt examensarbete som front end developer på Medieinstitutet.
        </p>
      </section>
      <section>
        <h2>Tech stack</h2>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faReact} />
            </span>
            <p>React</p>
          </li>
          <li>
            <p>TypeScript</p>
            <span></span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faSass} />
            </span>
            <p>Scss</p>
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
      <section>
        <h2>Övrigt</h2>
        <p>Läs mer om projektet och ta del av koden på min</p>
        <Link to="https://github.com/tittieth/Final_Project">GitHub</Link>
      </section>
      <section>
        <h2>Tittie Thomasson</h2>
        <Link to="https://www.linkedin.com/in/tittie-thomasson/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
