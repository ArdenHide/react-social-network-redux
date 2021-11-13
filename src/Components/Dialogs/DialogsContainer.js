import React from "react";
import { connect } from "react-redux";
import { sendMessage } from '../../Redux/DialogsReducer';
import Dialogs from "./Dialogs";
import { WithAuthRedirect } from './../../Hoc/WithAuthRedirect';
import { compose } from "redux";

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
        messagesData: state.dialogsPage.messagesData
    };
}
let mapDispatch = {
    sendMessage
}

const DialogsContainer = compose(
    connect(mapState, mapDispatch),
    WithAuthRedirect
)(DialogsAPI);

export default DialogsContainer;