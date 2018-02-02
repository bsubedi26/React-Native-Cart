import { combineReducers } from "redux";
import products from './products';
import cart from './cart';
import nav from './nav';
import indicator from './indicator';
import currency from './currency';

export default combineReducers({
    products,
    cart,
    indicator,
    currency,

    nav
})
