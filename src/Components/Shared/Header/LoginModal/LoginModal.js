import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit';

function LoginModal(props) {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    return (
        <>
            <MDBBtn color='dark' onClick={toggleShow}>Login</MDBBtn>
            <MDBModal show={basicModal} getOpenState={(e) => setBasicModal(e)} tabIndex='-1' staticBackdrop>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <h3 className="text-center fs-3 mb-3">Sign in</h3>
                            <div className="mb-3">
                                <MDBInput label='Example label' id='formTextExample1' type='email' aria-describedby='textExample1' />
                                <div id='textExample1' className='form-text'>
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div>
                                <MDBInput label='Password input' id='typePassword' type='password' />
                                <div id='typePassword' className='form-text'>
                                    We'll never share your password with anyone else.
                                </div>
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='dark' onClick={toggleShow}>Close</MDBBtn>
                            <MDBBtn color='primary'>Login</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default LoginModal;