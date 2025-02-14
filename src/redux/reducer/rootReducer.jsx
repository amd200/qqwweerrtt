import { combineReducers } from 'redux'
import darkModeReducer from './darkModeReducer'
  const rootReducer = combineReducers({
    darkModeReducer:darkModeReducer,
  })
export default rootReducer