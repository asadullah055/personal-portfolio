import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const HireMeButton = () => {
  return (
    <Link
      to="#"
      className="flex items-center gap-2 p-2 bg-[#141414] text-white rounded-lg font-semibold"
    >
      <span className="text-md">
        <CiCirclePlus />
      </span>
      <span className="text-sm">Hire Me</span>
    </Link>
  );
};

export default HireMeButton;
