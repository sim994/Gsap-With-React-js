import React, { useRef, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function App() {
  const gsapRef = useRef();
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(ScrollTrigger);

  // gsap utils for random number ganerate

  // const x = gsap.utils.random(-200, 200, 10);
  // const y = gsap.utils.random(-300, 300, 10);
  // const rotate = gsap.utils.random(0, 360);
  // const border = gsap.utils.random(0, 100);

  // onclick based animation usesing cotextSafe

  // const animated = contextSafe(() => {
  //   gsap.to(".child", {
  //     x:200,
  //     repeat:-1,
  //     rotate: 360,
  //     borderRadius: 100,
  //     duration: 1,
  //     scale:1.3,
  //     yoyo:true,
  //   });
  // });

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(".child", {
  //     transform: "translateX(120%)",
  //     scrollTrigger: {
  //       trigger: gsapRef.current,
  //       top: "top 0%",
  //       end: "top -120%",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });
  // }, []);

  // let checkpara = (dets) => {
  //   const y = dets.clientY;

  //   gsap.to("svg path", {
  //     attr: { d: `M 0 200 Q 200 ${y} 990 200` },
  //     duration: 0.5,
  //     ease: "power3.out",
  //   });
  // };
  // let final = () => {
  //   gsap.to("svg path", {
  //     attr: { d: `M 0 200 Q 100 200 990 200` },
  //     duration: 0.5,
  //     ease: "elastic.out",
  //   });
  // };

  // let cur = (dets) => {
  //   gsap.to(".cursor", {
  //     x: dets.x,
  //     y: dets.y,
  //     duration: 0.2,
  //     ease: "bounce.out",
  //   });
  // };

  // let transform = () => {
  //     let cur = document.getElementsByClassName("cursor")[0];
  //     cur.innerHTML = "View More"
  //     gsap.to(".cursor", {
  //       scale: 2,
  //       backgroundColor: "black",
  //     });
  //   };

  //   let defaulttransform = () => {
  //   let cur = document.getElementsByClassName("cursor")[0];
  //   cur.innerHTML = ""
  //   gsap.to(".cursor", {
  //     scale: 1,
  //     backgroundColor: "white",
  //   });
  // };

  // let animated = () => {
  //   let h1 = document.getElementsByTagName("h1")[0];

  //   let getetxt = h1.textContent;

  //   let txtlen = getetxt.length / 2;

  //   let splittxt = getetxt.split("");

  //   let count = "";

  //   splittxt.forEach((ele, index) => {
  //     if (txtlen > index) {
  //       count += `<span class='left'>${ele}</span>`;
  //     } else {
  //       count += `<span class='right'>${ele}</span>`;
  //     }
  //   });

  //   h1.innerHTML = count;
  // };

  // useLayoutEffect(() => {
  //   animated();
  //   gsap.from(
  //     "h1 .left",
  //     {
  //       y: 30,
  //       opacity: 0,
  //       duration: 0.3,
  //       delay: 0.4,
  //       stagger: 0.3,
  //     },
  //     [],
  //   );
  //   gsap.from(
  //     "h1 .right",
  //     {
  //       y: 30,
  //       opacity: 0,
  //       duration: 0.3,
  //       delay: 0.4,
  //       stagger: -0.3,
  //     },
  //     [],
  //   );
  // }, []);

  return (
    <div className="parent">
      <h1>Hiren Prajapati</h1>

      {/* <div className="page" onMouseMove={cur}>
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
      </div> */}
      {/* <div className="page" ref={gsapRef}>
        <div className="child">Wellcome</div>
      </div> */}
      {/* <div className="page">
          
      </div> */}
    </div>
  );
}
