import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const HireMeButton = () => {
  return (
    <Link
      to="/contact"
      className="flex items-center gap-2 p-2 bg-[#141414] text-white rounded-lg font-semibold shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.1)] transition-all duration-300 ease-in-out"
    >
      <span className="text-md">
        <CiCirclePlus />
      </span>
      <span className="text-sm">Hire Me</span>
    </Link>
  );
};

export default HireMeButton;
