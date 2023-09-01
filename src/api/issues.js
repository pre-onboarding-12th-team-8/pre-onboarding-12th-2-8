import { IssueAction } from "../reducer/IssuesReducer";
import { API } from "./client";
import { ISSUES } from "./config";

export const getIssues = async (
  dispatch,
  page,
  status = "open",
  sort = "comments"
) => {
  try {
    dispatch({
      type: IssueAction.ISSUE_LIST_REQUEST,
    });
    const response = await API(
      `${ISSUES}?status=${status}&sort=${sort}&page=${page}&per_page=20`
    );
    if (response.data) {
      dispatch({
        type: IssueAction.ISSUE_LIST_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: IssueAction.ISSUE_LIST_FAILURE,
      data: error,
    });
  }
};

export const getIssuesDetail = (targetId) => {
  return API(`${ISSUES}/${targetId}`);
};
