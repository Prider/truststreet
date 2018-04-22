import { shallow } from 'enzyme'
import YearItem from '../YearItem'

const sampleYear = 2000
const createTestProps = propOverrides => {
  return {
    year: sampleYear,
    onClick: () => { },
    ...propOverrides
  }
}

describe('YearItem component', () => {
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      const props = createTestProps()
      wrapper = shallow(<YearItem {...props} />)
    })

    test('should render component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    test('should display year value', () => {
      expect(wrapper.text()).toEqual(sampleYear.toString())
    })

    test('should have active-year when YearItem value match selected Year', () => {
      const props = {
        selectedYear: 1905,
        year: 1905,
        onClick: () => { }
      }

      wrapper = shallow(<YearItem {...props} />)

      expect(wrapper.hasClass('active-year')).toEqual(true)
    })
  })

  describe('interactions', () => {
    let wrapper
    const spy = jest.fn()

    beforeEach(() => {
      const props = createTestProps({
        onClick: spy
      })
      wrapper = shallow(<YearItem {...props} />)
    })

    test('should trigger click event', () => {
      wrapper.simulate('click')
      expect(spy).toHaveBeenCalledTimes(1)
    })

  })

})
