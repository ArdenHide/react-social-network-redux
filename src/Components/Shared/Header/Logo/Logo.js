import React from 'react';
import logo from '../../../../logo.svg';
import './Logo.css'

function Logo() {
    return (
        <img src={logo} className="navbar-brand logo-image" alt="logo" />
    );
}

export default Logo;