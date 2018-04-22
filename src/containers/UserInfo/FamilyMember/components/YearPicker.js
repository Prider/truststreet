import YearItem from './YearItem'

export default ({ onPickYear, maxYear, numOfItems, selectedYear }) => {
  let yearItemList = []
  for (let year = maxYear; year > maxYear - numOfItems; year--) {
    yearItemList.push(
      <YearItem
        key={year}
        selectedYear={selectedYear}
        year={year}
        onClick={onPickYear}
      />
    )
  }

  return (
    <ul
      onTouchMove={e => {
        e.stopPropagation()
      }}
      className="year-picker__list"
      value={maxYear}
    >
      {yearItemList}
    </ul>
  )
}
