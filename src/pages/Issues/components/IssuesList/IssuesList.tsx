import React, { useContext, useMemo } from 'react'
import { BASE_URL } from '../../constants'
import { FilterContext } from '../../context/FilterContext'
import { useFetch } from '../../hooks/useFetch'
import { Issue } from '../Issue/Issue'
import { IssuesListHeader } from '../IssuesListHeader/IssuesListHeader'
import './IssuesList.css'

export const IssuesList: React.FC = () => {
  const { issueState } = useContext(FilterContext);
  const url = useMemo(() =>
    `${BASE_URL}?state=${issueState}`
    , [issueState]);
  const { issuesData, isLoading, isError } = useFetch(url);

  if (issuesData.length === 0 && !isLoading) {
    return <div>No issues found</div>
  }

  if (isError) {
    return <h4>Some error message</h4>
  }

  return (
    <div className={`issueList ${isLoading ? 'loader' : ''}`} data-testid='issues-list'>
      <IssuesListHeader />
      {
        issuesData.map(({ title, body, labels, id, comments, state }) =>
          <Issue key={id} id={id} title={title} description={body} labels={labels} comments={comments} state={state} />)
      }
    </div>
  )
} 