import React from "react";

const SkillCard = ({ icon, title, subtitle, level }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 shadow rounded-lg group">
      <div className="flex items-center justify-center bg-gray-100 text-4xl p-1 rounded-lg group-hover:scale-110 transition-all ">
        {icon}
      </div>

      {/* Skill Details */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 font-medium">{subtitle}</p>

        {/* Skill Level */}
        <div className="flex items-center mt-2 gap-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`h-1 w-6 rounded ${
                  index < level ? "bg-[#0F9C5C]" : "bg-gray-300"
                }`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
