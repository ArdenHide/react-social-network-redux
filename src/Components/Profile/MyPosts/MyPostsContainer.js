import React from "react";
import { addPostActionCreator, onChangePostInputActionCreator } from "../../../Redux/ProfileActionsCreators";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
    let state = props.store.getState();
    return (
        <MyPosts
            updatePostInput={(title, text) => {
                let action = onChangePostInputActionCreator(title, text);
                props.store.dispatch(action);
            }}
            addPost={(title, text) => {
                let action = addPostActionCreator(title, text);
                props.store.dispatch(action);
            }}
            postsData={state.profilePage.postsData}
            newPostTitle={state.profilePage.newPostTitle}
            newPostText={state.profilePage.newPostText}
        >
        </MyPosts>
    );
}

export default MyPostsContainer;