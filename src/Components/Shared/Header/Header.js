import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

function Header() {
    return (

        <header className="bg-dark">
            <nav className="navbar navbar-dark navbar-expand-md">
                <div className="container">
                    <Logo />
                    <Nav />
                </div>
            </nav>
        </header>
    );
}

export default Header;