import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CompanyContext } from '../../contexts/company.context';
import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar.png';

import './header.styles.scss';

const Header = () => {
  const [checked, setChecked] = useState(false);

  const { currentUser } = useContext(UserContext);
  const { admin } = useContext(CompanyContext);

  const setNavLinkActive = ({ isActive }) =>
    isActive ? 'header__link-active' : 'header__link';

  const onCheckboxChange = () => {
    setChecked(!checked);
    window.scrollTo(0, 0);
  };

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

      <input
        className="header__checkbox"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="header__checkbox-label" htmlFor="checkbox"></label>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to={'/'}
              className={setNavLinkActive}
              onClick={() => onCheckboxChange()}
            >
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/about"
              className={setNavLinkActive}
              onClick={() => onCheckboxChange()}
            >
              About
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/contacts"
              className={setNavLinkActive}
              onClick={() => onCheckboxChange()}
            >
              Contacts
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/team"
              className={setNavLinkActive}
              onClick={() => onCheckboxChange()}
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
                    onClick={() => onCheckboxChange()}
                  >
                    Create Pathway
                  </NavLink>
                </li>
              )}

              <li className="header__nav-item header__profile-desktop">
                <NavLink
                  to="/profile"
                  className={setNavLinkActive}
                  onClick={() => onCheckboxChange()}
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
                  onClick={() => onCheckboxChange()}
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
                  onClick={() => onCheckboxChange()}
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  to="/sign-in"
                  className={setNavLinkActive}
                  onClick={() => onCheckboxChange()}
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
