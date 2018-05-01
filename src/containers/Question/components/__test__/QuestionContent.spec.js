import { shallow } from 'enzyme'
import QuestionContent, { Content, Title } from '../QuestionContent'

const setup = overridesProps => {
  const props = {
    title: 'Q1 ...',
    content: 'Content here',
    ...overridesProps
  }

  const wrapper = shallow(<QuestionContent {...props} />)
  return {
    props,
    wrapper
  }
}

describe('QuestionContent component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup().wrapper
  })

  describe('rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should render the Title component', () => {
      const props = setup().props

      wrapper = shallow(<Title {...props} />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should render the Title component', () => {
      const props = setup().props

      wrapper = shallow(<Content {...props} />)
      expect(wrapper.exists()).toBe(true)
    })
  })
})
