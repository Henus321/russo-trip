import { Link } from 'react-router-dom';
import moscowImage from '../../assets/cities/moscow.jpg';

import './cities.styles.scss';

const Cities = () => {
  return (
    <main className="cities">
      <h2>I AM CITIES</h2>
      <div className="cities__list">
        <Link to="/city/moscow">
          <div className="cities__list-item">
            <h2>Moscow</h2>
            <img src={moscowImage} alt="Moscow" className="cities__img" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Cities;
