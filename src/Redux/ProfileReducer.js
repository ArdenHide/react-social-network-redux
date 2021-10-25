const ADD_POST = 'ADD-POST';
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';

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
    newPostText: 'Post text'
}

function ProfileReducer(state = _initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                title: action.postTitle,
                text: action.postText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            return state;

        case UPDATE_POST_INPUT:
            state.newPostTitle = action.postTitle;
        state.newPostText = action.postText;
            return state;

        default:
            return state;
    }
}

export default ProfileReducer;