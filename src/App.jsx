import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />

      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
