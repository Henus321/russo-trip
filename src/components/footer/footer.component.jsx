import Button from '../button/button.component';

import { FaVk } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__column">
          <h2 className="footer__title">About</h2>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">FAQ</li>
              <li className="footer__nav-item">Home</li>
              <li className="footer__nav-item">About Us</li>
              <li className="footer__nav-item">Contacts</li>
              <li className="footer__nav-item">Registration</li>
            </ul>
          </nav>
          <div className="footer__logo-container">
            <a
              className="footer__logo"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Henus321"
            >
              <FaGithub />
            </a>
            <a
              className="footer__logo"
              rel="noopener noreferrer"
              target="_blank"
              href="https://vk.com/"
            >
              <FaVk />
            </a>
            <a
              className="footer__logo"
              rel="noopener noreferrer"
              target="_blank"
              href="https://youtube.com/"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer__column footer__column-middle">
          <h2 className="footer__title">Feedback</h2>
          <form className="footer__form" action="">
            <textarea
              className="footer__text-area"
              name=""
              id=""
              cols="30"
              rows="8"
            ></textarea>
            {/* Add handler later */}
            <Button
              buttonType="btn__black-submit"
              buttonText="Submit&nbsp;&rarr; "
            />
          </form>
        </div>
        <div className="footer__column">
          <h2 className="footer__title">Permissions</h2>
          <p className="footer__paragraph">
            The activity is carried out in accordance with the regulations on
            licensing of tour operator and travel agency activities approved by
            the Decree of the Government of the Russian Federation No. 95 dated
            11.02.2022 and Federal Law No. 128-FZ dated 08.08.2001 "On Licensing
            of certain types of activities".
          </p>
        </div>
      </div>
      <div className="footer__hr"></div>
      <div className="footer__row">
        <p className="footer__rights">2022 @ all rights not reserved</p>
        <p className="footer__rights">Developed by Russo Trip</p>
      </div>
    </footer>
  );
};

export default Footer;
