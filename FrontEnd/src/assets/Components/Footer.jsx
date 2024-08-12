import "../Styles/Footer.css";

export const FooterSection = () => {
  return (
    <div id="footer-div">
      <footer>
        <div id="footer-LC">
          <ul>
            <li>Services</li>
            <li>Company</li>
            <li>Shipping</li>
          </ul>
        </div>
        {/* <img src="images/footer-logo.png" id="footer-logo" alt=""></img> */}
        <h2>S P L E N D I D</h2>
        <div id="footer-RC">
          <ul>
            <li>Policy</li>
            <li>Social</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
