import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
});

let store = createStore(reducers);

export default store;