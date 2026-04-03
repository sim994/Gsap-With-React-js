import React, { useRef, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export function SvgEffect() {
  let checkpara = (dets) => {
    const y = dets.clientY;

    gsap.to("svg path", {
      attr: { d: `M 0 200 Q 200 ${y} 990 200` },
      duration: 0.5,
      ease: "power3.out",
    });
  };
  let final = () => {
    gsap.to("svg path", {
      attr: { d: `M 0 200 Q 100 200 990 200` },
      duration: 0.5,
      ease: "elastic.out",
    });
  };

  let cur = (dets) => {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
      duration: 0.2,
      ease: "bounce.out",
    });
  };

  let transform = () => {
    let cur = document.getElementsByClassName("cursor")[0];
    cur.innerHTML = "View More";
    gsap.to(".cursor", {
      scale: 2,
      backgroundColor: "black",
    });
  };

  let defaulttransform = () => {
    let cur = document.getElementsByClassName("cursor")[0];
    cur.innerHTML = "";
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: "white",
    });
  };
  return (
      <div className="page" onMouseMove={cur}>
        <div className="cursor"></div>
        <div
          className="image"
          onMouseEnter={transform}
          onMouseLeave={defaulttransform}
        ></div>
        <svg
          width="1000"
          height="400"
          onMouseMove={checkpara}
          onMouseLeave={final}
        >
          <path
            d="M 0 200 Q 100 200 990 200"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div> 
  );
}
