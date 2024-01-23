import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCloudSun, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav>
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
      </ul>
    </nav>
  );
};

export default Navigation;
