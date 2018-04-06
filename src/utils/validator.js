import {isNil, isObjectLike, size} from 'lodash'


const isEmpty = (value) => isObjectLike(value) ? (size(value) === 0) : (isNil(value) || value === '')

const validate = (pattern) => (text) => pattern.test(text)

const isInteger = validate(/^[\d]*$/)

const isFieldEmpty = (required,value) => {
  return required && isEmpty(value)
}

const isInputLengthMoreThanMaxLength = (value = '', size ) => {
  return size && (value.length > size)
}
const isPersonNameValid = validate(/^[a-zA-Z\u0E01-\u0E5B\s\.\-]+$/)

const isFieldNotValid = (field='') => {
  return !config[field]
}

const isInputNotValid = (field, value) => {
  return !config[field].isInputValid(value)
}

export const isCitizenIdValid = (citizenId = '') => {
  return isInteger(citizenId) && isIDCardNo(citizenId)
}

export const isIDCardNo = (idCardNo = '') => {
  if (idCardNo.length !== 13)
    return false

  let sum = 0
  for (let i = 0; i < 12; i++) {
    sum += parseFloat(idCardNo.charAt(i)) * (13 - i)
  }
  return ((11 - sum % 11) % 10 !== parseFloat(idCardNo.charAt(12))) ? false : true
}

const config = {
  'firstName': {
    required: true,
    maxLength: 80,
    isInputValid: isPersonNameValid,
    ErrorMessage: 'first name is invalid'
  },
  'lastName': {
    required: true,
    maxLength: 80,
    isInputValid: isPersonNameValid,
    ErrorMessage: 'last name is invalid'
  },
  'citizenId': {
    required: true,
    maxLength: 13,
    isInputValid: isCitizenIdValid,
    ErrorMessage: 'citizen Id is invalid'
  }
}

export const validateInput = (field , value) => {
  let err= {}
  if(isFieldNotValid(field)){
    err.hasError = false
    err.message = ''
  } else if(isFieldEmpty(config[field].required, value)) {
    err.hasError = true
    err.message = `${field} is required`
  } else if(isInputLengthMoreThanMaxLength(value, config[field].maxLength)) {
    err.hasError = true
    err.message = `maximum of characters is ${config[field].maxLength}`
  } else if(isInputNotValid(field,value)) {
    err.hasError = true
    err.message = config[field].ErrorMessage
  } else {
    err.hasError = false
    err.message = ''
  }
  return err
}

