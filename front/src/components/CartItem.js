import Image from '../img/download.jpeg'
import '../styles/CartItem.css'
import {useEffect, useState} from "react";
import APIService from "../APIService";

const CartItem = ({id}) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        APIService.GetProduct(id).then((resp) => {
            setName(resp.name)
            setImage(resp.image)
            setPrice(resp.price)
        })
    }, [])

    return (
        <div className="cart-item">
            <img alt="" className="cart-image" src={image}/>
            <div>
                <h4 className="cart-name">{name}</h4>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CartItem