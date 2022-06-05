import React from 'react'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
import { useState } from 'react'
import '../styles/AuthorizePage.css'

export const AuthorizePage = ({isSigningUp}) => {
  const [ isSignUp, setIsSignUp ] = useState(isSigningUp)

  return (
    <div className="authorize-box">
      <form>
      
      <TextField type="text" placeholder="name" isVisible = { isSignUp } />
      <TextField type="text" placeholder="email"/>
      <TextField type="password" placeholder="pass"/>
      <TextField type="password" placeholder="repeat pass" isVisible = { isSignUp } />
    
      <Button text={isSignUp ? "sign up" : "sign in"} onClick={(e) => { 
        // temporary action
        e.preventDefault(); 
        console.log(e) } 
        } />
        
      <p className="register-hint">or <a onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "sign in" : "sign up"}</a></p>

      </form>
    </div>
  )
}
