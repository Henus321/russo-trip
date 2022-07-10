import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase/firebase.utils';

import './pathways.styles.scss';

const Pathways = () => {
  const [pathways, setPathways] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchPathways = async () => {
      try {
        const pathwaysRef = collection(db, 'pathways');

        const q = query(
          pathwaysRef,
          where('city', '==', params.cityName),
          orderBy('timestamp', 'desc')
        );

        const querySnap = await getDocs(q);

        const pathways = [];

        querySnap.forEach((doc) => {
          return pathways.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setPathways(pathways);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPathways();
  }, [params.cityName]);

  return (
    <div className="city">
      <ul className="city__list">
        {pathways &&
          pathways.map((pathway) => (
            <li key={pathway.id}>
              <h2 className="city__title">{pathway.data.city}</h2>
              <Link to={`/city/${pathway.data.city}/${pathway.id}`}>
                <img
                  className="city__img"
                  src={pathway.data.imgUrls}
                  alt={pathway.data.city}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pathways;
