import { shallow } from 'enzyme'
import FamilyMember from '../index'
import YearPicker from '../YearPicker'

const setup = propOverrides => {
  const props = {
    maxYear: 1980,
    numOfItems: 100,
    ...propOverrides
  }

  const wrapper = shallow(<FamilyMember {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('FamilyMember component', () => {
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup().wrapper
    })

    test('should render component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    test('should render default class for year picker icon', () => {
      expect(wrapper.find('div.icon-active')).toHaveLength(0)
    })

    test('should render active class for year picker icon', () => {
      const props = { isActive: true }
      wrapper = shallow(<FamilyMember {...props} />)

      expect(wrapper.find('div.icon-active')).toHaveLength(1)
    })

    test('should contains 1 class year-picker', () => {
      expect(wrapper.hasClass('year-picker')).toEqual(true)
    })

    test('should have YearPicker if isShowYearPicker', () => {
      const {wrapper} = setup({
        isShowYearPicker: true
      })
      expect(wrapper.find(YearPicker)).toHaveLength(1)
    })

    test('should not have YearPicker if not isShowYearPicker', () => {
      const {wrapper} = setup({
        isShowYearPicker: false
      })
      expect(wrapper.find(YearPicker)).toHaveLength(0)
    })
  })
})
