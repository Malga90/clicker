import styled from "styled-components";
import myImage from "../../../assets/forest.jpg";

const DashboardContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  background: no-repeat center bottom fixed;
  background-image: url(${myImage});
  background-size: cover;
  overflow: hidden;
`;

export default DashboardContainer;
