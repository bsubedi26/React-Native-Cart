import PHONES from './data/PHONES'

const initialState = {
    phones: PHONES,
    cart: [],
    discount: {},
}

export function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                cart: state.cart.concat(payload)
            };
        }
        case 'REMOVE_FROM_CART': {

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            };
        }

        default: return state;
    }
}