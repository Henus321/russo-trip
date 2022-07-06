import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import './registration.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <main className="registration">
      {/* TEMPORARY LOGO */}
      <div className="header__logo-container registration__item">
        <img className="header__logo" src={logo} alt="" />
      </div>
      <h2 className="registration__title registration__item">
        Registration in Russo Trip
      </h2>
      <div className="registration__container">
        <form onSubmit={handleSubmit} className="registration__form">
          <label htmlFor="name">Name</label>
          <input
            className="registration__item registration__input"
            type="text"
            required
            value={displayName}
            onChange={handleChange}
            name="displayName"
            id="name"
          />
          <label htmlFor="email">Email adress</label>
          <input
            className="registration__item registration__input"
            type="email"
            required
            onChange={handleChange}
            name="email"
            id="email"
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            className="registration__item registration__input"
            type="password"
            required
            onChange={handleChange}
            id="password"
            name="password"
            value={password}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="registration__item registration__input"
            type="password"
            required
            onChange={handleChange}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
          />
          <button
            className="registration__item registration__button"
            type="submit"
          >
            Create account
          </button>
        </form>
        <span className="registration__sign-in-link">
          {/* TEMPORARY ANCHOR */}
          Already have an account? <a href="/sign-in">Sign in.</a>
        </span>
      </div>
    </main>
  );
};

export default Registration;
