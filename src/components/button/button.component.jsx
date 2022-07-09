import './button.styles.scss';

const Button = ({ handler, buttonType = 'btn__primary', buttonText }) => {
  return (
    <button onClick={handler} className={buttonType}>
      {buttonText}
    </button>
  );
};

export default Button;
