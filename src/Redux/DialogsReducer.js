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
    ]
}

function DialogsReducer(state = _initialState, action) {
    let stateCopy = { ...state, messagesData: [...state.messagesData] };

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageItem = {
                id: state.messagesData.length + 1,
                message: action.newMessage
            };
            stateCopy.messagesData.push(newMessageItem);
            return stateCopy;
        }
        default:
            return state;
    }
}

export function sendMessage(message) {
    return { type: SEND_MESSAGE, newMessage: message };
}

export default DialogsReducer;