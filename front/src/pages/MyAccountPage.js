import React from 'react'
import Image from '../img/download.jpeg'
import '../styles/MyAccountPage.css'
import {BiUser} from "react-icons/bi";

const MyAccountPage = () => {
    return (
        <div className="account-box">
            <h1 className="page-icon"><BiUser /></h1>
            <div className="account-top">
                <img alt="" src={Image}/>
                <h1>Ramaz</h1>
            </div>
            <div className="account-info">
                <div className="account-info-item">
                    <h2>Email</h2>
                    <p>numerical.prostitute@kiu.edu.ge</p>
                </div>

                <div className="account-info-item">
                    <h2>Date of Birth</h2>
                    <p>32 February, 1666</p>
                </div>

                <div className="account-info-item">
                    <h2>Account Type</h2>
                    <p>Dekan</p>
                </div>


            </div>
        </div>
    )
}
export default MyAccountPage;