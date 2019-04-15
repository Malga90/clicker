import React, { Component } from "react";
import GymUpgradeContainer from "./styled/GymUpgradeContainer";
import GymUpgradeCoins from "./styled/GymUpgradeCoins";
import GymUpgradeButton from "./styled/GymUpgradeButton";

class Dashboard extends Component {
  render() {
    return (
      <GymUpgradeContainer>
        Money Money Money: {this.props.coins}
        <GymUpgradeCoins />
        <GymUpgradeButton>Gym upgrade</GymUpgradeButton>
      </GymUpgradeContainer>
    );
  }
}

export default Dashboard;
