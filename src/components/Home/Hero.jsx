import React from "react";
import profileImage from "../../assets/image/Asadullah 2x2.jpg";
import CopyEmail from "../CopyEmail";
import HireMeButton from "../HireMeButton";
const Hero = () => {
  return (
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
        <img className="rounded-full " src={profileImage} alt="profile image" />
      </div>
    </div>
  );
};

export default Hero;
