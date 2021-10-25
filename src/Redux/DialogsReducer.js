const UPDATE_NEW_MESSAGE_INPUT = 'UPDATE-NEW-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let _initialState = {
    dialogsData: [
        { id: 1, userName: "Санек" },
        { id: 2, userName: "Оля" },
        { id: 3, userName: "Яна" },
        { id: 4, userName: "Аня" }
    ],
    messagesData: [
        { id: 1, message: "Привет Санек" },
        { id: 2, message: "Привет Оля" },
        { id: 3, message: "Привет Яна" },
        { id: 4, message: "Привет Аня" },
        { id: 5, message: "Привет Стасян" },
        { id: 6, message: "Привет Стасян" },
        { id: 7, message: "Привет Стасян" },
        { id: 8, message: "Привет Стасян" },
        { id: 9, message: "Привет Стасян" },
        { id: 10, message: "Привет Стасян" },
        { id: 11, message: "Привет Стасян" },
        { id: 12, message: "Привет Стасян" },
        { id: 13, message: "Привет Стасян" },
        { id: 14, message: "Привет Стасян" },
        { id: 15, message: "Привет Стасян" },
        { id: 16, message: "Привет Стасян" },
        { id: 17, message: "Привет Стасян" },
        { id: 18, message: "Привет Стасян" },
        { id: 19, message: "Привет Стасян" },
    ],
    newMessage: 'Enter new message'
}

function DialogsReducer(state = _initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_INPUT:
            state.newMessage = action.newMessage;
            return state;

        case SEND_MESSAGE:
            let newMessageItem = {
                id: state.messagesData.length + 1,
                message: action.newMessage
            };
            state.messagesData.push(newMessageItem);
            return state;

        default:
            return state;
    }
}

export default DialogsReducer;