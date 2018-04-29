import { USER_SUBMIT_FAMILY_MEMBER } from '../../../constants/index'

export function submitFamilyMember(member) {
  return {
    type: USER_SUBMIT_FAMILY_MEMBER,
    payload: member
  }
}
