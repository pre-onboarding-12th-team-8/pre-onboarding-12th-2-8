import styled from "styled-components";
import { V } from "../styles/variables";
import Header from "../components/Header";
import { useMatch } from "react-router-dom";

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
  const isIssuesPage = useMatch("/issues");
  const isDetailIssuePage = useMatch("/issues/:id");
  const headerText = "Facebook/react";

  return (
    <LayoutContainer>
      {(isIssuesPage || isDetailIssuePage) && <Header>{headerText}</Header>}
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  );
};
export default Layout;
