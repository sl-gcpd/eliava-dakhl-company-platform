import React from "react";
import "../styles/ListItem.css";
import {BiCartAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import APIService from "../APIService";
import {useCookies} from "react-cookie";

export const ListItem = ({id, name, img, price}) => {
    let navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"])

    function readMoreBtnClicked() {
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
                <button className="list-item-add-to-cart" onClick={() => {
                    APIService.AddCartItem({
                            "user_id": parseInt(cookie["user_id"]),
                            "product_id": parseInt(id),
                        }
                    ).then((resp) => console.log(resp))
                }}><BiCartAlt/></button>
            </div>
        </div>
    );
};
