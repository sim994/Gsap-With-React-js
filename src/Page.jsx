import React from "react";
import { Navbar } from "../src/Navbar";
import { HeroPage } from "../src/HeroPage";
import { About } from "../src/About";
import { Practise } from "../src/Practise";
import { Stagger } from "../src/Stagger";
import { Random } from "../src/Random"; 
import { StaggerEffect } from "../src/StaggerEffect";
import { SvgEffect } from "../src/SvgEffect";
import { ScrollEffects} from "../src/ScrollEffects";

export function Page() {
  return (
    <>
      {/* <Navbar />
      <HeroPage />
      <About />
      <Practise />
      <Stagger /> */}

      <ScrollEffects />

    </>
  );
}
