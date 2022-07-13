import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

import './pathways.styles.scss';

const Pathways = () => {
  const [pathways, setPathways] = useState(null);
  const [lastFetchedPathways, setlastFetchedPathways] = useState(null);
  const [currentCollectionLength, setCurrentCollectionLength] = useState(0);
  const [fullCollectionLength, setFullCollectionLength] = useState(0);
  const [needPagination, setNeedPagination] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const paginationLimit = 3;

  useEffect(() => {
    const fetchPathways = async () => {
      try {
        const pathwaysRef = collection(db, 'pathways');

        const q = query(
          pathwaysRef,
          where('city', '==', params.cityName),
          orderBy('timestamp', 'desc'),
          limit(paginationLimit)
        );

        const fullSnap = await getDocs(pathwaysRef);

        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setlastFetchedPathways(lastVisible);

        const pathways = [];

        querySnap.forEach((doc) => {
          return pathways.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setPathways(pathways);
        setFullCollectionLength(fullSnap.docs.length);
        setCurrentCollectionLength(pathways.length);
        setNeedPagination(fullCollectionLength > pathways.length);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPathways();
  }, [params.cityName, fullCollectionLength]);

  const onFetchMorePathways = async () => {
    try {
      const pathwaysRef = collection(db, 'pathways');

      const q = query(
        pathwaysRef,
        where('city', '==', params.cityName),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedPathways),
        limit(paginationLimit)
      );

      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setlastFetchedPathways(lastVisible);

      const pathways = [];

      querySnap.forEach((doc) => {
        return pathways.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      const currentPathwayLength = currentCollectionLength + pathways.length;

      setPathways((prevState) => [...prevState, ...pathways]);
      setCurrentCollectionLength(currentCollectionLength + pathways.length);
      setNeedPagination(fullCollectionLength > currentPathwayLength);
    } catch (error) {
      console.log(error.message);
    }
  };

  const backHandler = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const forthHandler = (pathway) => {
    navigate(`/city/${pathway.data.city}/${pathway.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <main className="pathways">
      <h2 className="pathways__title">Choose your pathway</h2>
      <p className="pathways__under-title">
        Wanna be peaceful observer or active pathfinder?
      </p>
      <ul className="pathways__list">
        {pathways &&
          pathways.map((pathway) => (
            <li className="pathways__list-item" key={pathway.id}>
              <img
                className="pathways__img"
                src={pathway.data.imgUrls}
                alt={pathway.data.city}
              />
              <h2 className="pathways__item-title">{pathway.data.name}</h2>
              <p className="pathways__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                adipisci porro cumque officiis a alias eveniet tempora omnis
                molestias tenetur labore, accusantium, ad sequi dicta corrupti!
                Error consectetur magni odit.
              </p>
              <div className="pathways__information-container">
                <span className="pathways__information-span">
                  {/* Change observe on Observing Tour etc */}
                  Extreme Tour
                  {/* {pathway.data.type} */}
                </span>
                <Button
                  handler={() => forthHandler(pathway)}
                  buttonType="btn__primary pathways__btn"
                  buttonText="View Pathway"
                />
              </div>
            </li>
          ))}
      </ul>
      <div className="pathways__buttons-container">
        <Button
          handler={() => backHandler()}
          buttonType="btn__line"
          buttonText="&larr;&nbsp;&nbsp;Back to Home"
        />

        <Button
          handler={() => onFetchMorePathways()}
          buttonType={needPagination ? 'btn__line' : 'btn__line-disabled'}
          buttonText="Show More&nbsp;&nbsp;&rarr;"
          disabled={needPagination ? false : true}
        />
      </div>
    </main>
  );
};

export default Pathways;
