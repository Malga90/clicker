import React, { Component } from "react";
import TrainingBagContainer from "./styled/TrainingBagContainer";

class Dashboard extends Component {
  render() {
    return <TrainingBagContainer onClick={this.props.skillIncrement} />;
  }
}

export default Dashboard;
