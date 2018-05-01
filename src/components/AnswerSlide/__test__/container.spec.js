import { shallow } from 'enzyme'
import AnswerSlideContainer, { getAnswerDirectionClass } from '../container'
import { OPTION_YES, OPTION_NO } from '../../../constants/adviceProcess'

const setup = overridesProps => {
  const props = {
    type: '',
    question: '',
    concernId: 1,
    onAnswerQA: (type, question, concernId) => {},
    ...overridesProps
  }

  const wrapper = shallow(<AnswerSlideContainer {...props} />)
  return {
    props,
    wrapper
  }
}

describe('AnswerSlide Component', () => {
  const sampleAnswer = 'sample-answer'
  describe('rendering', () => {
    let wrapper = setup({
      question: {
        answer: sampleAnswer
      }
    }).wrapper
    it('should be rendered', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should have props.question.answer as initial value of currentAnswer state', () => {
      expect(wrapper.state()).toEqual({
        currentAnswer: sampleAnswer
      })
    })
  })

  describe('interactions', () => {
    let wrapper = setup().wrapper

    test('should update component when currentAnswer state change', () => {
      wrapper.setState({
        currentAnswer: 'old'
      })
      const shouldUpdate = wrapper.instance().shouldComponentUpdate(
        {},
        {
          currentAnswer: 'new'
        }
      )
      expect(shouldUpdate).toBe(true)
    })

    test('should not update component when others props change but not currentAnswer state', () => {
      wrapper.setState({
        currentAnswer: 'fix'
      })
      const shouldUpdate = wrapper.instance().shouldComponentUpdate(
        {},
        {
          currentAnswer: 'fix'
        }
      )
      expect(shouldUpdate).toBe(false)
    })

    it('should update currentAnswer after answering the another question', () => {
      wrapper.instance().handleAnswerYesNo('answer')

      expect(wrapper.state().currentAnswer).toBe('answer')
    })

    it('should not update currentAnswer when choose the same answer', () => {
      wrapper.setState({
        currentAnswer: 'answer'
      })
      wrapper.instance().handleAnswerYesNo('answer')

      expect(wrapper.state().currentAnswer).toBe('answer')
    })

    it('should dispatch onAnswerQA function when animation ends', () => {
      const spy = jest.fn()
      const props = setup({
        onAnswerQA: spy
      }).props

      wrapper = shallow(<AnswerSlideContainer {...props} />)

      wrapper.instance().notifyAnswered()
      expect(spy).toHaveBeenCalled()
    })

    it('should call notifyAnswered when animation end', () => {
      const spy = jest.fn()
      const props = setup({
        onAnswerQA: spy
      }).props

      wrapper = shallow(<AnswerSlideContainer {...props} />)

      wrapper.instance().handleAnimationEnd()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('getAnswerDirectionClass function', () => {
    it('should return expected sliderClass', () => {
      expect(getAnswerDirectionClass(OPTION_NO, OPTION_YES)).toEqual(
        'middle-button-yes-to-no'
      )
      expect(getAnswerDirectionClass(OPTION_YES, OPTION_NO)).toEqual(
        'middle-button-no-to-yes'
      )
      expect(getAnswerDirectionClass(OPTION_YES, '')).toEqual(
        'middle-button-yes'
      )
      expect(getAnswerDirectionClass(OPTION_NO, '')).toEqual('middle-button-no')
      expect(getAnswerDirectionClass('', '')).toEqual('middle')
    })
  })
})
