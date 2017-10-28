import Shopping from './shopping';

export default {
    shopping: new Shopping(),
}

// @remotedev
// class AppStore {
//     constructor() {
//         this.shopping = new Shopping()
//         this.another = new Another()
//     }
// }

// const globalStore = new AppStore()
// export default globalStore


// function initStores () {
//     const shopping = new Shopping()
//     const another = new Another()

//     return {
//         shopping: shopping,
//         another: another
//     };
// }

// const mobxStore = initStores
// export default remotedev(mobxStore)
