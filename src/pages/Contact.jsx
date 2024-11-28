import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-3 px-3">
      <div className="flex justify-between items-center">
        <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[20px]">
          {" "}
          <span className="text-gray-400 me-2">
            <GoDotFill />
          </span>{" "}
          Hire Me
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
      <div className="pt-5">
        <h2 className="text-4xl text-[#373737] font-semibold py-3">
          Contact Me
        </h2>
        <form className="pt-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              className="border outline-none p-2 rounded-md bg-gray-100 text-[#666666]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border outline-none p-2 rounded-md bg-gray-100 text-[#666666]"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="border outline-none p-2 rounded-md bg-gray-100 text-[#666666] mt-3 w-full resize-none"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="w-full bg-[#141414] text-white font-semibold text-[16px] rounded-md p-3 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
