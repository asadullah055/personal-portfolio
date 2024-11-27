import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import profileImage from "../assets/image/pic.png";
import CopyEmail from "../components/CopyEmail";
import HireMeButton from "../components/HireMeButton";

const Home = () => {
  return (
    <div className="mt-4 px-2">
      <div className="flex justify-between items-center ">
        <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
          {" "}
          <span className="text-gray-400 me-2">
            <GoDotFill />
          </span>{" "}
          MERN Developer
        </h2>
        <Link
          to="#"
          className="flex justify-between items-center text-[#0F9C5C] text-[13px] font-semibold bg-[#DFF7EC] p-1 px-3 rounded-full"
        >
          <span>
            <GoDotFill />
          </span>{" "}
          AVAILABLE FOR WORK
        </Link>
      </div>
      {/* hero section */}
      <div className="mt-9 flex items-center ">
        <div className="">
          <h1 className="text-[#373737] text-4xl font-bold leading-tight">
            I&apos;m Asadullah <br />
            Ahmed
          </h1>
          <p className="text-[#666666] text-[20px] leading-8">
            I&apos;m a self-taught Full-Stack developer and love to work on the
            Full-Stack website.
          </p>
          <div className="flex justify-start gap-3 mt-4">
            <HireMeButton />
            <CopyEmail />
          </div>
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-full p-2">
            <img
              className="rounded-full"
              src={profileImage}
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
