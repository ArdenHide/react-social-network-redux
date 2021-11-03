import React from "react";
import Preloader from "../../Shared/Preloader/Preloader";
import userPhoto from "../../../Assets/img/user.jpg"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="bg-dark py-2 mb-4">
                    <div className="container text-white">
                        <h1 className="fs-1">Profile</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 col-xl-2 d-flex flex-column">
                        <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className='img-fluid mb-2' alt='avatar' />
                        <MDBBtn className="mb-2">Follow</MDBBtn>
                        <MDBBtn className="mb-2" color='warning'>
                            <MDBIcon className='me-2' far icon='envelope' />
                            Send message
                        </MDBBtn>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9 col-xl-10 d-flex flex-wrap flex-md-row justify-content-between">
                        <div className="d-flex flex-column">
                            <h2 className="fs-2">Full name: {props.profile.fullName}</h2>
                            <p className="fs-5">{props.profile.aboutMe ? `About me: ${props.profile.aboutMe}` : "This user does not tell about himself"}</p>
                            {props.profile.lookingForAJob ? <p>Status: {props.profile.lookingForAJobDescription}</p> : null}
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-4">Age: 20</p>
                            <p className="fs-4">Country, city: Украина, Одесса</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default ProfileInfo;