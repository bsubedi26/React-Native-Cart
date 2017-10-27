import PHONES from './data/PHONES'

// **********************STATE**********************
const initialState = {
    phones: PHONES,
    cart: [],
    discount: {},
}

// **********************ACTIONS**********************
const SHOPPING_CART_ADD = 'SHOPPING_CART_ADD'
const SHOPPING_CART_REMOVE = 'SHOPPING_CART_REMOVE'

export function cartAdd(payload) {
    return {
        type: SHOPPING_CART_ADD,
        payload
    }
}

export function cartRemove(payload) {
    return {
        type: SHOPPING_CART_REMOVE,
        payload
    }
}

// **********************REDUCERS**********************
export function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SHOPPING_CART_ADD: {
            return {
                ...state,
                cart: state.cart.concat(payload)
            };
        }
        case SHOPPING_CART_REMOVE: {

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            };
        }

        default: return state;
    }
}