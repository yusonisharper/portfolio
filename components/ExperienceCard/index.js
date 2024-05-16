import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const ExperienceCard = ({ dates, type, position, bullets }) => {
    const { theme } = useTheme();
    const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(";"));

    return (
        <div className={` p-5 w-full flex mob:flex-col desktop:flex-row justify-between rounded-lg ${
            theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"}`}>
            <div className="text-lg w-2/5">
                <h2>{dates}</h2>
                <h3 className="text-sm opacity-50">{type}</h3>
            </div>
            <div className="desktop:w-3/5">
                <h2 className="text-lg font-bold">{position}</h2>
                {bulletsLocal && bulletsLocal.length > 0 && (
                    <ul className="list-disc">
                        {bulletsLocal.map((bullet, index) => (
                            <li key={index} className="text-sm my-1 opacity-70">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const ExperienceCardList = ({ className }) => {
    return (
        <div className={`${className}`}>
            {data.experiences.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    dates={experience.dates}
                    type={experience.type}
                    position={experience.position}
                    bullets={experience.bullets}
                ></ExperienceCard>
            )
            )}
        </div>
    );
};

export default ExperienceCardList;
