import React, { memo, useState } from 'react';
import FadeIn from 'react-fade-in';

import InfoPane from '../Components/InfoPane';
import Header from '../Components/Header';
import Typewriter from '../Components/Typewriter';

const languageText = ["I am fluent in English.", "നാട്ടിൽ എവിടെയാ ?", "मैं कठिनाई से हिंदी बोल सकता हूं.", "¿Hola! Cómo estás?"];
const languageDescriptions = ["It's my preferred medium of communication.", "Malayalam is my native language.", "I can speak a bit of Hindi.", "I've been learning Spanish for a year."];
function About() {
    const [index, setIndex] = useState(0);
    return (
        <div className='container about'>
            <div className='left'>
                <InfoPane data={["Hello,", "World!", "I'M ADERSH"]} />
            </div>
            <div className='right'>
                <Header first="About Me" />
                <div className='about--text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies metus eget dui tempor dictum sed a ante. Nullam gravida elit risus, ac pellentesque justo dapibus id. Suspendisse id pellentesque arcu. Cras facilisis non est dapibus sodales. Sed accumsan justo sit amet quam molestie, sed mollis dolor mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tempus tincidunt quam, vitae commodo felis semper a. Praesent sed nibh tempus, aliquam turpis sit amet, vestibulum turpis. Sed tincidunt, libero non consectetur viverra, risus quam porttitor dui, sit amet bibendum odio erat quis dui. Nulla nec nulla risus. Fusce mattis erat vitae nisl dictum, nec lacinia lacus imperdiet. Quisque faucibus justo ac erat sagittis egestas. Praesent dapibus pulvinar pretium. Vivamus et nulla ut ante convallis molestie.</p>
                    <p>Nulla in felis semper, egestas lacus vel, venenatis ex. Pellentesque scelerisque orci nec odio finibus, in ullamcorper quam elementum. Nullam quis felis mollis, auctor velit at, rutrum quam. Morbi posuere id urna a vulputate. Quisque luctus tincidunt mattis. Vivamus sed dui eu neque tempor bibendum. Sed feugiat augue tristique felis luctus tincidunt. Aliquam lorem est, ornare vitae eleifend vel, porta et augue. Donec ornare posuere est ut interdum.</p>
                    <h4>LANGUAGES</h4>
                    <div className='about--text--language'>
                        <Typewriter text={languageText} speed="50" callback={setIndex} />
                        <FadeIn className="about--text--language__caption" key={languageDescriptions[index - 1]}>{languageDescriptions[index - 1]}</FadeIn>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default memo(About);