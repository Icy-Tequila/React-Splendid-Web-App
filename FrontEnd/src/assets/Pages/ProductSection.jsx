import "../Styles/Products.css";

import ProductsImage1 from "../Images/arrivals-image-1.png";
import ProductsImage2 from "../Images/arrivals-image-2.png";
import ProductsImage3 from "../Images/arrivals-image-3.png";
import ProductsImage4 from "../Images/arrivals-image-4.png";

export const ProductSection = () => {
  return (
    <section id="products-section">
      <div id="products-h1">
        <h1>New products</h1>
      </div>
      <div id="products-btn">
        <button>
          <span className="span-underlined">View products</span>{" "}
          &nbsp;&nbsp;&nbsp;⟩
        </button>
      </div>
      <div id="products-container">
        <div className="item-container">
          <img src={ProductsImage1} className="products-images" alt="" />
          <h3>Splendid Ivory</h3>
          <p className="item-name">Oversized hoodie</p>
          <p>PHP 850.00</p>
        </div>
        <div className="item-container">
          <img src={ProductsImage2} className="products-images" alt="" />
          <h3>Splendid Ivory</h3>
          <p className="item-name">Oversized hoodie</p>
          <p>PHP 850.00</p>
        </div>
        <div className="item-container">
          <img src={ProductsImage3} className="products-images" alt="" />
          <h3>Splendid Ivory</h3>
          <p className="item-name">Oversized hoodie</p>
          <p>PHP 850.00</p>
        </div>
        <div className="item-container">
          <img src={ProductsImage4} className="products-images" alt="" />
          <h3>Splendid Ivory</h3>
          <p className="item-name">Oversized hoodie</p>
          <p>PHP 850.00</p>
        </div>
      </div>
    </section>
  );
};
