import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-auto">
        <Navigation />
        {/* Use Routes and Route components for routing */}
        <div className="shadow rounded-md max-w-[560px] p-3 px-4 mt-2 bg-white m-0 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
