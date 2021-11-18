import React from "react";
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from './../../Redux/ProfileReducer';
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                return this.props.history.push("/Login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        );
    }
}
function mapState(state) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    };
}
let mapDispatch = {
    getProfile,
    getStatus,
    updateStatus
}
const ProfileContainer = compose(
    connect(mapState, mapDispatch),
    withRouter
)(ProfileAPI);

export default ProfileContainer;