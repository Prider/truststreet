import styled from 'styled-components'
import React from 'react'

const AnswerItem = props => {
  const ItemContent = styled.div`
    background-color: ${props.color} !important;
    background: url(${props.src}) no-repeat center center/100%;
    border-radius: 50%;
    margin-bottom: 10px;
    position: absolute;
  `

  return (
    <ItemContent
      className={['gender__icon', props.className].join(' ')}
      onClick={() => props.answerYesNo && props.answerYesNo(props.value)}
      onAnimationEnd={props.onAnimationEnd}
    />
  )
}

export default AnswerItem
