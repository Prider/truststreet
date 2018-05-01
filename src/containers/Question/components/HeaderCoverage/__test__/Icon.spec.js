import { shallow } from 'enzyme'
import TestingComponent, { getConcernIconByTitle } from '../Icon'

const createTestProps = propOverrides => {
  return {
    title: 'Protection'
  }
}

describe('<Icon />', () => {
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      const props = createTestProps()
      wrapper = shallow(<TestingComponent {...props} />)
    })

    it('should render component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should have a class name', () => {
      expect(wrapper.find('.gender__icon').exists()).toBe(true)
    })
  })
})

describe('get concern image by title', () => {
  it('should return ic_protection.svg when title is Protection', () => {
    expect(getConcernIconByTitle('Protection')).toBe('ic_protection.svg')
  })

  it('should return ic_health.svg when title is Health', () => {
    expect(getConcernIconByTitle('Health')).toBe('ic_health.svg')
  })

  it('should return ic_education.svg when title is Education', () => {
    expect(getConcernIconByTitle('Education')).toBe('ic_education.svg')
  })

  it('should return ic_retirement.svg when title is Retirement', () => {
    expect(getConcernIconByTitle('Retirement')).toBe('ic_retirement.svg')
  })
})
