import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation(); // later to know active

  return (
    <header className="header">
      <div className="header__icon-plug">Logo</div>
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
            <span className="header__link">Ava</span>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
