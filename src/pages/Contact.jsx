import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-3 px-3">
      <div className="flex justify-between items-center">
        <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
          {" "}
          <span className="text-gray-400 me-2">
            <GoDotFill />
          </span>{" "}
          Hire Me
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
      <h2>Contact Me</h2>
    </div>
  );
};

export default Contact;
