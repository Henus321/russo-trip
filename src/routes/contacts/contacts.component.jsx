import { useContext, useState } from 'react';
import { CompanyContext } from '../../contexts/company.context';
import { v4 as uuidv4 } from 'uuid';

import Map from '../../components/map/map.component';
import './contacts.styles.scss';
import { useEffect } from 'react';

const Contacts = () => {
  const { contacts } = useContext(CompanyContext);

  const [cityData, setCityData] = useState({});

  useEffect(() => {
    if (contacts.length > 0) setCityData(contacts[0]);
  }, [contacts]);

  console.log(cityData);

  const handleCity = (e) => {
    if (!contacts) return;
    const [city] = contacts.filter((city) => city.name === e.target.value);
    setCityData(city);
  };

  return (
    <main className="contacts">
      <h2 className="contacts__title">Contacts</h2>

      {cityData && contacts.length > 0 && (
        <>
          <div className="contacts__button-container">
            {contacts.map((city) => (
              <button
                className={
                  cityData.name === city.name
                    ? 'contacts__button-active'
                    : 'contacts__button'
                }
                onClick={(e) => handleCity(e)}
                value={city.name}
                key={uuidv4()}
              >
                {city.city}
              </button>
            ))}
          </div>

          <div className="contacts__info">
            <Map geolocation={cityData.geolocation} tourName={cityData.city} />
            <h2>{cityData.city}</h2>

            <span className="contacts__info-title">Address:</span>
            <span className="contacts__info-item">{cityData.address}</span>

            <span className="contacts__info-title">How to Get:</span>
            <span className="contacts__info-item">{cityData.walk}</span>

            <span className="contacts__info-title">
              Customer Service Department
            </span>
            <span className="contacts__info-item">
              {cityData.tel}
              <br />
              {cityData.email}
            </span>
          </div>
        </>
      )}
    </main>
  );
};

export default Contacts;
