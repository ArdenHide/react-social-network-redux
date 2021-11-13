
import { profileAPI, usersAPI } from './../Api/Api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let _initialState = {
    postsData: [
        {
            id: 1,
            title: "Post number one",
            text: "С другой стороны понимание сущности ресурсосберегающих технологий требует анализа укрепления демократической системы.",
            likeCount: 0
        },
        {
            id: 2,
            title: "Post number two",
            text: "С другой стороны понимание сущности ресурсосберегающих технологий требует анализа укрепления демократической системы.",
            likeCount: 30
        }
    ],
    profile: null,
    status: ""
}

function ProfileReducer(state = _initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length + 1,
                title: action.postTitle,
                text: action.postText,
                likeCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export function addPost(title, text) {
    return { type: ADD_POST, postTitle: title, postText: text };
}
function setProfile(profile) { return { type: SET_USER_PROFILE, profile}; }
function setStatus(status) { return { type: SET_USER_STATUS, status}; }

export function getProfile(userId) {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setProfile(response.data));
        });
    }
}
export function getStatus(userId) {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export function updateStatus(status) {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));   
            }
        });
    }
}

export default ProfileReducer;