import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const EducationCard = ({ dates, name, para }) => {

    return (
        <div className="mt-2 p-5">
            <h2 className="text-lg">{name}</h2>
            <h3 className="text-sm opacity-75">
                {dates}
            </h3>
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
