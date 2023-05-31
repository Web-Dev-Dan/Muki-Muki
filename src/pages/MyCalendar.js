// Components
import FooterMain from "../components/Footer/Footer-Main";
import Calendar from "react-calendar";

// Styles
import "../styles/MyCalendar.css";

// MyCalendar Page

function MyCalendar() {
  return (
    <div>
      <div className="container calendar-page-container">
        <div className="container__inner">
          {/* <h1>This is the MyCalendar page</h1> */}
          <Calendar />
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default MyCalendar;
