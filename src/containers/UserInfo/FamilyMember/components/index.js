import YearPicker from './YearPicker'
import { BASE_IMAGE_PATH } from '../../../../../constants/path'

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

  return (
    <div className="year-picker">
      <div className={activeIcon} style={stylePosition} onClick={onToggle}>
        <div
          className="icon-user"
          style={{
            background: `url(${BASE_IMAGE_PATH +
              memberImagePath}) no-repeat center center/40%`
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
