import React, { memo } from "react";
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
    },
    {
      duration: "July 2018 - September 2018",
      heading: "Freshworks Inc",
      subHeading: "Front End Developer",
      description:
        "Built front end features using ReactJS for data visualization product.",
    },
  ],
  education: [
    {
      duration: "2014 - 2018",
      heading: "Kerala University",
      subHeading: "B.Tech, Computer Science & Engineering",
    },
    {
      duration: "2012-2014",
      heading: "Loyola School",
      subHeading: "High School, ISC",
    },
    {
      duration: "2000 - 2012",
      heading: "Loyola School",
      subHeading: "Primary School, ICSE",
    },
  ],
  certifications: [
    {
      duration: "2020",
      heading: "Cloud Architecture with Google Cloud Specialization",
      subHeading: "Coursera",
    },
    {
      duration: "2019",
      heading: "eLearnSecurity Junior Penetration Tester ",
      subHeading: "eLearnSecurity",
    },
    {
      duration: "2020",
      heading: "Advanced JAVA",
      subHeading: "Simplilearn",
    },
  ],
};

function Experience() {
  return (
    <div className="experience">
      <Timeline data={data.education} />
      <Timeline data={data.experience} />
    </div>
  );
}
export default memo(Experience);
