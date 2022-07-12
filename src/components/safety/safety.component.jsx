import { FaTree } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

import './safety.styles.scss';

const Safety = () => {
  return (
    <div className="safety">
      <div className="safety__bg-content">
        <video className="safety__bg-video" autoPlay muted loop>
          <source
            src="https://storage.coverr.co/videos/EPry5vFxnaOdvtBILZuhYNjHz901oFKvs?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3MDI2NDg4fQ.sfcBRV3UkvD3JeIWCbgNKndtlM5zOfb1XOCXMmRkq-w"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className="safety__main-title">Aditional Information</h2>
      <div className="safety__row">
        <div className="safety__column">
          <div className="safety__card-container">
            <FaTree className="safety__icon" />
            <h2 className="safety__title">Forest</h2>
            <p className="safety__paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              vero? Distinctio, suscipit cum repellendus nam, reprehenderit
              quisquam libero alias ratione dolore cupiditate blanditiis.
            </p>
          </div>
        </div>

        <div className="safety__column">
          <div className="safety__card-container">
            <FaHeart className="safety__icon" />
            <h2 className="safety__title">Heart</h2>
            <p className="safety__paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              vero? Distinctio, suscipit cum repellendus nam, reprehenderit
              quisquam libero alias ratione dolore cupiditate blanditiis.
            </p>
          </div>
        </div>

        <div className="safety__column">
          <div className="safety__card-container">
            <FaSun className="safety__icon" />
            <h2 className="safety__title">Sun</h2>
            <p className="safety__paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              vero? Distinctio, suscipit cum repellendus nam, reprehenderit
              quisquam libero alias ratione dolore cupiditate blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
