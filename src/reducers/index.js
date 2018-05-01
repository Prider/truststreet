import { combineReducers } from 'redux';


import registerReducer from './register-reducer';
import recognizeReducer from './recognize-reducer';

import genderReducer from '../containers/UserInfo/Gender/reducer'
import dobReducer from '../containers/UserInfo/DOB/reducer'
import FamilyMemberReducer from '../containers/UserInfo/FamilyMember/reducers'
import MaritalStatusReducer from '../containers/UserInfo/MaritalStatus/reducer'


import QuestionReducer from '../containers/Question/reducer'

const userInfoReducer = combineReducers({
    gender: genderReducer,
    dob: dobReducer,
    maritalStatus: MaritalStatusReducer,
    familyMember: FamilyMemberReducer,
    needAndConcerns: QuestionReducer
})

const rootReducers = combineReducers({
    user: userInfoReducer,
    UserProfile: registerReducer,
    detData: recognizeReducer
});

export default rootReducers;