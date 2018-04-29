import { combineReducers } from 'redux'
import spouse from '../MaritalStatus/reducer'
import kids from '../Kids/reducers'

export default combineReducers({
    spouse,
    kids
})
