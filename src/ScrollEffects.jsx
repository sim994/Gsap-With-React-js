import React, { useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollEffects() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(".animation-container h1", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".animation-container",
        start: "0 0%",
        end: "50% 0%",
        markers: true,
        scrub: 1.5,
        pin: true,
      },
    });
  }, []);
  return (
    <div className="scrollEffect-container">
      <div className="normal-container">
        <h1>Scroll Trigger Animation || GSAP</h1>
      </div>

      <div className="animation-container">
        <h1>Welcome To Gsap ScrollTrigger Animation</h1>{" "}
      </div>
     
    </div>
  );
}
