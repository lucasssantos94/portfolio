"use client";

import { About } from "@/sections/about";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
