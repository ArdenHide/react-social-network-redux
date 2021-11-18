import { MDBBtn, MDBValidation } from "mdb-react-ui-kit";
import React from "react";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../Helpers/FormValidator";
import { Email, Password, Checkbox } from "../Shared/FormControls/FormControls";
function LoginForm(props) {
    return (
        <MDBValidation onSubmit={props.handleSubmit} noValidate>
            {props.error && <div className="text-danger mb-2">{props.error}</div>}
            <div className="mb-5">
                <div className='form-text mb-2'>
                    We'll never share your email with anyone else.
                </div>
                <Field name={'userEmail'} component={Email}
                    validate={[requiredField]} required
                    label="Email" labelClass="text-uppercase" />
            </div>
            <div className="mb-5">
                <div className='form-text mb-2'>
                    We'll never share your password with anyone else.
                </div>
                <Field name={'userPassword'} component={Password}
                    validate={[requiredField]} required
                    label="Password" labelClass="text-uppercase" />
            </div>
            <div className="mb-5">
                <Field name={'rememberMe'} component={Checkbox} id='rememberMe' label='Remember me?' />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <MDBBtn>Sign in</MDBBtn>
            </div>
        </MDBValidation>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

function Login(props) {
    function submit(formData) {
        props.login(formData.userEmail, formData.userPassword, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to="/Profile" />
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