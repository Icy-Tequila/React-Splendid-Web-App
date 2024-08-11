import "../Styles/Gallery.css";

import AboutImage5 from "../Images/about-image-5.jpg";
import AboutImage6 from "../Images/about-image-6.jpg";
import AboutImage7 from "../Images/about-image-7.jpg";

export const GallerySection = () => {
  return (
    <section id="about-section">
      <div id="about-container">
        <img
          src={AboutImage5}
          id="about-image-5"
          className="about-images"
          alt=""
        />
        <img
          src={AboutImage6}
          id="about-image-6"
          className="about-images"
          alt=""
        />
        <img
          src={AboutImage7}
          id="about-image-7"
          className="about-images"
          alt=""
        />
      </div>
      <div id="about-btnC">
        <button className="about-btn">⟨</button>
        <button className="about-btn">⟩</button>
      </div>
    </section>
  );
};
