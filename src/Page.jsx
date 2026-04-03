import React from "react";
import { Navbar } from "../src/Navbar";
import { Practise } from "../src/Practise";
import { Stagger } from "../src/Stagger";
import { CardAnimation } from "../src/CardAnimation";
import { Random } from "../src/Random"; 
import { StaggerEffect } from "../src/StaggerEffect";
import { SvgEffect } from "../src/SvgEffect";
import { ScrollEffects} from "../src/ScrollEffects";

export function Page() {
  return (
    <>
      {/* <Navbar />
      <About />
      <Practise />
      <ScrollEffects />
      <Stagger /> 
      */}
      <CardAnimation />
    </>
  );
}
