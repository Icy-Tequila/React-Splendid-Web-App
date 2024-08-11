import "./assets/Styles/App.css";
import { HeaderSection } from "./assets/Components/Header";
import { FooterSection } from "./assets/Components/Footer";
import { IntroSection } from "./assets/Pages/IntroSection";
import { ServiceSection } from "./assets/Pages/ServiceSection";
import { GallerySection } from "./assets/Pages/GallerySection";
import { ProductSection } from "./assets/Pages/ProductSection";
import { AboutSection } from "./assets/Pages/AboutSection";
import { ProductFeatureSection } from "./assets/Pages/ProductFeatureSection";
import { ContactSection } from "./assets/Pages/ContactSection";

export const App = () => {
  return (
    <main id="home">
      <HeaderSection />

      <IntroSection />
      <ServiceSection />
      <GallerySection />
      <ProductSection />
      <AboutSection />
      <ProductFeatureSection />
      <ContactSection />

      <FooterSection />
    </main>
  );
};
