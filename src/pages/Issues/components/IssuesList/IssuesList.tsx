import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { Issue } from '../Issue/Issue'

const token = `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`

type Issue = {
  id: string,
  title: string,
  body: string,
  labels: Array<any>,
  comments: number,
}

export const IssuesList: React.FC = () => {
  const [issues, setIssues] = useState<Array<Issue>>([])

  useEffect(() => {
    fetch('https://api.github.com/repos/microsoft/typescript/issues?state=all', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setIssues(data)
      })
  }, [])

  if (issues.length === 0) {
    return <div>No issues found</div>
  }

  console.log(issues)

  return (
    <div>
      {
        issues.map(({ title, body, labels, id, comments }) =>
          <Issue key={id} title={title} description={body} labels={labels} comments={comments} />)
      }
    </div>
  )

} 