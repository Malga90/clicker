import React, { Component } from "react";
import GymUpgradeContainer from "./styled/GymUpgradeContainer";
import GymUpgradeCoins from "./styled/GymUpgradeCoins";
import GymUpgradeButton from "./styled/GymUpgradeButton";
import GymUpgradeAuto from "./styled/GymUpgradeAuto";
import GymUpgradeSpeed from "./styled/GymUpgradeSpeed";
import GymUpgradeInc from "./styled/GymUpgradeInc";

class Dashboard extends Component {
  render() {
    return (
      <GymUpgradeContainer>
        Money Money Money: {this.props.coins}
        <GymUpgradeCoins />
        <GymUpgradeAuto>Automatic Clicker</GymUpgradeAuto>
        <GymUpgradeSpeed>Speed up by 10%</GymUpgradeSpeed>
        <GymUpgradeInc>Increase skill increment</GymUpgradeInc>
        <GymUpgradeButton>Gym upgrade</GymUpgradeButton>
      </GymUpgradeContainer>
    );
  }
}

export default Dashboard;
