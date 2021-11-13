import React from "react";
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from './../../Redux/ProfileReducer';
import { withRouter } from "react-router";
import { WithAuthRedirect } from './../../Hoc/WithAuthRedirect';
import { compose } from "redux";

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
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
        status: state.profilePage.status
    };
}
let mapDispatch = {
    getProfile,
    getStatus,
    updateStatus
}
const ProfileContainer = compose(
    connect(mapState, mapDispatch),
    withRouter,
    WithAuthRedirect
)(ProfileAPI);

export default ProfileContainer;