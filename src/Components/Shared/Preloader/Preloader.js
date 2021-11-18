import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

function Preloader() {
    return (
        <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center'>
            <MDBSpinner style={{ width: '12rem', height: '12rem' }}><span className='visually-hidden'>Loading...</span></MDBSpinner>
        </div>
    )
}

export default Preloader;