"use client";

import { About } from "@/sections/about";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
