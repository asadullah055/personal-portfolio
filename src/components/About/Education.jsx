import React from "react";
import { GoDotFill } from "react-icons/go";

const Education = () => {
  return (
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
        <p className="text-[14px]">National University I Dhaka, Bangladesh.</p>
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
  );
};

export default Education;
