import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import logo from '../../assets/logo.png';
import { ReactComponent as GoogleLogo } from '../../assets/google.svg';

import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
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
    <main className="signIn">
      {/* TEMPORARY LOGO */}
      <div className="header__logo-container registration__item">
        <img className="header__logo" src={logo} alt="" />
      </div>
      <h2 className="signIn__title signIn__item">Sign in to Russo Trip</h2>
      <div className="signIn__container">
        <form onSubmit={handleSubmit} className="signIn__form">
          <label htmlFor="email">Email adress</label>
          <input
            className="signIn__item signIn__input"
            type="email"
            required
            onChange={handleChange}
            name="email"
            id="email"
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            className="signIn__item signIn__input"
            type="password"
            required
            onChange={handleChange}
            name="password"
            id="password"
            value={password}
          />
          <button type="submit" className="signIn__item signIn__button">
            Sign in
          </button>
        </form>
        <span>or</span>
        <button onClick={signInWithGoogle} className="signIn__google-button">
          <GoogleLogo className="signIn__google-logo" />
        </button>
        <span className="signIn__registration-link">
          {/* TEMPORARY ANCHOR */}
          New to Russo Trip? <a href="/registration">Create an account.</a>
        </span>
      </div>
    </main>
  );
};

export default SignIn;
