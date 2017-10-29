// ************************** ACTIONS ************************** //
export function add(product, quantity) {
    return {
        type: 'CART_ADD',
        product,
        quantity
    }
}

export function remove(product) {
    return {
        type: 'CART_REMOVE',
        product
    }
}
