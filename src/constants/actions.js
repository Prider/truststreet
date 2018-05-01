export const USER_SELECT_DOB = 'USER_SELECT_DOB'
export const USER_SELECT_GENDER = 'USER_SELECT_GENDER'
export const USER_SUBMIT_FAMILY_MEMBER = 'USER_SUBMIT_FAMILY_MEMBER'

export const FAMILY_MEMBER_NONE_KID = 'NONE_KID'
export const FAMILY_MEMBER_NONE_SPOUSE = 'NONE_SPOUSE'
export const FAMILY_MEMBER_CHILD_BOY = 'CHILD_BOY'
export const FAMILY_MEMBER_CHILD_GIRL = 'CHILD_GIRL'
export const FAMILY_MEMBER_MALE_SPOUSE = 'FAMILY_MEMBER_MALE_SPOUSE'
export const FAMILY_MEMBER_FEMALE_SPOUSE = 'FAMILY_MEMBER_FEMALE_SPOUSE'
export const DEFAULT_SELECTED_SPOUSE_YEAR = new Date().getFullYear() - 18
export const DEFAULT_MAX_NUMBER_YEAR_ITEM = 63
export const DEFAULT_KID_SELECT_YEAR = new Date().getFullYear()

export const USER_FINISH_ALL_ANSWER_OF_CURRENT_STEP = 'USER_FINISH_ALL_ANSWER_OF_CURRENT_STEP'
export const isCompleteAllQuestionOfCurrentStep = (
  isEnabled,
  stepSkipped = 0,
  autoNext = false
) => ({
  type: USER_FINISH_ALL_ANSWER_OF_CURRENT_STEP,
  payload: {
    canNext: isEnabled,
    skip: stepSkipped,
    autoNext: autoNext
  }
})



