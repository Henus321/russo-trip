import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  createAuthUserWithEmailAndPassword,
  updateAuthProfile,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../../components/button/button.component';
import { ReactComponent as GoogleLogo } from '../../assets/google.svg';

import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('passwords do not match');
      return;
    }

    try {
      await createAuthUserWithEmailAndPassword(email, password);

      updateAuthProfile(displayName);
      resetFormFields();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <main className="sign-up">
      <div className="sign-up__container">
        <h2 className="sign-up__title">Sign Up to Russo Trip</h2>
        <form onSubmit={handleSubmit} className="sign-up__form">
          <label htmlFor="displayName">Name</label>
          <input
            className="sign-up__input"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            id="displayName"
            value={displayName}
          />

          <label htmlFor="email">Email adress</label>
          <input
            className="sign-up__input"
            type="email"
            required
            onChange={handleChange}
            name="email"
            id="email"
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            className="sign-up__input"
            type="password"
            required
            onChange={handleChange}
            id="password"
            name="password"
            value={password}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="sign-up__input"
            type="password"
            required
            onChange={handleChange}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button
            buttonType={'btn__secondary-inverted'}
            buttonText={'Create Account'}
            type="submit"
          />
        </form>
        <span>or</span>
        <button onClick={signInWithGoogle} className="sign-up__google-button">
          <GoogleLogo className="sign-up__google-logo" />
        </button>
        <span className="sign-up__link">
          Already have an account? <Link to="/sign-in">Sign in.</Link>
        </span>
      </div>
    </main>
  );
};

export default SignUp;
