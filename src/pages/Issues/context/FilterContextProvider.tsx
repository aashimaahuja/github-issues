import { useState } from "react"
import { IssueLabel } from "../enums/IssueLabel"
import { IssueState } from "../enums/IssueState"
import { FilterContext } from "./FilterContext"

type Props = {
  children?: React.ReactElement
}
export const FilterContextProvider = ({ children }: Props) => {
  const [issueState, setIssueState] = useState<IssueState>(IssueState.OPEN)
  const [issueLabel, setIssueLabel] = useState<IssueLabel>(IssueLabel.ALL)

  const onFilterChange = (value: IssueState) => {
    setIssueState(value)
  }

  return (
    <FilterContext.Provider value={{ issueState, issueLabel, setIssueState: onFilterChange, setIssueLabel }}>
      {children}
    </FilterContext.Provider>
  )
}