import React, { Component } from "react";
import SkillBarContainer from "./styled/SkillBarContainer";
import SkillBarBox from "./styled/SkillBarBox";
import SkillBarSkills from "./styled/SkillBarSkills";
import SkillsList from "./styled/SkillsList";
import SkillsListElement from "./styled/SkillsListElement";

class Dashboard extends Component {
  render() {
    return (
      <SkillBarContainer>
        Skill Progress: {this.props.skill}
        <SkillBarBox />
        <SkillBarSkills>
          <SkillsList>
            Skills:
            <SkillsListElement>Endurance</SkillsListElement>
            <SkillsListElement>Strength</SkillsListElement>
            <SkillsListElement>Technique</SkillsListElement>
            <SkillsListElement>Condition</SkillsListElement>
          </SkillsList>
        </SkillBarSkills>
      </SkillBarContainer>
    );
  }
}

export default Dashboard;
