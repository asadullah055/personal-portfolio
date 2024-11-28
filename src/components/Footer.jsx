import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import CopyEmail from "./CopyEmail";
import HireMeButton from "./HireMeButton";

const Footer = () => {
  return (
    <div>
      {/* Let’s work together */}
      <div className="flex flex-col justify-center items-center pt-5 pb-4 mb-4">
        <h2 className="text-3xl font-semibold p-3 text-[#373737]">
          Let’s work together
        </h2>
        <p className="text-[#666666] font-medium p-3 text-center">
          Creating user experience and responsive web app
        </p>
        <div className="flex justify-start gap-3 mt-4">
          <HireMeButton />
          <CopyEmail />
        </div>
      </div>
      {/* Follow Me */}
      <div className="bg-[#F7F7F7] rounded-2xl pt-4 pb-3 mt-3">
        <div className="flex justify-between items-center p-2">
          <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
            {" "}
            <span className="text-gray-300 me-2">
              <GoDotFill />
            </span>{" "}
            Follow Mew
          </h2>
          <div className="flex gap-3 md:pe-4">
            <Link
              to="https://github.com/asadullah055"
              target="_blank"
              className="shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] flex items-center justify-center rounded-full h-10 w-10 bg-white font-medium transition-all duration-300"
            >
              <FaGithub color="#373737" size={24} />
            </Link>
            <Link
              to="https://wa.me/+8801701737771"
              target="_blank"
              className="shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] flex items-center justify-center rounded-full h-10 w-10 bg-white font-medium transition-all duration-300"
            >
              <FaWhatsapp color="#373737" size={24} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/asadullahahmed/"
              target="_blank"
              className="shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] flex items-center justify-center rounded-full h-10 w-10 bg-white font-medium transition-all duration-300"
            >
              <FaLinkedinIn color="#373737" size={24} />
            </Link>

            <Link
              to="https://www.facebook.com/asadullah.ahmed.96343/"
              target="_blank"
              className="shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] flex items-center justify-center rounded-full h-10 w-10 bg-white font-medium text-[#373737 transition-all duration-300"
            >
              <FaFacebookF color="#373737" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
