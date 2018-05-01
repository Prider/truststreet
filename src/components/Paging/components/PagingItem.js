import React from 'react'
const PagingItem = props => {
  const hasActiveClass = props.isActive ? 'active' : ''
  const hasAnswerClass = props.isAnswered && !props.isActive ? 'answered' : ''

  return (
    <li
      onClick={() => !props.isDisabled && props.onChoosePage(props.index)}
      className={`paging-item  ${hasActiveClass} ${hasAnswerClass}`}
    />
  )
}

export default PagingItem
