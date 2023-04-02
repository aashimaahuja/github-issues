import React, { useEffect, useState } from 'react'
import './Issue.css'
import { ReactComponent as OpenIssueIcon } from '../../icons/open-issue.svg';
import { ReactComponent as CommentsIcon } from '../../icons/comment.svg';
import { Label } from '../Label/Label';

type IssueLabel = {
  id?: string,
  name?: string,
  color?: string
}

type Props = {
  title: string,
  description: string,
  labels: Array<IssueLabel>,
  comments: number,
}

export const Issue: React.FC<Props> = ({ title, description, labels, comments }) => {
  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <div className='openIssueIcon'>
          <OpenIssueIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '8px' }}>
          <h4 className='title'>{title}</h4>
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