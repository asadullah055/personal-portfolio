import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import profileImage from "../assets/image/pic.png";
import CopyEmail from "../components/CopyEmail";
import HireMeButton from "../components/HireMeButton";
import SkillCard from "../components/SkilledCard";
const Home = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center px-3">
        <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[20px]">
          {" "}
          <span className="text-gray-400 me-2">
            <GoDotFill />
          </span>{" "}
          MERN Developer
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
      {/* hero section */}
      <div className="mt-9 mb-10 flex flex-col-reverse md:flex-row gap-y-3 justify-center items-center px-3">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold leading-tight text-[#373737] text-center md:text-left">
            I&apos;m Asadullah Ahmed
          </h1>
          <p className="text-[#666666] text-[20px] mt-2 leading-8 text-center md:text-left">
            I&apos;m a self-taught Full-Stack developer and love to work on the
            Full-Stack website.
          </p>
          <div className="flex justify-start gap-3 mt-4">
            <HireMeButton />
            <CopyEmail />
          </div>
        </div>

        <div className="bg-gray-200 rounded-full p-2 md:w-full md:h-full w-1/2 h-1/2">
          <img
            className="rounded-full "
            src={profileImage}
            alt="profile image"
          />
        </div>
      </div>
      {/* skill section  */}
      <div className="border bg-[#F7F7F7] rounded-2xl pt-5">
        <div className="flex justify-between items-center p-2">
          <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
            {" "}
            <span className="text-gray-400 me-2">
              <GoDotFill />
            </span>{" "}
            My Skill
          </h2>
        </div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <SkillCard
            icon={<RiTailwindCssFill />}
            title="Tailwind CSS"
            subtitle="CSS Framework"
            level={4}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="JavaScript (ES6)"
            subtitle="Language"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="React"
            subtitle="Js Library"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="Next Js"
            subtitle="React Framework"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="Node Js"
            subtitle="Js Runtime"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="Express Js"
            subtitle="Js Runtime"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="Mongodb"
            subtitle="Js Runtime"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="Redux Toolkit"
            subtitle="Js Runtime"
            level={3}
          />
          <SkillCard
            icon={<FaNodeJs />} // Replace with JavaScript logo/icon
            title="JWT"
            subtitle="Js Runtime"
            level={3}
          />
        </div>
      </div>
      {/* Project section  */}
      <div className="border bg-[#F7F7F7] rounded-2xl pt-4 pb-3 mt-2">
        <div className="flex justify-between items-center p-2">
          <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[18px]">
            {" "}
            <span className="text-gray-400 me-2">
              <GoDotFill />
            </span>{" "}
            Projects
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

export default Home;
