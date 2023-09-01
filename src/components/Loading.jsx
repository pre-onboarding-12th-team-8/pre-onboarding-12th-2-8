import React from "react";
import styled, { keyframes } from "styled-components";

export const Loading = () => {
  return (
    <SpinnerStyle>
      <SpinnerWrapper />
      <h2>Loading...</h2>
    </SpinnerStyle>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const SpinnerStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 3px solid #000;
  animation: ${spin} 1s linear infinite;
`;
