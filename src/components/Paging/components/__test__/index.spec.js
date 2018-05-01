import { shallow } from 'enzyme'
import Paging, { isDisabledPagingItem } from '../../components'
import PagingItem from '../PagingItem'

const setup = overridesProps => {
  const props = {
    currentStep: 0,
    nextStep: 1,
    pagingList: [],
    onChoosePage: () => {},
    ...overridesProps
  }

  const wrapper = shallow(<Paging {...props} />)
  return {
    props,
    wrapper
  }
}

describe('Paging component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup().wrapper
  })
  describe('rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should have PagingItem component', () => {
      expect(wrapper.find(PagingItem)).toHaveLength(0)
    })

    it('should render expect PageItem', () => {
      const props = setup({
        pagingList: [
          {
            isActive: true,
            isAnswered: true
          }
        ]
      }).props

      const wrapper = shallow(<Paging {...props} />)
      expect(wrapper.find(PagingItem)).toHaveLength(1)
    })
  })

  describe('isDisabledPagingItem function', () => {
    describe('should return isDisabled is false', () => {
      const pagingItem = {
        isAnswered: false
      }
      expect(isDisabledPagingItem(pagingItem, 1, 2)).toBe(false)
    })

    describe('should return isDisabled is true', () => {
      const pagingItem = {
        isAnswered: false
      }
      expect(isDisabledPagingItem(pagingItem, 2, 2)).toBe(true)
    })
  })
})
