import { Link } from 'react-router-dom';
import moscowImage from '../../assets/cities/moscow.jpg';
import Button from '../button/button.component';

import './cities.styles.scss';

const Cities = () => {
  return (
    <main className="cities">
      <h2 className="cities__title">Travel around Russia with Russo Trip!</h2>
      <p className="cities__under-title">
        Choose a city and start your journey...
      </p>
      <ul className="cities__list">
        <li className="cities__list-item">
          <Link className="cities__link" to="/city/moscow">
            <img className="cities__img" src={moscowImage} alt="Moscow" />
            <h2 className="cities__item-title">Moscow</h2>
            <p className="cities__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              adipisci porro cumque officiis a alias eveniet tempora omnis
              molestias tenetur labore, accusantium, ad sequi dicta corrupti!
              Error consectetur magni odit.
            </p>
            <span className="cities__information-span">Information</span>
          </Link>
          <Button buttonType="btn__primary cities__btn" buttonText="Buy Tour" />
        </li>
        <li className="cities__list-item">
          <Link className="cities__link" to="/city/moscow">
            <img className="cities__img" src={moscowImage} alt="Moscow" />
            <h2 className="cities__item-title">Moscow</h2>
            <p className="cities__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              adipisci porro cumque officiis a alias eveniet tempora omnis
              molestias tenetur labore, accusantium, ad sequi dicta corrupti!
              Error consectetur magni odit.
            </p>
            <span className="cities__information-span">Information</span>
          </Link>
          <Button buttonType="btn__primary cities__btn" buttonText="Buy Tour" />
        </li>
        <li className="cities__list-item">
          <Link className="cities__link" to="/city/moscow">
            <img className="cities__img" src={moscowImage} alt="Moscow" />
            <h2 className="cities__item-title">Moscow</h2>
            <p className="cities__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              adipisci porro cumque officiis a alias eveniet tempora omnis
              molestias tenetur labore, accusantium, ad sequi dicta corrupti!
              Error consectetur magni odit.
            </p>
            <span className="cities__information-span">Information</span>
          </Link>
          <Button buttonType="btn__primary cities__btn" buttonText="Buy Tour" />
        </li>
        <li className="cities__list-item">
          <Link className="cities__link" to="/city/moscow">
            <img className="cities__img" src={moscowImage} alt="Moscow" />
            <h2 className="cities__item-title">Moscow</h2>
            <p className="cities__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              adipisci porro cumque officiis a alias eveniet tempora omnis
              molestias tenetur labore, accusantium, ad sequi dicta corrupti!
              Error consectetur magni odit.
            </p>
            <span className="cities__information-span">Information</span>
          </Link>
          <Button buttonType="btn__primary cities__btn" buttonText="Buy Tour" />
        </li>
        <li className="cities__list-item">
          <Link className="cities__link" to="/city/moscow">
            <img className="cities__img" src={moscowImage} alt="Moscow" />
            <h2 className="cities__item-title">Moscow</h2>
            <p className="cities__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              adipisci porro cumque officiis a alias eveniet tempora omnis
              molestias tenetur labore, accusantium, ad sequi dicta corrupti!
              Error consectetur magni odit.
            </p>
            <span className="cities__information-span">Information</span>
          </Link>
          <Button buttonType="btn__primary cities__btn" buttonText="Buy Tour" />
        </li>
      </ul>
    </main>
  );
};

export default Cities;
