import React from 'react'
import './Label.css'

type Props = {
  name: string,
  color: string,
}

const getTextColor = (color: string) => {
  const darkColors = ['001f77', 'e11d21', '006b75', '556677', '3178c6']
  if (darkColors.includes(color.toLowerCase())) {
    return 'white'
  }
  return 'black'
}

export const Label: React.FC<Props> = ({ name, color }) => {
  return <span className="label" style={{ backgroundColor: `#${color}`, color: getTextColor(color) }}>{name}</span>
}