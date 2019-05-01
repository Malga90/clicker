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
      coins: 100,
      point: 500,
      strengthCounter: 1,
      strength1: 1,
      strength2: 0,
      enduranceCounter: 1,
      endurance1: 1,
      endurance2: 0,
      techniqueCounter: 1,
      technique1: 1,
      technique2: 0,
      agilityCounter: 1,
      agility1: 1,
      agility2: 0
    };
  }

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

  increaseStrength = e => {
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

  increaseEndurance = e => {
    let a = this.state.endurance1 + this.state.endurance2;
    if (this.state.point >= this.state.endurance1) {
      this.setState({
        enduranceCounter: this.state.enduranceCounter + 1,
        point: this.state.point - this.state.endurance1,
        endurance1: a,
        endurance2: this.state.endurance1
      });
    }
  };

  increaseTechnique = e => {
    let a = this.state.technique1 + this.state.technique2;
    if (this.state.point >= this.state.technique1) {
      this.setState({
        techniqueCounter: this.state.techniqueCounter + 1,
        point: this.state.point - this.state.technique1,
        technique1: a,
        technique2: this.state.technique1
      });
    }
  };

  increaseAgility = e => {
    let a = this.state.agility1 + this.state.agility2;
    if (this.state.point >= this.state.agility1) {
      this.setState({
        agilityCounter: this.state.agilityCounter + 1,
        point: this.state.point - this.state.agility1,
        agility1: a,
        agility2: this.state.agility1
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
          endurance1={this.state.endurance1}
          technique1={this.state.technique1}
          agility1={this.state.agility1}
          increaseStrength={this.increaseStrength}
          increaseEndurance={this.increaseEndurance}
          increaseTechnique={this.increaseTechnique}
          increaseAgility={this.increaseAgility}
          strengthCounter={this.state.strengthCounter}
          enduranceCounter={this.state.enduranceCounter}
          techniqueCounter={this.state.techniqueCounter}
          agilityCounter={this.state.agilityCounter}
        />
        <TrainingBag skillIncrement={this.skillIncrement} />
        <GymUpgrade coins={this.state.coins} />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
