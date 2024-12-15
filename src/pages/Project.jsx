import React from "react";
import { GoDotFill } from "react-icons/go";
import { projects } from "../assets/data";
import ProjectCard from "../components/ProjectCard";
const Project = () => {
  console.log(projects);

  return (
    <div className="pt-3 px-3">
      <h2 className="flex items-center text-[#666666] font-medium text-[20px]">
        {" "}
        <span className="text-gray-400 me-1">
          <GoDotFill />
        </span>{" "}
        Project
      </h2>
      <h3 className="text-3xl font-bold leading-tight text-[#373737] mt-6">
        My Works
      </h3>
      <p className="text-[#666666] text-[18px] text-justify pt-3">
        Discover my portfolio, where purposeful interfaces meet captivating
        design. As a skilled MERN developer, my work focuses on crafting
        seamless full-stack applications that enhance user experiences and
        inspire innovation.
      </p>
      <div className="border bg-[#F7F7F7] rounded-2xl mt-5">
        {/* my all projects  */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
