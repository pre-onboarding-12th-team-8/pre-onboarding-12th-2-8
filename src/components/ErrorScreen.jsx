import React from "react";
import styled from "styled-components";

export const ErrorScreen = ({ message = "Error" }) => (
  <ErrorWrapper>
    <ErrorIcon>!</ErrorIcon>
    <ErrorMessage>{message}</ErrorMessage>
  </ErrorWrapper>
);

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorIcon = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 300px;
  color: black;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 50px;
  color: black;
  text-align: center;
`;
