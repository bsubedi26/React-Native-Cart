// ************************** SELECTORS ************************** //
export const totalItemsInCart = (state) => {
    return Object.values(state.cart.quantityById).reduce((acc, item) => {
        acc += item.quantity
        return acc
    }, 0)
}

export const totalCost = (state) => {
    const total = Object.values(state.cart.quantityById).reduce((acc, item) => {
        acc += (item.quantity * item.price)
        return acc
    }, 0)
    return total.toFixed(2)
}


export const getTotalPerItem = (state) => {
    return Object.values(state.cart.quantityById).map(item => {
        let { price, quantity, id, src } = item
        let totalPrice = (quantity * price).toFixed(2)
        let product = state.cart.quantityById[id]

        return {
            product,
            quantity,
            price,
            totalPrice,
            src
        }
    })
}