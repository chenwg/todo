import {createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

export default (initialState)=>{
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
