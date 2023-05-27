// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./Footer.css";

// Components
import Button from "../Button/Button";

function Footer({ page }) {
  return (
    <footer className="page-footer container">
      <div className="container__inner">
        <div className="page-footer__button-container">
          <Link to="/fitness" className="link">
            <Button
              page={page}
              direction="col"
              icon="fa-dumbbell"
              text="Fitness"
            />
          </Link>
          <Link to="/diet" className="link">
            <Button
              page={page}
              direction="col"
              icon="fa-apple-whole"
              text="Diet"
            />
          </Link>
          <Link to="/hydration" className="link">
            <Button
              page={page}
              direction="col"
              icon="fa-glass-water"
              text="Hydration"
            />
          </Link>
          <Link to="/well-being" className="link">
            <Button
              page={page}
              direction="col"
              icon="fa-face-smile"
              text="Well-being"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
