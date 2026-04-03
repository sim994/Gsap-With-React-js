import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CardAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: 1,
          markers: true,
        },
      });
    });
  });

  return (
    <section className="card-section">
      <div className="card">1</div>
      <div className="card">2</div>
      <div className="card">3</div>
      <div className="card">4</div>
      <div className="card">5</div>
    </section>
  );
}
