import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCloudSun, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/weather">
            <FontAwesomeIcon icon={faCloudSun} />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
