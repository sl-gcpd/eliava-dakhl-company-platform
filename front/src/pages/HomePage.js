import React, {useEffect, useState} from 'react'
import APIService from "../APIService";
import {ListItem} from "../components/ListItem";
import '../styles/HomePage.css'
import {BiHomeAlt} from "react-icons/bi";

export const HomePage = ({products, setProducts}) => {

    useEffect(() => {
        APIService.GetAllProducts().then((resp) => {
            setProducts(resp);
        })
    }, [])

    return (
        <div className="homepage">
            <h1 className="page-icon"><BiHomeAlt /></h1>
            <div className="product-list">
                {products.map((p) => (
                    <ListItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price}/>
                ))}
            </div>
        </div>
    )
}
