import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/weather">Väder</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
