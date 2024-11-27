import React from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyEmail = () => {
  return (
    <button className="border flex items-center gap-2 p-2 rounded-md font-medium text-[14px]">
      <span>
        <FaRegCopy />
      </span>{" "}
      Copy Email
    </button>
  );
};

export default CopyEmail;
