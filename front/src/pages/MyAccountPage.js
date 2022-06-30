import React, {useEffect, useState} from 'react'
import '../styles/MyAccountPage.css'
import {BiUser} from "react-icons/bi";
import APIService from "../APIService";
import { useCookies } from "react-cookie";

const MyAccountPage = () => {
    const [user, setUser] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"]
    );
    useEffect(() => {
        APIService.GetUser(cookie["user_id"]).then((resp) => {
            setUser(resp);
        })
    }, [])
    return (
        <div className="account-box">
            <h1 className="page-icon"><BiUser /></h1>
            <div className="account-top">
                <img alt="" src={user.image}/>
                <h1>{user.name}</h1>
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