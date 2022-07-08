import React from 'react';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__column">
          <h2 className="footer__title">About</h2>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">FAQ</li>
            <li className="footer__nav-item">Home</li>
            <li className="footer__nav-item">About Us</li>
            <li className="footer__nav-item">Contacts</li>
            <li className="footer__nav-item">Registration</li>
          </ul>
          <div className="footer__social-media"></div>
        </div>
        <div className="footer__column">
          <h2 className="footer__title">Feedback</h2>
          <form className="footer__form" action="">
            <textarea
              className="footer__text-area"
              name=""
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <button className="footer__text-area-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="footer__column">
          <h2 className="footer__title">Some Text</h2>
          <p className="footer__paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            voluptates, pariatur, earum id temporibus dolores nostrum maiores
            modi doloremque natus neque cumque, facere possimus aliquid. Nam
            cupiditate animi autem aliquam!
          </p>
        </div>
      </div>
      <div className="footer__hr"></div>
      <div className="footer__row">
        <p className="footer__paragraph footer__rights">Privacy Policy</p>
        <p className="footer__paragraph footer__rights">
          2022 @ all rights not reserved
        </p>
        <p className="footer__paragraph footer__rights">
          Developed by Russo Trip Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
