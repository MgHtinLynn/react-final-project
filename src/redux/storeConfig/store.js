// ** Redux, Root Reducer Imports
import rootReducer from '../reducers/rootReducer'
import { createStore } from 'redux'
import middleware from "../middleware/index"

// ** Create store
const store = createStore(rootReducer, middleware)

export { store }
