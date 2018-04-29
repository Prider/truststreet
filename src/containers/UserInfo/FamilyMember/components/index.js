import React from 'react'
import YearPicker from './YearPicker'
import './styles.css'
const FamilyMember = ({
  memberImagePath,
  onPickYear,
  isShowYearPicker,
  maxYear,
  numOfItems,
  onToggle,
  iconPosition,
  isActive,
  selectedYear
}) => {
  const stylePosition = isShowYearPicker
    ? { position: 'relative', zIndex: '2' }
    : {}
  const activeIcon = isActive
    ? 'year-picker__icon icon-active'
    : 'year-picker__icon'

  const imagePath = require('../../../../assets/images/icon/' +
    memberImagePath)

  return (
    <div className="year-picker">
      <div className={activeIcon} style={stylePosition} onClick={onToggle}>
        <div
          className="icon-user"
          style={{
            background: `url(${imagePath}) no-repeat center center/40%`
          }}
        />
      </div>
      {isShowYearPicker && (
        <div className={`${iconPosition} year-picker__wrap`}>
          <YearPicker
            maxYear={maxYear}
            numOfItems={numOfItems}
            onPickYear={onPickYear}
            selectedYear={selectedYear}
          />
        </div>
      )}
    </div>
  )
}


export default FamilyMember
