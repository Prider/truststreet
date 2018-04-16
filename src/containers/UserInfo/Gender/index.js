import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'

import icon_female from './Icons/ic_female.svg'
import icon_male from './Icons/ic_male.svg'
import icon_female_white from './Icons/ic_female_white.svg'
import icon_male_white from './Icons/ic_male_white.svg'

import { handleSelectGender } from './action'

export const MALE = 'MALE'
export const FEMALE = 'FEMALE'
export const MALE_ICON = 'MALE_ICON'
export const FEMALE_ICON = 'FEMALE_ICON'


const ItemGender = ({ className, src, onSelect, gender }) => {
    return (
      <div className={className} onClick={e => onSelect(gender)}>
        <div className="gender__icon"
          style={{
            background: `url(${src}) no-repeat center center/40%`
          }}
        />
      </div>
    )
}
  
  
export const Gender = props => {
  const femaleClass = `image-circle ${
    props.selectedGender === FEMALE ? 'image-selected' : ''
  }`

  const maleClass = `image-circle ${
    props.selectedGender === MALE ? 'image-selected' : ''
  }`
  const male_src = props.selectedGender === MALE ? icon_male_white : icon_male
  const female_src = props.selectedGender === FEMALE ? icon_female_white : icon_female

  return (
    <div>
      <ItemGender
        className={femaleClass}
        src={female_src}
        onSelect={props.onSelectGender}
        gender = {FEMALE}
      />
      <ItemGender
        className={maleClass}
        src={male_src}
        onSelect={props.onSelectGender}
        gender = {MALE}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedGender: state.User.selectedGender
  }
}

const mapDispatchToProps = dispatch => ({
  onSelectGender: payload => {
    dispatch(handleSelectGender(payload))
  }
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Gender)
