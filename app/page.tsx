"use client";

import { About } from "./_sections/about";
import { Hero } from "./_sections/hero";
import { Projects } from "./_sections/projects";
import { Skills } from "./_sections/skills";
import { Contact } from "./_sections/contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
