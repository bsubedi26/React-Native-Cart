import { combineReducers } from "redux";

export default combineReducers({
    nav: require('./nav').reducer,
    shopping: require('./shopping').reducer
    // user: require('./user').reducer,
    // auth: require('./auth').reducer,
});