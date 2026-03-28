import React, { useRef ,useLayoutEffect} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function Navbar() {
  const gsapRef = useRef();
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(ScrollTrigger);
    
  useLayoutEffect(()=>{
    let tl = gsap.timeline()

    tl.from("nav .logo",{
        opacity:0,
        y:-20,
        duration:.4
    })
    tl.from("nav li",{
        opacity:0,
        y:-20,
        stagger:.3,
    })
    tl.from("nav .book-trip-btn",{
        opacity:0,
        y:-20,
    })
  },[])

  return (
    <div className="navbar-section">
      <nav>
        <div className="logo">Skywings</div>
        <ul>
          {["Home", "About Us", "Contack Us","Package", "Sing Up", "Login"].map(
            (items, index) => {
              return <li key={index}>{items}</li>;
            },
          )}
        </ul>
        <button className="book-trip-btn">Book Trip</button>
      </nav>
    </div>
  );
}
