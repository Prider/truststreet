import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import ConnectStep2Container, {
  DetailsWrapperListContainer,
  isAnswerAllQuestion,
  getNeedAndConcernsWithYesCoverage
} from '../container'

const mockStore = configureMockStore()

const setup = propOverrides => {
  const props = {
    concerns: [],
    pagingList: [],
    isCompletedAllQuestions: false,
    onNotifyIsCompleteAllQuestionOfThisStep: () => {},
    onAnswerQA: () => {},
    ...propOverrides
  }

  const wrapper = shallow(<DetailsWrapperListContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('DetailsWrapperListContainer component', () => {
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup().wrapper
    })
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should render Paging component', () => {
      expect(wrapper.find('Paging')).toHaveLength(1)
    })

    it('should render Details Sliders component', () => {
      expect(wrapper.find('DetailsSliders')).toHaveLength(1)
    })
  })

  describe('interactions', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup().wrapper
    })
    describe('choose page to navigate slider', () => {
      it('should setState expected currentStep when call', () => {
        wrapper.find('Paging').simulate('choosePage', 2)
        expect(wrapper.state().currentStep).toEqual(2)
      })

      it('should not setState when pageIndex equal to currentStep', () => {
        wrapper.setState({ currentStep: 1 })
        wrapper.find('Paging').simulate('choosePage', 1)
        expect(wrapper.state().currentStep).toEqual(1)
      })
    })
  })

  describe('componentWillMount', () => {
    describe('when there is at least one unansweredQuestions', () => {
      it('should setState currentStep to the position to the index of that question', () => {
        const props = setup({
          pagingList: [
            {
              index: 0,
              isAnswered: true
            },
            {
              index: 1,
              isAnswered: false
            }
          ]
        }).props

        const wrapper = shallow(<DetailsWrapperListContainer {...props} />)
        expect(wrapper.state().currentStep).toEqual(0)
      })
    })

    describe('when there no unanswered questions ', () => {
      it('should set currentStep to the last position of pagingList', () => {
        const props = setup({
          pagingList: [
            {
              index: 0,
              isAnswered: true
            },
            {
              index: 1,
              isAnswered: true
            }
          ]
        }).props

        const wrapper = shallow(<DetailsWrapperListContainer {...props} />)
        expect(wrapper.state().currentStep).toEqual(0)
      })
    })
  })

  describe('componentWillReceiveProps', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup().wrapper
    })

    // describe('when all questions have been answered', () => {
    //   it('should call onNotifyIsCompleteAllQuestionOfThisStep function', () => {
    //     const spy = jest.fn()

    //     wrapper.setState({
    //       currentStep: 0,
    //       nextStep: 1
    //     })

    //     wrapper.setProps({
    //       isCompletedAllQuestions: true,
    //       onNotifyIsCompleteAllQuestionOfThisStep: spy
    //     })

    //     expect(spy).toHaveBeenCalled()
    //   })
    // })

    describe('when going back to update answer', () => {
      it('should not increase currentStep and nextStep', () => {
        wrapper.setState({ currentStep: 1, nextStep: 3 })
        wrapper.setProps({})

        expect(wrapper.state().currentStep).toEqual(1)
        expect(wrapper.state().nextStep).toEqual(3)
      })
    })

    describe('when there is no unAnswered questions', () => {
      it('should return currentStep', () => {
        wrapper.setState({ currentStep: 1 })
        wrapper.setProps({
          pagingList: [
            {
              isAnswered: true,
              index: 0
            },
            {
              isAnswered: true,
              index: 1
            }
          ]
        })

        expect(wrapper.state().currentStep).toEqual(1)
      })
    })

    describe('when there unAnswered question', () => {
      it('should set nextStep to the index of first match unAnswered question', () => {
        wrapper.setState({
          currentStep: 0,
          nextStep: 1
        })
        wrapper.setProps({
          pagingList: [
            {
              isAnswered: false,
              index: 3
            },
            {
              isAnswered: false,
              index: 4
            }
          ]
        })

        expect(wrapper.state().currentStep).toEqual(3)
        expect(wrapper.state().nextStep).toEqual(4)
      })
    })

    // describe('when answer all the questions', () => {
    //   it('should set isNotified to true', () => {
    //     wrapper.setProps({
    //       isCompletedAllQuestions: true
    //     })

    //     wrapper.setState({
    //       currentStep: 0,
    //       nextStep: 1
    //     })

    //     expect(wrapper.instance().isNotified).toBe(true)
    //   })
    // })
  })
})

describe('Connect DetailsWrapperListContainer component', () => {
  let wrapper, store

  beforeEach(() => {
    const initialState = {
      fna: {
        needAndConcerns: mockConcernData
      }
    }
    store = mockStore(initialState)
    wrapper = shallow(<ConnectStep2Container store={store} />)
  })

  it('should contain state', () => {
    const expectedConcerns = getNeedAndConcernsWithYesCoverage(mockConcernData)
    expect(wrapper.props().concerns).toEqual(expectedConcerns)
  })
})

describe('isAnswerAllQuestion function', () => {
  it('should return false when there is no answered questions', () => {
    const concernWithYesCoverage = getNeedAndConcernsWithYesCoverage(
      mockConcernData
    )

    expect(isAnswerAllQuestion(concernWithYesCoverage)).toEqual(false)
  })

  it('should return true when all the questions have been answered', () => {
    expect(isAnswerAllQuestion(mockConcernWithAllAnsweredQuestion)).toEqual(
      true
    )
  })
})

