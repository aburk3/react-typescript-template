import styled from "styled-components";
import { ReactComponent as Bucket } from "../../assets/images/bucket.svg";
import { mobileScreen } from "../../utils/breakpoints";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BucketLogo = styled(Bucket)`
  fill: #ffffff;
  width: 107px;
  height: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    cursor: pointer;
  }

  ${mobileScreen} {
    display: none;
  }
`;

export { Container, BucketLogo };
