import React, { Component } from "react";
import SkillBarContainer from "./styled/SkillBarContainer";
import SkillBarBox from "./styled/SkillBarBox";
import SkillBarProgress from "./styled/SkillBarProgress";
import SkillBarSkills from "./styled/SkillBarSkills";
import SkillsList from "./styled/SkillsList";
import SkillsListElement from "./styled/SkillsListElement";
import SkillsPoints from "./styled/SkillsPoints";

class SkillBar extends Component {
  render() {
    return (
      <SkillBarContainer>
        Skill Progress: {this.props.skill}
        <SkillBarBox>
          <SkillBarProgress skill={this.props.skill} />
        </SkillBarBox>
        <SkillsPoints>Points: {this.props.point}</SkillsPoints>
        <SkillBarSkills>
          <SkillsList>
            Skills:
            <SkillsListElement>Endurance</SkillsListElement>
            <SkillsListElement>Strength</SkillsListElement>
            <SkillsListElement>Technique</SkillsListElement>
            <SkillsListElement>Agility</SkillsListElement>
          </SkillsList>
        </SkillBarSkills>
      </SkillBarContainer>
    );
  }
}

export default SkillBar;
