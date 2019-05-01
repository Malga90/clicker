import React, { Component } from "react";
import SkillBarContainer from "./styled/SkillBarContainer";
import SkillBarBox from "./styled/SkillBarBox";
import SkillBarProgress from "./styled/SkillBarProgress";
import SkillBarSkills from "./styled/SkillBarSkills";
import SkillsList from "./styled/SkillsList";
import SkillsListElement from "./styled/SkillsListElement";
import SkillsPoints from "./styled/SkillsPoints";
import SkillIncreasePoints from "./styled/SkillIncreasePoints";

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
            <SkillsListElement>
              Strength: {this.props.strengthCounter}
              <SkillIncreasePoints onClick={this.props.increaseStrength}>
                {this.props.strength1}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Endurance: {this.props.enduranceCounter}
              <SkillIncreasePoints onClick={this.props.increaseEndurance}>
                {this.props.endurance1}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Technique: {this.props.techniqueCounter}
              <SkillIncreasePoints onClick={this.props.increaseTechnique}>
                {this.props.technique1}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Agility: {this.props.agilityCounter}
              <SkillIncreasePoints onClick={this.props.increaseAgility}>
                {this.props.agility1}
              </SkillIncreasePoints>
            </SkillsListElement>
          </SkillsList>
        </SkillBarSkills>
      </SkillBarContainer>
    );
  }
}

export default SkillBar;
