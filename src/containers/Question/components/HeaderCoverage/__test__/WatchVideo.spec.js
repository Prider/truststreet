import { shallow } from 'enzyme'
import TestingComponent from '../WatchVideo'

const createTestProps = propOverrides => {
  return {
    ...propOverrides
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
  })
})
