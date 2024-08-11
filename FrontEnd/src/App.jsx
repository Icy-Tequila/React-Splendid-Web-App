import "./assets/Styles/App.css";
import { HeaderSection } from "./assets/Components/Header";
import { FooterSection } from "./assets/Components/Footer";
import { IntroSection } from "./assets/Pages/IntroSection";

export const App = () => {
  return (
    <main>
      <HeaderSection />

      <IntroSection />
      <FooterSection />
    </main>
  );
};
