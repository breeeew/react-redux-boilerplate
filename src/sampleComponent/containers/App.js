import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

import Example from "../components/Example";

// TODO: декораторы сломаны в babel
// @connect(state => {isFetching: state.isFetching})
class App extends React.Component {
  render() {
    return (
      <Example {...this.props.reducerOne} {...bindActionCreators(actions, this.props.dispatch)}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    reducerOne: state.reducerOne
  };
}

export default connect(mapStateToProps)(App)
