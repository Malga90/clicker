import React, { Component } from "react";
import IncrementWandContainer from "./styled/IncrementWandContainer";

class Dashboard extends Component {
  render() {
    return <IncrementWandContainer onClick={this.props.skillIncrement} />;
  }
}

export default Dashboard;
