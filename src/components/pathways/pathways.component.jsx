import './pathways.styles.scss';

const Pathways = () => {
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
        <div className="pathways__item">
          <div className="pathways__item-photo"></div>
          <div className="pathways__item-info">
            <div className="pathways__item-text">
              <h3>Moscow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="pathways__item-button">click!</button>
          </div>
        </div>
        <div className="pathways__item">
          <div className="pathways__item-photo"></div>
          <div className="pathways__item-info">
            <div className="pathways__item-text">
              <h3>Moscow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="pathways__item-button">click!</button>
          </div>
        </div>
        <div className="pathways__item">
          <div className="pathways__item-photo"></div>
          <div className="pathways__item-info">
            <div className="pathways__item-text">
              <h3>Moscow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="pathways__item-button">click!</button>
          </div>
        </div>
        <div className="pathways__item">
          <div className="pathways__item-photo"></div>
          <div className="pathways__item-info">
            <div className="pathways__item-text">
              <h3>Moscow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="pathways__item-button">click!</button>
          </div>
        </div>
        <div className="pathways__item">
          <div className="pathways__item-photo"></div>
          <div className="pathways__item-info">
            <div className="pathways__item-text">
              <h3>Moscow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="pathways__item-button">click!</button>
          </div>
        </div>
        <div className="pathways__item">
          <div className="pathways__item-photo"></div>
          <div className="pathways__item-info">
            <div className="pathways__item-text">
              <h3>Moscow</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="pathways__item-button">click!</button>
          </div>
        </div>
      </div>

      <div className="pathways__pagination-btns">
        <button className="btn">PREV</button>
        <button className="btn">NEXT</button>
      </div>
    </div>
  );
};

export default Pathways;
