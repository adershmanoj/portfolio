import React, { memo, useState } from 'react';
import InfoPane from '../Components/InfoPane';
import Slider from '../Components/Slider'

const slideData = [
    {
        index: 0,
        headline: "Here is a showcase of projects I've worked on.",
        src: ''
    },
    {
        index: 1,
        headline: 'New Fashion Apparel',
        button: 'Visit',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
        index: 2,
        headline: 'In The Wilderness',
        button: 'Visit',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
        index: 3,
        headline: 'For Your Current Mood',
        button: 'Visit',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
        index: 4,
        headline: 'Focus On The Writing',
        button: 'Visit',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
]

function Work() {
    const [index, setIndex] = useState(0);

    return (
        <div className='container work'>
            <div className='left'>
                <InfoPane data={[slideData[index].headline]} />
            </div>
            <div className='right'>
                <Slider heading="Work" slides={slideData} callback={setIndex} />
            </div>
        </div>
    )
}
export default memo(Work);