describe('getNeedAndConcernsWithYesCoverage function', () => {
  it('should return needAndConcerns with YES answer', () => {
    const expectedConcernsWithYesCoverage = getNeedAndConcernsWithYesCoverage(
      mockConcernData
    )
    expect(getNeedAndConcernsWithYesCoverage(mockConcernData)).toEqual(
      expectedConcernsWithYesCoverage
    )
  })
})

const mockConcernData = [
  {
    id: 1,
    product: 'iProtect',
    title: 'Protection',
    introduction: {
      title: 'Protection Need',
      videoLink: 'https://some-url-here',
      content: [
        'Protection need includes all financial instruments that provide cover to your family and you, in case of an unfortunate incident such as critical illness, accident or death.',
        'Example: Life insurance cover, Critical illness cover etc.',
        'Every year 10% of people suffer from critical illness or unexpected death and only 1% of people have sufficient coverage for costs of over 1 million baht'
      ],
      question: 'Are you covered for this?'
    },
    coverage: 'YES',
    QA: [
      {
        id: 1,
        index: 1,
        question: {
          title: 'Q1: You should at least be covered for...',
          content:
            'All your personal debt so that burden is not passed on to your family'
        },
        answer: ''
      },
      {
        id: 2,
        index: 2,
        question: {
          title: 'Q2: You should at least be covered for...',
          content: '10 years of annual income for your family in case you die'
        },
        answer: ''
      },
      {
        id: 3,
        index: 3,
        question: {
          title: 'Q3: You should at least be covered for...',
          content: '5 months of income in case you get critically ill'
        },
        answer: ''
      }
    ],
    priority: 1,
    extraQA: [
      {
        id: 1,
        index: 1,
        question: {
          content:
            'Imagine you suffer under a critical illness. As a result, you lose the income which you need for you and your family to make a living.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      },
      {
        id: 2,
        index: 2,
        question: {
          content:
            'Imagine you are unable to work and earn income as a result of an accident. At the same time, the medical expenses eat up your savings.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      }
    ]
  },
  {
    id: 3,
    product: 'iEducation',
    title: 'Education',
    introduction: {
      title: 'Education Need',
      videoLink: 'https://some-url-here',
      content: [
        'Education need includes all financial instruments that secure funds to pay for your children’s high school and university education in  when they need it the most.',
        'Example: Education insurance, dedicated term deposits for education, trust funds etc.',
        'Average total cost of education in Thailand is 3 million Baht. It is critical you empower your children with the right education for the future today'
      ],
      question: 'Are you covered for this?'
    },
    coverage: '',
    QA: [
      {
        id: 1,
        index: 1,
        question: {
          title: 'Q1: You should at least be covered for...',
          content: 'a bachelors and masters degree'
        },
        answer: ''
      },
      {
        id: 2,
        index: 2,
        question: {
          title: 'Q2: You should at least be covered for...',
          content: 'Treatment in private hospitals'
        },
        answer: ''
      },
      {
        id: 3,
        index: 3,
        question: {
          title: 'Q3: You should at least be covered for...',
          content: 'income if your child gets hospitalized'
        },
        answer: ''
      }
    ],
    priority: 3,
    extraQA: [
      {
        id: 1,
        index: 1,
        question: {
          content:
            'Imagine your child wants to study at a university in a few years. But you don\'t have enough funds to finance your children\'s education.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      },
      {
        id: 2,
        index: 2,
        question: {
          content:
            'Imagine you suffer from a critical illness. You are unable to work, lose your income and you don’t have sufficient funds for your children\'s education.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      },
      {
        id: 3,
        index: 3,
        question: {
          content:
            'Imagine you die unexpectedly, leaving your family behind. Your funds are not sufficient to cover your children\'s education and all associated costs.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      },
      {
        id: 4,
        index: 4,
        question: {
          content:
            'Imagine your child is hospitalized due to a severe accident or a critical illness and the medical expenses eat up your savings.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      },
      {
        id: 5,
        index: 5,
        question: {
          content:
            'Imagine your child is hospitalized. You only work part-time to be able to support your child, but you lose a significant share of your income.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      }
    ]
  }
]

const mockConcernWithAllAnsweredQuestion = [
  {
    id: 1,
    product: 'iProtect',
    title: 'Protection',
    introduction: {
      title: 'Protection Need',
      videoLink: 'https://some-url-here',
      content: [
        'Protection need includes all financial instruments that provide cover to your family and you, in case of an unfortunate incident such as critical illness, accident or death.',
        'Example: Life insurance cover, Critical illness cover etc.',
        'Every year 10% of people suffer from critical illness or unexpected death and only 1% of people have sufficient coverage for costs of over 1 million baht'
      ],
      question: 'Are you covered for this?'
    },
    coverage: 'YES',
    QA: [
      {
        id: 1,
        index: 1,
        question: {
          title: 'Q1: You should at least be covered for...',
          content:
            'All your personal debt so that burden is not passed on to your family'
        },
        answer: 'YES'
      },
      {
        id: 2,
        index: 2,
        question: {
          title: 'Q2: You should at least be covered for...',
          content: '10 years of annual income for your family in case you die'
        },
        answer: 'NO'
      },
      {
        id: 3,
        index: 3,
        question: {
          title: 'Q3: You should at least be covered for...',
          content: '5 months of income in case you get critically ill'
        },
        answer: 'YES'
      }
    ],
    priority: 1,
    extraQA: [
      {
        id: 1,
        index: 1,
        question: {
          content:
            'Imagine you suffer under a critical illness. As a result, you lose the income which you need for you and your family to make a living.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      },
      {
        id: 2,
        index: 2,
        question: {
          content:
            'Imagine you are unable to work and earn income as a result of an accident. At the same time, the medical expenses eat up your savings.',
          concernQuestion: 'Does this concern you?'
        },
        answer: ''
      }
    ]
  }
]
