import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

const rootReducer = combineReducers({
  auth,
  users,
  questions,
  loadingBar: loadingBarReducer
})

export default rootReducer
