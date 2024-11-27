import React from "react";
import { BsMoon } from "react-icons/bs";
import { CgBrowser, CgProfile } from "react-icons/cg";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";
import HireMeButton from "./HireMeButton";

const Navigation = () => {
  return (
    <nav className="shadow rounded-md max-w-[560px] p-3 px-4 mt-2 bg-white m-0 mx-auto">
      <ul className="flex justify-between items-center w-full">
        {/* Left Section */}
        <div className="flex justify-between items-center gap-x-6">
          <li className="text-2xl text-gray-400">
            <Link to="/" className="">
              <GrHomeRounded />
            </Link>
          </li>
          <li className="text-2xl text-gray-400">
            <Link to="/about" className="">
              <CgProfile />
            </Link>
          </li>
          <li className="text-2xl text-gray-400">
            <Link to="/project" className="">
              <CgBrowser />
            </Link>
          </li>
        </div>

        {/* Right Section */}
        <div>
          <li className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button className="text-2xl text-gray-400">
              <BsMoon />
            </button>

            {/* Hire Me Button */}
            <HireMeButton />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
