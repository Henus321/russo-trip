import { useNavigate } from 'react-router-dom';

import './pathway-item.styles.scss';

const PathwayItem = ({ city }) => {
  const { imageUrl, title, route } = city;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="pathway-item">
      <div className="pathway-item__photo">
        <img className="pathway-item__photo-img" src={imageUrl} alt="Pathway" />
      </div>
      <div className="pathway-item__info">
        <div className="pathway-item__text">
          <h3 className="pathway-item__title">{title}</h3>
          <p className="pathway-item__adress">
            г.Москва, Лаврушинский переулок, 10
          </p>
          <p className="pathway-item__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            officiis iste magni fugiat nisi quibusdam voluptatum, cum quaerat
            tenetur quasi facilis distinctio sequi? Quisquam, repellendus cum
            perferendis omnis eligendi laboriosam?
          </p>
        </div>
        <div className="pathway-item__btns-container">
          <button onClick={onNavigateHandler} className="pathway-item__link">
            Information
          </button>
          <button className="btn pathway-item__button">Buy Tour</button>
        </div>
      </div>
    </div>
  );
};

export default PathwayItem;
