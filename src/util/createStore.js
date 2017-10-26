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

// creates the store
export default () => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [logger, thunk]
  const enhancers = []

  /* ------------- Analytics Middleware ------------- */
//   middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

//   const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
//   const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
//   middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
//   if (ReduxPersist.active) {
//     enhancers.push(autoRehydrate())
//   }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
//   const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createStore(rootReducer, compose(...enhancers))

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