import React from "react";
import "../styles/ListItem.css";
import {BiCartAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

export const ListItem = ({id, name, img, price}) => {
    let navigate = useNavigate();
    function readMoreBtnClicked(){
        navigate(`/products/${id}`)
    }
    return (
        <div className="list-item-box">
            <img alt="" src={img}/>
            <h3>{name}</h3>
            <h6>${parseInt(price)}</h6>
            <div className="list-item-btn-box">
                <button className="list-item-read-more" onClick={readMoreBtnClicked}>Read more</button>
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
                <button className="list-item-add-to-cart"><BiCartAlt /></button>
            </div>
        </div>
    );
};
