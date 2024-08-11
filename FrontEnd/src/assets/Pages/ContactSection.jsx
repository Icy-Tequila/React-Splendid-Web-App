import "../Styles/Contact.css";

import FbIcon from "../Images/fb-icon.png";
import IgIcon from "../Images/ig-icon.png";
import TiktokIcon from "../Images/tiktok-icon.png";

export const ContactSection = () => {
  return (
    <section id="contact-section">
      <div id="contact-section-LC">
        <h1>Contact us</h1>
        <p id="contact-LC-p">Email: splendidhoodies@gmail.com</p>
        <div id="social-links-container">
          <img src={FbIcon} className="social-links" alt="" />
          <img src={IgIcon} className="social-links" alt="" />
          <img src={TiktokIcon} className="social-links" alt="" />
        </div>
      </div>
      <div id="contact-section-RC">
        <div id="contact-container">
          <h1 id="contact-RC-h1">Get in touch</h1>
          <p id="contact-RC-p">Feel free to drop us a message below!</p>
          <p className="contact-labels">Name</p>
          <input type="text" className="contact-input" />
          <p className="contact-labels">Email</p>
          <input type="text" className="contact-input" />
          <p className="contact-labels">Message</p>
          <input
            type="text"
            className="contact-input"
            id="input-message-container"
          />
        </div>
        <div id="contact-btn">
          <button className="dark-btn">Send message</button>
        </div>
      </div>
    </section>
  );
};
