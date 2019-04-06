import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import { Map } from 'immutable';
import { listReducer } from './List';
import { itemReducer } from './Item';
   
  const initialState = Map();
  const rootReducer = combineReducers({
      listReducer,
      itemReducer
  });
  const store = createStore(rootReducer, initialState);