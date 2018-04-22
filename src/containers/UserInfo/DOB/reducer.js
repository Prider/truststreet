import { USER_SELECT_DOB } from '../../../constants/actions'

const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    case USER_SELECT_DOB:
      return { ...state, date: action.payload}
    default:
      return state
  }
}

