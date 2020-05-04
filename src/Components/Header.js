import React, { memo } from 'react';
import { ReactComponent as HeaderSvg } from './../Header.svg';

const Header = ({ text }) => (
    <div className='header'>
        <HeaderSvg />
    </div >
)

export default memo(Header);