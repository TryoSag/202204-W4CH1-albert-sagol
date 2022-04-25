const Button = ({ text, action }) => {
  <button className="button button--select" onClick={action}>
    {text}
  </button>;
};
export default Button;
