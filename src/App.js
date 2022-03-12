import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
