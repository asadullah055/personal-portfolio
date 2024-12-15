import React from "react";
import { GoDotFill } from "react-icons/go";
import { projects } from "../assets/data";
import picture from "../assets/image/pic2.png";
import Education from "../components/About/Education";
import ProjectCard from "../components/ProjectCard";

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
              I&apos;m a software developer based in Bangladesh, specializing in
              cutting-edge web development and creating pixel-perfect designs.
              <strong>
                {" "}
                My goal is to rank among the top 10% of JavaScript developers
                worldwide.
              </strong>
            </p>
            <div className="border p-3 m-3 bg-slate-100 rounded-md shadow flex items-center justify-center">
              <img className="rounded-md " src={picture} alt="personal img" />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#373737] py-3">
              More About Me
            </h2>
            <p className="text-justify">
              Self-driven, focused, and dedicated Software Developer with 2+
              years of experience. I am passionate about programming, developing
              new products, and exploring new technologies. Well-versed in
              modern web technologies. Slow-paced learner, a good team player,
              and committed to achieving the goal, determined to deliver quality
              with an emphasis on excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="ps-3">
        <p className="text-3xl font-bold leading-tight text-[#373737] py-3">
          My Side Projects
        </p>
        <p className="text-[#666] text-[18px]">
          I did passion side projects in the weekend, please take a look you
          will love it (I hope).
        </p>
      </div>
      <div className="border bg-[#F7F7F7] rounded-2xl p-2 mt-5">
        {/* my all projects  */}
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
      <Education />
    </>
  );
};

export default About;
7;
