import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import typeScriptIcon from '/tech-icons/typescript-svgrepo-com.svg';
import openWeatherIcon from '/tech-icons/openweather-svgrepo-com.svg';
import reactRouterIcon from '/tech-icons/react-router-logo-png-transparent.png';
import viteIcon from '/tech-icons/vite-svgrepo-com.svg';
import axiosIcon from '/tech-icons/Axios.svg';
import formikIcon from '/tech-icons/emojipng.com-10246054.png';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <section>
        <h1>Om projektet</h1>
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
              <FontAwesomeIcon icon={faReact} className="tech-icon" />
            </span>
            <p>React</p>
          </li>
          <li>
            <span>
              <img className="tech-icon" src={typeScriptIcon} alt="" />
            </span>
            <p>TypeScript</p>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faSass} className="tech-icon" />
            </span>
            <p>Scss</p>
          </li>
          <li>
            <img className="tech-icon" src={viteIcon} alt="" />
            <p>Vite</p>
          </li>
          <li>
            <img className="tech-icon" src={reactRouterIcon} alt="" />
            <p>React Router</p>
          </li>
          <li>
            <img className="tech-icon" src={formikIcon} alt="" />
            <p>Formik</p>
          </li>
          <li>
            <img className="tech-icon" src={axiosIcon} alt="" />
            <p>Axios</p>
          </li>
          <li>
            <img className="tech-icon" src={openWeatherIcon} alt="" />
            <p>OpenWeatherMap Api</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Övrigt</h2>
        <p>Läs mer om projektet och ta del av koden på min</p>
        <Link to="https://github.com/tittieth/Final_Project" target="_blank">
          GitHub
        </Link>
      </section>
      <section>
        <h2>Tittie Thomasson</h2>
        <Link to="https://www.linkedin.com/in/tittie-thomasson/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="tech-icon" />
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
