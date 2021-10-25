import React from "react";
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';

function Dialogs(props) {
    let dialogsElements = props.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} userName={d.userName} />
    );
    let messagesElements = props.messagesData.map(m =>
        <Message key={m.id} message={m.message} />
    );
    let newMessageInput = React.createRef();

    function updateNewMessageInput() {
        let newMessageValue = newMessageInput.current.value;
        props.updateNewMessageInput(newMessageValue);
    }
    function sendMessage() {
        let newMessageValue = newMessageInput.current.value;
        props.sendMessage(newMessageValue);

        //Скролл в конец сообщений
        let dialog = document.getElementById("dialog-wrapper");
        dialog.scrollTop = dialog.scrollHeight;
    }
    function scrollDialog() {
        alert("Ya zagruzilsya");
        let dialog = document.getElementById("dialog-wrapper");
        dialog.scrollTop = dialog.scrollHeight;
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
                    <div id="dialog-wrapper" onLoad={scrollDialog} className="h-100 mb-3" style={{ backgroundColor: '#E0E0E0', overflowY: 'scroll', maxHeight: '80vh' }}>
                        {messagesElements}
                    </div>
                    <div className="mx-3">
                        <div className="mb-3">
                            <MDBInput onChange={updateNewMessageInput} value={props.newMessage} inputRef={newMessageInput}
                                label='Message' textarea rows={2} />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
                            <MDBBtn onClick={sendMessage}>Send message</MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;