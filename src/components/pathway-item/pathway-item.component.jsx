import './pathway-item.styles.scss';

const PathwayItem = ({ imageUrl, name }) => {
  return (
    <div className="pathway-item">
      <div className="pathway-item__photo">
        <img className="pathway-item__photo-img" src={imageUrl} alt="Pathway" />
      </div>
      <div className="pathway-item__info">
        <div className="pathway-item__text">
          <h3>{name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button className="pathway-item__button">click!</button>
      </div>
    </div>
  );
};

export default PathwayItem;
