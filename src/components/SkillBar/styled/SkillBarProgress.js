import styled from "styled-components";

const SkillBarProgress = styled.div`
  width: ${props => props.skill}%;
  height: 50px;
  background: white;
`;

export default SkillBarProgress;
