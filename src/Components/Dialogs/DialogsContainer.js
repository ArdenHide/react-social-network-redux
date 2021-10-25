import React from "react";
import { updateNewMessageInputActionCreator, sendMessageActionCreator } from '../../Redux/DialogsActionsCreators';
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    let state = props.store.getState();
    return (
        <Dialogs
            updateNewMessageInput={(message) => {
                let action = updateNewMessageInputActionCreator(message);
                props.store.dispatch(action);
            }}
            sendMessage={(message) => {
                let action = sendMessageActionCreator(message);
                props.store.dispatch(action);
            }}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            newMessage={state.dialogsPage.newMessage}>
        </Dialogs>
    );
}

export default DialogsContainer;