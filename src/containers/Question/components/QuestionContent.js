import React from 'react'

const QuestionContent = props => {
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  )
}

export default QuestionContent

export const Content = ({ content }) => {
  return <div className="question-content">{content}</div>
}

export const Title = ({ title }) => {
  return <div className="question-header">{title}</div>
}
