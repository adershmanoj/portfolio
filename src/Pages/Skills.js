import React, { memo, useState } from 'react';

const skills = [
    {
        name: 'ReactJs',
        category: 'Web Development',
        logo: 'react.png'
    },
    {
        name: 'JavaScript',
        category: 'Web Development',
        logo: 'javascript.png'
    },
    {
        name: 'Java',
        category: 'Backend',
        logo: 'java.png'
    },
    {
        name: 'Spring',
        category: 'Backend',
        logo: 'spring.png'
    },
    {
        name: 'Python',
        category: 'Backend / Scripting',
        logo: 'python.png'
    }
]

function Skills() {
    return (
        <div className='skills'>
            <div className='skills--header'>Skills</div>
            <div className='skills--container'>
                {skills.map(skill => (
                    <div className='skill'>
                        <div className='skill--logo'><img src={'./icons/' + skill.logo} alt={skill.name} /></div>
                        <div className='skill--info'>
                            <h4>{skill.category}</h4>
                            <h3>{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Skills);