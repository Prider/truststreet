
import { USER_SELECT_GENDER } from '../../../constants/actions'

const defaultState = { selectedGender: '' }

export default (state = defaultState, action) => {
  switch (action.type) {
    case USER_SELECT_GENDER: {
      return { ...state, selectedGender: action.payload }
    }
    default:
      return state
  }
}