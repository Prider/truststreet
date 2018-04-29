import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitFamilyMember } from './actions'
import {
  FAMILY_MEMBER_CHILD_BOY,
  FAMILY_MEMBER_CHILD_GIRL,
  FAMILY_MEMBER_MALE_SPOUSE,
  FAMILY_MEMBER_FEMALE_SPOUSE,
  FAMILY_MEMBER_NONE_SPOUSE,
  FAMILY_MEMBER_NONE_KID
} from '../../../constants'
import FamilyMember from './components'

export const getImagePath = (memberType, isActive) => {
  switch (memberType) {
    case FAMILY_MEMBER_NONE_SPOUSE:
    case FAMILY_MEMBER_NONE_KID:
      return isActive ? 'ic_circle_empty_bule.svg' : 'ic_circle_empty.svg'
    case FAMILY_MEMBER_CHILD_BOY:
      return isActive ? 'ic_boy_white.svg' : 'ic_boy.svg'
    case FAMILY_MEMBER_CHILD_GIRL:
      return isActive ? 'ic_girl_white.svg' : 'ic_girl.svg'
    case FAMILY_MEMBER_MALE_SPOUSE:
      return isActive ? 'ic_male_white.svg' : 'ic_male.svg'
    case FAMILY_MEMBER_FEMALE_SPOUSE:
      return isActive ? 'ic_female_white.svg' : 'ic_female.svg'
  }
}

export class FamilyMemberContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowYearPicker: false
    }
  }

  static propTypes = {
    memberType: PropTypes.string.isRequired,
    maxYear: PropTypes.number.isRequired,
    numOfItems: PropTypes.number
  }

  handleShowYearPicker = () => {
    if (this.props.memberType === FAMILY_MEMBER_NONE_SPOUSE || this.props.memberType === FAMILY_MEMBER_NONE_KID) {
      this.setState({ isShowYearPicker: false })
      this.preparePickYear(0)
    } else {
      this.setState({ isShowYearPicker: !this.state.isShowYearPicker })
    }
  }

  preparePickYear(year) {
    this.props.onPickYear({
      memberType: this.props.memberType,
      year: year
    })
  }

  handlePickYear = year => {
    this.preparePickYear(year)
    this.setState({ isShowYearPicker: false })
  }

  render() {
    return (
      <FamilyMember
        maxYear={this.props.maxYear}
        numOfItems={this.props.numOfItems}
        memberImagePath={getImagePath(this.props.memberType, this.props.isActive)}
        onPickYear={this.handlePickYear}
        isShowYearPicker={this.state.isShowYearPicker}
        onToggle={this.handleShowYearPicker}
        iconPosition={this.props.iconPosition}
        isActive={this.props.isActive}
        selectedYear={this.props.selectedYear}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onPickYear: bindActionCreators(submitFamilyMember, dispatch)
})

export default connect(null, mapDispatchToProps)(FamilyMemberContainer)
