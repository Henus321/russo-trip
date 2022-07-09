import './safety.styles.scss';
import Button from '../button/button.component';

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
          <div className="safety__text-container">
            <h2 className="safety__title">Some text</h2>
            <p className="safety__paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              vero? Distinctio, suscipit cum repellendus nam, reprehenderit
              quisquam libero alias ratione dolore cupiditate blanditiis.
            </p>
          </div>
          {/* add handler later */}
          <Button buttonType="btn__secondary" buttonText="Button" />
        </div>

        <div className="safety__column">
          <div className="safety__text-container">
            <h2 className="safety__title">Some text</h2>
            <p className="safety__paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              vero? Distinctio, suscipit cum repellendus nam, reprehenderit
              quisquam libero alias ratione dolore cupiditate blanditiis. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eos
              voluptatibus nisi fugiat delectus et suscipit, vero ducimus fuga,
              ullam quidem dicta, maiores omnis cum ipsa cumque illo. Neque,
              vel.
            </p>
          </div>
          {/* add handler later */}
          <Button buttonType="btn__secondary" buttonText="Button" />
        </div>

        <div className="safety__column">
          <div className="safety__text-container">
            <h2 className="safety__title">Some text</h2>
            <p className="safety__paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              vero? Distinctio, suscipit cum repellendus nam, reprehenderit
              quisquam libero alias ratione dolore cupiditate blanditiis.
            </p>
          </div>
          {/* add handler later */}
          <Button buttonType="btn__secondary" buttonText="Button" />
        </div>
      </div>
    </div>
  );
};

export default Safety;
