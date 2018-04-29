import { USER_SUBMIT_FAMILY_MEMBER } from '../../../constants/actions'
import {
  FAMILY_MEMBER_NONE_KID,
  FAMILY_MEMBER_CHILD_BOY,
  FAMILY_MEMBER_CHILD_GIRL
} from '../../../constants/actions'

const defaultState = []

const kids = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SUBMIT_FAMILY_MEMBER:
      const memberType = action.payload.memberType

      if (memberType === FAMILY_MEMBER_NONE_KID) {
        state = []
        return [...state, action.payload]
      } else if (
        memberType === FAMILY_MEMBER_CHILD_BOY ||
        memberType === FAMILY_MEMBER_CHILD_GIRL
      ) {
        // Only return 5 kid items maximum
        const kids = state.filter(x => x.memberType !== FAMILY_MEMBER_NONE_KID)

        if (kids.length < 5) {
          return [
            ...state.filter(x => x.memberType !== FAMILY_MEMBER_NONE_KID),
            action.payload
          ]
        }
      }
    default:
      return state
  }
}

export default kids
