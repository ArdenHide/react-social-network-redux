import thunkMiddleware from 'redux-thunk'
import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
import FindUsersReducer from './FindUsersReducer';
import AuthReducer from './AuthReducer';
import { reducer as formReducer } from 'redux-form';
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    findUsersPage: FindUsersReducer,
    auth: AuthReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;