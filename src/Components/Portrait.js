import React, { memo, useEffect, useState } from 'react';
import { ReactComponent as PortraitSvg } from './../crop2.svg';


const Portrait = () => {
    const [active, setActive] = useState(false);
    const [first, setFirst] = useState(true);

    useEffect(() => {
        if (first) {
            setActive(true);
            setFirst(false);
        }
        else {
            const timer1 = setTimeout(() => setActive(prevState => !prevState), 7000);
            return () => {
                clearTimeout(timer1)
            }
        }

    }, [active, first]);

    return (
        <div className='portrait'>
            <PortraitSvg className={active ? 'animate' : undefined} />
        </div>
    )
}

export default memo(Portrait);