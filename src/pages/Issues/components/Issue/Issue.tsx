import React from 'react'
import { ReactComponent as OpenIssueIcon } from '../../icons/open-issue.svg';
import { ReactComponent as ClosedIssueIcon } from '../../icons/closed.svg';
import { ReactComponent as CommentsIcon } from '../../icons/comment.svg';
import { Label } from '../../../../common/components/Label/Label';
import { IssueState } from '../../enums/IssueState';
import { Link } from 'react-router-dom';
import './Issue.css'

type IssueLabel = {
  id?: string,
  name?: string,
  color?: string
}

type Props = {
  id: number | string
  title: string,
  description: string,
  labels: Array<IssueLabel>,
  comments: number,
  state: IssueState
}

export const Issue: React.FC<Props> = ({ id, title, description, labels, comments, state }) => {
  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <div className='openIssueIcon'>
          {state === IssueState.OPEN ? <OpenIssueIcon /> : <ClosedIssueIcon />}
        </div>
        <div className='summary'>
          <Link to={`/issues/${id}`}><h4 className='title'>{title}</h4></Link>
          <p className='description'>{description}</p>
        </div>
        {labels.length > 0 && labels.map(({ id, name = '', color = '' }) =>
          <Label key={id} name={name} color={color} />
        )}
      </div>
      <span className='comments'>
        <span className='commentIcon'><CommentsIcon /></span>
        <span className='commentText'>{comments}</span>
      </span>
    </div>
  )
}