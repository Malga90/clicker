import React, { Component } from "react";
import SkillBarContainer from "./styled/SkillBarContainer";
import SkillBarBox from "./styled/SkillBarBox";

class Dashboard extends Component {
  render() {
    return (
      <SkillBarContainer>
        Skill Progress: {this.props.skill}
        <SkillBarBox />
      </SkillBarContainer>
    );
  }
}

export default Dashboard;
