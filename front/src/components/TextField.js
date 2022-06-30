import React from 'react'
import '../styles/TextField.css'

export const TextField = ({type, placeholder, handleChange, isVisible = true}) => {
  return (
      <input onChange={(e) => handleChange(e.target.value)} className = "auth-input" type={type} placeholder={placeholder} style={{
          visibility: isVisible ? "visible" : "hidden",
          opacity: isVisible ? 1 : 0
        }}/>
    )
}
