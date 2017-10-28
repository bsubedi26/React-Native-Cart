import { observable, action, computed } from "mobx";
import remotedev from 'mobx-remotedev';
import PHONES from './util/data';

@remotedev
class ShoppingStore {
    @observable phones = PHONES;
    @observable cart = [];

    @observable quantityId = [];

    @computed get cartCheckout() {
        const results = {}
        this.cart.forEach(product => {
            const { id } = product
            if (results[id] && results[id].id == product.id) {
                results[id] = Object.assign(results[id], { quantity: results[id].quantity + product.quantity })
            }
            else {
                results[id] = product  
            }
        })
        this.quantityId.forEach(({ id, quantity }) => {
            if (results[id].id === id) {
                results[id].quantity = (results[id].quantity || 0) + quantity
            }
        })

        return Object.values(results)
    }

    @computed get allQuantitiesAndId() {
        let map = new Map()
        this.quantityId.forEach(({ quantity, id }) => {
            if (map.get(id)) {
                map.set(id, { id, quantity: (map.get(id) || {}).quantity + quantity })
            }
            else {
                map.set(id, { id, quantity })
            }
        })

        return [...map.values()]
    }

    @action quantityBasedOnId(id) {
        return this.allQuantitiesAndId.filter(item => item.id === id)[0].quantity
    }

    @computed get totalQuantity() {
        const totalQuantity = this.quantityId.reduce((total, item) => {
            total += item.quantity
            return total
        }, 0)
        return totalQuantity
    }



    @action cartAdd = (phone, quantity) => {
        this.cart.push(phone)
        this.quantityId.push({ id: phone.id, quantity })
    }

    @action cartRemove(payload) {
        // this.cartCheckout = this.cartCheckout.filter(item => item.id !== payload.id)
    }
}

export default ShoppingStore
