import React, { useContext, useRef, useEffect } from "react";
import { IssueItem } from "./IssueItem";
import { getIssues } from "../../api/issues";
import { Ads } from "../../components/Ads";
import { Loading } from "../../components/Loading";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import {
  IssueStateContext,
  IssueDispatchContext,
} from "../../context/IssuesContext";

export const IssueList = () => {
  const dateFormat = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

  const { issueList, isError, isLoading } = useContext(IssueStateContext);
  const dispatch = useContext(IssueDispatchContext);
  const page = useRef(1);
  const { scrollTargetFooter } = useInfinityScroll(() => {
    page.current++;
    dispatch && getIssues(dispatch, page);
  });
  const isPromotionSection = (issuesIndex) =>
    issuesIndex > 0 && issuesIndex % 4 === 0;

  useEffect(() => {
    dispatch && getIssues(dispatch, page);
  }, []);

  if (isError) {
    throw new Error(isError);
  }

  if (issueList.length === 0 && !isLoading)
    return <section>이슈 목록이 없습니다.</section>;

  return (
    <section>
      {issueList.reduce((acc, issue, index) => {
        const IssueListComponent = (
          <IssueItem
            key={`issue-${issue.id}`}
            title={issue.title}
            number={issue.number}
            comments={issue.comments}
            updatedAt={dateFormat.format(new Date(issue.updated_at))}
            userName={issue.user.login}
          />
        );

        return isPromotionSection(index)
          ? [...acc, <Ads key={`ads-${issue.id}`} />, IssueListComponent]
          : [...acc, IssueListComponent];
      }, [])}
      {isLoading ? <Loading /> : <div ref={scrollTargetFooter} />}
    </section>
  );
};
