import React, { memo } from 'react';

const InfoPane = ({ children }) => {
    return (
        <div className='infopane'>
            <div className="infopane__text">
                {children}
                {/* {data.map((text) => <p key={text}>{text}</p>)} */}
            </div>
        </div>
    )
};

export default memo(InfoPane);

InfoPane.defaultProps = {
    children: null
};