// ************************** STATE ************************** //
const initialState = {
  active: false
}


// ************************** REDUCER ************************** //
export default function indicator(state = initialState, action) {
    switch (action.type) {
        case 'INDICATOR_SET':
            return {
                ...state,
                active: action.payload
            };

        default: return state;
    }
}
