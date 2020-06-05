import React, { memo, useState } from "react";
import InfoPane from "../Components/InfoPane";
import Slider from "../Components/Slider";

const imageFolder = "/projects/";
const slideData = [
  {
    index: 0,
    data:
      "Here is a showcase of projects I've worked on. You can find more on GitHub.",
    headline: "Projects",
    github: "https://github.com/adershmanoj",
  },
  {
    index: 1,
    headline: "Translate Bot",
    button: "Visit",
    src: imageFolder + "translatebot.gif",
    data:
      "Spring MVC app to translate documents with MySQL database and Hibernate ORM. Won first place at Nissan Digithon hackathon.",
    tags: ["Java", "Spring", "Hibernate", "MySQL", "Azure"],
    link: "https://translate-bot-hackathon.herokuapp.com",
  },
  {
    index: 2,
    headline: "CheckPoint",
    button: "Visit",
    src: imageFolder + "checkpoint.gif",
    data:
      "CheckPoint is a Visual Studio Code extension to track file change history from an easy to use graphical interface.",
    tags: ["NodeJS", "TypeScript", "Mocha", "Winston", "Azure DevOps"],
    github: "https://github.com/BurntBanana/checkpoint",
    link:
      "https://marketplace.visualstudio.com/items?itemName=BurntBanana.checkpoint",
  },
  {
    index: 3,
    headline: "Notes App",
    button: "Visit",
    src: imageFolder + "notes.jpg",
    data:
      "Note application designed for note taking, organizing, and task management. Securely store personal and work notes on the cloud.",
    tags: ["React", "Meteor", "MongoDB", "Enzyme", "Heroku"],
    github: "https://github.com/adershmanoj/notes-meteor",
    link: "https://notes-adershmanoj.herokuapp.com",
  },
  {
    index: 4,
    headline: "URL Shortener",
    button: "Visit",
    src: imageFolder + "shortlink.jpg",
    data: "Link shortener application to save links and track visit counts.",
    tags: ["React", "Meteor", "MongoDB", "Heroku"],
    github: "https://github.com/adershmanoj/short-link-meteor",
    link: "https://short-link-adershmanoj.herokuapp.com",
  },
  {
    index: 5,
    headline: "Trillo",
    button: "Visit",
    src: imageFolder + "trillo.jpg",
    data: "Travel agency website mockup built with Flexbox and CSS Grid.",
    tags: ["HTML", "JS", "Sass"],
    github: "https://github.com/adershmanoj/trillo",
    link: "http://adershmanoj.me/trillo",
  },
  {
    index: 6,
    headline: "Jobfair 2018",
    button: "Visit",
    src: imageFolder + "jobfair.jpg",
    data:
      "SCT Jobfair is the annual inter college placement event conducted by SCT College of Engineerning.",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/adershmanoj/SCT-Jobfair",
    link: "http://adershmanoj.me/SCT-Jobfair",
  },
];

function Projects() {
  const [index, setIndex] = useState(0);

  return (
    <div className="container work">
      <div className="left">
        <InfoPane>
          <h3 className="infopane--heading">{slideData[index].headline}</h3>
          <p>{slideData[index].data}</p>
          <p className="tag__Group">
            {slideData[index].tags?.map((tag) => (
              <span className="tag__Tag">{tag}</span>
            ))}
          </p>
          <div className="icon__Group">
            {slideData[index].github && (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={slideData[index].github}
              >
                <img alt="Github" src="/icons/github.png" />
              </a>
            )}
            {slideData[index].link && (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={slideData[index].link}
              >
                <img alt="Github" src="/icons/link.png" />
              </a>
            )}{" "}
          </div>
        </InfoPane>
      </div>
      <div className="right">
        <Slider heading="Work" slides={slideData} callback={setIndex} />
      </div>
    </div>
  );
}
export default memo(Projects);
