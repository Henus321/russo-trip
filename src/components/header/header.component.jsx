import { Outlet } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__icon-plug">Logo</div>
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__link" href="/">
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__link" href="/">
              About Us
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__link" href="/">
              Trips
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__link" href="/">
              Contacts
            </a>
          </li>
          <li className="header__nav-item header__log-in">
            <a className="header__link" href="/">
              Ava
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
