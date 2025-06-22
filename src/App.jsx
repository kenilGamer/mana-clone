import React, { useState, useLayoutEffect } from "react";
import Homepage from './components/Homepage'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/page4";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP,Draggable,ScrollTrigger,ScrollSmoother,ScrollToPlugin);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: 0,
        },
        ease: "power2.inOut",
      });
    }
  };

  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      autoResize: true,
      smoothTouch: 0.1,
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        setIsScrolling(self.direction === 1);
      },
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Homepage />
        <Page2/>
        <Page3/>
        <Page4/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
