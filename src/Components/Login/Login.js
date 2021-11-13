import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Field, reduxForm } from "redux-form";

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-4">
                <Field name={'userEmail'} component={'input'} placeholder={'Email'} />
                <div id='userEmailLable' className='form-text'>
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-4">
                <Field name={'userPassword'} component={'input'} placeholder={'Password'} />
                <div id='userPasswordLable' className='form-text'>
                    We'll never share your password with anyone else.
                </div>
            </div>
            <div className="mb-4">
                <Field name={'rememberMe'} component={'input'} type={'checkbox'} /> Remember me?
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <MDBBtn>Sign in</MDBBtn>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

function Login(props) {
    function submit (formData) {
        console.log(formData);
    }
    return (
        <div className="col-12 col-md-9 col-lg-10 p-0">
            <div className="bg-dark py-2 mb-4">
                <div className="container text-white">
                    <h1 className="fs-1">Sign in</h1>
                    <span className="fs-4">You must be logged in to go to the selected page.</span>
                </div>
            </div>
            <div className="container d-flex flex-column justify-content-center">
                <h3 className="text-center fs-3 mb-3">Sign in</h3>
                <ReduxLoginForm onSubmit={submit} />
            </div>
        </div>
    )
}

export default Login