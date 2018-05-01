import React from 'react'
import HeaderCoverage from './HeaderCoverage'
import QuestionContent from './QuestionContent'
import AnswerSlideContainer from '../../../components/AnswerSlide/container'
import { PA_QUESTION_ANSWER } from '../../../constants/question'
import styled from 'styled-components'

const DetailWrapper = styled.div`
  height: 236px;
  margin-top: 10px;
  position: relative;
`
const DetailWrapperItem = ({ concern, qa, onAnswerQA }) => {
  return (
    <DetailWrapper>
      <HeaderCoverage title={concern.title} />
      <QuestionContent
        title={qa.question.title}
        content={qa.question.content}
      />
      <AnswerSlideContainer
        concernId={concern.id}
        question={qa}
        onAnswerQA={onAnswerQA}
        type={PA_QUESTION_ANSWER}
      />
    </DetailWrapper>
  )
}

export default DetailWrapperItem
