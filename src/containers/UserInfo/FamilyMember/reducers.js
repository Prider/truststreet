import { combineReducers } from 'redux'
import spouse from '../MaritalStatus/reducers'
import kids from '../Kids/reducers'

export default combineReducers({
    spouse,
    kids
})
