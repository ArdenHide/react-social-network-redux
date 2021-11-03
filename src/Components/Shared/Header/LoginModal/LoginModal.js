import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

function LoginModal(props) {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <>
            <MDBBtn color='dark' onClick={toggleShow}>Login</MDBBtn>
            <MDBModal show={basicModal} getOpenState={(e) => setBasicModal(e)} tabIndex='-1'>
                <MDBModalDialog size='lg'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Login</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            
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