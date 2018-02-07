import { types } from './action'
import { omit } from 'lodash'

// ************************** STATE ************************** //
const initialState = {
    quantityById: {}
}

// ************************** REDUCER ************************** //
export default function cart(state = initialState, action) {
    const { type, payload } = action

    switch (type) {

        case types.ADD: {
            let { id, price, src } = payload.product
            let { quantity } = payload

            // IF ITEM IS ALREADY IN THE CART ADD TO QUANTITY
            if (state.quantityById[id]) {
                return {
                    ...state,
                    quantityById: {
                        ...state.quantityById,
                        [id]: {
                            src,
                            id,
                            quantity: state.quantityById[id].quantity + quantity,
                            price
                        }
                    }
                }
            }

            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        src,
                        id,
                        quantity,
                        price
                    }
                }
            }
        }

        case types.REMOVE: {
            let { id } = payload.product.product
            const updateRemoved = omit(state.quantityById, id)
            // if (state.quantityById[id]) console.log('REMOVE THIS ITEM)

            return {
                ...state,
                quantityById: updateRemoved
            }
        }

        case types.INCREASE_QUANTITY: {
            let { quantity, price } = payload.item
            let { id, src } = payload.item.product
            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id,
                        src,
                        quantity: quantity + 1,
                        price
                    }
                }
            }
        }

        case types.DECREASE_QUANTITY: {
            let { quantity, price } = payload.item
            let { id, src } = payload.item.product

            // IF QUANTITY IS 1 REMOVE THE ITEM TO AVOID NEGATIVE INTEGERS
            if (state.quantityById[id] && quantity === 1) {
                const updateRemoved = omit(state.quantityById, id)
                return {
                    ...state,
                    quantityById: updateRemoved
                }
            }

            return {
                ...state,
                quantityById: {
                    ...state.quantityById,
                    [id]: {
                        id,
                        src,
                        quantity: quantity - 1,
                        price
                    }
                }
            }
        }

        default: return state;
    }

}
