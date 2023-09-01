import React from "react";
import { IssuesProvider } from "../../context/IssuesContext";
import { IssueList } from "./IssueList";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const Issues = () => {
  return (
    <main>
      <ErrorBoundary>
        <IssuesProvider>
          <IssueList />
        </IssuesProvider>
      </ErrorBoundary>
    </main>
  );
};
