import React, {useEffect, useState} from "react";
import "../styles/SingleItem.css";
import APIService from "../APIService";

export const SingleItem = ({id}) => {

    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [categories, setCategories] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        APIService.GetProduct(id).then(resp => {
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
                        <button id="single-cart">Add to cart</button>
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
