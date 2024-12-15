import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
const ProjectCard = ({ project }) => {
  

  return (
    <div className="bg-white p-4 py-6 m-2 rounded-md shadow">
      <Link
        to={`/project/${project.id}`}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 bg-gray-200 rounded-full text-4xl text-[#373737] font-bold grid place-items-center">
            {project.name.charAt(0)}
          </div>
          <div className="ps-2">
            <h3 className="text-xl font-semibold text-[#373737]">
              {project.name}
            </h3>
            <p className="text-[#666666] font-medium">{project.sortDes}</p>
          </div>
        </div>
        <div className="text-[20px] text-[#666666]">
          <IoIosArrowForward />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
