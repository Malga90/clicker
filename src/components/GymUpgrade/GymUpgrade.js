import React, { Component } from "react";
import GymUpgradeContainer from "./styled/GymUpgradeContainer";
import GymUpgradeCoins from "./styled/GymUpgradeCoins";
import GymUpgradeButton from "./styled/GymUpgradeButton";
import GymUpgradeOption from "./styled/GymUpgradeOption";

class Dashboard extends Component {
  render() {
    return (
      <GymUpgradeContainer>
        Money Money Money: {this.props.coins}
        <GymUpgradeCoins />
        <GymUpgradeOption>Automatic Clicker</GymUpgradeOption>
        <GymUpgradeOption>Speed up by 10%</GymUpgradeOption>
        <GymUpgradeOption>Increase skill increment</GymUpgradeOption>
        <GymUpgradeButton>Gym upgrade</GymUpgradeButton>
      </GymUpgradeContainer>
    );
  }
}

export default Dashboard;
