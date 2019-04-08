import React, { Component } from "react";
import DashboardContainer from "./styled/DashboardContainer";
import DashboardTrainingBag from "./styled/DashboardTrainingBag";
import Header from "../Header/Header";
import SkillBar from "../SkillBar/SkillBar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      skill: 95
    };
  }

  levelIncrement = () => {
    if (this.state.skill === 100) {
      this.setState({
        level: this.state.level + 1
      });
    }
  };

  skillIncrement = () => {
    this.setState(
      {
        skill: this.state.skill + 1
      },
      this.levelIncrement
    );
  };

  render() {
    return (
      <DashboardContainer>
        <Header level={this.state.level} />
        <SkillBar skill={this.state.skill} />
        <DashboardTrainingBag onClick={this.skillIncrement} />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
