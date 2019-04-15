import styled from "styled-components";
import myImage from "../../../assets/ring.png";

const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  background: no-repeat bottom center fixed;
  background-image: url(${myImage});
  background-size: cover;
  overflow: hidden;
`;

export default DashboardContainer;
