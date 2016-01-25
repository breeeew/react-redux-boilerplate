import React from "react";

export default class Example extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
      { 
        this.props.isFetching
          ? "Loading..."
          : this.props.data
      }
    </div>
    );
  }
}
