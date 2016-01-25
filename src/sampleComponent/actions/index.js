import * as types from "../constants";

export function fetchData() {
  return dispatch => {
    dispatch({type: types.START_FETCHING});
    setTimeout(() => {dispatch({type: types.FETCHING_COMPLETE, data: "Hello world!"})}, 2000);
  }
}
