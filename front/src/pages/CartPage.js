import {BiCartAlt} from "react-icons/bi";
import CartItem from "../components/CartItem";
import '../styles/CartPage.css'
import {useEffect, useState} from "react";
import APIService from "../APIService";
import {useCookies} from "react-cookie";

const CartPage = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"])

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        APIService.GetCartItems(cookie["user_id"]).then((resp) => {
            setCartItems(resp.map((x) => x.product_id))
        })
    }, [])


    return (
        <div className="cart-page">
            <h1 className="page-icon"><BiCartAlt/></h1>
            <div className="cart-item-list">
                {
                    cartItems.map((x) =>
                        <CartItem id={x}/>
                    )
                }
            </div>
        </div>
    );
}

export default CartPage;