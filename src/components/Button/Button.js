// Styles
import "./Button.css";

function Button({ page, direction, icon, text }) {
  return (
    <button
      className={`button ${direction === "col" && "button--col"} ${
        text && page === text.toLowerCase() ? "button--current" : ""
      }`}
    >
      {icon && <i className={`button__icon fa-solid ${icon}`}></i>}
      {text && <p className="button__text">{text}</p>}
    </button>
  );
}

export default Button;
