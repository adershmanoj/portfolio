import React, { memo, useState } from "react";
import FadeIn from "react-fade-in";
import Typewriter from "../Components/Typewriter";

const data = [
  {
    name: "Skills",
    data: [
      {
        name: "React",
        category: "Web Development",
        logo: "react.png",
      },
      {
        name: "JavaScript",
        category: "Web Development",
        logo: "javascript.png",
      },
      {
        name: "Java",
        category: "Backend",
        logo: "java.png",
      },
      {
        name: "Spring",
        category: "Backend",
        logo: "spring.png",
      },
      {
        name: "Python",
        category: "Backend / Scripting",
        logo: "python.png",
      },
      {
        name: "MySQL",
        category: "Database Management",
        logo: "mysql.png",
      },
      {
        name: "Docker",
        category: "DevOps",
        logo: "docker.png",
      },
      {
        name: "AWS",
        category: "DevOps",
        logo: "aws.png",
      },
      {
        name: "Agile",
        category: "Software Development",
        logo: "agile.png",
      },
    ],
  },
  {
    name: "Certifications",
    data: [
      {
        name: "Cloud Architecture with GCP Specialization",
        category: "Coursera",
        logo: "coursera.png",
      },
      {
        name: "eLearnSecurity Junior Penetration Tester",
        category: "eLearnSecurity",
        logo: "ejpt.png"
      },
      {
        name: "Advanced JAVA",
        category: "Simplilearn",
        logo: "simplilearn.png"
      }
    ],
  },
];

const language = {
  languageText: [
    "I am fluent in English.",
    "നാട്ടിൽ എവിടെയാ ?",
    "मैं कठिनाई से हिंदी बोल सकता हूं.",
    "¿Hola! Cómo estás?",
  ],
  languageDescription: [
    "It's my preferred medium of communication.",
    "Malayalam is my native language.",
    "I can speak a bit of Hindi.",
    "I've been learning Spanish for a year.",
  ],
};
function Skills() {
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      {data.map((item) => (
        <div className="skills">
          <h1 className="title">{item.name}</h1>
          <div className="skills--container">
            {item.data?.map((skill) => (
              <div className="card skill">
                <div className="skill--logo">
                  <img src={"./icons/" + skill.logo} alt={skill.name} />
                </div>
                <div className="skill--info">
                  <h4>{skill.category}</h4>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="languages">
        <h1 className="title">LANGUAGES</h1>
        <div className="language">
          <Typewriter
            text={language.languageText}
            speed="50"
            callback={setIndex}
          />
          <FadeIn
            className="language__caption"
            key={language.languageDescription[index - 1]}
          >
            {language.languageDescription[index - 1]}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default memo(Skills);
