import { combineReducers } from 'redux'
import counter from './counter'
import QusList from './qusList'

export default combineReducers({
  counter,
  QusList
})
