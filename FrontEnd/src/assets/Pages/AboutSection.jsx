import "../Styles/About.css";

import AboutImage from "../Images/blogs-image.jpg";
import FbIcon from "../Images/fb-icon.png";
import IgIcon from "../Images/ig-icon.png";
import TiktokIcon from "../Images/tiktok-icon.png";

export const AboutSection = () => {
  return (
    <section id="blogs-section">
      <div id="blogs-container">
        <div id="about-RC">
          <div id="about-RC-text">
            <h1>Oversized hoodies are goodies!</h1>
            <p>
              Crafted from soft, breathable fabric, they provide cozy fit that’s
              ideal for longing or making a fashion statement
            </p>
          </div>
          <div id="about-RC-btn">
            <button className="dark-btn">Discover more &nbsp;&nbsp;⟩</button>
            <div id="social-links-container">
              <img src={FbIcon} className="social-links" alt="" />
              <img src={IgIcon} className="social-links" alt="" />
              <img src={TiktokIcon} className="social-links" alt="" />
            </div>
          </div>
        </div>
        <img src={AboutImage} id="blogs-image" alt="" />
      </div>
    </section>
  );
};
