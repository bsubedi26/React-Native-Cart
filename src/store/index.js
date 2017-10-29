import { combineReducers } from "redux";
import products from './products';
import cart from './cart';
import nav from './nav';

export default combineReducers({
    products,
    cart,
    nav
})
