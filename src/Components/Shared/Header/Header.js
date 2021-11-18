import React, { useState } from 'react';
import {
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
} from 'mdb-react-ui-kit';
import Logo from './Logo/Logo';
import LoginModal from './LoginModal/LoginModal';

function Header(props) {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='md' light bgColor='light'>
            <MDBContainer>
                <MDBNavbarBrand href='/Home'>
                    <Logo />
                </MDBNavbarBrand>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink href="/Profile">Profile</MDBNavbarLink>
                        <MDBNavbarLink href="/Dialogs">Messages</MDBNavbarLink>
                        <MDBNavbarLink href="/News">News</MDBNavbarLink>
                        <MDBNavbarLink href="/Music">Music</MDBNavbarLink>
                        <MDBNavbarLink href="/Settings">Settings</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
                {
                    props.isFetching ? <></> :
                        <div className='d-flex w-auto'>
                            <MDBNavbarToggler className="mx-2" aria-expanded='false' aria-label='Toggle navigation' onClick={() => setShowNavSecond(!showNavSecond)}>
                                <MDBIcon icon='bars' fas />
                            </MDBNavbarToggler>
                            {props.isAuth
                                ? <div>
                                    <MDBBtn className='me-2' color='dark'><MDBIcon className='me-2' icon='user' fas />{props.login}</MDBBtn>
                                    <MDBBtn onClick={props.logout} color='dark'><MDBIcon className='me-2' icon='sign-out-alt' fas />Logout</MDBBtn>
                                    </div>
                                : <LoginModal />}
                        </div>
                }
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Header;