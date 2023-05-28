// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./TextMedia.css";

function TextMedia({ link, title, text, button, icon }) {
  return (
    <div className="text-media">
      <div class="text-media--left">
        <div class="text-media__icon-container">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#a)">
              <path
                fill="#ed7d31"
                d="M751.5 633.5Q654 767 501.5 764T208 630.5Q67 500 177 315.5T505.5 121q218.5-10 281 184.5t-35 328Z"
              />
            </g>
          </svg>
          {icon && <i className={`text-media__icon ${icon}`}></i>}
        </div>
      </div>
      <div class="text-media--right">
        {title && <h2 className="text-media__title">{title}</h2>}
        {text && <p className="text-media__text">{text}</p>}
        {link && (
          <Link to={`/${link && link}`}>
            <a href="" className="text-media__button">
              {button ? button : "Open"}
            </a>
          </Link>
        )}
      </div>
      {/* <div className="text-media--left">
        <i className="text-media__icon fa-regular fa-calendar-days"></i>
      </div>
      <div className="text-media--right">
        <h2 className="text-media__title">My Calendar</h2>
        <p className="text-media__text">
          Check your daily achievements and adjust your schedule.
        </p>
        <a href="" className="text-media__button">
          Open Calendar
        </a>
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M751.5 633.5Q654 767 501.5 764T208 630.5Q67 500 177 315.5T505.5 121q218.5-10 281 184.5t-35 328Z"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#a)">
            <path
              fill="#444cf7"
              d="M751.5 633.5Q654 767 501.5 764T208 630.5Q67 500 177 315.5T505.5 121q218.5-10 281 184.5t-35 328Z"
            />
          </g>
        </svg>
      </div> */}
    </div>
  );
}

export default TextMedia;
