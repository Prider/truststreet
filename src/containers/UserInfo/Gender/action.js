import { USER_SELECT_GENDER } from '../../../constants/actions'

// value => { MALE or FEMALE }

export const handleSelectGender = (value) => ({
  type: USER_SELECT_GENDER, payload: value
})
