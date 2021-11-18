import { createSelector } from "reselect";

export const selector = {
    getUsers(state) {
        return state.findUsersPage.users;
    },
    getPageSize(state) {
        return state.findUsersPage.pageSize;
    },
    getCurrentPage(state) {
        return state.findUsersPage.currentPage;
    },
    getIsFetching(state) {
        return state.findUsersPage.isFetching;
    },
    getIsBlockedFollowBtn(state) {
        return state.findUsersPage.isBlockedFollowBtn;
    }
}

export const getUsersReselector = createSelector(selector.getUsers, (users) => {
    return users.filter(u => true);
});