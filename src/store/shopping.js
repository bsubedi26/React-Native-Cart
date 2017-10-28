import { observable, action, computed } from "mobx";
import remotedev from 'mobx-remotedev';
import PHONES from './shopping/data';

@remotedev
class ShoppingStore {
    @observable phones = PHONES;
    @observable cart = [];

    @computed get cartLength() {
        return this.cart.length
    }
    @computed get totalQuantity()  {
        const quantity = this.cart.reduce((total, item) => {
            total += item.quantity
            return total
        }, 0)
        return quantity
    }

    @computed get totalPrice() {
        const price = this.cart
            .map((item, index) => {
                const price = item.quantity * item.price
                return price.toFixed(2)
            })
            .reduce((total, item) => {
                total += parseInt(item)
                return total
            }, 0)
        return price
    }


    @action cartAdd(payload) {
        const itemIndex = this.cart.findIndex(item => item.id == payload.id)
        if (itemIndex >= 0) {
            let updateObject = this.cart[itemIndex]
            let newQuantity = updateObject.quantity + payload.quantity
            let updatedObject = Object.assign({}, updateObject, { quantity: newQuantity })
            this.cart[itemIndex] = updatedObject
        }
        else {
            this.cart.push(payload) 
        }
    }

    @action cartRemove(payload) {
        this.cart = this.cart.filter(item => item.id !== payload.id)
    }
}

export default ShoppingStore
