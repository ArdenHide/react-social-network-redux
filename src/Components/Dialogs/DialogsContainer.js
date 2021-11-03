import React from "react";
import { connect } from "react-redux";
import { updateNewMessageInput, sendMessage } from '../../Redux/DialogsReducer';
import Dialogs from "./Dialogs";

class DialogsAPI extends React.Component {
    render() {
        return (
            <Dialogs {...this.props} />
        );
    }
}

function mapState(state) {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessage: state.dialogsPage.newMessage
    };
}
let mapDispatch = {
    updateNewMessageInput,
    sendMessage
}
const DialogsContainer = connect(mapState, mapDispatch)(DialogsAPI);

export default DialogsContainer;