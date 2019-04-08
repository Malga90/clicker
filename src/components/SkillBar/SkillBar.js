import React, { Component } from "react";
import SkillBarContainer from "./styled/SkillBarContainer";

class Dashboard extends Component {
  render() {
    return <SkillBarContainer>Skill: {this.props.skill}</SkillBarContainer>;
  }
}

export default Dashboard;
