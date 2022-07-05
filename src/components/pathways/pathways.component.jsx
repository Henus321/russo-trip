import { useContext } from 'react';
import { PathwaysContext } from '../../contexts/pathways.context';
import PathwayItem from '../pathway-item/pathway-item.component';

import './pathways.styles.scss';

const Pathways = () => {
  const { pathwaysInfo } = useContext(PathwaysContext);

  const ready = Object.values(pathwaysInfo)[0].length > 0;

  return (
    <div className="pathways">
      <div className="pathways__title-container">
        <h2 className="pathways__title">Pathways</h2>
      </div>
      <div className="pathways__hashtags-container">
        <span className="pathways__span">Filter:</span>
        <ul className="pathways__hastags-list">
          <li className="pathways__hastags-item">#All</li>
          <li className="pathways__hastags-item">#Moscow</li>
          <li className="pathways__hastags-item">#Vladivostok</li>
          <li className="pathways__hastags-item">#Saint-Petersburg</li>
          <li className="pathways__hastags-item">#Mythishi</li>
        </ul>
      </div>

      <div className="pathways__list">
        {ready &&
          pathwaysInfo.moscow.map((path) => (
            <PathwayItem
              key={path.id}
              imageUrl={path.imageUrl}
              name={path.name}
            />
          ))}
      </div>

      <div className="pathways__pagination-btns">
        <button className="btn">PREV</button>
        <button className="btn">NEXT</button>
      </div>
    </div>
  );
};

export default Pathways;
