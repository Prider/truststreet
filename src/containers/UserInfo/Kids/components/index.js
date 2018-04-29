import { FamilyMember } from '../../FamilyMember'
import {
  FAMILY_MEMBER_NONE_KID,
  FAMILY_MEMBER_CHILD_BOY,
  FAMILY_MEMBER_CHILD_GIRL,
  DEFAULT_KID_SELECT_YEAR
} from '../../constants'

const Kids = props => {
  const selectedKidItem = props.selectedKidItem
  const maxSelectYearBornItems = props.maxSelectYearBornItems

  return (
    <div className="family-wrap">
      <FamilyMember
        memberType={FAMILY_MEMBER_NONE_KID}
        maxYear={0}
        numOfItems={0}
        iconPosition="left"
        isActive={isKidItemActive(FAMILY_MEMBER_NONE_KID, selectedKidItem)}
        selectedYear={getSelectedYear(selectedKidItem, FAMILY_MEMBER_NONE_KID)}
      />

      <FamilyMember
        memberType={FAMILY_MEMBER_CHILD_BOY}
        maxYear={DEFAULT_KID_SELECT_YEAR}
        numOfItems={maxSelectYearBornItems}
        iconPosition="center"
        isActive={isKidItemActive(FAMILY_MEMBER_CHILD_BOY, selectedKidItem)}
        selectedYear={getSelectedYear(selectedKidItem, FAMILY_MEMBER_CHILD_BOY)}
      />

      <FamilyMember
        memberType={FAMILY_MEMBER_CHILD_GIRL}
        maxYear={DEFAULT_KID_SELECT_YEAR}
        numOfItems={maxSelectYearBornItems}
        iconPosition="right"
        isActive={isKidItemActive(FAMILY_MEMBER_CHILD_GIRL, selectedKidItem)}
        selectedYear={getSelectedYear(
          selectedKidItem,
          FAMILY_MEMBER_CHILD_GIRL
        )}
      />
    </div>
  )
}

export const isKidItemActive = (memberType, selectedItem) => {
  if (selectedItem.length > 0) {
    const lastSelectedKidItem = selectedItem[selectedItem.length - 1]
    return memberType === lastSelectedKidItem.memberType
  }
  return false
}

export const getSelectedYear = (selectedKidItem, memberType) => {
  if (selectedKidItem.length > 0) {
    const matchKidItems = selectedKidItem.filter(
      x => x.memberType === memberType
    )

    const lastSelectedItem = matchKidItems[matchKidItems.length - 1]

    return lastSelectedItem ? lastSelectedItem.year : DEFAULT_KID_SELECT_YEAR
  }

  return DEFAULT_KID_SELECT_YEAR
}

export default Kids
