import React from 'react'

import AnswerItem from './AnswerItem'

import { YES, NO } from '../../../constants/answer'
import icon_yes_selected from '../../../assets/images/icon/ic_yes_selected.svg'
import icon_yes_default from '../../../assets/images/icon/ic_yes_white.svg'
import defaultIcon from '../../../assets/images/icon/ic_male_circle.svg'
import icon_no_selected from '../../../assets/images/icon/ic_no_selected.svg'
import icon_no_default from '../../../assets/images/icon/ic_no_white.svg'

import './styles.css'

const AnswerSlide = props => {
  const yesColor = props.qa.answer === YES ? '#eb4d33' : ''
  const noColor = props.qa.answer === NO ? '#eb4d33' : ''
  const yesIcon = props.qa.answer === YES ? icon_yes_default : icon_yes_selected
  const noIcon = props.qa.answer === NO ? icon_no_default : icon_no_selected

  return (
    <div className="fna-answer-slide">
      <AnswerItem
        className="left"
        src={yesIcon}
        value={YES}
        answerYesNo={props.answerYesNo}
        color={yesColor}
      />

      <AnswerItem
        src={defaultIcon}
        className={props.fromTo}
        onAnimationEnd={props.onAnimationEnd}
      />

      <AnswerItem
        className="right"
        src={noIcon}
        value={NO}
        answerYesNo={props.answerYesNo}
        color={noColor}
      />
    </div>
  )
}

export default AnswerSlide
