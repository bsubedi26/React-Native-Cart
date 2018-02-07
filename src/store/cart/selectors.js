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


// // ************************** SELECTORS ************************** //
// export const totalItemsInCart = (state) => {
//     return 0
//     // return state.cart.reduce((total, item) => {
//     //     total += parseInt(item.quantity);
//     //     return total
//     // }, 0)
// }

// export const totalCost = (state) => {
//     return 0
//     // return state.cart.reduce((total, item) => {
//     //     total += parseInt(item.price);
//     //     const truncated = Math.floor(total * 100) / 100;
//     //     return truncated
//     // }, 0)
// }

// export const getTotalPerItem = (state) => {
//     return []

//     // const map = new Map()

//     // state.cart.forEach(({ id, name, src, price, info, quantity }) => {
//     //     const props = { id, name, src, price: parseInt(price), info, quantity }
//     //     // check if there product already exists (if it does combine the quantities)
//     //     if (map.get(id)) {
//     //         const updatedObject = Object.assign(props, {
//     //             quantity: parseInt(map.get(id).quantity) + parseInt(quantity),
//     //             price: parseInt(map.get(id).price) + parseInt(price)
//     //         })
//     //         // console.log(updatedObject)
//     //         map.set(id, updatedObject)
//     //     }
//     //     else {
//     //         map.set(id, props)
//     //     }

//     // })

//     // return [...map.values()]
// }
