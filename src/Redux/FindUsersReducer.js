import { usersAPI } from './../Api/Api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const BLOCK_FOLLOW_BTN = 'BLOCK-FOLLOW-BTN';

let _initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isBlockedFollowBtn: []
}

function FindUsersReducer(state = _initialState, action) {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching, users: [] };
        }
        case BLOCK_FOLLOW_BTN: {
            return { ...state, isBlockedFollowBtn: action.isBlockedFollowBtn ? [...state.isBlockedFollowBtn, action.id] : state.isBlockedFollowBtn.filter(id => id !== action.id) };
        }
        default:
            return state;
    }
}

function followSuccess(id) { return { type: FOLLOW, id }; }
function unfollowSuccess(id) { return { type: UNFOLLOW, id }; }
function setUsers(users) { return { type: SET_USERS, users }; }
function setCurrentPage(currentPage) { return { type: SET_CURRENT_PAGE, currentPage }; }
function setTotalUsersCount(totalUsersCount) { return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }; }
function toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching }; }
function blockFollowBtn(isBlockedFollowBtn, id) { return { type: BLOCK_FOLLOW_BTN, isBlockedFollowBtn, id }; }

/* Thunks */
export function getUsers(currentPage, pageSize) {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getFindUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export function follow(id) {
    return (dispatch) => {
        dispatch(blockFollowBtn(true, id));
        usersAPI.follow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(blockFollowBtn(false, id));
        });
    }
}

export function unfollow(id) {
    return (dispatch) => {
        dispatch(blockFollowBtn(true, id));
        usersAPI.unfollow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(blockFollowBtn(false, id));
        });
    }
}


export default FindUsersReducer;