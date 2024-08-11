import "../Styles/Service.css";
import ServiceImage from "../Images/service-image.png";
import DeliveryImage from "../Images/delivery-image.png";
import QualityImage from "../Images/quality-image.png";

export const ServiceSection = () => {
  return (
    <section id="service-section">
      <div className="service-container">
        <img src={ServiceImage} className="service-section-images" alt="" />
        <span className="span-bold">Service</span>
        <p>Your satisfaction is our priority. Contact us anytime.</p>
      </div>
      <div className="service-container">
        <img src={DeliveryImage} className="service-section-images" alt="" />
        <span className="span-bold">Delivery</span>
        <p>Cash on delivery option is also available.</p>
      </div>
      <div className="service-container">
        <img src={QualityImage} className="service-section-images" alt="" />
        <span className="span-bold">Quality</span>
        <p>We ensure top-notch quality in every item we sell.</p>
      </div>
    </section>
  );
};
