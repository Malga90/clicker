import React, { Component } from "react";
import HeaderContainer from "./styled/HeaderContainer";

class Dashboard extends Component {
  render() {
    return <HeaderContainer>Level {this.props.level}</HeaderContainer>;
  }
}

export default Dashboard;
