import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillCard from "../SkilledCard";

const Skills = () => {
  return (
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
          icon={<FaNodeJs />}
          title="JavaScript (ES6)"
          subtitle="Language"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="React"
          subtitle="Js Library"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="Next Js"
          subtitle="React Framework"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="Node Js"
          subtitle="Js Runtime"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="Express Js"
          subtitle="Js Runtime"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="Mongodb"
          subtitle="Js Runtime"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="Redux Toolkit"
          subtitle="Js Runtime"
          level={3}
        />
        <SkillCard
          icon={<FaNodeJs />}
          title="JWT"
          subtitle="Js Runtime"
          level={3}
        />
      </div>
    </div>
  );
};

export default Skills;
