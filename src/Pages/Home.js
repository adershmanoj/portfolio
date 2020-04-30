import React from 'react';
import Typewriter from '../Components/Typewriter';

function Home() {
    const interests = ["Programming", "Web Development", "Cyber Security", "Hackathons"];
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
                <p className='code'><code className='code--lightblue'>adersh</code>.<code className='code--yellow'>push</code>(<Typewriter className='code--red' text={interests}/>);</p>
            </div>
        </div>
    )
}
export default Home