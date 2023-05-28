// Components
import FooterMain from "../components/Footer/Footer-Main";

// Home Page
import Button from "../components/Button/Button";
import TextMedia from "../components/TextMedia/TextMedia";

function Home() {
  return (
    <div>
      <div className="home-container container">
        <div className="container__inner">
          <TextMedia
            link="my-calendar"
            title="My Calendar"
            text="Check your daily achievements and adjust your schedule."
            button="Open Calendar"
            icon="fa-regular fa-calendar-days"
          />
          <TextMedia
            link="fitness"
            title="Fitness"
            text="Check your fitness."
            button="Open Fitness"
            icon="fa-solid fa-dumbbell"
          />
          <TextMedia
            link="diet"
            title="Diet"
            text="Check your diet."
            button="Open Diet"
            icon="fa-solid fa-apple-whole"
          />
          <TextMedia
            link="hydration"
            title="Hydration"
            text="Check your hydration levels."
            button="Open Hydration"
            icon="fa-solid fa-glass-water"
          />
          <TextMedia
            link="well-being"
            title="Well-being"
            text="Check your well-being."
            button="Open Well-Being"
            icon="fa-solid fa-face-smile"
          />
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default Home;
