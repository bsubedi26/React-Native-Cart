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


function findByIndex(arr, payload) {
    return arr.findIndex(item => item.id === payload.id)
}
// **********************REDUCERS**********************
export function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SHOPPING_CART_ADD: {
            const index = findByIndex(state.cart, payload)
            
            if (index >= 0) {
                // product already exists in the cart so update the quantity
                //if the index matches the item that is already in the array (update it) 
                const updatedCart = state.cart.map((item, i) => {
                    if (i === index) {
                        let updatedObject = Object.assign({}, item)
                        updatedObject.quantity = updatedObject.quantity + payload.quantity
                        return updatedObject
                    }

                    return item
                })

                return {
                    ...state,
                    cart: updatedCart
                };
            }

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

        default:
            return state;
    }
}