import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

import './header.styles.scss';

const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation(); // later to know active

  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="" />
      </div>
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item" onClick={() => navigate('/')}>
            <span className="header__link">Home</span>
          </li>
          <li className="header__nav-item" onClick={() => navigate('/about')}>
            <span className="header__link">About Us</span>
          </li>
          <li
            className="header__nav-item"
            onClick={() => navigate('/contacts')}
          >
            <span className="header__link">Contacts</span>
          </li>
          <li className="header__nav-item" onClick={() => navigate('/sign-in')}>
            <span className="header__link">Sign In</span>
          </li>
          <li className="header__nav-item header__log-in">
            <img className="header__avatar" src={avatar} alt="" />
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
