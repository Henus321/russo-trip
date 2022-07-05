import './sign-in.styles.scss';

const SignIn = () => {
  return (
    <main className="signIn">
      <div className="header__icon-plug signIn__item"></div>
      <h2 className="signIn__title signIn__item">Sign in to Russo Trip</h2>
      <div className="signIn__container">
        {/* TEMPORARY ICON PLACEHOLDER */}
        <form className="signIn__form">
          <label htmlFor="email">Email adress</label>
          <input
            className="signIn__item signIn__input"
            type="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="signIn__item signIn__input"
            type="password"
            id="password"
          />
          <button className="signIn__item signIn__button" type="submit">
            Sign in
          </button>
        </form>
        <span>or</span>
        <div className="header__icon-plug signIn__item"></div>
        <span className="signIn__registration-link">
          {/* TEMPORARY ANCHOR */}
          New to Russo Trip? <a href="/registration">Create an account.</a>
        </span>
      </div>
    </main>
  );
};

export default SignIn;
