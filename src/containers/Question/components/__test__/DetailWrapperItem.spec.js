import { shallow } from 'enzyme'
import DetailWrapperItem from '../DetailWrapperItem'

const setup = overridesProps => {
  const props = {
    concern: {
      title: 'Healthy',
      id: 1
    },
    onAnswerQA: () => {},
    qa: {
      question: {
        title: 'Q1 ...',
        content: 'Content here'
      }
    },
    ...overridesProps
  }

  const wrapper = shallow(<DetailWrapperItem {...props} />)
  return {
    props,
    wrapper
  }
}

describe('DetailWrapperItem component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup().wrapper
  })

  describe('rendering', () => {
    it('should render the Content component', () => {
      expect(wrapper.exists()).toBe(true)
    })

  })
})
