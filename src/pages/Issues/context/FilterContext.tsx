import React from "react";
import { IssueLabel } from "../enums/IssueLabel";
import { IssueState } from "../enums/IssueState";

type FilterContextType = {
    issueState: IssueState,
    issueLabel: IssueLabel,
    setIssueState: (value: IssueState) => void
    setIssueLabel: (value: IssueLabel) => void
}
export const FilterContext = React.createContext<FilterContextType>({
    issueState: IssueState.OPEN,
    issueLabel: IssueLabel.BUG,
    setIssueState: () => { },
    setIssueLabel: () => { },
});