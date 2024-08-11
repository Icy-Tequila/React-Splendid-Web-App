import "../Styles/Header.css";
import splendidLogo from "../Images/splendid-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const HeaderSection = () => {
  return (
    <header>
      <a href="#home">
        <img src={splendidLogo} id="splendid-logo" alt=""></img>
      </a>
      <div id="nav-bar">
        <a href="#home" className="nav-link">
          <button className="nav-btn">Home</button>
        </a>
        <a href="#products-section" className="nav-link">
          <button className="nav-btn">Products</button>
        </a>
        <a href="#blogs-section" className="nav-link">
          <button className="nav-btn">About</button>
        </a>
        <a href="#contact-section" className="nav-link">
          <button className="nav-btn">Contact</button>
        </a>
      </div>
      <a href="">
        <FontAwesomeIcon icon={faCartShopping} id="cart-btn" />
      </a>
    </header>
  );
};
