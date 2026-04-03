import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Stagger() {
    useGSAP(()=>{
        gsap.from(".skills h3",{
            opacity:0,
            scale:0,
            duration:1,
            filter:"blur(10px)",
            stagger:{
                grid:[3,4],
                from:"random",
                axis:"x",
                amount:.5
            }
        })
    })
  return (
    <section className="stagger">
      <div className="wrapper">
        <h1>Professional Skills</h1>
        <div className="skills">
          <h3>Web Design</h3>
          <h3>Web Devloper</h3>
          <h3>Video Editing</h3>
          <h3>Content Creator</h3>
          <h3>Logo Designer</h3>
          <h3>Seo</h3>
          <h3>Communication</h3>
          <h3>Leadership</h3>
          <h3>Time Management</h3>
        </div>
      </div>
    </section>
  );
}
