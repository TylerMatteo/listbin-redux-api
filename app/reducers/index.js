import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import { Map, Set } from 'immutable';
import listReducer from './List';
import itemReducer from './Item';
   
// We could simply treat items as an array inside of lists but treating them as siblings lets
// us "normalize" our state
// For benefits of this approach -> https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
const rootReducer = combineReducers({
    lists: listReducer,
    items: itemReducer
});

export default rootReducer;

// Since this selector needs to know about lists and items, define it here next to the root reducer
export const getCommentsByArticleId = (state, listId) => {
    const itemIds = state.getIn(["lists", "byId", listId, "items"]);
    return itemIds.map( itemId => state.getIn(["items", "byId", itemId]));
}
  
