import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollEffects() {
  const gsapRef = useRef();
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();
  useLayoutEffect(() => {
    gsap.to("h1", {
      transform:"translateX(-72%)",
      scrollTrigger:{
        trigger:".xx",
        scrub:true,
        markers:true,
        pin:true,
        top:"top -50%",
        end:"top -90%"
      }
    });
  }, []);  
  return (
    <div className="xx">
      <h1>Wellcome to my portfolio </h1>
    </div>
  );
}
