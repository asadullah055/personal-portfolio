import React from "react";
import { GoDotFill } from "react-icons/go";
import picture from "../assets/image/pic2.png";

const About = () => {
  return (
    <>
      <div className="pt-3 px-3">
        <h2 className="flex items-center text-[#666666] font-medium text-[20px]">
          {" "}
          <span className="text-gray-400 me-1">
            <GoDotFill />
          </span>{" "}
          About
        </h2>
        <div className="mt-4 pt-4">
          <h1 className="text-3xl font-bold leading-tight text-[#373737]">
            It&apos;s Me Asadullah Ahmed
          </h1>
          <div className="text-[#666666] text-[18px]">
            <p className="py-2">
              I&apos;m a software developer based in Bangladesh, working on
              cutting-edge web as well as pixel-perfect designs.{" "}
              <strong>
                Goal: To be in the top 10% of JavaScript in the world.
              </strong>
            </p>
            <div className="border p-3 m-3 bg-slate-100 rounded-md shadow flex items-center justify-center">
              <img className="rounded-md " src={picture} alt="personal img" />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#373737] py-3">
              More About Me
            </h2>
            <p>
              Self-driven, focused, and dedicated Software Developer with 2+
              years of experience. I am passionate about programming, developing
              new products, and exploring new technologies. Well-versed in
              modern web technologies. Slow-paced learner, a good team player,
              and committed to achieving the goal, determined to deliver quality
              with an emphasis on excellence.
            </p>
          </div>
          {/* education  */}
        </div>
      </div>
      <div className="bg-[#F7F7F7] py-3 rounded-xl mt-4">
        <h2 className="flex items-center text-[#666666] font-semibold uppercase text-[18px]">
          {" "}
          <span className="text-gray-400 me-1">
            <GoDotFill />
          </span>{" "}
          Education
        </h2>
        <div className="text-[#373737] p-3">
          <p className="font-bold">Bachelor of Business Administration</p>
          <p className="flex justify-between pt-2">
            Management <span>2018 - 2022</span>
          </p>
          <p className="text-[14px]">
            National University I Dhaka, Bangladesh.
          </p>
        </div>
        <h2 className="flex items-center text-[#666666] font-semibold uppercase text-[18px]">
          {" "}
          <span className="text-gray-400 me-1">
            <GoDotFill />
          </span>{" "}
          Language
        </h2>
        <div className="text-[#373737] pt-2 ps-3">
          <div className="flex gap-3">
            <p className="text-[#0F9C5C] bg-[#DFF7EC] p-1 rounded-md font-semibold">
              BENGALI
            </p>
            <p className="text-[#0F9C5C] bg-[#DFF7EC] p-1 rounded-md font-semibold">
              ENGLISH
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
7;
