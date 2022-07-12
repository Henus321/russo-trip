import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { useNavigate, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { onLogout } from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar.png';

import './header.styles.scss';

const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation(); // later to know active
  const { currentUser } = useContext(UserContext);

  const setNavLinkActive = ({ isActive }) =>
    isActive ? 'header__link-active' : 'header__link';

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
          <li className="header__nav-item">
            <NavLink to={'/'} className={setNavLinkActive}>
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/about" className={setNavLinkActive}>
              About
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/contacts" className={setNavLinkActive}>
              Contacts
            </NavLink>
          </li>
          {currentUser ? (
            <>
              <li className="header__nav-item">
                <NavLink to="/create-pathway" className={setNavLinkActive}>
                  Create Pathway
                </NavLink>
              </li>
              <li className="header__nav-item">
                <span className="header__link">
                  <button
                    type="button"
                    onClick={logout}
                    className="header__link header__logout-btn"
                  >
                    Log Out
                  </button>
                </span>
              </li>
              <li className="header__nav-item header__profile">
                <NavLink to="/profile" className={setNavLinkActive}>
                  <img
                    className="header__link header__avatar"
                    src={
                      currentUser &&
                      (currentUser.photoURL
                        ? currentUser.photoURL
                        : defaultAvatar)
                    }
                    alt="User"
                  />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="header__nav-item">
                <NavLink to="/registration" className={setNavLinkActive}>
                  Registration
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/sign-in" className={setNavLinkActive}>
                  Sign In
                </NavLink>
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
