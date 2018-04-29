import { shallow } from 'enzyme'
import { isKidItemActive, getSelectedYear } from '../../components/index'
import { FamilyMember } from '../../../FamilyMember'
import Kids from '../index'
import {
    FAMILY_MEMBER_NONE_KID,
    FAMILY_MEMBER_CHILD_BOY,
    FAMILY_MEMBER_CHILD_GIRL,
    DEFAULT_KID_SELECT_YEAR
} from '../../../constants'

let wrapper
const setup = propsOveriddes => {
    const props = {
        selectedKidItem: {
            memberType: ''
        },
        ...propsOveriddes
    }

    const wrapper = shallow(<Kids {...props} />)

    return {
        props,
        wrapper
    }
}

describe('Kids component', () => {
    let familyMember
    describe('rendering', () => {
        beforeEach(() => {
            wrapper = setup().wrapper
            familyMember = wrapper.find(FamilyMember)
        })

        it('should render component', () => {
            expect(wrapper.exists()).toBe(true)
        })

        it('should render 3 FamilyMember components', () => {
            expect(wrapper.find(FamilyMember)).toHaveLength(3)

            expect(familyMember.get(0).props.memberType).toEqual(FAMILY_MEMBER_NONE_KID)
            expect(familyMember.get(1).props.memberType).toEqual(FAMILY_MEMBER_CHILD_BOY)
            expect(familyMember.get(2).props.memberType).toEqual(FAMILY_MEMBER_CHILD_GIRL)
        })
    })
})

describe('isKidItemActive function', () => {
    describe('when selectedItem is empty', () => {
        it('should return false when selectedItem is empty', () => {
            const expectedSelectedKidItems = []
            expect(isKidItemActive('', expectedSelectedKidItems)).toEqual(false)
        })
    })

    describe('when selectedItems have item', () => {
        it('should return true when selectedItem has memberType equal to FAMILY_MEMBER_NONE_KID', () => {
            const expectedSelectedItem = [{
                memberType: FAMILY_MEMBER_NONE_KID
            }]

            expect(isKidItemActive(FAMILY_MEMBER_NONE_KID, expectedSelectedItem)).toEqual(true)
        })
    })
})

describe('getSelectedYear function', () => {
    describe('when selectedKidItems has no items', () => {
        it('should return default year', () => {
            const expectedSelectedItem = []
            expect(getSelectedYear(expectedSelectedItem, '')).toEqual(DEFAULT_KID_SELECT_YEAR)
        })
    })

    describe('when selectedKidItems have items', () => {
        it('should return default year when there is no match item', () => {
            const expectedSelectedItem = [{
                memberType: FAMILY_MEMBER_CHILD_BOY
            }]
            expect(getSelectedYear(expectedSelectedItem, FAMILY_MEMBER_NONE_KID)).toEqual(DEFAULT_KID_SELECT_YEAR)
        })


        it('should return expected year when there is a last-match item', () => {
            const expectedSelectedItem = [{
                memberType: FAMILY_MEMBER_CHILD_BOY,
                year: 1999
            }]
            expect(getSelectedYear(expectedSelectedItem, FAMILY_MEMBER_CHILD_BOY)).toEqual(1999)
        })
    })
})
