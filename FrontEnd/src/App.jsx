import "./assets/Styles/App.css";
import { HeaderSection } from "./assets/Components/Header";
import { FooterSection } from "./assets/Components/Footer";
import { IntroSection } from "./assets/Pages/IntroSection";
import { ServiceSection } from "./assets/Pages/ServiceSection";
import { GallerySection } from "./assets/Pages/GallerySection";

export const App = () => {
  return (
    <main>
      <HeaderSection />

      <IntroSection />
      <ServiceSection />
      <GallerySection />

      <FooterSection />
    </main>
  );
};
