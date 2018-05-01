import { shallow } from 'enzyme'
import AnswerSlide from '../index'

const setup = overridesProps => {
  const props = {
    qa: {
      answers: ''
    },
    fromTo: '',
    ...overridesProps
  }

  const wrapper = shallow(<AnswerSlide {...props} />)
  return {
    props,
    wrapper
  }
}

describe('AnswerSlide component', () => {
  describe('rendering', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup().wrapper
    })

    test('should render component', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })
})
