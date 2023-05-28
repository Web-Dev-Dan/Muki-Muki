// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/">
          <img
            className="nav__logo "
            src="./muki-logo.png"
            alt="Muki Muki"
          ></img>
        </Link>
        <h1 className="nav__header">Muki Muki</h1>
        {/* <Link to="/">Home</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/diet">Diet</Link>
        <Link to="/hydration">Hydration</Link>
        <Link to="/well-being">Well-being</Link> */}
      </div>
    </nav>
  );
}

export default Navigation;
