// ************************** SELECTORS ************************** //
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
        const props = { id, name, src, price: parseInt(price), info, quantity }
        // check if there product already exists (if it does combine the quantities)
        if (map.get(id)) {
            const updatedObject = Object.assign(props, {
                quantity: parseInt(map.get(id).quantity) + parseInt(quantity),
                price: parseInt(map.get(id).price) + parseInt(price)
            })
            // console.log(updatedObject)
            map.set(id, updatedObject)
        }
        else {
            map.set(id, props)
        }

    })

    return [...map.values()]
}
