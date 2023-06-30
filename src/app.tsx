import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import IntroSection from "./components/IntroSection/IntroSection";
import SmokesSection from "./components/SmokesSection/SmokesSection";
import TicksSection from "./components/TicksSection/TicksSection";
import MapsSection from "./components/MapsSection/MapsSection";
import InventorySection from "./components/InventorySection/InventorySection";
import VfxSection from "./components/VfxSection/VfxSection";
import ComingSection from "./components/ComingSection/ComingSection";
// @ts-ignore
import ScrollOut from "scroll-out";
import { useEffect } from "preact/hooks";
import AudioSection from "./components/AudioSection/AudioSection";

export function App() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <>
      <Home />
      <IntroSection />
      <SmokesSection />
      <TicksSection />
      <MapsSection />
      <InventorySection />
      <VfxSection />
      <AudioSection />
      <ComingSection />
      <Footer />
    </>
  );
}
