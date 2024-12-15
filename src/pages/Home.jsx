import React from "react";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { projects } from "../assets/data";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import ProjectCard from "../components/ProjectCard";
const Home = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center px-3">
        <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[20px]">
          {" "}
          <span className="text-gray-400 me-2">
            <GoDotFill />
          </span>{" "}
          MERN Developer
        </h2>
        <Link
          to="#"
          className="flex justify-between items-center text-[#0F9C5C] text-[13px] font-semibold bg-[#DFF7EC] p-1 md:px-3 rounded-full"
        >
          <span>
            <GoDotFill />
          </span>{" "}
          <span className="hidden md:block">AVAILABLE FOR WORK</span>
        </Link>
      </div>
      {/* hero section */}
      <Hero />
      {/* skill section  */}
      <Skills />
      {/* Project section  */}
      <div className="border bg-[#F7F7F7] rounded-2xl pt-4 pb-3 mt-2">
        <div className="flex justify-between items-center p-2">
          <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
            {" "}
            <span className="text-gray-400 me-2">
              <GoDotFill />
            </span>{" "}
            Projects
          </h2>
          <Link
            to="/project"
            className="border shadow rounded p-2 me-4 bg-white flex gap-1 justify-center items-center font-medium text-[#373737] text-[14px]"
          >
            View All
            <span className="font-bold">
              <GoArrowRight />
            </span>{" "}
          </Link>
        </div>
        {/* my all projects  */}
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
