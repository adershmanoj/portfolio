import React, { memo, useState } from "react";
import InfoPane from "../Components/InfoPane";
import Slider from "../Components/Slider";

const slideData = [
  {
    index: 0,
    data: "Here is a showcase of projects I've worked on.",
    src: "",
  },
  {
    index: 1,
    headline: "Translate Bot",
    button: "Visit",
    src: "translatebot.gif",
    data:
      "Spring MVC app to translate documents with MySQL database and Hibernate ORM. Won first place at Nissan Digithon hackathon.",
    tags: ["Java", "Spring", "Hibernate", "MySQL", "Azure","Spring", "Hibernate", "MySQL", "Azure"],
  },
  {
    index: 2,
    headline: "In The Wilderness",
    button: "Visit",
    src: "notes.jpg",
  },
  {
    index: 3,
    headline: "For Your Current Mood",
    button: "Visit",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 4,
    headline: "Focus On The Writing",
    button: "Visit",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

function Work() {
  const [index, setIndex] = useState(0);

  return (
    <div className="container work">
      <div className="left">
        <InfoPane>
          <h4>{slideData[index].headline}</h4>
          <p style={{ textAlign: "left" }}>{slideData[index].data}</p>
          <p className='tag__Group'>
            {slideData[index].tags?.map((tag) => (
              <span className="tag__Tag">{tag}</span>
            ))}
          </p>
        </InfoPane>
      </div>
      <div className="right">
        <Slider heading="Work" slides={slideData} callback={setIndex} />
      </div>
    </div>
  );
}
export default memo(Work);
