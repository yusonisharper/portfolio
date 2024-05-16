import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const SkillCard = ({ name, proficiency, img }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-36 h-48 p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <div className="h-32 flex items-center justify-center overflow-hidden">
        <img
            alt={name}
            className="h-auto w-24 object-cover transition-all ease-out duration-300"
            src={img}
          ></img>
      </div>
      <h2 className="text-l text-bold text-center">Proficiency</h2>
      <h2 className="text-l text-bold text-center">{proficiency}/5</h2>
    </div>
  );
};

const SkillCardList = ({ className }) => {
  return (
    <div className={`${className}`}>
      {data.skills.map((skill, index) => (
        <SkillCard
          key={index}
          name={skill.title}
          proficiency={skill.proficiency}
          img={skill.imageSrc}
        />
      ))}
    </div>
  );
};

export default SkillCardList;
