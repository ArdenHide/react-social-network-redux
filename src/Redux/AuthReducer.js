import { stopSubmit } from "redux-form";
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
            return { ...state, ...action.data };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
    }
}

function setUserData(id, email, login, isAuth) { return { type: SET_USER_DATA, data: {id, email, login, isAuth} }; }
function toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }; }

export function getUserData() {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        return authAPI.getUser().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
            dispatch(toggleIsFetching(false));
        });
    }
}

export function login(email, password, rememberMe) {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData());
            } else {
                let errorMessages = response.data.messages.length > 0 ? response.data.messages[0] : "Error!";
                alert(response.data.messages[0]);
                dispatch(stopSubmit('login', {_error: errorMessages}));
            }
        });
    }
}

export function logout() {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
    }
}

export default AuthReducer;