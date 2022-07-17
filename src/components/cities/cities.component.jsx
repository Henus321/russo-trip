import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyContext } from '../../contexts/company.context';

import Button from '../button/button.component';
import Loader from '../loader/loader.component';
import './cities.styles.scss';

const Cities = () => {
  const navigate = useNavigate();
  const { cities } = useContext(CompanyContext);

  const forthHandler = (cityRoute) => {
    navigate(`/${cityRoute}`);
  };

  return (
    <main className="cities">
      <h2 className="cities__title">Travel around Russia with Russo Trip!</h2>
      <span className="cities__under-title">
        Choose a city and start your journey...
      </span>
      <ul className="cities__list">
        {cities.length > 0 ? (
          cities.map((city) => (
            <li className="cities__list-item" key={city.id}>
              <div className="cities__information-container">
                <img className="cities__img" src={city.imageUrl} alt="Moscow" />
                <h2 className="cities__item-title">{city.title}</h2>
                <p className="cities__paragraph">{city.description}</p>
              </div>
              <div className="cities__buttons-container">
                <span className="cities__information-span">Information</span>
                <Button
                  handler={() => forthHandler(city.route)}
                  buttonType="btn__primary"
                  buttonText="View Tours"
                />
              </div>
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </main>
  );
};

export default Cities;
