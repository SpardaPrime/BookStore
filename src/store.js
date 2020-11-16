import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const stringMiddleWare=(store)=>(dispatch)=>(action)=>{
    if(typeof action==='string'){
        return dispatch({type:action})
    }
    return dispatch(action);
}

const consoleMiddleWare =(store)=>(dispatch)=>(action)=>{
    console.log(action);
    return dispatch(action);
}



const store = createStore(reducer,applyMiddleware(thunkMiddleware,stringMiddleWare,consoleMiddleWare));



export default store;