import { shallow } from 'enzyme'
import TestingComponent from '../index'

const createTestProps = propOverrides => {
  return {
    title: 'Protection'
  }
}

describe('<HeaderCoverage />', () => {
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      const props = createTestProps()
      wrapper = shallow(<TestingComponent {...props} />)
    })

    it('should render component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should have a header class name', () => {
      expect(wrapper.find('.header-coverage').exists()).toBe(true)
    })

    it('should have a title class name', () => {
      expect(wrapper.find('.title').exists()).toBe(true)
    })
  })
})
