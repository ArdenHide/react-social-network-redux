export function updateNewMessageInputActionCreator(message) {
    return { type: 'UPDATE-NEW-MESSAGE-INPUT', newMessage: message };
}
export function sendMessageActionCreator(message) {
    return { type: 'SEND-MESSAGE', newMessage: message };
}