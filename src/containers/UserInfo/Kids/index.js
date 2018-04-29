import React from 'react'
import KidsContainer from './container'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
    selectedKidItem: state.user.familyMember.kids
  }
}

export default connect(mapStateToProps, null)(KidsContainer)
