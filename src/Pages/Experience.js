import React, { memo, Fragment } from "react";
import Timeline from "../Components/Timeline";

const data = {
  experience: [
    {
      duration: "September 2018 - Present",
      heading: "Nissan Motor Corporation",
      subHeading: "Software Enginner",
      description:
        "Working with the Cyber Security function to provide automation and software development capabilities." +
        "Successfully implemented Spam monitoring solution with sandboxed malware analysis.",
      tags: ["Cyber Security", "Python", "Selenium", "JavaScript", "Bash"],
    },
    {
      duration: "July 2018 - September 2018",
      heading: "Freshworks Inc",
      subHeading: "Front End Developer",
      description:
        "Built front end features using ReactJS for data visualization product.",
      tags: ["React", "Redux", "Plotly", "Styled Components"],
    },
  ],
  education: [
    {
      duration: "2014 - 2018",
      heading: "Kerala University",
      description: "Bachelor's degree , Computer Science & Engineering",
    },
    {
      duration: "2012-2014",
      heading: "Loyola School",
      description: "High School, ISC",
    },
    {
      duration: "2002 - 2012",
      heading: "Loyola School",
      description: "Primary School, ICSE",
    },
  ],
};

function Experience() {
  return (
    <div className="experience">
      {Object.keys(data)?.map((item) => (
        <div>
          {/* <h1 className="title">{item}</h1> */}
          <Timeline data={data[item]} />
        </div>
      ))}
    </div>
  );
}
export default memo(Experience);
