// React Router Dom
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Diet from "./pages/Diet";
import Hydration from "./pages/Hydration";
import WellBeing from "./pages/Well-being";

// Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

let userData = {
  username: "User",
};

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/hydration" element={<Hydration />} />
        <Route path="/well-being" element={<WellBeing />} />
      </Routes>

      <p>{userData.username}</p>
    </div>
  );
}

export default App;
