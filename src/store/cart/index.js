// ************************** STATE ************************** //
const initialState = []


// ************************** REDUCER ************************** //
export default function cart(state = [], action = {}) {
    switch (action.type) {
        case 'CART_ADD':
            let addProduct = Object.assign({}, action.product)
            addProduct.quantity = action.quantity
            addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity)).toFixed(2)
            return [
                ...state,
                addProduct
            ];

        case 'CART_REMOVE':
            //  return a new array excluding the product that needs to be removed
            let index = state.findIndex((product) => product.id === action.product.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]

        default: return state;
    }
}
