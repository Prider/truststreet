import { REGISTER_USER } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            let finalData = { message: 'error'};
            if(action.payload){
               finalData = action.payload;
               finalData.message = 'success';
            }
            return finalData;
        default:
            return state;
    }
}