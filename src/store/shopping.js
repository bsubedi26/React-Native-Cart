import { observable, action, computed } from "mobx";
import remotedev from 'mobx-remotedev';
// import AnotherStore from './another';
import PHONES from './shopping/data';

@remotedev
class ShoppingStore {
    @observable count = 0;
    @observable phones = PHONES;
    @observable cart = [];

    // @observable another = new AnotherStore();
    @computed get cartLength() {
        return this.cart.length
    }
    @action increment() {
        this.count += 1;
    }

    @action decrement() {
        this.count -= 1;
    }

    @action cartAdd(payload) {
        this.cart.push(payload) 
    }

    @action cartRemove(payload) {
        // this.cart.splice)
        this.cart = this.cart.filter(item => item.id !== payload.id)
    }
}

export default ShoppingStore
