import React from 'react'
import '../styles/Button.css'

export const Button = ({onClick, text}) => {
  return (
        <button onClick={onClick}>{text}</button>
  )
}
