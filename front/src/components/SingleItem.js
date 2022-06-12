import React, {useState} from "react";
import "../styles/SingleItem.css";

export const SingleItem = ({name, img, categories, price, description}) => {

    return (
        <div className="single-item-box">
            <div className="single-main-box">
                <div className="single-half">
                    <img src={img}/>
                </div>
                <div className="single-half">
                    <div className="single-title">
                        <h2>{name}</h2>
                    </div>
                    <div className="single-buttons">
                        <button id="single-price">${price}</button>
                        <button id="single-cart">cart</button>
                    </div>
                </div>
            </div>
            {/*<ul>*/}
            {/*    {categories &&*/}
            {/*        categories.map((e) =>*/}
            {/*            <li>{e}</li>*/}
            {/*        )}*/}
            {/*</ul>*/}
            <p className="single-description">{description}</p>
        </div>
    );
};
