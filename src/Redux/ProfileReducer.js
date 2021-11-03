const ADD_POST = 'ADD-POST';
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    newPostTitle: 'Title',
    newPostText: 'Post text',
    profile: null
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
        case UPDATE_POST_INPUT: {
            let stateCopy = {...state};
            stateCopy.newPostTitle = action.postTitle;
            stateCopy.newPostText = action.postText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export function addPost(title, text) {
    return { type: ADD_POST, postTitle: title, postText: text };
}
export function onChangePostInput(title, text) {
    return { type: UPDATE_POST_INPUT, postTitle: title, postText: text };
}
export function setUserProfile(profile) { return { type: SET_USER_PROFILE, profile}; }

export default ProfileReducer;