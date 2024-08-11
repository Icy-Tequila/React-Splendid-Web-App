import "../Styles/Intro.css";
import IntroText from "../Images/intro-text.png";
import IntroImage from "../Images/intro-image.png";

export const IntroSection = () => {
  return (
    <section id="intro-section">
      <div id="intro-bg">
        <div id="intro-LC">
          <img src={IntroText} id="intro-text" alt="" />
          <button id="intro-btn">Shop now &nbsp;&nbsp;⟩</button>
        </div>
        <img src={IntroImage} id="intro-image" alt="" />
      </div>
    </section>
  );
};
