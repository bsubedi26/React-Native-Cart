// ************************** GETTERS ************************** //
export const totalItemsInCart = (state) => {
    return state.cart.reduce((total, item) => {
        total += parseInt(item.quantity);
        return total
    }, 0)
}

export const totalCost = (state) => {
    return state.cart.reduce((total, item) => {
        total += parseInt(item.price);
        const truncated = Math.floor(total * 100) / 100;
        return truncated
    }, 0)
}

export const getTotalPerItem = (state) => {
    const map = new Map()

    state.cart.forEach(({ id, name, src, price, info, quantity }) => {
        const props = { id, name, src, price, info, quantity }
        if (map.get(id)) {
            const updatedObject = Object.assign(props, {
                quantity: parseInt(map.get(id).quantity) + parseInt(quantity),
                price: parseFloat(map.get(id).price) + parseFloat(price)
            })
            map.set(id, updatedObject)
        }
        else {
            map.set(id, { id, name, src, price, info, quantity })
        }

    })

    return [...map.values()]
}
