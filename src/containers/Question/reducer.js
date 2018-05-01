import concerns from '../../data/customer-concerns'
import {
  PA_CONCERN_UPDATE,
  PA_CURRENT_COVERAGE_ANSWER,
  PA_EXTRA_QUESTION_ANSWER,
  PA_QUESTION_ANSWER
} from '../../constants/question'

function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
}

function updateCoverage(state, action) {
  const { payload } = action
  const concernId = payload.concernId
  const coverage = payload.coverage
  return updateItemInArray(state, concernId, x => {
    return updateObject(x, { coverage })
  })
}

function updateAnswer(state, action) {
  const { payload } = action
  const concernId = payload.concernId
  const qa = payload.QA

  return updateItemInArray(state, concernId, x => {
    const newQAs = updateItemInArray(x.QA, qa.id, q => {
      return updateObject(q, { answer: qa.answer })
    })
    return updateObject(x, { QA: newQAs })
  })
}

function updatePriority(state, action) {
  const { payload } = action
  const concernId = payload.concernId
  const priority = payload.priority

  return updateItemInArray(state, concernId, x => {
    return updateObject(x, { priority })
  })
}

function updateExtraAnswer(state, action) {
  const { payload } = action
  const concernId = payload.concernId
  const extraQA = payload.QA
  return updateItemInArray(state, concernId, x => {
    const newQAs = updateItemInArray(x.extraQA, extraQA.id, q => {
      return updateObject(q, { answer: extraQA.answer })
    })
    return updateObject(x, { extraQA: newQAs })
  })
}

const needAndConcernsReducer = (state = concerns, action) => {
  switch (action.type) {
    case PA_CURRENT_COVERAGE_ANSWER:
      return updateCoverage(state, action)
    case PA_QUESTION_ANSWER:
      return updateAnswer(state, action)
    case PA_CONCERN_UPDATE:
      return updatePriority(state, action)
    case PA_EXTRA_QUESTION_ANSWER:
      return updateExtraAnswer(state, action)
    default:
      return state
  }
}

export default needAndConcernsReducer
