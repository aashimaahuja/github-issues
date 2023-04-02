import { useCallback, useContext, useEffect, useState } from 'react';
import { getIssuesCount } from '../../api/getIssuesCount';
import { FilterContext } from '../../context/FilterContext';
import { IssueState } from '../../enums/IssueState';
import { ReactComponent as OpenIssueIcon } from '../../icons/open-issue.svg';
import { IssuesFilters } from '../IssuesFilters/IssuesFilters';
import './IssuesListHeader.css';

// type Props = {
//   openCount: number,
//   closeCount: number,
// }

export const IssuesListHeader = () => {
  const { issueState, setIssueState } = useContext(FilterContext)
  const onFilterChange = useCallback((value: IssueState) => {
    setIssueState(value)
  }, [])
  const { openCount, closeCount } = getIssuesCount()

  return (
    <div className='header' data-testid="issue-list-header">
      <div className="issuesCount" >
        <div className={`openCount ${issueState === IssueState.OPEN ? 'active' : ''}`} onClick={() => onFilterChange(IssueState.OPEN)}>
          <OpenIssueIcon />
          <span className='open' data-testid='open-count'>{openCount} Open</span>
        </div>
        <div className={`closeCount ${issueState === IssueState.CLOSED ? 'active' : ''}`} onClick={() => onFilterChange(IssueState.CLOSED)}>
          <span className='close' data-testid='closed-count'>{closeCount} Closed</span>
        </div>
      </div>
      {/* <IssuesFilters /> */}
    </div>
  )
}