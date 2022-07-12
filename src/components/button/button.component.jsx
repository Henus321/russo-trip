import './button.styles.scss';

const Button = ({
  handler,
  buttonType = 'btn__primary',
  buttonText,
  disabled = false,
}) => {
  return (
    <button onClick={handler} className={buttonType} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;
