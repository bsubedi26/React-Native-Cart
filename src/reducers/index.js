import { combineReducers } from "redux";

export default combineReducers({
    user: require('./user').reducer,
    nav: require('./nav').reducer,
    auth: require('./auth').reducer,
    shopping: require('./shopping').reducer
});