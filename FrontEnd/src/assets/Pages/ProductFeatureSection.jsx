import "../Styles/ProductFeature.css";

import ProductFeature from "../Images/item-feature-image.png";

export const ProductFeatureSection = () => {
  return (
    <section id="item-feature-section">
      <h1 id="item-feature-h1">Oversized</h1>
      <p id="item-feature-p">Splendid Ivory Hoodie</p>
      <img src={ProductFeature} id="item-feature-image" alt="" />

      <div id="item-feature-btnC">
        <button id="item-feature-btn">View size chart</button>
      </div>
    </section>
  );
};
