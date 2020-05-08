import React, { memo } from 'react';

const Header = ({ first = "", last = "" , height = 300}) => (
    <div className='header'>
        <svg viewBox={"0 0 900 " + height} preserveAspectRatio="xMidYMid meet" width="40rem">
            <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="50%">{first}</text>
                {last ? <text textAnchor="middle" x="50%" y="100%">{last}</text> : null}
            </symbol>

            <g className="g-ants">
                <use xlinkHref="#s-text"
                    className="text-copy"></use>
                <use xlinkHref="#s-text"
                    className="text-copy"></use>
                <use xlinkHref="#s-text"
                    className="text-copy"></use>
                <use xlinkHref="#s-text"
                    className="text-copy"></use>
                <use xlinkHref="#s-text"
                    className="text-copy"></use>
            </g>
        </svg>
    </div >
)

export default memo(Header);