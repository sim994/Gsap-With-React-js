import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CardAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline()

  gsap.utils.toArray(".card").forEach((card) => {
    tl.to(card,{
      scale: .5,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: "20% 50%",
        end: "top 30%",
        scrub: 1,
        markers: true,
      }
    })
  })
  return (
    <section className="card-section">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
    </section>
  )
}

