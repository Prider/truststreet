import { shallow } from 'enzyme'
import Step2 from '../index'

describe('Step 2 component', () => {
  describe('rendering', () => {
    it('should render the component', () => {
      const mockProps = {
        isCurrentConcern: true
      }

      const wrapper = shallow(<Step2 {...mockProps} />)

      expect(wrapper.exists()).toBe(true)
    })
  })
})
