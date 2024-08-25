import { useState } from "react";
import Hero from "./sections/Hero/Hero";
import "./App.css";
import { Projects } from "./projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
