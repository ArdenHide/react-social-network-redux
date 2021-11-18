import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    getUsers
} from './../../Redux/FindUsersReducer';
import FindUsers from "./FindUsers";
import { compose } from "redux";
import { selector } from './../../Redux/FindUsersSelectors';

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
        users: selector.getUsers(state),
        pageSize: selector.getPageSize(state),
        currentPage: selector.getCurrentPage(state),
        isFetching: selector.getIsFetching(state),
        isBlockedFollowBtn: selector.getIsBlockedFollowBtn(state)
    };
}
let mapDispatch = {
    follow,
    unfollow,
    getUsers
}
const FindUsersContainer = compose(
    connect(mapState, mapDispatch)
)(FindUsersAPI);

export default FindUsersContainer;