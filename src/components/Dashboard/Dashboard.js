import React, { Component } from "react";
import DashboardContainer from "./styled/DashboardContainer";
import TrainingBag from "../TrainingBag/TrainingBag";
import Header from "../Header/Header";
import SkillBar from "../SkillBar/SkillBar";
import GymUpgrade from "../GymUpgrade/GymUpgrade";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      skill: 95,
      coins: 0,
      point: 100,
      strengthCounter: 1,
      strength1: 1,
      strength2: 0
    };
  }

  levelIncrement = () => {
    if (this.state.skill === 100) {
      this.setState({
        level: this.state.level + 1
      });
    }
  };

  pointIncrement = () => {
    if (this.state.skill === 100) {
      this.setState({
        point: this.state.point + 1
      });
    }
    this.resetProgress();
  };

  skillIncrement = () => {
    this.setState(
      {
        skill: this.state.skill + 1
      },
      // this.levelIncrement,
      this.pointIncrement
    );
  };

  resetProgress = () => {
    if (this.state.skill === 100) {
      this.setState({
        skill: 0
      });
    }
  };

  increaseStrength = () => {
    let a = this.state.strength1 + this.state.strength2;
    if (this.state.point >= this.state.strength1) {
      this.setState({
        strengthCounter: this.state.strengthCounter + 1,
        point: this.state.point - this.state.strength1,
        strength1: a,
        strength2: this.state.strength1
      });
    }
  };

  render() {
    return (
      <DashboardContainer>
        <Header level={this.state.level} />
        <SkillBar
          skill={this.state.skill}
          point={this.state.point}
          strength1={this.state.strength1}
          increaseStrength={this.increaseStrength}
          strengthCounter={this.state.strengthCounter}
        />
        <TrainingBag skillIncrement={this.skillIncrement} />
        <GymUpgrade coins={this.state.coins} />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
