import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
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
        <div className="bg-white p-4 py-6 m-2 rounded-md shadow">
          <Link to="#" className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 bg-gray-200 rounded-full text-4xl text-[#373737] font-bold grid place-items-center">
                A
              </div>
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
              {/*  <img
                className="h-12 w-12 rounded-full"
                src={profileImage}
                alt="img"
              /> */}
              <div className="h-12 w-12 bg-gray-200 rounded-full text-4xl text-[#373737] font-bold grid place-items-center">
                A
              </div>
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

export default Project;
