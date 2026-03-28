import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

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
  let tl = gsap.timeline();

  tl.to(".box", {
    x: 800,
    duration: 2,
    delay: 1,
    rotate: 360,
    borderRadius: 300,
    backgroundColor: "blue",
  });
  tl.to(".box1", {
    x: 800,
    duration: 2,
    delay: 1.5,
    rotate: 360,
    borderRadius: 300,
    backgroundColor: "blue",
  });
  return (
    <section className="practise">
      {/* <div className="box" ref={boxref}></div> */}
      <div className="box"></div>
      <div className="box1"></div>
    </section>
  );
}
