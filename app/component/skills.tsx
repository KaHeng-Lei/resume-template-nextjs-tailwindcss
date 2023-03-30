"use client";
import "../global.css";

import React, { useState } from "react";

type Skills = {
  icon: string;
  text: string;
};
type SkillCategory = "soft" | "hard";
type SkillsProps = {
  data: {
    [k in SkillCategory]: Skills[];
  };
};
const Skills = ({ data }: SkillsProps) => {
  const [activeSkillSet, setActiveSkillSet] = useState<SkillCategory>("soft");
  const tabsType: SkillCategory[] = ["soft", "hard"];

  const setBgText = (tab: SkillCategory) =>
    tab === activeSkillSet
      ? "bg-blue-700 text-white"
      : "bg-slate-200 text-black";

  const setTabsAlignment = (tab: SkillCategory) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="w-full flex flex-row justify-between mb-4">
      {tabsType.map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBgText(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveSkillSet(el)}
        >
          {el} SKILLS
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      className={`flex flex-row flex-wrap gap-2 ${
        activeSkillSet === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeSkillSet]?.map(({ icon, text }) => {
        return (
          <li key={text} className="skill">
            <span>{icon}</span> {text}
          </li>
        );
      })}
    </ul>
  );

  return (
    <section>
      {tabs}
      {content}
    </section>
  );
};

export default Skills;
