import PropTypes from 'prop-types'

const YearItem = ({ year, onClick, selectedYear }) => {
  return (
    <li className={selectedYear === year ? 'active-year' : ''} value={year} onClick={() => onClick(year)} id={`year-item-${year}`}>
      {year}
    </li>
  )
}

YearItem.propTypes = {
  year: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default YearItem

