import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Practise() {
  // useRef Practise
  // const boxref = useRef();
  // useGSAP(()=>{
  //   gsap.to(boxref.current,{
  //     x:800,
  //     duration:2,
  //     delay:1,
  //     rotate:360,
  //     direction:"alternate-reverse",
  //     borderRadius:300,
  //     backgroundColor:"blue"
  //   })
  // })

  // TimeLine Practise
  // let tl = gsap.timeline();

  // tl.to(".box", {
  //   x: 800,
  //   duration: 2,
  //   delay: 1,
  //   rotate: 360,
  //   borderRadius: 300,
  //   backgroundColor: "blue",
  // });
  // tl.to(".box1", {
  //   x: 800,
  //   duration: 2,
  //   delay: 1.5,
  //   rotate: 360,
  //   borderRadius: 300,
  //   backgroundColor: "blue",
  // });

  // ScrollTriger Practise
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("h1", {
      transform: "translateX(-100%)",
      scrollTrigger: {
          trigger:"h1",
          top:"top center",
          end:"top 20%",
          markers:true,
          pin:true,
          scrub:1,
      },
    });
  }, []);

  return (
    <section className="practise">
      {/* <div className="box" ref={boxref}></div> */}
      {/* <div className="box"></div>
      <div className="box1"></div> */}
      <section className="sec1">
      </section>
      <section className="sec">
        <h1>ScrollTriger Animation</h1>
      </section>
      <section className="sec1">
      </section>
    </section>
  );
}
