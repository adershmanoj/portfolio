import React, { useState } from "react";
import Typewriter from "../Components/Typewriter";
import FadeIn from "react-fade-in";
import Portrait from "../Components/Portrait";
import Header from "../Components/Header";

function Home() {
  const interests = [
    "Coding",
    "Web Development",
    "Cyber Security",
    "Hackathons",
    "Reading",
    "Travelling",
    "...more",
  ];
  const typewriterSettings = {
    speed: 75,
    delay: 100,
  };
  const [index, setIndex] = useState(0);
  const returncurrentInterests = () =>
    interests.slice(0, index).map((element, idx) =>
      idx === interests.length - 1 ? (
        <FadeIn key={element} className="fade code--red">
          {element}&nbsp;
        </FadeIn>
      ) : (
        <FadeIn key={element} className="fade code--red">
          {element},&nbsp;
        </FadeIn>
      )
    );
  return (
    <div className="container home">
      <div className="left">
        <Portrait />
      </div>
      <div className="right">
        {window.innerWidth > 600 && (
          <Header first="ADERSH" last="MANOJ" height="500" />
        )}
        <div className="code">
          <p>
            <code className="code--darkblue">const</code>{" "}
            <code className="code--lightblue">adersh</code>:{" "}
            <code className="code--green">Array</code>&lt;
            <code className="code--green">Interests</code>&gt;;
          </p>
          <div>
            <code className="code--lightblue">adersh</code>.
            <code className="code--yellow">push</code>(
            <div className="code__typing"><Typewriter
              callback={setIndex}
              {...typewriterSettings}
              className="code--red"
              text={interests}
            />
            );
            </div>
          </div>
          <div className="code__block">[ {returncurrentInterests()}]</div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Home);
