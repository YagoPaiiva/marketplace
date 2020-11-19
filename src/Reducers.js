import { combineReducers } from 'redux';
import Reducer from './Reducers/userReducer';

export default combineReducers({
    user:Reducer
});