import { shallow } from 'enzyme'
import ConnectComponent, { FamilyMemberContainer } from '../container'
import configureMockStore from 'redux-mock-store'
import { FNA_KYC_SUBMIT_FAMILY_MEMBER } from '../../../../../constants/actions'
import FamilyMember from '../components/index'
import { getImagePath } from '../container'
import {
  FAMILY_MEMBER_CHILD_BOY,
  FAMILY_MEMBER_CHILD_GIRL,
  FAMILY_MEMBER_MALE_SPOUSE,
  FAMILY_MEMBER_FEMALE_SPOUSE,
  FAMILY_MEMBER_NONE_SPOUSE,
  FAMILY_MEMBER_NONE_KID
} from '../../constants'

const mockStore = configureMockStore()

const createTestProps = propOverrides => {
  return {
    memberType: 'x',
    maxYear: 2000,
    onPickYear: () => { },
    ...propOverrides
  }
}

describe('Redux - connect (ConnectComponent)', () => {
  let wrapper, store

  beforeEach(() => {
    const initialState = {
    }
    store = mockStore(initialState)
    const props = createTestProps({
      store
    })
    wrapper = shallow(<ConnectComponent {...props} />)
  })

  it('should dispatch FNA_KYC_SUBMIT_FAMILY_MEMBER action when pickYear', () => {
    wrapper.simulate('pickYear')

    const actions = store.getActions()
    expect(actions).toEqual([{ type: FNA_KYC_SUBMIT_FAMILY_MEMBER }])
  })

  it('should hide YearPicker when finish choosing the year', () => {
    const mockOnPickYear = jest.fn()

    const familyContainerProps = {
      memberType: FAMILY_MEMBER_NONE_KID,
      maxYear: 2000,
      onPickYear: mockOnPickYear
    }
    const familyWrapper = shallow(<FamilyMemberContainer {...familyContainerProps} />)

    familyWrapper.simulate('pickYear', 2000)

    expect(mockOnPickYear).toHaveBeenCalledWith({ memberType: 'NONE_KID', year: 2000 })

    expect(familyWrapper.state().isShowYearPicker).toBe(false)
  })
})

describe('FamilyMemberContainer', () => {
  describe('interactions', () => {
    let wrapper
    beforeEach(() => {
      const props = createTestProps()
      wrapper = shallow(<FamilyMemberContainer {...props} />)
    })

    describe('when YearPicker is showing', () => {
      test('should hide YearPick when toggle', () => {
        wrapper.setState({
          isShowYearPicker: true
        })

        expect(wrapper.find(FamilyMember).prop('isShowYearPicker')).toBe(true)
        wrapper.simulate('toggle')
        expect(wrapper.find(FamilyMember).prop('isShowYearPicker')).toBe(false)
      })
    })

    describe('when yearPicker is hidden', () => {
      test('should show YearPick when toggle', () => {
        wrapper.setState({
          isShowYearPicker: false
        })

        expect(wrapper.find(FamilyMember).prop('isShowYearPicker')).toBe(false)
        wrapper.simulate('toggle')
        expect(wrapper.find(FamilyMember).prop('isShowYearPicker')).toBe(true)
      })
    })

    describe('when YearPicker have memberType is FAMILY_MEMBER_NONE_SPOUSE or FAMILY_MEMBER_NONE_KID', () => {
      test('should hide YearPicker', () => {
        const props = createTestProps({
          memberType: FAMILY_MEMBER_NONE_KID
        })

        wrapper = shallow(<FamilyMemberContainer {...props} />)
        wrapper.simulate('toggle')

        expect(wrapper.state().isShowYearPicker).toEqual(false)
      })
    })
  })
})

describe('FamilyMember Icon Name', () => {
  describe('when icon is active', () => {
    test('should return the name ic_circle_empty_bule.svg when member type is FAMILY_MEMBER_NONE_SPOUSE or FAMILY_MEMBER_NONE_KID',
      () => {
        expect(getImagePath(FAMILY_MEMBER_NONE_SPOUSE, true)).toBe('ic_circle_empty_bule.svg')
      })

    test('should return the name ic_boy_white.svg when member type is FAMILY_MEMBER_CHILD_BOY',
      () => {
        expect(getImagePath(FAMILY_MEMBER_CHILD_BOY, true)).toBe('ic_boy_white.svg')
      })

    test('should return the name ic_girl_white.svg when member type is FAMILY_MEMBER_CHILD_GIRL',
      () => {
        expect(getImagePath(FAMILY_MEMBER_CHILD_GIRL, true)).toBe('ic_girl_white.svg')
      })

    test('should return the name ic_male_white.svg when member type is FAMILY_MEMBER_MALE_SPOUSE',
      () => {
        expect(getImagePath(FAMILY_MEMBER_MALE_SPOUSE, true)).toBe('ic_male_white.svg')
      })

    test('should return the name ic_female_white.svg when member type is FAMILY_MEMBER_FEMALE_SPOUSE',
      () => {
        expect(getImagePath(FAMILY_MEMBER_FEMALE_SPOUSE, true)).toBe('ic_female_white.svg')
      })
  })

  describe('when icon is not active', () => {
    test('should return the name ic_circle_empty_bule.svg when member type is FAMILY_MEMBER_NONE_SPOUSE or FAMILY_MEMBER_NONE_KID',
      () => {
        expect(getImagePath(FAMILY_MEMBER_NONE_SPOUSE, false)).toBe('ic_circle_empty.svg')
      })

    test('should return the name ic_boy_white.svg when member type is FAMILY_MEMBER_CHILD_BOY',
      () => {
        expect(getImagePath(FAMILY_MEMBER_CHILD_BOY, false)).toBe('ic_boy.svg')
      })

    test('should return the name ic_girl_white.svg when member type is FAMILY_MEMBER_CHILD_GIRL',
      () => {
        expect(getImagePath(FAMILY_MEMBER_CHILD_GIRL, false)).toBe('ic_girl.svg')
      })

    test('should return the name ic_male_white.svg when member type is FAMILY_MEMBER_MALE_SPOUSE',
      () => {
        expect(getImagePath(FAMILY_MEMBER_MALE_SPOUSE, false)).toBe('ic_male.svg')
      })

    test('should return the name ic_female_white.svg when member type is FAMILY_MEMBER_FEMALE_SPOUSE',
      () => {
        expect(getImagePath(FAMILY_MEMBER_FEMALE_SPOUSE, false)).toBe('ic_female.svg')
      })
  })
})

