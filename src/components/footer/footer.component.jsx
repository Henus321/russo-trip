import { useState, useContext } from 'react';
import { CompanyContext } from '../../contexts/company.context';
import { Link } from 'react-router-dom';

import { FaVk } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
  const [message, setMessage] = useState('');

  const { contacts } = useContext(CompanyContext);

  const onChange = (e) => setMessage(e.target.value);

  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__column">
          <h2 className="footer__title">Menu</h2>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link to={'/'} className="footer__link">
                  Home
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/about'} className="footer__link">
                  About
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/contacts'} className="footer__link">
                  Contacts
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/team'} className="footer__link">
                  Team
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/profile'} className="footer__link">
                  Profile
                </Link>
              </li>
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
        <div className="footer__column">
          <h2 className="footer__title">Feedback</h2>
          <form className="footer__form" action="">
            <textarea
              className="footer__text-area"
              name="message"
              id="message"
              value={message}
              onChange={onChange}
              cols="20"
              rows="6"
            ></textarea>
            <a
              className="footer__feedback-submit"
              href={`mailto:${contacts.email}?Subject=Russo Trip Feedback&body=${message}`}
            >
              Submit&nbsp;&rarr;
            </a>
          </form>
        </div>
        <div className="footer__column">
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
        <p className="footer__rights">2022 &#169; all rights not reserved</p>
        <p className="footer__rights">Developed by {contacts.admin}</p>
      </div>
    </footer>
  );
};

export default Footer;
