import React, {useState} from 'react';
import Typewriter from '../Components/Typewriter';

function Home() {
    const interests = ["Coding", "Web Development", "Cyber Security", "Hackathons", "Reading", "Travelling", "...more"];
    const typewriterSettings = {
        speed: 100,
        delay: 100
    };
    const [index, setIndex] = useState(0);
    const printInterest = (index) => setIndex(index);
    return (
        <div className='container'>
            <div id='stars'></div>
            <div className='left'>
                <div className = 'helloworld'>
                   <div className = "helloworld__text">
                   <p>Hello,<br/>World!</p>
                   <p>I'm <strong>Adersh</strong></p>
                   </div>
                </div>
            </div> 
            <div className='right'>
                <p className='code'><code className='code--darkblue'>let</code> <code className='code--lightblue'>adersh</code>: <code className='code--green'>Array</code>&lt;<code className='code--green'>Interests</code>&gt;;</p>
                <p className='code'><code className='code--lightblue'>adersh</code>.<code className='code--yellow'>push</code>(<Typewriter callback={printInterest}{...typewriterSettings} className='code--red' text={interests}/>);</p>
                <p className='code code__block'>[{interests.slice(0, index).map((element) => (<span key={element} className="code--red">{element} </span>))}]</p>
            </div>
        </div>
    )
}
export default React.memo(Home)