import Footer from "../Footer/Footer";
import Home1 from "../Home1/Home1";
import Home2 from "../Home2/Home2";
import Home3 from "../Home3/Home3";
import Home4 from "../Home4/Home4";
import Home5 from "../Home5/Home5";
import Home6 from "../Home6/Home6";
import Home7 from "../Home7/Home7";
import Home8 from "../Home8/Home8";
import Home9 from "../Home9/Home9";
// @ts-ignore
import ScrollOut from "scroll-out";
import { useEffect } from "preact/hooks";

export function App() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
      <Home9 />
      <Footer />
    </>
  );
}
