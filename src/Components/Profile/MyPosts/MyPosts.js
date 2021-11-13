import React from "react";
import Post from "./Post/Post";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Field, reduxForm } from "redux-form";

function MyPosts(props) {
    let postsElements = props.postsData.map(p =>
        <Post key={p.id} title={p.title} text={p.text} likeCount={p.likeCount} />
    );
    function clickAddPost(formData) {
        props.addPost(formData.postTitle, formData.postText);
    }

    return (
        <div className="container-fluid p-0">
            <div className="bg-dark py-2 mb-2">
                <div className="container text-white">
                    <span className="fs-4">New Post</span>
                </div>
            </div>
            <ReduxSendMessageForm onSubmit={clickAddPost} />
            <div className="row">
                {postsElements}
            </div>
        </div>
    );
}

function AddPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <div className='form-text mb-2'>
                    Title for you post
                </div>
                <Field component={'input'} name={'postTitle'} placeholder="Post title" />
            </div>

            <div className="mb-3">
                <div className='form-text mb-2'>
                    Tell me how are you doing.
                </div>
                <Field component={'textarea'} name={'postText'} placeholder="Post message" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
                <MDBBtn>Create post</MDBBtn>
            </div>
        </form>
    )
}
const ReduxSendMessageForm = reduxForm({ form: 'addPost' })(AddPostForm)

export default MyPosts;