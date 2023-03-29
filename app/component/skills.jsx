"use client";

import React, { useState } from "react";

const Skills = ({ data }) => {
  const [skillSet, setSkillSet] = useState("soft");
  return (
    <div className="mt-8">
      <div className="w-full flex flex-row justify-between  mb-4">
        <div
          className={`p-4 basis-1/2 cursor-pointer text-xl ${
            skillSet === "soft"
              ? "bg-blue-700 text-white"
              : "bg-slate-200 text-black"
          } text-black`}
          onClick={() => setSkillSet("soft")}
        >
          SOFT SKILLS
        </div>
        <div
          className={`p-4 basis-1/2 text-end cursor-pointer text-xl ${
            skillSet === "hard"
              ? "bg-blue-700 text-white"
              : "bg-slate-200 text-black"
          }`}
          onClick={() => setSkillSet("hard")}
        >
          HARD SKILLS
        </div>
      </div>
      <div className="flex flex-row flex-wrap  gap-2">
        {data[skillSet]?.map((skill) => {
          const { icon, text } = skill;
          return (
            <span key={text} className="text-base p-3 bg-slate-100 rounded-lg">
              {icon} {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
