import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const ToolList = ({tool, className }) => {
  const { theme } = useTheme();
  return (
    <div className={`${className}`}>
      {tool.map((tool) => (
        <h1 key={tool.id} className={`text-xl font-medium opacity-60 rounded-lg p-2 inline-block w-auto h-10 mr-2 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
          {tool.name ? tool.name : "Tool Name"}
        </h1>
      ))}
    </div>
  );
};

const WorkCard = ({ img, name, description, onClick, tool }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "300px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          onClick={onClick}
        ></img>
      </div>
      <>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <ToolList tool={tool} className=""/>
      </>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

const WorkCardList = ({ className }) => {
  return (
    <div className={`${className}`}>
      {data.projects.map((project) => (
        <WorkCard
          key={project.id}
          img={project.imageSrc}
          name={project.title}
          description={project.description}
          tool={project.tool}
          onClick={() => window.open(project.url)}
        />
      ))}
    </div>
  );
};

export default WorkCardList;