import { shallow } from 'enzyme'
import DetailsSliders from '../'
import Slider from 'react-slick'
import DetailWrapperItem from '../DetailWrapperItem'

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
    coverage: '',
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
  }
]
const setup = overridesProps => {
  const props = {
    currentStep: 0,
    needAndConcerns: mockConcernData
  }

  const wrapper = shallow(<DetailsSliders {...props} />)
  return {
    props,
    wrapper
  }
}

describe('DetailsSliders component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup().wrapper
  })
  describe('rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should have Slider component', () => {
      expect(wrapper.find(Slider)).toHaveLength(1)
    })

    it('should have no DetailWrapperItem', () => {
      expect(wrapper.find(DetailWrapperItem)).toHaveLength(3)
    })
  })
})
