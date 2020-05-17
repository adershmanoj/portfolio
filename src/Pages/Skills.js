import React, { memo, useState } from 'react';

function Skills() {
    return (
        <div className='skills'>
            <div className='skills--header'>Skills</div>
            <div className='skills--container'>
                <div className='skill'>
                    <div className='skill--logo'><img src='javascript.png' alt='javascript' /></div>
                    <div className='skill--info'>
                        <h4>Web Development</h4>
                        <h3>Javascript</h3>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill--logo'><img src='javascript.png' alt='javascript' /></div>
                    <div className='skill--info'>
                        <h4>Web Development</h4>
                        <h3>Javascript</h3>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill--logo'><img src='javascript.png' alt='javascript' /></div>
                    <div className='skill--info'>
                        <h4>Web Development</h4>
                        <h3>Javascript</h3>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default memo(Skills);