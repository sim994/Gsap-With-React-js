import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroPage() {
  const gsapRef = useRef();
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.from(".hero-section .section-heading h1", {
      transform: " translateX(50%)",
      scrollTrigger: {
        trigger: ".section-heading",
        markers: true,
        pin:true,
      },
    }); 
  }, []);
  return (
    <section className="hero-section">
      <section className="section-heading">
        <h1>Experience The Magic Of Flight!</h1>
        {/* <h3>ELEVATE YOUR TRAVALE JOURNEY</h3>
          <button>Book A Trip Now</button> */}
      </section>
    </section>
  );
}
