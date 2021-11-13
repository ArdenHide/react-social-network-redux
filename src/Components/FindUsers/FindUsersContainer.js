import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    getUsers
} from './../../Redux/FindUsersReducer';
import FindUsers from "./FindUsers";
import { WithAuthRedirect } from './../../Hoc/WithAuthRedirect';
import { compose } from "redux";

class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return (
            <FindUsers users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                isBlockedFollowBtn={this.props.isBlockedFollowBtn}
            />
        );
    }
}

function mapState(state) {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        isBlockedFollowBtn: state.findUsersPage.isBlockedFollowBtn
    };
}
let mapDispatch = {
    follow,
    unfollow,
    getUsers
}
const FindUsersContainer = compose(
    connect(mapState, mapDispatch),
    WithAuthRedirect
)(FindUsersAPI);

export default FindUsersContainer;