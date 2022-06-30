import React from 'react'
import {TextField} from '../components/TextField'
import {useState} from 'react'
import '../styles/AuthorizePage.css'

const AuthorizePage = ({isSigningUp}) => {
    const [isSignUp, setIsSignUp] = useState(isSigningUp)

    return (
        <div className="authorize-box">
            <form>

                <TextField type="text" placeholder="name" isVisible={isSignUp}/>
                <TextField type="text" placeholder="email"/>
                <TextField type="password" placeholder="pass"/>
                <TextField type="password" placeholder="repeat pass" isVisible={isSignUp}/>

                <button className="authorize-button" onClick={(e) => {
                    // temporary action
                    e.preventDefault();
                    console.log(e)
                }
                }>{isSignUp ? "sign up" : "sign in"}</button>

                <p className="register-hint">or <a
                    onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "sign in" : "sign up"}</a></p>

            </form>
        </div>
    )
}
export default AuthorizePage;