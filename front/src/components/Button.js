import React from 'react'
import '../styles/Button.css'

export const Button = ({onClick, text}) => {
  return (
        <button className="btn" onClick={onClick}>{text}</button>
  )
}
