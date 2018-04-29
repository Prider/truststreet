import { FNA_KYC_SUBMIT_FAMILY_MEMBER } from '../../../../../constants/actions'
import { submitFamilyMember } from '../actions'

describe('Perfect Advice', () => {
  describe('welcome action', () => {
    const samplePayload = {
      id: 'id',
      memberType: 'type',
      year: 2000
    }

    test('should create FNA_KYC_SUBMIT_FAMILY_MEMBER action', () => {
      expect(submitFamilyMember(samplePayload)).toEqual({
        type: FNA_KYC_SUBMIT_FAMILY_MEMBER,
        payload: samplePayload
      })
    })

  })

})
