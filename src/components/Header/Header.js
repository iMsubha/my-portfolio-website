import React from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import HeaderTop from '../HeaderTop/HeaderTop';

const Header = () => {
    return (
        <div style={{backgroundImage:'var(--bg-color)'}}>
            <HeaderTop/>
            <HeaderBottom/>
        </div>
    );
};

export default Header;