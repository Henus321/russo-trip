import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CompanyContext } from '../../contexts/company.context';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar.png';

import './header.styles.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { admin } = useContext(CompanyContext);
  // console.log(admin.uid === currentUser.uid);

  const setNavLinkActive = ({ isActive }) =>
    isActive ? 'header__link-active' : 'header__link';

  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="Russo Trip" />
        <span className="header__logo-title">Russo Trip</span>
      </div>

      <nav className="header__nav">
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
              {admin && admin.uid === currentUser.uid && (
                <li className="header__nav-item">
                  <NavLink to="/create-pathway" className={setNavLinkActive}>
                    Create Pathway
                  </NavLink>
                </li>
              )}

              <li className="header__nav-item header__profile">
                <NavLink to="/profile" className={setNavLinkActive}>
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
            </>
          ) : (
            <>
              <li className="header__nav-item">
                <NavLink to="/sign-up" className={setNavLinkActive}>
                  Sign Up
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
