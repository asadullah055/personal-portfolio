import React from "react";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { projects } from "../assets/data";
import ProjectCard from "../components/ProjectCard";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  return (
    <div className="pt-3 px-1">
      <h2 className="text-[#373737] text-3xl font-bold pb-2">
        <span>{project.name}</span>{" "}
        <span className="text-lg">({project.category})</span>
      </h2>
      <div className="bg-[#f7f7f7] p-2 rounded-lg">
        <p className="text-[20px] font-semibold text-[#373737]">Features</p>
        <ul>
          {project.features.map((item, i) => (
            <li key={i} className="text-[#666] flex gap-1 items-center ">
              <span className="text-gray-400 me-1">
                <GoDotFill />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#f7f7f7] p-2 rounded-lg mt-3">
        <p className="text-[20px] font-semibold text-[#373737]">Technologies</p>
        <ul className="flex gap-2 flex-wrap pt-3">
          {project.technology.map((tec, i) => (
            <li
              key={i}
              className="capitalize border px-2 rounded-full bg-white"
            >
              {tec}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 mt-3 ">
        {project.liveLing && (
          <Link
            target="_blank"
            className="bg-[#141414] text-white px-2 py-1 rounded-md font-medium shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out text-[15px]"
            to={project.liveLing}
          >
            live Link
          </Link>
        )}
        {project.backEndCode && (
          <Link
            target="_blank"
            className="bg-[#141414] text-white px-2 py-1 rounded-md font-medium shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out text-[15px]"
            to={project.backEndCode}
          >
            Backend code
          </Link>
        )}
        {project.frontEndCode && (
          <Link
            target="_blank"
            className="bg-[#141414] text-white px-2 py-1 rounded-md font-medium shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out text-[15px]"
            to={project.frontEndCode}
          >
            Frontend code
          </Link>
        )}
      </div>
      <div className="border bg-[#F7F7F7] rounded-2xl pt-1 pb-3 mt-4">
        <div className="flex justify-between items-center p-2">
          <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
            {" "}
            <span className="text-gray-400 me-2">
              <GoDotFill />
            </span>{" "}
            More Projects
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

        {projects
          .filter((pro) => pro.id !== id)
          .slice(0, 2)
          .map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
