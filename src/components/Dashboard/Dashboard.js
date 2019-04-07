import React, { Component } from "react";
import DashboardContainer from "./styled/DashboardContainer";
import Header from "./Header/styled/Header";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Header>Level </Header>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
