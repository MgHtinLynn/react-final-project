// Thunk & createDebounce & logger import in middleware
import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
import createDebounce from "redux-debounced"

// ** init middleware
const middleware = [thunk, createDebounce(), logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeEnhancers(
  applyMiddleware(...middleware)
)
