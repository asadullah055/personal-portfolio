import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyButton = () => {
  const [buttonText, setButtonText] = useState("Copy Email");

  const copyToClipboard = () => {
    const email = "asadullahahmed01@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setButtonText("Copied");
      setTimeout(() => {
        setButtonText("Copy Email");
      }, 1000);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="border flex items-center shadow hover:shadow-[0px_0px_1px_3px_rgba(0,_0,_0,_0.1)] gap-2 p-2 rounded-md font-medium text-[14px] text-[#373737] transition-all duration-300 ease-in-out"
    >
      <span>
        <FaRegCopy />
      </span>
      {buttonText}
    </button>
  );
};

export default CopyButton;
