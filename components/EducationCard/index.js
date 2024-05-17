import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const EducationCard = ({ dates, name, para }) => {

    return (
        <div className="mt-2 p-5 rounded-lg">
            <div className= "flex items-center justify-between">
                <h2 className="text-lg font-bold">{name}</h2>
                <h3 className="text-sm opacity-75 ml-auto">{dates}</h3>
            </div>
            <p className="text-sm mt-2 opacity-50">
                {para}
            </p>
        </div>
    );
};

const EducationCardList = ({ className }) => {
    return (
        <div className={`${className}`}>
            {data.educations.map((education, index) => (
                <EducationCard
                    key={index}
                    dates={education.universityDate}
                    name={education.universityName}
                    para={education.universityPara}
                ></EducationCard>
            )
            )}
        </div>
    );
};

export default EducationCardList;
