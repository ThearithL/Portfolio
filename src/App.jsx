import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tecnology from "./components/Tecnology";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar />
        <Hero />
        <About />
        <Tecnology />
        <Experience />
       <Project/> 
       <Contact/>
      </div>
    </div>
  );
}
