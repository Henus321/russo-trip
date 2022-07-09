import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { onLogout } from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar.png';

import './header.styles.scss';

const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation(); // later to know active
  const { currentUser } = useContext(UserContext);

  // TEMPORARY
  const logout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="" />
        <span className="header__logo-title">Russo Trip</span>
      </div>
      {/* <div>
     
        <span>{currentUser && currentUser.email}</span>
      </div> */}
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
          {currentUser ? (
            <>
              <li
                className="header__nav-item"
                onClick={() => navigate('/create-pathway')}
              >
                <span>Create Pathway</span>
              </li>
              <li className="header__nav-item">
                <span className="header__link">
                  <button
                    type="button"
                    onClick={logout}
                    className="header__logout-btn"
                  >
                    Log Out
                  </button>
                </span>
              </li>
              <li className="header__nav-item header__log-in">
                <img
                  className="header__avatar"
                  src={
                    currentUser &&
                    (currentUser.photoURL
                      ? currentUser.photoURL
                      : defaultAvatar)
                  }
                  alt="User"
                />
              </li>
            </>
          ) : (
            <>
              <li
                className="header__nav-item"
                onClick={() => navigate('/registration')}
              >
                <span className="header__link">Registration</span>
              </li>
              <li
                className="header__nav-item"
                onClick={() => navigate('/sign-in')}
              >
                <span className="header__link">Sign In</span>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
