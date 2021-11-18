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