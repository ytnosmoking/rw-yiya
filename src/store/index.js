import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { isDev } from 'utils/config'

// import reducer from './reducer'
const middleWare = [thunk]
if (isDev) {
  middleWare.push(logger)
}
// const store = createStore(reducer, applyMiddleware(...middleWare))
const store = createStore(applyMiddleware(...middleWare))

export default store