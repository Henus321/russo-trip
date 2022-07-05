import './safety.styles.scss';

import React from 'react';

const Safety = () => {
  return (
    <div className="safety">
      <h2 className="safety__main-title">Some Title</h2>
      <div className="safety__row">
        <div className="safety__column">
          <h2 className="safety__title">Some text about safety</h2>
          <p className="safety__paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            vero? Distinctio, suscipit cum repellendus nam, reprehenderit
            quisquam libero alias ratione dolore cupiditate blanditiis.
          </p>
        </div>

        <div className="safety__column">
          <h2 className="safety__title">Mb some pictures</h2>
          <p className="safety__paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            vero? Distinctio, suscipit cum repellendus nam, reprehenderit
            quisquam libero alias ratione dolore cupiditate blanditiis ullam,
            recusandae delectus maxime voluptatum eaque provident. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, saepe
            dolorum.
          </p>
        </div>

        <div className="safety__column">
          <h2 className="safety__title">CTA to buy safe-stuff</h2>
          <p className="safety__paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            vero? Distinctio, suscipit cum <strong>repellendus nam</strong>,
            reprehenderit quisquam libero alias ratione dolore cupiditate
            blanditiis ullam, recusandae delectus maxime voluptatum eaque
            provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
