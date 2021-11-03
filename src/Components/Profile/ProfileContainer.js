import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import Profile from "./Profile";
import { setUserProfile } from './../../Redux/ProfileReducer';
import { withRouter } from "react-router";

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId != null) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
                this.props.setUserProfile(response.data);
            });
        } else {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12`).then(response => {
                this.props.setUserProfile(response.data);
            });
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

function mapState(state) {
    return {
        profile: state.profilePage.profile
    };
}
let mapDispatch = {
    setUserProfile
}
let withRouterProfileAPI = withRouter(ProfileAPI);
const ProfileContainer = connect(mapState, mapDispatch)(withRouterProfileAPI);
export default ProfileContainer;