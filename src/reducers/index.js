import { combineReducers } from 'redux';


import registerReducer from './register-reducer';
import recognizeReducer from './recognize-reducer';

import UserInfoReducer from '../containers/UserInfo/Gender/reducer';

const rootReducers = combineReducers({
    User: UserInfoReducer,
    UserProfile: registerReducer,
    detData: recognizeReducer
});

export default rootReducers;