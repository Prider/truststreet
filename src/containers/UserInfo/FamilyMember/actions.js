import { FNA_KYC_SUBMIT_FAMILY_MEMBER } from '../../../../constants/actions'

export function submitFamilyMember(member) {
  return {
    type: FNA_KYC_SUBMIT_FAMILY_MEMBER,
    payload: member
  }
}
