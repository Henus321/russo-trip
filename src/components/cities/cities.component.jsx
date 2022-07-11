import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CitiesContext } from '../../contexts/cities.context';
import Button from '../button/button.component';

import './cities.styles.scss';

const Cities = () => {
  const navigate = useNavigate();
  const { cities } = useContext(CitiesContext);

  const forthHandler = (cityRoute) => {
    navigate(`/${cityRoute}`);
  };

  return (
    <main className="cities">
      <h2 className="cities__title">Travel around Russia with Russo Trip!</h2>
      <p className="cities__under-title">
        Choose a city and start your journey...
      </p>
      <ul className="cities__list">
        {cities &&
          cities.map((city) => (
            <li className="cities__list-item" key={city.id}>
              <img className="cities__img" src={city.imageUrl} alt="Moscow" />
              <h2 className="cities__item-title">{city.title}</h2>
              <p className="cities__paragraph">{city.description}</p>
              <div className="cities__information-container">
                <span className="cities__information-span">Information</span>
                <Button
                  handler={() => forthHandler(city.route)}
                  buttonType="btn__primary"
                  buttonText="View Tours"
                />
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Cities;
