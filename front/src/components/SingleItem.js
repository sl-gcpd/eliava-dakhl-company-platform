import React, {useEffect, useState} from "react";
import "../styles/SingleItem.css";
import APIService from "../APIService";
import {useParams} from "react-router-dom";
import {useCookies} from "react-cookie";

export const SingleItem = () => {
    const params = useParams();
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"])
    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [categories, setCategories] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        APIService.GetProduct(params.id).then(resp => {
            setImg(resp.image)
            setName(resp.name)
            setPrice(resp.price)
            setCategories(resp.type)
            setDescription(resp.description)
        })
    }, [])

    return (
        <div className="single-item-box">
            <div className="single-main-box">
                <div className="single-half">
                    <img src={img} alt=""/>
                </div>
                <div className="single-half">
                    <div className="single-title">
                        <h2>{name}</h2>
                    </div>
                    <div className="single-buttons">
                        <button id="single-price">${price}</button>
                        <button id="single-cart" onClick={() => {
                            APIService.AddCartItem({
                                    "user_id": parseInt(cookie["user_id"]),
                                    "product_id": parseInt(params.id),
                                }
                            ).then((resp) => console.log(resp))
                        }}>Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <ul>
                <li>{categories}</li>
            </ul>
            <p className="single-description">{description}</p>
        </div>
    );
};
