const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let _initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default:
            return state;
    }
}

export function follow(id) { return { type: FOLLOW, id: id }; }
export function unfollow(id) { return { type: UNFOLLOW, id: id }; }
export function setUsers(users) { return { type: SET_USERS, users: users }; }
export function setCurrentPage(currentPage) { return { type: SET_CURRENT_PAGE, currentPage: currentPage }; }
export function setTotalUsersCount(totalUsersCount) { return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount }; }
export function toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }; }

export default FindUsersReducer;