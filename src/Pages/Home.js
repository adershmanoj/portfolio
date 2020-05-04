import React, { useState } from 'react';
import Typewriter from '../Components/Typewriter';
import FadeIn from 'react-fade-in';
import InfoPane from '../Components/InfoPane';
import Portrait from '../Components/Portrait';
import Header from '../Components/Header';

function Home() {
    const interests = ["Coding", "Web Development", "Cyber Security", "Hackathons", "Reading", "Travelling", "...more"];
    const typewriterSettings = {
        speed: 75,
        delay: 100
    };
    const [index, setIndex] = useState(0);
    const returncurrentInterests = () => (
        interests.slice(0, index).map(
            (element, idx) => (idx === interests.length - 1 ?
                <FadeIn key={element} className="fade code--red">{element}&nbsp;</FadeIn> :
                <FadeIn key={element} className="fade code--red">{element},&nbsp;</FadeIn>
            )
        )
    )
    return (
        <div className='container'>
            <div className='left'>
                {/* <InfoPane data = {["Hello,", "World!", "I'M ADERSH"]} /> */}
                <Portrait />
            </div>
            <div className='right'>
                <Header text="ADERSH MANOJ" />
                <div className='code'>
                    <p><code className='code--darkblue'>let</code> <code className='code--lightblue'>adersh</code>: <code className='code--green'>Array</code>&lt;<code className='code--green'>Interests</code>&gt;;</p>
                    <p><code className='code--lightblue'>adersh</code>.<code className='code--yellow'>push</code>(<Typewriter callback={setIndex}{...typewriterSettings} className='code--red' text={interests} />);</p>
                    <div className='code__block'>
                        [ {returncurrentInterests()}]
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Home)