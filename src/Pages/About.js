import React, { memo, useState } from "react";

import InfoPane from "../Components/InfoPane";
import FadeIn from "react-fade-in";
import Typewriter from "../Components/Typewriter";

const language = {
  text: [
    "I am fluent in English.",
    "നാട്ടിൽ എവിടെയാ ?",
    "मैं कठिनाई से हिंदी बोल सकता हूं.",
    "¿Hola! Cómo estás?",
  ],
  caption: [
    "It's my preferred medium of communication.",
    "Malayalam is my native language.",
    "I can speak a bit of Hindi.",
    "I've been learning Spanish for a year.",
  ],
};

function About() {
  const [index, setIndex] = useState(0);

  return (
    <div className="container about">
      <div className="left">
        <InfoPane className="infopane__text">
          <p>
            HELLO,
            <br />
            WORLD!
          </p>
          <p>I'M ADERSH</p>
        </InfoPane>
      </div>
      <div className="right">
        {/* <Header first="About Me" /> */}
        <div className="about--text">
          <h4 className="about--text__heading">Who is this? You may ask</h4>
          <p>
            <span className='about--text__bold'>I</span> am a 23 year old developer from Kerala, India with experience in
            web development, cybersecurity and automation. Fuelled by a passion
            for programming, I consider myself a forever student, eager to keep
            up with developments in the industry and to continually improve
            myself.
          </p>
          <p>
            Over the years I have developed numerous websites and applications.
            This website was made to showcase my skills and love for software
            development.
          </p>
          <p>
            <br />I enjoy taking on responsibility and solving problems through
            collaboration. Communication is a key competency for me and my
            language skills include the below languages.
          </p>
          <div className="languages">
            <div className="language">
              <Typewriter text={language.text} speed="50" callback={setIndex} />
              <FadeIn
                className="language__caption"
                key={language.caption[index - 1]}
              >
                {language.caption[index - 1]}
              </FadeIn>
            </div>
          </div>
          <p>
            If you are looking for a talented developer and is impressed by what
            you see here, feel free to reach out to me at: <a className='about--text__link' href="mailto:hi@adershmanoj.dev">hi@adershmanoj.dev</a>  
          </p>
        </div>
      </div>
    </div>
  );
}
export default memo(About);
