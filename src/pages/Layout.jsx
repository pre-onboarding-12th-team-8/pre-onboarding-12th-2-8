import { useMemo } from "react";
import styled from "styled-components";
import { V } from "../styles/variables";
import Header from "../components/Header";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: ${V.md_padding};
`;

const Layout = ({ children }) => {
  const memorizedHeader = useMemo(() => <Header />, []);
  return (
    <LayoutContainer>
      <>{memorizedHeader}</>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  );
};
export default Layout;
