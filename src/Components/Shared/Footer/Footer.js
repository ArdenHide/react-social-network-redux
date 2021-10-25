import React from 'react';
import Classes from './Footer.module.css'

function Footer() {
    return (
        <footer className={Classes.footer}>
            <span className="fs-6 my-3">&copy; React Project.</span>
        </footer>
    );
}

export default Footer;