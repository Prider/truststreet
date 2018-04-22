import { shallow } from 'enzyme'
import YearPicker from '../YearPicker'
import YearItem from '../YearItem'

const setup = propOverrides => {
  const props = {
    maxYear: 1980,
    numOfItems: 50,
    onPickYear: () => {},
    ...propOverrides
  }

  const wrapper = shallow(<YearPicker {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('YearPicker component', () => {
  describe('rendering', () => {
    test('should render component', () => {
      const {wrapper} = setup()
      expect(wrapper.exists()).toBe(true)
    })

    test('should render correctly number of year items', () => {
      const count = 100
      const {wrapper} = setup({
        numOfItems: count
      })
      expect(wrapper.find(YearItem)).toHaveLength(count)
    })

  })

})
