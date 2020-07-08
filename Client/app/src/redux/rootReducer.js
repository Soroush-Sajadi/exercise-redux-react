import { combineReducers } from 'redux';
import { reducer } from './user/reducer';
import reducer from '../reducers/user/reducer';

const rootReducer = combineReducers({
    user: reducer
})

export default rootReducer;