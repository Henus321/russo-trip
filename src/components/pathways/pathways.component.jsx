import './pathways.styles.scss';

const Pathways = () => {
  return (
    <div className="pathways">
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
        <div className="temp-item">Item 1</div>
        <div className="temp-item">Item 2</div>
        <div className="temp-item">Item 3</div>
        <div className="temp-item">Item 4</div>
        <div className="temp-item">Item 5</div>
        <div className="temp-item">Item 6</div>
      </div>

      <div className="pathways__pagination-btns">
        <button className="btn">PREV</button>
        <button className="btn">NEXT</button>
      </div>
    </div>
  );
};

export default Pathways;
