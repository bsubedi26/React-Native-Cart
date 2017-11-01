const State = {
    topCurrencies: [],
    allCurrencies: [],
}


export default function reducer(state = State, action) {
    const { type, payload } = action
    switch(type) {
        case 'CURRENCY_TOP_SET' : {
            return {
                ...state,
                topCurrencies: action.payload
            }
        }
        default: return state;
    }
}