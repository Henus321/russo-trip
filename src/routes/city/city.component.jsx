import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { PathwaysContext } from '../../contexts/pathways.context';

import './city.styles.scss';

const City = () => {
  const { cityName } = useParams();
  const { pathwaysInfo } = useContext(PathwaysContext);
  const [cities, setCities] = useState(pathwaysInfo[cityName]);

  useEffect(() => {
    setCities(pathwaysInfo[cityName]);
  }, [cityName, pathwaysInfo]);

  return (
    <div className="city">
      {/* DASH IN THE NAMES? FIX IT */}
      <h2 className="city__title">{cityName.toUpperCase()} TOURS</h2>
      <div className="city__list">
        {cities &&
          cities.map((city) => (
            <div className="city__item" key={city.id}>
              <img
                className="city__photo-img"
                src={city.imageUrl}
                alt={city.name}
              />
              <span className="city__name">{city.name}</span>
              <p className="city__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis placeat doloremque, quaerat libero molestias aspernatur
                praesentium. Cupiditate consequatur possimus molestiae quidem,
                enim quia alias ipsum optio aut voluptate ea porro?
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default City;
