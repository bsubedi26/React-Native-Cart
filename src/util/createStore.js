import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
// import createSagaMiddleware from 'redux-saga'
// import Config from '../Config/DebugConfig'
// import RehydrationServices from '../Services/RehydrationServices'
// import ReduxPersist from '../Config/ReduxPersist'
// import ScreenTracking from './ScreenTrackingMiddleware'
import rootReducer from '../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



// creates the store
export default () => {
  /* ------------- Redux Configuration ------------- */

  const middlewares = [thunk]

  // Options: https://github.com/jhen0409/react-native-debugger#options
  const enhancers = composeWithDevTools({})(applyMiddleware(...middlewares));
  // const enhancers = []

  /* ------------- Analytics Middleware ------------- */
//   middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

//   const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
//   const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
//   middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  // enhancers.push(
  //   applyMiddleware(...middlewares),
  // )

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
//   if (ReduxPersist.active) {
//     enhancers.push(autoRehydrate())
//   }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
//   const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createStore(rootReducer, enhancers)

  // configure persistStore and check reducer version number
//   if (ReduxPersist.active) {
//     RehydrationServices.updateReducers(store)
//   }

  // kick off root saga
//   let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    // sagasManager,
    // sagaMiddleware
  }
}