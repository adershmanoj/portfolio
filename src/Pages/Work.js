import React, { memo, useState } from 'react';
import InfoPane from '../Components/InfoPane';
import Header from '../Components/Header';
import Slider from '../Components/Slider'

const slideData = [
    {
        index: 0,
        headline: 'New Fashion Apparel',
        button: 'Shop now',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
        index: 1,
        headline: 'In The Wilderness',
        button: 'Book travel',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
        index: 2,
        headline: 'For Your Current Mood',
        button: 'Listen',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
        index: 3,
        headline: 'Focus On The Writing',
        button: 'Get Focused',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
]

function Work() {
    return (
        <div className='container work'>
            <div className='left'>
                <InfoPane data={["Here are some of my works!"]} />
            </div>
            <div className='right'>
                <Slider heading="Work" slides={slideData} />
            </div>
        </div>
    )
}
export default memo(Work);
