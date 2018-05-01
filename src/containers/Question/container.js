import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailsSliders from './components'
import { bindActionCreators } from 'redux'
import { answerQA } from './actions'
import { isCompleteAllQuestionOfCurrentStep } from '../../constants/actions'

import { Paging } from '../../components/Paging'

import img_bg_question from '../../assets/images/img_bg_question.svg'
import { YES } from '../../constants/question'


export const isAnswerAllQuestion = concernWithYesCoverage => {
  let isCompleted = true
  concernWithYesCoverage.forEach(concern => {
    concern.QA.forEach(qa => {
      if (qa.answer === '') {
        isCompleted = false
      }
    })
  })

  return isCompleted
}

export const getNeedAndConcernsWithYesCoverage = allNeedConcerns => {
  let needAndConcerns = []
  allNeedConcerns.forEach(concern => {
    if (concern.coverage === YES && concern.product !== 'iLegacy') {
      needAndConcerns.push(concern)
    }
  })

  return needAndConcerns
}

export const getPagingList = yesCoverageConcern => {
  let pagingList = []
  yesCoverageConcern.forEach(concern => {
    concern.QA.forEach(qa => {
      pagingList.push({
        isActive: false,
        isAnswered: qa.answer !== ''
      })
    })
  })

  pagingList.forEach((item, index) => {
    item.index = index
  })

  return pagingList
}

const mapDispatchToProps = dispatch => ({
  onAnswerQA: bindActionCreators(answerQA, dispatch),
  onNotifyIsCompleteAllQuestionOfThisStep: bindActionCreators(
    isCompleteAllQuestionOfCurrentStep,
    dispatch
  )
})

const  mapStateToProps = (state) => {
  const concernWithYesCoverage = getNeedAndConcernsWithYesCoverage(
    state.user.needAndConcerns
  )
  return {
    concerns: concernWithYesCoverage,
    pagingList: getPagingList(concernWithYesCoverage),
    isCompletedAllQuestions: isAnswerAllQuestion(concernWithYesCoverage)
  }
}


export class DetailsWrapperListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      nextStep: 1
    }
  }

  isNotified = false
  autoGoToNextStep = false

  componentWillReceiveProps(newProps) {
    // Not jumping to next question, in case update answer
    if (this.state.nextStep - this.state.currentStep > 1) {
      return
    }

    if (newProps.isCompletedAllQuestions && !this.isNotified) {
      this.isNotified = true
      this.props.onNotifyIsCompleteAllQuestionOfThisStep(
        true,
        0,
        this.autoGoToNextStep
      )
    }

    const unAnsweredQuestion = newProps.pagingList.filter(x => !x.isAnswered)

    // Init step
    if (unAnsweredQuestion.length > 0) {
      this.setState({ currentStep: unAnsweredQuestion[0].index })
      this.setState({ nextStep: unAnsweredQuestion[0].index + 1 })
    }
    // Stay current question when answered all questions
    else if (unAnsweredQuestion.length === 0) {
      return
    }
  }

  componentWillMount() {
    const unansweredQuestions = this.props.pagingList.filter(
      x => !x.isAnswered
    )[0]

    const answeredPosition = this.props.pagingList.filter(x => x.isAnswered)
      .length

    if (unansweredQuestions === undefined) {
      this.setState({ currentStep: 0 })
    }

    if (answeredPosition > 0 && unansweredQuestions) {
      this.setState({ currentStep: unansweredQuestions.index - 1 })
      this.setState({ nextStep: unansweredQuestions.index })
    }

    this.autoGoToNextStep = !this.props.isCompletedAllQuestions
    if (!this.props.isCompletedAllQuestions) {
      this.props.onNotifyIsCompleteAllQuestionOfThisStep(false)
    }
  }

  handleOnChoosePage = pageIndex => {
    if (pageIndex !== this.state.currentStep) {
      this.setState({ currentStep: pageIndex })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.currentStep === nextState.currentStep) return false

    return true
  }

  render() {
    return (
      <div
        className="fna-detail-wrapper"
        style={{
          background: `url(${img_bg_question}) no-repeat center`
        }}
      >
        <DetailsSliders
          currentStep={this.state.currentStep}
          needAndConcerns={this.props.concerns}
          onAnswerQA={this.props.onAnswerQA}
        />
        <div className="paging">
          <Paging
            currentStep={this.state.currentStep}
            nextStep={this.state.nextStep}
            pagingList={this.props.pagingList}
            onChoosePage={this.handleOnChoosePage}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DetailsWrapperListContainer
)
