import {combineReducers} from 'redux';
import UserReducers from './userReducer';
import NewsReducers from './newReducer';


export default combineReducers ({
    news:NewsReducers,
    user:UserReducers
});