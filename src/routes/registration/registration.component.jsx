import './registration.styles.scss';

const Registration = () => {
  return (
    <main className="registration">
      <div className="header__icon-plug registration__item"></div>
      <h2 className="registration__title registration__item">
        Registration in Russo Trip
      </h2>
      <div className="registration__container">
        {/* TEMPORARY ICON PLACEHOLDER */}
        <form className="registration__form">
          <label htmlFor="name">Name</label>
          <input
            className="registration__item registration__input"
            type="text"
            id="name"
          />
          <label htmlFor="email">Email adress</label>
          <input
            className="registration__item registration__input"
            type="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="registration__item registration__input"
            type="password"
            id="password"
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
