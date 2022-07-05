import React from 'react';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__column">
          <h2>Some Text</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            voluptates, pariatur, earum id temporibus dolores nostrum maiores
            modi doloremque natus neque cumque, facere possimus aliquid. Nam
            cupiditate animi autem aliquam!
          </p>
        </div>
        <div className="footer__column">
          <h2>Some Text</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            voluptates, pariatur, earum id temporibus dolores nostrum maiores
            modi doloremque natus neque cumque, facere possimus aliquid. Nam
            cupiditate animi autem aliquam!
          </p>
        </div>
      </div>

      <div className="footer__row">
        <p className="footer__rights">@all rights not reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
