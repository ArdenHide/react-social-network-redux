import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
import FindUsersReducer from './FindUsersReducer';
import AuthReducer from './AuthReducer';
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    findUsersPage: FindUsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers);
window.store = store;
export default store;