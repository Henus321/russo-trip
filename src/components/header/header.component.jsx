import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CompanyContext } from '../../contexts/company.context';
import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar.png';

import './header.styles.scss';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const { currentUser } = useContext(UserContext);
  const { admin } = useContext(CompanyContext);

  const setNavLinkActive = ({ isActive }) =>
    isActive ? 'header__link-active' : 'header__link';

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__logo-img">
          <img className="header__logo" src={logo} alt="Russo Trip" />
        </Link>
        <Link to="/" className="header__logo-title">
          <span>Russo Trip</span>
        </Link>
      </div>
      <div
        className="header__burger"
        onClick={() => {
          menuActive ? setMenuActive(false) : setMenuActive(true);
        }}
      ></div>
      <nav className={menuActive ? 'header__nav-active' : 'header__nav'}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to={'/'}
              className={setNavLinkActive}
              onClick={() => setMenuActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/about"
              className={setNavLinkActive}
              onClick={() => setMenuActive(false)}
            >
              About
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/contacts"
              className={setNavLinkActive}
              onClick={() => setMenuActive(false)}
            >
              Contacts
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/team"
              className={setNavLinkActive}
              onClick={() => setMenuActive(false)}
            >
              Team
            </NavLink>
          </li>
          {currentUser ? (
            <>
              {admin && admin.uid === currentUser.uid && (
                <li className="header__nav-item">
                  <NavLink
                    to="/create-pathway"
                    className={setNavLinkActive}
                    onClick={() => setMenuActive(false)}
                  >
                    Create Pathway
                  </NavLink>
                </li>
              )}

              <li className="header__nav-item header__profile-desktop">
                <NavLink
                  to="/profile"
                  className={setNavLinkActive}
                  onClick={() => setMenuActive(false)}
                >
                  <img
                    className="header__link header__avatar"
                    src={
                      currentUser.photoURL
                        ? currentUser.photoURL
                        : defaultAvatar
                    }
                    alt="User"
                  />
                </NavLink>
              </li>
              <li className="header__nav-item header__profile-mobile">
                <NavLink
                  to="/profile"
                  className={setNavLinkActive}
                  onClick={() => setMenuActive(false)}
                >
                  Profile
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="header__nav-item">
                <NavLink
                  to="/sign-up"
                  className={setNavLinkActive}
                  onClick={() => setMenuActive(false)}
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  to="/sign-in"
                  className={setNavLinkActive}
                  onClick={() => setMenuActive(false)}
                >
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
