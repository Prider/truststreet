import { PA_QUESTION_ANSWER } from '../../constants/questions'
import { answerQA } from '../actions'

describe('AnswerQA Action', () => {
  test('should create PA_QUESTION_ANSWER action', () => {
    const QA = {
      id: 1,
      index: 1,
      question: {
        title: 'Q1: You should at least be covered for...',
        content: 'a bachelors and masters degree'
      },
      answer: 'YES'
    }
    expect(answerQA(PA_QUESTION_ANSWER, QA, 1)).toEqual({
      type: PA_QUESTION_ANSWER,
      payload: {
        QA,
        concernId: 1
      }
    })
  })
})
