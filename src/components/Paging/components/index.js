import React from 'react'
import PagingItem from '../components/PagingItem'
const Paging = ({
  onChoosePage,
  pagingList,
  currentStep,
  nextStep
}) => {
  return (
    <ul className="paging-list">
      {pagingList.map((item, index) => {
        return (
          <PagingItem
            key={index}
            isActive={index === currentStep}
            index={index}
            isDisabled={isDisabledPagingItem(item, index, nextStep)}
            isAnswered={item.isAnswered}
            onChoosePage={onChoosePage}
          />
        )
      })}
    </ul>
  )
}

export const isDisabledPagingItem = (item, index, nextStep) => {
  return !item.isAnswered && index >= nextStep
}
export default Paging
