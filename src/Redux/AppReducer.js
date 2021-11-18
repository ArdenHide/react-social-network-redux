import { getUserData } from './AuthReducer';
const SET_INITIALIZED = 'SET-INITIALIZED';

let _initialState = {
    initialized: false
}

function AppReducer(state = _initialState, action) {
    switch (action.type) {
        case SET_INITIALIZED: {
            return { ...state, initialized: true };
        }
        default:
            return state;
    }
}

function initializingSuccsess() { return { type: SET_INITIALIZED }; }

export function initialize() {
    return (dispatch) => {
        let promise = dispatch(getUserData());
        Promise.all([promise]).then(() => {
            dispatch(initializingSuccsess());
        });
    }
}

export default AppReducer;