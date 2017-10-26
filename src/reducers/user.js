const initState = {
    token: null,
    Credentials: {}
}

export function reducer (state = initState, { type, payload }) {
    switch (type) {
        case 'SET_USER': {
            return {
                ...state,
                payload
            }
        }

        default: {
            return state;
        }
    }
}