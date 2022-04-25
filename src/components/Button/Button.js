const Button = ({ text, action }) => {
  return (
    <button className="button button--select" onClick={action}>
      {text}
    </button>
  );
};
export default Button;
