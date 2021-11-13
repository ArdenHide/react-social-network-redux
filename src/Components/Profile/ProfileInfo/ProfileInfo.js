import React from "react";
import Preloader from "../../Shared/Preloader/Preloader";
import userPhoto from "../../../Assets/img/user.jpg"
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

class ProfileInfo extends React.Component {
    
    state = {
        aboutMeEditMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }
    activateAboutMeEditMode = () => {
        this.setState({
            aboutMeEditMode: true
        });
    }
    deactivateAboutMeEditMode = () => {
        this.setState({
            aboutMeEditMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        if (!this.props.profile) {
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
                                    this.props.profile.photos.large != null
                                        ? this.props.profile.photos.large
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
                                <h2 className="fs-2">Full name: {this.props.profile.fullName}</h2>
                                <div className="fs-5">
                                    {
                                        this.props.profile.aboutMe
                                            ? this.state.aboutMeEditMode
                                                ? <div className="d-flex align-items-center w-100">
                                                    <MDBBtn onClick={this.deactivateAboutMeEditMode}>
                                                        <MDBIcon className='me-2' fas icon='edit' />
                                                        Save "About me"
                                                    </MDBBtn>
                                                    <MDBInput onChange={this.onStatusChange} label='About me' id='typeText' type='text' value={this.state.status} />
                                                </div>
                                                : <div className="d-flex w-100">
                                                    <MDBBtn onClick={this.activateAboutMeEditMode}>
                                                        <MDBIcon className='me-2' fas icon='edit' />
                                                        Edit "About me"
                                                    </MDBBtn>
                                                    <span>About me:{this.props.status}</span>
                                                </div>
                                            : <p>This user does not tell about himself</p>
                                    }
                                </div>
                                {this.props.profile.lookingForAJob ? <p>Status: {this.props.profile.lookingForAJobDescription}</p> : null}
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
}

export default ProfileInfo;