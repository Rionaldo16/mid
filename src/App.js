import React from "react";
import "./App.css";
import "./assets/css/style.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Myphoto from "./MyPhoto";
import Navbar from "./Navbar";
import ServicesSection from "./servicesSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <Contact />
      <Myphoto />
      <Footer />
    </div>
  );
}

export default App;
