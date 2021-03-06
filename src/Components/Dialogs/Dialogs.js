import React from "react";
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { MDBBtn, MDBValidation } from 'mdb-react-ui-kit';
import { Field, reduxForm } from "redux-form";
import { Textarea } from './../Shared/FormControls/FormControls';
import { maxLengthCreator, requiredField } from "../../Helpers/FormValidator";

function Dialogs(props) {
    let dialogsElements = props.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} userName={d.userName} />
    );
    let messagesElements = props.messagesData.map(m =>
        <Message key={m.id} message={m.message} />
    );

    function scrollDialog() {
        let dialog = document.getElementById("dialog-wrapper");
        dialog.scrollTop = dialog.scrollHeight;
    }

    function submit(formData) {
        if (formData.newMessage.length) {
            props.sendMessage(formData.newMessage);
        }
        scrollDialog();
        console.log(formData);
    }
    return (
        <div className="col-12 col-md-9 col-lg-10">
            <div className="row h-100">
                <div className="d-none d-sm-block col-sm-4 col-md-5 col-lg-3" style={{ backgroundColor: '#BDBDBD' }}>
                    <div className="nav flex-column nav-pills text-center" aria-orientation="vertical">
                        {dialogsElements}
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-7 col-lg-9">
                    <div id="dialog-wrapper" className="h-100 mb-3" style={{ backgroundColor: '#E0E0E0', overflowY: 'scroll', maxHeight: '68vh' }}>
                        {messagesElements}
                    </div>
                    <ReduxSendMessageForm onSubmit={submit} />
                </div>
            </div>
        </div>
    );
}
const maxLength50 = maxLengthCreator(50);
function SendMessageForm(props) {
    return (
        <MDBValidation onSubmit={props.handleSubmit} noValidate>
            <div className="mx-3">
                <div className="mb-5">
                    <Field component={Textarea} name={'newMessage'}
                        validate={[requiredField, maxLength50]}
                        label="Enter message" />
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
                    <MDBBtn>Send message</MDBBtn>
                </div>
            </div>
        </MDBValidation>
    )
}
const ReduxSendMessageForm = reduxForm({ form: 'sendMessage' })(SendMessageForm)

export default Dialogs;