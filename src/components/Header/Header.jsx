import React from 'react';
import {IMAGES} from '../../utils/constants.jsx';

export function Header() {
    return (
        <header className="header">
        <img src={IMAGES.logo} alt="Around the U.S. Logo" className="header__logo" />
        <img src={IMAGES.line} alt="Line" className="header__line" />
        </header>
    );
    
}
