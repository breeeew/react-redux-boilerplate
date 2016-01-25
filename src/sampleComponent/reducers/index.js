import { combineReducers } from 'redux';
import * as types from "../constants";

function reducerOne(state={
  isFetching: false
}, action) {
  switch (action.type) {
    case types.START_FETCHING:
      return Object.assign({}, state, {isFetching: true});
    case types.FETCHING_COMPLETE:
      return Object.assign({}, state, {isFetching: false, data: action.data});
    default:
      return state;
  }
}

const rootReducer = combineReducers({reducerOne});
export default rootReducer;
