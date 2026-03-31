import React, { useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollEffects() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(".animation-container h1", {
      x: -1200,
      scrollTrigger: {
        trigger: ".animation-container h1",
        start: "0% 50%",
        end: "0% 50%",
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
