import styled, { keyframes } from "styled-components";

const dotPulse = keyframes`
    0% {
      box-shadow: 9999px 0 0 -5px #FE08D2;
    }
    30% {
      box-shadow: 9999px 0 0 2px #FE08D2;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px #FE08D2;
    }
`;

const dotPulseBefore = keyframes`
     0% {
      box-shadow: 9984px 0 0 -5px #FE08D2;
    }
    30% {
      box-shadow: 9984px 0 0 2px #FE08D2;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px #FE08D2;
    }
`;

const dotPulseAfter = keyframes`
    0% {
      box-shadow: 10014px 0 0 -5px #FE08D2;
    }
    30% {
      box-shadow: 10014px 0 0 2px #FE08D2;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px #FE08D2;
    }
`;

const Container = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 100;
`;

const Animation = styled.div`
  position: relative;
  left: -9999px;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: #fe08d2;
  color: #fe08d2;
  box-shadow: 9999px 0 0 -5px #fe08d2;
  animation: ${dotPulse} 1.5s infinite linear;
  animation-delay: 0.25s;

  &:before {
    box-shadow: 9984px 0 0 -5px #fe08d2;
    animation: ${dotPulseBefore} 1.5s infinite linear;
    animation-delay: 0s;
  }

  &:after {
    box-shadow: 10014px 0 0 -5px #fe08d2;
    animation: ${dotPulseAfter} 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  &:before,
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: #fe08d2;
    color: #fe08d2;
  }
`;

export { Container, Animation };
