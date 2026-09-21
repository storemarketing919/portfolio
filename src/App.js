import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={7}
        outerSize={38}
        color="0, 198, 255"
        outerAlpha={0.55}
        innerScale={1}
        outerScale={1.45}
        clickables={[
          "a",
          "button",
          "input",
          "textarea",
          "select",
          ".cursor-pointer",
        ]}
        innerStyle={{
          backgroundColor: "#dffaff",
          boxShadow: "0 0 10px rgba(0, 198, 255, 0.95)",
        }}
        outerStyle={{
          border: "1px solid rgba(0, 198, 255, 0.9)",
          boxShadow:
            "0 0 12px rgba(0, 198, 255, 0.7), inset 0 0 8px rgba(132, 92, 255, 0.35)",
        }}
      />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
