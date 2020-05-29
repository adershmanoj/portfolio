import React, { memo } from "react";

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
        logo: "ejpt.png",
      },
      {
        name: "Advanced JAVA",
        category: "Simplilearn",
        logo: "simplilearn.png",
      },
    ],
  },
  {
    name: "Achievements",
    data: [
      {
        name: "Nissan Digithon '19",
        category: "Nissan Digital",
        logo: "first.png",
      },
      {
        name: "UI / UX Challenge '18",
        category: "College of Engineering, TVM",
        logo: "first.png",
      },
      {
        name: "Web Design Challenge '18",
        category: "Computer Society of India, TVM",
        logo: "second.png",
      },
      {
        name: "Hash Hackathon '18",
        category: "MBCET, TVM",
        logo: "third.png",
      },
    ],
  },
];

function Skills() {
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
    </div>
  );
}

export default memo(Skills);
