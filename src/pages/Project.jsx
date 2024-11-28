import React from "react";
import { GoDotFill } from "react-icons/go";

const Project = () => {
  return (
    <div className="pt-3 px-3">
      <h2 className="flex items-center text-[#666666] font-medium text-[20px]">
        {" "}
        <span className="text-gray-400 me-1">
          <GoDotFill />
        </span>{" "}
        Project
      </h2>
    </div>
  );
};

export default Project;
