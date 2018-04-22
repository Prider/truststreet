import { 
    FAMILY_MEMBER_NONE_SPOUSE,
    FAMILY_MEMBER_MALE_SPOUSE,
    FAMILY_MEMBER_FEMALE_SPOUSE,
    USER_SUBMIT_FAMILY_MEMBER
} from '../../../constants/actions'


const defaultState = {
    year: 1000,
    memberType: ''
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_SUBMIT_FAMILY_MEMBER:
            const memberType = action.payload.memberType
            if (memberType === FAMILY_MEMBER_NONE_SPOUSE
                || memberType === FAMILY_MEMBER_MALE_SPOUSE
                || memberType === FAMILY_MEMBER_FEMALE_SPOUSE) {

                return action.payload
            }
        default:
            return state
    }
}