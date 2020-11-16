import {combineReducers} from 'redux';
import initialState from './initialState';
import personState from './personState';

const reducer =combineReducers({
    initialState,
    personState
});



export default reducer;


