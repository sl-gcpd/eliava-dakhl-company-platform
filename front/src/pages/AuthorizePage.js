import React from 'react'
import {TextField} from '../components/TextField'
import {useState} from 'react'
import '../styles/AuthorizePage.css'
import {BiLogInCircle} from "react-icons/bi";
import APIService from "../APIService";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";


const AuthorizePage = ({isSigningUp}) => {
    const navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(isSigningUp)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"],
        ["access_token"]
    );

    const login = async () => {
        const resp = await APIService.LoginUser({email, password})
        console.log(resp)
        if (resp.status === 200) {
            setCookie("user_id", resp.data.user_id)
            setCookie("access_token", resp.data.access)
        } else {
        }
    }

    const register = async () => {
        const resp = await APIService.RegisterUser({name, email, password, confirmPassword})
        if (resp.status === 200) {
            setCookie("user_id", resp.user_id)
            navigate("/")
        } else {
        }
    }

    return (
        <>
            <h1 className="page-icon"><BiLogInCircle/></h1>
            <div className="authorize-box">
                <form>

                    <TextField handleChange={setName} type="text" placeholder="name" isVisible={isSignUp}/>
                    <TextField handleChange={setEmail} type="text" placeholder="email"/>
                    <TextField handleChange={setPassword} type="password" placeholder="pass"/>
                    <TextField handleChange={setConfirmPassword} type="password" placeholder="repeat pass"
                               isVisible={isSignUp}/>

                    <button className="authorize-button" onClick={(e) => {
                        e.preventDefault()
                        isSignUp ? login() : register()
                    }
                    }>{isSignUp ? "sign up" : "sign in"}</button>

                    <p className="register-hint">or <a
                        onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "sign in" : "sign up"}</a></p>

                </form>
            </div>
        </>
    )
}
export default AuthorizePage;