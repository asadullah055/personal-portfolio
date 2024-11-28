import React from "react";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div className="pt-3 px-3">
      <h2 className="flex items-center text-[#666666] font-medium text-[18px]">
        {" "}
        <span className="text-gray-400 me-1">
          <GoDotFill />
        </span>{" "}
        About
      </h2>
      <div className="mt-4 pt-4">
        <h1 className="text-3xl font-bold leading-tight text-[#373737] text-center md:text-left">
          I&apos;s Me Asadullah Ahmed
        </h1>
      </div>
    </div>
  );
};

export default About;
