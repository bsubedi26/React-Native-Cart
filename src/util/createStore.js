import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
    /* ------------- Redux Configuration ------------- */
    const middlewares = [thunk]
    const enhancers = composeWithDevTools({})(applyMiddleware(...middlewares))
    const store = createStore(rootReducer, enhancers)
    return store
}
