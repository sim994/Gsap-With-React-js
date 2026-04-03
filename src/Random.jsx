import React, { useRef, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Random() {
  const gsapRef = useRef();
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(ScrollTrigger);


 useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.from(".child", {
      transform: "translateX(120%)",
      scrollTrigger: {
        trigger: gsapRef.current,
        top: "top 0%",
        end: "top -120%",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="page" ref={gsapRef}>
      <div className="child">Wellcome</div>
    </div>
  );
}
