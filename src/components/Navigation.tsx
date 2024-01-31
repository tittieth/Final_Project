import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCloudSun, faEnvelope, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav>
      <img
        className="logo"
        src="/img/logo-superkladhjalten.webp"
        alt="a cloud with the text superklädhjälten"
        width={90}
        height={50}
      />
      <ul>
        <li>
          <Link to="/" aria-label="Home">
            <FontAwesomeIcon icon={faHouse} className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/weather" aria-label="Weather">
            <FontAwesomeIcon icon={faCloudSun} className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/contact" aria-label="Contact">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/info" aria-label="Info">
            <FontAwesomeIcon icon={faCircleInfo} className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
