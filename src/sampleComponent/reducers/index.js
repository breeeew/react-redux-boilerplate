import { combineReducers } from 'redux';
import * as types from "../actions";

function users(state={ }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({users});
export default rootReducer;
