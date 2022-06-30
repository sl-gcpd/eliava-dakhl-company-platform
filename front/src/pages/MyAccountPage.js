import React, {useEffect, useState} from 'react'
import '../styles/MyAccountPage.css'
import {BiUser} from "react-icons/bi";
import APIService from "../APIService";
import { useCookies } from "react-cookie";

const MyAccountPage = () => {
    const [user, setUser] = useState("")
    const [img, setImg] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"],
        ["access_token"]
    );
    useEffect(() => {
        APIService.GetUser(parseInt(cookie["user_id"]), cookie["access_token"]).then((resp) => {
            setUser(resp);
            setImg(`http://127.0.0.1:8000${resp.profilePicture}`)
        })
    }, [])
    console.log(img)
    return (
        <div className="account-box">
            <h1 className="page-icon"><BiUser /></h1>
            <div className="account-top">
                <img alt="" src={img}/>
                <h1>{user.firstName}</h1>
            </div>
            <div className="account-info">
                <div className="account-info-item">
                    <h2>Email</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    )
}
export default MyAccountPage;