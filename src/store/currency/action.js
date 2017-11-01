import axios from 'axios'
import currenciesJSON from './currencies.json'

export function getTopTenCoins() {
    return async dispatch => {
        dispatch({ type: 'INDICATOR_SET', payload: true })
        const response = await axios.get('https://express-api3.herokuapp.com/api/coin/?limit=10')
        const payload = response.data.currencies.map(_addImage)
        dispatch({
            type: 'CURRENCY_TOP_SET',
            payload
        })
        dispatch({ type: 'INDICATOR_SET', payload: false })
    }
}

export function getAllCoins() {
    return async dispatch => {
        dispatch({ type: 'INDICATOR_SET', payload: true })
        const response = await axios.get('https://express-api3.herokuapp.com/api/coin/all')
        console.log('response ', response)
        dispatch({
            type: 'CURRENCY_ALL_SET',
            payload: response.data
        })
        dispatch({ type: 'INDICATOR_SET', payload: false })
}


const _addImage = (cryptoCurrency) => {
    cryptoCurrency.id = cryptoCurrency.id in currenciesJSON ? cryptoCurrency.id : undefined
    cryptoCurrency.image = `${cryptoCurrency.id}_image`
    cryptoCurrency.description = currenciesJSON[cryptoCurrency.id].description
    cryptoCurrency.paper = currenciesJSON[cryptoCurrency.id].paper
    cryptoCurrency.github = currenciesJSON[cryptoCurrency.id].github
    cryptoCurrency.website = currenciesJSON[cryptoCurrency.id].website
    return cryptoCurrency
}
