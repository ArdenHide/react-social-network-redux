import { authAPI } from "../Api/Api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let _initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

function AuthReducer(state = _initialState, action) {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data, isAuth: true };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
    }
}

function setUserData(id, email, login) { return { type: SET_USER_DATA, data: {id, email, login} }; }
function toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }; }

export function getUserData() {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.getUser().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login));
            }
            dispatch(toggleIsFetching(false));
        });
    }
}

export default AuthReducer;