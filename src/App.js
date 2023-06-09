// useState
import { useState } from "react";
import Calendar from "react-calendar";

// React Router Dom
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Diet from "./pages/Diet";
import Hydration from "./pages/Hydration";
import WellBeing from "./pages/Well-being";
import MyCalendar from "./pages/MyCalendar";

// Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  // User Data
  const [userData, setUserData] = useState({
    username: "User",
    trainer: "Trainer",
  });

  // Update All User Data
  function updateAll() {
    console.log("Updated all");
    setUserData({ ...userData });
  }

  const [test, setTest] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setTest(e.target.value);
  }

  function changeUsername(e) {
    e.preventDefault();
    console.log(`Changed username to '${test}'.`);
    userData.username = test;
    updateAll();
  }

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home authed={true} />} />
        <Route path="/fitness" element={<Fitness authed={true} />} />
        <Route path="/diet" element={<Diet authed={true} />} />
        <Route path="/hydration" element={<Hydration authed={true} />} />
        <Route path="/well-being" element={<WellBeing authed={true} />} />
        <Route path="/my-calendar" element={<MyCalendar authed={true} />} />
      </Routes>

      {/* <form>
        <input
          value={test}
          placeholder="Enter name..."
          onChange={handleChange}
        ></input>
        <button onClick={(e) => changeUsername(e)}>Submit</button>
      </form>

      <h1>{test}</h1>
      <h1>{userData.username}</h1>

      <div className="calendar-container">
        <Calendar />
      </div> */}
    </div>
  );
}

export default App;
