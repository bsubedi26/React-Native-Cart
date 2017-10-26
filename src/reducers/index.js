import { combineReducers } from "redux";
import user from "./user";
import nav from "./nav";
import auth from "./auth";


export default combineReducers({
    user,
    nav,
    auth
});