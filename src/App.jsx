import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-auto p-2">
        <Navigation />
        {/* Use Routes and Route components for routing */}
        <div className="shadow rounded-md max-w-[560px] p-2 mt-2 mb-6 bg-white m-0 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
