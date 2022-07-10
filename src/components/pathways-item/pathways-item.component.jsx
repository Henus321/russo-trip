import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import './pathways-item.styles.scss';

const PathwaysItem = () => {
  const [pathwaysItem, setPathwaysItem] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'pathways', params.pathwayId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPathwaysItem(docSnap.data());
      }
    };

    fetchListing();
  }, [navigate, params.pathwayId]);

  if (!pathwaysItem) return;

  return (
    <main className="pathways-item">
      <h2 className="pathways-item__title">{params.cityName}</h2>
      <span>{pathwaysItem.name}</span>
      <img
        className="pathways-item__img"
        src={pathwaysItem.imgUrls}
        alt={pathwaysItem.name}
      />
    </main>
  );
};

export default PathwaysItem;
