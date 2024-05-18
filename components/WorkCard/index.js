import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";
import { basePath } from "../../config.ts";

const ToolList = ({ tool, className }) => {
  const { theme } = useTheme();
  return (
    <div className={`${className}`}>
      {tool.map((tool) => (
        <h1
          key={tool.id}
          className={`text-xl font-medium opacity-60 rounded-lg p-2 inline-block w-auto h-10 mr-2 ${
            theme ? (theme === "dark" ? "bg-gray-800" : "bg-gray-200") : "bg-gray-800"
          }`}
        >
          {tool.name ? tool.name : "Tool Name"}
        </h1>
      ))}
    </div>
  );
};

const WorkCard = ({ media, name, description, onClick, tool }) => {
  const { theme } = useTheme();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef(null);

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const currentMedia = media[currentMediaIndex];

  useEffect(() => {
    let timer;
    if (currentMedia.type === "image") {
      timer = setTimeout(handleNext, 5000);
    } else if (currentMedia.type === "video" && videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.addEventListener("ended", handleNext);
      return () => {
        videoElement.removeEventListener("ended", handleNext);
      };
    }
    return () => clearTimeout(timer);
  }, [currentMedia]);
  useEffect(() => {
    if (currentMedia.type === "video" && videoRef.current) {
      videoRef.current.load();  // Ensure the video reloads properly
    }
  }, [currentMediaIndex]);

  return (
    <div
      className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link ${
        theme ? (theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50") : "hover:bg-slate-800"
      }`}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "300px" }}
      >
        {currentMedia.type === "image" ? (
          <img
            alt={name}
            className="h-full w-full object-contain hover:scale-110 transition-all ease-out duration-300"
            src={`${basePath + currentMedia.src}`}
            onClick={onClick}
          ></img>
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            controls autoPlay muted
            onClick={onClick}
          >
            <source src={`${basePath + currentMedia.src}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="flex justify-between mt-2">
        {currentMediaIndex > 0 && (<button onClick={handlePrev} className={`px-2 py-1 bg-gray-500 text-white rounded transition-all duration-300 ease-out hover:scale-105 active:scale-100
        ${theme ? (theme === "dark" ? "bg-white text-black" : "bg-black text-white") : "bg-white text-black"}`}>Previous</button>)}
        {currentMediaIndex < media.length - 1 && (<button onClick={handleNext} className={`px-2 py-1 bg-gray-500 text-white rounded transition-all duration-300 ease-out hover:scale-105 active:scale-100
        ${theme ? (theme === "dark" ? "bg-white text-black" : "bg-black text-white") : "bg-white text-black"}`}>Next</button>)}
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <ToolList tool={tool} className="" />
      <h2 className="text-xl opacity-50 mt-2">
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
          media={project.media}
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