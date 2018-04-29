import Kids from '../Kids/components'
import { connect } from 'react-redux'
import { DEFAULT_MAX_NUMBER_YEAR_ITEM } from '../../../constants'

export const KidsContainer = props => {
  return <Kids {...props} />
}

const getMaxYearBornForKid = date => {
  if (date !== '') return new Date().getFullYear() - date.getFullYear()

  return DEFAULT_MAX_NUMBER_YEAR_ITEM
}

const mapStateToProps = state => ({
  selectedKidItem: state.user.familyMember.kids,
  maxSelectYearBornItems: getMaxYearBornForKid(state.fna.customer.dob)
})

export default connect(mapStateToProps, {})(KidsContainer)
