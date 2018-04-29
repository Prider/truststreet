import React from 'react'
import { FamilyMember } from '../../FamilyMember'
import {
  FAMILY_MEMBER_NONE_SPOUSE,
  FAMILY_MEMBER_MALE_SPOUSE,
  FAMILY_MEMBER_FEMALE_SPOUSE,
  DEFAULT_SELECTED_YEAR,
  DEFAULT_MAX_NUMBER_YEAR_ITEM,
  DEFAULT_SELECTED_SPOUSE_YEAR
} from '../../../../constants/actions'

import './styles.css'
const MaritalStatus = props => {
  const selectedMaritalItem = props.selectedMaritalItem
  return (
    <div className="family-wrap">
      <FamilyMember
        memberType={FAMILY_MEMBER_NONE_SPOUSE}
        maxYear={0}
        numOfItems={0}
        iconPosition="left"
        isActive={isMaritalItemActive(
          FAMILY_MEMBER_NONE_SPOUSE,
          selectedMaritalItem
        )}
        selectedYear={getSelectedSpouseYear(
          FAMILY_MEMBER_NONE_SPOUSE,
          selectedMaritalItem
        )}
      />

      <FamilyMember
        memberType={FAMILY_MEMBER_MALE_SPOUSE}
        maxYear={DEFAULT_SELECTED_SPOUSE_YEAR}
        numOfItems={DEFAULT_MAX_NUMBER_YEAR_ITEM}
        iconPosition="center"
        isActive={isMaritalItemActive(
          FAMILY_MEMBER_MALE_SPOUSE,
          selectedMaritalItem
        )}
        selectedYear={getSelectedSpouseYear(
          FAMILY_MEMBER_MALE_SPOUSE,
          selectedMaritalItem
        )}
      />

      <FamilyMember
        memberType={FAMILY_MEMBER_FEMALE_SPOUSE}
        maxYear={DEFAULT_SELECTED_SPOUSE_YEAR}
        numOfItems={DEFAULT_MAX_NUMBER_YEAR_ITEM}
        iconPosition="right"
        isActive={isMaritalItemActive(
          FAMILY_MEMBER_FEMALE_SPOUSE,
          selectedMaritalItem
        )}
        selectedYear={getSelectedSpouseYear(
          FAMILY_MEMBER_FEMALE_SPOUSE,
          selectedMaritalItem
        )}
      />
    </div>
  )
}

export const isMaritalItemActive = (memberType, selectedItem) => {
  if (selectedItem) {
    return memberType === selectedItem.memberType
  }
  return false
}

export const getSelectedSpouseYear = (memberType, selectedMaritalItem) => {
  if (selectedMaritalItem && selectedMaritalItem.memberType === memberType) {
    return selectedMaritalItem.year
  }

  return DEFAULT_SELECTED_SPOUSE_YEAR
}

export default MaritalStatus
