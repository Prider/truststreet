export function answerQA(type, QA, concernId) {
  return {
    type: type,
    payload: {
      QA,
      concernId
    }
  }
}
