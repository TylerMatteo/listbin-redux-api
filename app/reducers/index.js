import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import { Map } from 'immutable';
import listReducer from './List';
import itemReducer from './Item';
   
const rootReducer = combineReducers({
    listReducer,
    itemReducer
});

export default rootReducer;
  
