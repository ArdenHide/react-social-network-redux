import React from "react";
import { NavLink } from "react-router-dom";

function NavButton() {
    return (
        <button className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <i className="fas fa-bars"></i>
        </button>
    );
}

function NavbarLink(props) {
    return (
        <NavLink to={`${props.href}`} className={`${props.classes}`}>{props.text}</NavLink>
    );
}

function Nav() {
    return (
        <div>
            <NavButton />
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavbarLink href="/Profile" text='Profile' classes="nav-link" />
                    <NavbarLink href="/Dialogs" text='Messages' classes="nav-link" />
                    <NavbarLink href="/News" text='News'  classes="nav-link disabled" />
                    <NavbarLink href="/Music" text='Music' classes="nav-link disabled" />
                    <NavbarLink href="/Settings" text='Settings' classes="nav-link disabled" />
                </div>
            </div>
        </div>
    );
}

export default Nav;