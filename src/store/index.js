import { combineReducers } from "redux";
import products from './products';
import cart from './cart';
import nav from './nav';
import indicator from './indicator';

import { reducer as form } from 'redux-form'

export default combineReducers({
    products,
    cart,
    indicator,

    nav,
    form
})
