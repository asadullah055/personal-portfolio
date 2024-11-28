import React from "react";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import profileImage from "../assets/image/pic.png";
const ProjectDetails = () => {
  return (
    <div className="pt-3 px-1">
      <h2 className="text-[#373737] text-3xl font-bold pb-2">
        <span>Pinwheel</span>{" "}
        <span className="text-lg">(E-commerce | FULL STACK)</span>
      </h2>
      <div className="bg-[#f7f7f7] p-2 rounded-lg">
        <p className="text-[20px] font-semibold text-[#373737]">Features</p>
        <ul>
          <li className="text-[#666] flex gap-1 items-center ">
            <span className="text-gray-400 me-1">
              <GoDotFill />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="text-[#666] flex gap-1 items-center ">
            <span className="text-gray-400 me-1">
              <GoDotFill />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="text-[#666] flex gap-1 items-center ">
            <span className="text-gray-400 me-1">
              <GoDotFill />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="text-[#666] flex gap-1 items-center ">
            <span className="text-gray-400 me-1">
              <GoDotFill />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
        </ul>
      </div>
      <div className="bg-[#f7f7f7] p-2 rounded-lg mt-3">
        <p className="text-[20px] font-semibold text-[#373737]">Technologies</p>
        <ul className="flex gap-2 flex-wrap pt-3">
          <li className="capitalize border px-2 rounded-full bg-white">
            React
          </li>
          <li className="capitalize border px-2 rounded-full bg-white">jwt</li>
          <li className="capitalize border px-2 rounded-full bg-white">
            expressjs
          </li>
          <li className="capitalize border px-2 rounded-full bg-white">
            React
          </li>
          <li className="capitalize border px-2 rounded-full bg-white">jwt</li>
          <li className="capitalize border px-2 rounded-full bg-white">
            expressjs
          </li>
          <li className="capitalize border px-2 rounded-full bg-white">
            React
          </li>
          <li className="capitalize border px-2 rounded-full bg-white">jwt</li>
          <li className="capitalize border px-2 rounded-full bg-white">
            expressjs
          </li>
        </ul>
      </div>
      <div className="flex gap-2 mt-3 ">
        <Link
          target="_blank"
          className="bg-[#141414] text-white px-2 py-1 rounded-md font-medium shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out text-[15px]"
          to="#"
        >
          live Link
        </Link>
        <Link
          target="_blank"
          className="bg-[#141414] text-white px-2 py-1 rounded-md font-medium shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out text-[15px]"
          to="#"
        >
          Backend code
        </Link>
        <Link
          target="_blank"
          className="bg-[#141414] text-white px-2 py-1 rounded-md font-medium shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out text-[15px]"
          to="#"
        >
          Frontend code
        </Link>
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
        <div className="bg-white p-4 py-6 m-2 rounded-md shadow">
          <Link to="#" className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12 rounded-full"
                src={profileImage}
                alt="img"
              />
              <div className="ps-2">
                <h3 className="text-xl font-semibold text-[#373737]">
                  Pinwheel
                </h3>
                <p className="text-[#666666] font-medium">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="text-[20px] text-[#666666]">
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
        <div className="bg-white p-4 py-6 m-2 rounded-md shadow">
          <Link to="#" className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12 rounded-full"
                src={profileImage}
                alt="img"
              />
              <div className="ps-2">
                <h3 className="text-xl font-semibold text-[#373737]">
                  Pinwheel
                </h3>
                <p className="text-[#666666] font-medium">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="text-[20px] text-[#666666]">
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
