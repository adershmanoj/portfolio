import React, { memo } from 'react';

const InfoPane = ({ data }) => {
    return (
        <div className='helloworld'>
            <div className="helloworld__text">
                {data.map((text) => <p>{text}</p>)}
            </div>
        </div>
    )
};

export default memo(InfoPane);

InfoPane.defaultProps = {
    data: []
};