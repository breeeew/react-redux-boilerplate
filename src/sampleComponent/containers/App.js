import React from "react";
import {connect} from "react-redux";

import Example from "../components/Example";

// TODO: декораторы сломаны в babel
// @connect(state => {isFetching: state.isFetching})
class App extends React.Component {
  render() {
    return (
      <Example/>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.users,
  };
}

export default connect(mapStateToProps)(App)
