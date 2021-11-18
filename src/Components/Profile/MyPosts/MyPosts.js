import React from "react";
import Post from "./Post/Post";
import { MDBBtn, MDBValidation } from 'mdb-react-ui-kit';
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from "../../../Helpers/FormValidator";
import { Textarea, Input } from './../../Shared/FormControls/FormControls';

function MyPosts(props) {
    let postsElements = props.postsData.map(p =>
        <Post key={p.id} title={p.title} text={p.text} likeCount={p.likeCount} />
    );
    function clickAddPost(formData) {
        console.log(`Title: ${formData.postTitle} Text: ${formData.postText}`);
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

const maxLength20 = maxLengthCreator(20);
const maxLength100 = maxLengthCreator(100);
function AddPostForm(props) {
    return (
        <MDBValidation>
            <div className="mb-5">
                <div className='form-text mb-2'>
                    Title for you post
                </div>
                <Field component={Input} name={'postTitle'}
                    validate={[requiredField, maxLength20]}
                    label="Post title" />
            </div>

            <div className="mb-5">
                <div className='form-text mb-2'>
                    Tell me how are you doing.
                </div>
                <Field component={Textarea} name={'postText'}
                    validate={[requiredField, maxLength100]}
                    label="Post message" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
                <MDBBtn>Create post</MDBBtn>
            </div>
        </MDBValidation>
    )
}
const ReduxSendMessageForm = reduxForm({ form: 'addPost' })(AddPostForm)

export default MyPosts;