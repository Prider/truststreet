import React, { Component } from 'react'
import YesNoSlideQuestion from './components'
import { OPTION_YES, OPTION_NO } from '../../constants/adviceProcess'

class AnswerSlideContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnswer: ''
    }
  }

  handleAnswerYesNo = answer => {
    if (this.state.currentAnswer !== answer) {
      this.setState({
        currentAnswer: answer
      })
    }
  }

  notifyAnswered() {
    this.props.onAnswerQA(
      this.props.type,
      {
        id: this.props.question.id,
        answer: this.state.currentAnswer
      },
      this.props.concernId
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // NOTE: this line of code prevent all changes from outside
    return this.state.currentAnswer !== nextState.currentAnswer
  }

  handleAnimationEnd = event => {
    this.notifyAnswered()
  }

  componentWillMount = () => {
    this.setState({
      currentAnswer: this.props.question.answer
    })
  }

  render() {
    return (
      <YesNoSlideQuestion
        answerYesNo={this.handleAnswerYesNo}
        qa={{
          answer: this.state.currentAnswer
        }}
        fromTo={getAnswerDirectionClass(
          this.state.currentAnswer,
          this.props.question.answer
        )}
        onAnimationEnd={this.handleAnimationEnd}
      />
    )
  }
}

export function getAnswerDirectionClass(currentAnswer, previousAnswer) {
  let sliderClass = ''

  if (previousAnswer === OPTION_YES && currentAnswer === OPTION_NO) {
    sliderClass = 'middle-button-yes-to-no'
  } else if (previousAnswer === OPTION_NO && currentAnswer === OPTION_YES) {
    sliderClass = 'middle-button-no-to-yes'
  } else if (currentAnswer === OPTION_YES) {
    sliderClass = 'middle-button-yes'
  } else if (currentAnswer === OPTION_NO) {
    sliderClass = 'middle-button-no'
  } else {
    sliderClass = 'middle'
  }

  return sliderClass
}

export default AnswerSlideContainer
