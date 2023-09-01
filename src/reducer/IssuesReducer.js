export const IssueAction = {
    ISSUE_LIST_SUCCESS: "ISSUE_LIST_SUCCESS",
    ISSUE_LIST_REQUEST: "ISSUE_LIST_REQUEST",
    ISSUE_LIST_FAILURE: "ISSUE_LIST_FAILURE",
    ISSUE_LIST_UPDATED: "ISSUE_LIST_UPDATED",
  };
  
  export const initialState = {
    isLoading: false,
    isUpdated: false,
    isError: null,
    issueList: [],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case IssueAction.ISSUE_LIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isUpdated: false,
          issueList: [...state.issueList, ...action.data],
        };
      case IssueAction.ISSUE_LIST_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case IssueAction.ISSUE_LIST_UPDATED:
        return {
          ...state,
        };
      case IssueAction.ISSUE_LIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: action.data.error,
        };
      default:
        return state;
    }
  };
  