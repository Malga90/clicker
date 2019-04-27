import styled from "styled-components";

const SkillsListElement = styled.li`
  color: white;
  margin-bottom: 25%;
  border-bottom: 2px solid white;

  &:first-child {
    margin-top: 30px;
  }

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default SkillsListElement;
