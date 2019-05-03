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
        Skill Progress: {this.props.skillBarProgress}
        <SkillBarBox>
          <SkillBarProgress skillBarProgress={this.props.skillBarProgress} />
        </SkillBarBox>
        <SkillsPoints>Points: {this.props.skillPoint}</SkillsPoints>
        <SkillBarSkills>
          <SkillsList>
            Skills:
            <SkillsListElement>
              Strength: {this.props.strengthCounter}
              <SkillIncreasePoints onClick={this.props.increaseStrength}>
                {this.props.strengthCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Endurance: {this.props.enduranceCounter}
              <SkillIncreasePoints onClick={this.props.increaseEndurance}>
                {this.props.enduranceCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Technique: {this.props.techniqueCounter}
              <SkillIncreasePoints onClick={this.props.increaseTechnique}>
                {this.props.techniqueCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Agility: {this.props.agilityCounter}
              <SkillIncreasePoints onClick={this.props.increaseAgility}>
                {this.props.agilityCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
          </SkillsList>
        </SkillBarSkills>
      </SkillBarContainer>
    );
  }
}

export default SkillBar;
