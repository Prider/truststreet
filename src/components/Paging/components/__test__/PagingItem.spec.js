import { shallow } from 'enzyme'
import PagingItem from '../PagingItem'

const setup = overridesProps => {
  const props = {
    isActive: false,
    isAnswered: false,
    isDisabled: false,
    index: 1,
    onChoosePage: () => {},
    ...overridesProps
  }

  const wrapper = shallow(<PagingItem {...props} />)
  return {
    props,
    wrapper
  }
}

describe('PagingItem component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup().wrapper
  })
  describe('rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should have className active ', () => {
      const props = setup({
        isActive: true
      }).props

      wrapper = shallow(<PagingItem {...props} />)

      expect(wrapper.hasClass('active')).toBe(true)
    })

    it('should have className answered ', () => {
      const props = setup({
        isActive: false,
        isAnswered: true
      }).props

      wrapper = shallow(<PagingItem {...props} />)

      expect(wrapper.hasClass('answered')).toBe(true)
    })
  })

  describe('interactions', () => {
    const spy = jest.fn()

    const props = setup({
      index: 2,
      onChoosePage: spy
    }).props

    const wrapper = shallow(<PagingItem {...props} />)

    wrapper.simulate('click')

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
