import {combineReducers} from 'redux';
import UserReducers from './userReducer';


export default combineReducers ({
    user:UserReducers,
});