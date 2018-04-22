import { USER_SELECT_DOB } from '../../../constants/actions'

export const handleSelectDOB = date => ({
  type: USER_SELECT_DOB,
  payload: date
})
