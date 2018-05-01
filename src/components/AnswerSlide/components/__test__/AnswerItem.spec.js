import { shallow } from 'enzyme'
import AnswerItem from '../AnswerItem'

describe('<AnswerItem />', () => {
  describe('rendering', () => {
    let wrapper, props
    beforeEach(() => {
      props = {
        answerYesNo: value => {}
      }
      wrapper = shallow(<AnswerItem {...props} />)
    })

    it('should render component', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('interactions', () => {
    const spy = jest.fn()
    const props = {
      answerYesNo: spy
    }

    const wrapper = shallow(<AnswerItem {...props} />)
    wrapper.simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
