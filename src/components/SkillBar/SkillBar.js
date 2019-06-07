import React, { Component } from "react";
import SkillBarContainer from "./styled/SkillBarContainer";
import SkillBarBox from "./styled/SkillBarBox";
import SkillBarProgress from "./styled/SkillBarProgress";
import SkillBarSkills from "./styled/SkillBarSkills";
import BoostsList from "./styled/BoostsList";
import SkillsListElement from "./styled/SkillsListElement";
import PatronusPoints from "./styled/PatronusPoints";
import SkillIncreasePoints from "./styled/SkillIncreasePoints";

class SkillBar extends Component {
  render() {
    return (
      <SkillBarContainer>
        Skill Progress: {this.props.skillBarProgress}
        <SkillBarBox>
          <SkillBarProgress skillBarProgress={this.props.skillBarProgress} />
        </SkillBarBox>
        <PatronusPoints>Patronus: {this.props.patronusPoint}</PatronusPoints>
        <SkillBarSkills>
          <BoostsList>
            Boosts:
            <SkillsListElement>
              Gryffindor's sword: {this.props.strengthCounter}
              <SkillIncreasePoints onClick={this.props.increaseStrength}>
                {this.props.strengthCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Fawkes: {this.props.enduranceCounter}
              <SkillIncreasePoints onClick={this.props.increaseEndurance}>
                {this.props.enduranceCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Deathly Hallows: {this.props.techniqueCounter}
              <SkillIncreasePoints onClick={this.props.increaseTechnique}>
                {this.props.techniqueCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
            <SkillsListElement>
              Dumledore: {this.props.agilityCounter}
              <SkillIncreasePoints onClick={this.props.increaseAgility}>
                {this.props.agilityCurrent}
              </SkillIncreasePoints>
            </SkillsListElement>
          </BoostsList>
        </SkillBarSkills>
      </SkillBarContainer>
    );
  }
}

export default SkillBar;
