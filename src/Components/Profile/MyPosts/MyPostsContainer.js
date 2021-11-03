import React from "react";
import { connect } from "react-redux";
import { addPost, onChangePostInput } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";

function mapState(state) {
    return {
        postsData: state.profilePage.postsData,
        newPostTitle: state.profilePage.newPostTitle,
        newPostText: state.profilePage.newPostText
    };
}
function mapDispatch(dispatch) {
    return {
        updatePostInput: (title, text) => {
            dispatch(onChangePostInput(title, text));
        },
        addPost: (title, text) => {
            dispatch(addPost(title, text));
        }
    };
}
const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);

export default MyPostsContainer;