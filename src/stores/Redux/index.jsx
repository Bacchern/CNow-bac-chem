import { combineReducers } from 'redux'
import authReducers from './reducers/authReducers'


let reducer = combineReducers({
    auth: authReducers.reducer,
   

})
export default (state, action) =>
    reducer(action.type === 'REVERT_ALL' ? undefined : state, action)
