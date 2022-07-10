import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import './pathways-item.styles.scss';
import Button from '../button/button.component';

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

  const cityWithCapitalizedFirstLetter =
    params.cityName.charAt(0).toUpperCase() + params.cityName.slice(1);

  return (
    <main className="pathways-item">
      <h2 className="pathways-item__title">{pathwaysItem.name}</h2>
      <span className="pathways-item__under-title">
        {cityWithCapitalizedFirstLetter}
      </span>
      <p className="pathways-item__paragraph">
        <img
          className="pathways-item__img"
          src={pathwaysItem.imgUrls}
          alt={pathwaysItem.name}
          align="right"
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt omnis
        voluptates doloremque nobis cumque tempore assumenda, quasi minima unde
        consequatur voluptatum, tenetur commodi rerum deleniti ex reiciendis
        molestias alias sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Obcaecati quo debitis vel officiis eaque error
        provident quis odit harum est ab veniam dolore, neque saepe libero
        nesciunt doloremque nobis cum. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nemo voluptas possimus, maxime perspiciatis iste
        laboriosam saepe ipsam fuga deserunt. Dolore voluptatum nisi vel, saepe
        praesentium optio tempora deserunt illo eligendi. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nobis quos officia doloremque iste
        doloribus necessitatibus tempora velit esse officiis ipsa vel sunt quam,
        porro quidem deleniti aliquam a quisquam! Quisquam. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Quibusdam eos sint rem fugiat
        asperiores, nobis molestias fuga numquam debitis itaque laborum eum at
        laudantium culpa? Quas consectetur perferendis eos doloremque. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam?
        Debitis tempora sequi repudiandae, itaque perferendis vel iste quae.
        Repellendus asperiores cupiditate in consequuntur fugiat deleniti sunt
        reiciendis voluptas adipisci? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quidem odio praesentium non rerum deleniti facilis
        voluptatibus excepturi soluta, sit, illo corrupti placeat veritatis,
        sint et! Ea dicta ipsam sit vitae.
      </p>
      <div className="pathways-item__buttons-container">
        <Button
          buttonType="btn__primary pathways-item__btn"
          buttonText="&larr;&nbsp;&nbsp;Back to City"
        />
        <Button buttonType="btn__primary" buttonText="Buy Tour" />
      </div>
    </main>
  );
};

export default PathwaysItem;
