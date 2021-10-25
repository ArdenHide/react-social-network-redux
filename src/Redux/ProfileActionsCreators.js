export function addPostActionCreator(title, text) {
    return { type: 'ADD-POST', postTitle: title, postText: text };
}
export function onChangePostInputActionCreator(title, text) {
    return { type: 'UPDATE-POST-INPUT', postTitle: title, postText: text };
}