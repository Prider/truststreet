import React from 'react'
import MaritalStatus from './components'
import { connect } from 'react-redux'

export const MaritalStatusContainer = ({selectedMaritalItem}) => {
   return (
        <MaritalStatus selectedMaritalItem={selectedMaritalItem} />
    )
}

const mapStateToProps = (state) => {
    return {
        selectedMaritalItem: state.user.familyMember.spouse
    }
}

export default connect(mapStateToProps, null)(MaritalStatusContainer)
