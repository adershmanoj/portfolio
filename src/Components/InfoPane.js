import React, { memo } from 'react';

const InfoPane = ({ data }) => {
    return (
        <div className='infopane'>
            <div className="infopane__text">
                {data.map((text) => <p key={text}>{text}</p>)}
            </div>
        </div>
    )
};

export default memo(InfoPane);

InfoPane.defaultProps = {
    data: []
};