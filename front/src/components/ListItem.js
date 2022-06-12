import React from "react";
import "../styles/ListItem.css";

export const ListItem = ({name, img, price, description}) => {
    return (
        <div className="list-item-box">
            <img alt="" src={img}/>
            <h3>{name}</h3>
            <h6>${price}</h6>
            <div className="list-item-btn-box">
                <button className="list-item-read-more">read more</button>
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
                <button className="list-item-add-to-cart">add to cart</button>
            </div>
        </div>
    );
};
