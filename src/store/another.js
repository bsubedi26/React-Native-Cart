import { observable, action } from "mobx";

class AnotherStore {
    @observable SS = 0;
    @observable OO = ['a', 'b', 'c'];
    @observable DD = [];

    @action increment() {
        this.SS += 1;
    }

    @action decrement() {
        this.SS -= 1;
    }
}

export default AnotherStore;
