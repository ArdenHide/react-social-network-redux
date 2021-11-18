import React, { useEffect, useState } from "react";
import Preloader from "../../Shared/Preloader/Preloader";
import userPhoto from "../../../Assets/img/user.jpg"
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

function ProfileInfoHook(props) {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateAboutMeEditMode = () => {
        setEditMode(true);
    }
    const deactivateAboutMeEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className="row" >
            <div className="col-12">
                <div className="bg-dark py-2 mb-4">
                    <div className="container text-white">
                        <h1 className="fs-1">Profile</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 col-xl-2 d-flex flex-column">
                        <img className='img-fluid mb-2' alt='avatar'
                            src={
                                props.profile.photos.large != null
                                    ? props.profile.photos.large
                                    : userPhoto
                            }
                        />
                        <MDBBtn className="mb-2">Follow</MDBBtn>
                        <MDBBtn className="mb-2" color='warning'>
                            <MDBIcon className='me-2' far icon='envelope' />
                            Send message
                        </MDBBtn>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9 col-xl-10 d-flex flex-wrap flex-md-row justify-content-between">
                        <div className="d-flex flex-column w-100">
                            <h2 className="fs-2">Full name: {props.profile.fullName}</h2>
                            <div className="fs-5">
                                {
                                    props.status
                                        ? editMode
                                            ? <div className="d-flex align-items-center w-100">
                                                <MDBBtn onClick={deactivateAboutMeEditMode}>
                                                    <MDBIcon className='me-2' fas icon='edit' />
                                                    Save "About me"
                                                </MDBBtn>
                                                <MDBInput onChange={onStatusChange} label='About me' id='typeText' type='text' value={status} />
                                            </div>
                                            : <div className="d-flex w-100">
                                                <MDBBtn onClick={activateAboutMeEditMode}>
                                                    <MDBIcon className='me-2' fas icon='edit' />
                                                    Edit "About me"
                                                </MDBBtn>
                                                <span>About me:{status}</span>
                                            </div>
                                        : <p>This user does not report himself</p>
                                }
                            </div>
                            {props.profile.lookingForAJob ? <p>Status: {props.profile.lookingForAJobDescription}</p> : null}
                            <p className="fs-4">Age: 20</p>
                            <p className="fs-4">Country, city: Украина, Одесса</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfileInfoHook;