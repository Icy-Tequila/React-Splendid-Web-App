import "../Styles/Header.css";
import splendidLogo from "../Images/splendid-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

export const HeaderSection = () => {
  return (
    <header>
      <a href="#home">
        <img src={splendidLogo} id="splendid-logo" alt=""></img>
      </a>
      <div id="nav-bar">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#products-section" className="nav-link">
          Products
        </a>
        <a href="#blogs-section" className="nav-link">
          About
        </a>
        <a href="#contact-section" className="nav-link">
          Contact
        </a>
      </div>
      <a href="">
        <FontAwesomeIcon icon={faCartShopping} id="cart-btn" />
      </a>
      <FontAwesomeIcon icon={faBars} id="menu-btn" />
    </header>
  );
};
