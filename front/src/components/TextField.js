import React from 'react'
import '../styles/TextField.css'

export const TextField = ({type, placeholder, isVisible = true}) => {
  return (
      <input className = "auth-input" type={type} placeholder={placeholder} style={{
          visibility: isVisible ? "visible" : "hidden",
          opacity: isVisible ? 1 : 0
        }}/>
    )
}
