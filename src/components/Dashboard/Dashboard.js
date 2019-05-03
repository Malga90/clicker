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
      skillBarProgress: 95,
      coins: 100,
      skillPoint: 500,

      strengthCounter: 1,
      strengthCurrent: 1,
      strengthPrevious: 0,

      enduranceCounter: 1,
      enduranceCurrent: 1,
      endurancePrevious: 0,

      techniqueCounter: 1,
      techniqueCurrent: 1,
      techniquePrevious: 0,

      agilityCounter: 1,
      agilityCurrent: 1,
      agilityPrevious: 0
    };
  }

  pointIncrement = () => {
    if (this.state.skillBarProgress === 100) {
      this.setState({
        skillPoint: this.state.skillPoint + 1
      });
    }
    this.resetProgress();
  };

  skillIncrement = () => {
    this.setState(
      {
        skillBarProgress: this.state.skillBarProgress + 1
      },
      this.pointIncrement
    );
  };

  resetProgress = () => {
    if (this.state.skillBarProgress === 100) {
      this.setState({
        skillBarProgress: 0
      });
    }
  };

  increaseStrength = e => {
    let fibonacci = this.state.strengthCurrent + this.state.strengthPrevious;
    if (this.state.skillPoint >= this.state.strengthCurrent) {
      this.setState({
        strengthCounter: this.state.strengthCounter + 1,
        skillPoint: this.state.skillPoint - this.state.strengthCurrent,
        strengthCurrent: fibonacci,
        strengthPrevious: this.state.strengthCurrent
      });
    }
  };

  increaseEndurance = e => {
    let fibonacci = this.state.enduranceCurrent + this.state.endurancePrevious;
    if (this.state.skillPoint >= this.state.enduranceCurrent) {
      this.setState({
        enduranceCounter: this.state.enduranceCounter + 1,
        skillPoint: this.state.skillPoint - this.state.enduranceCurrent,
        enduranceCurrent: fibonacci,
        endurancePrevious: this.state.enduranceCurrent
      });
    }
  };

  increaseTechnique = e => {
    let fibonacci = this.state.techniqueCurrent + this.state.techniquePrevious;
    if (this.state.skillPoint >= this.state.techniqueCurrent) {
      this.setState({
        techniqueCounter: this.state.techniqueCounter + 1,
        skillPoint: this.state.skillPoint - this.state.techniqueCurrent,
        techniqueCurrent: fibonacci,
        techniquePrevious: this.state.techniqueCurrent
      });
    }
  };

  increaseAgility = e => {
    let fibonacci = this.state.agilityCurrent + this.state.agilityPrevious;
    if (this.state.skillPoint >= this.state.agilityCurrent) {
      this.setState({
        agilityCounter: this.state.agilityCounter + 1,
        skillPoint: this.state.skillPoint - this.state.agilityCurrent,
        agilityCurrent: fibonacci,
        agilityPrevious: this.state.agilityCurrent
      });
    }
  };

  render() {
    return (
      <DashboardContainer>
        <Header level={this.state.level} />
        <SkillBar
          skillBarProgress={this.state.skillBarProgress}
          skillPoint={this.state.skillPoint}
          strengthCurrent={this.state.strengthCurrent}
          enduranceCurrent={this.state.enduranceCurrent}
          techniqueCurrent={this.state.techniqueCurrent}
          agilityCurrent={this.state.agilityCurrent}
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
