import React from 'react'
import { getTextColor } from '../../utils'
import './Label.css'

type Props = {
  name: string,
  color: string,
}

export const Label: React.FC<Props> = ({ name, color }) => {
  return <span className="label" style={{ backgroundColor: `#${color}`, color: getTextColor(color) }}>{name}</span>
}