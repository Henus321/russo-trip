import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './registration.styles.scss';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

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
      await createAuthUserWithEmailAndPassword(email, password);
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
    <main className="registration">
      {/* TEMPORARY LOGO */}
      <div className="registration__container">
        <h2 className="registration__title registration__item">Registration</h2>
        <form onSubmit={handleSubmit} className="registration__form">
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
