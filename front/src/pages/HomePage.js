import React, {useEffect, useState} from 'react'
import APIService from "../APIService";
import {ListItem} from "../components/ListItem";
import '../styles/HomePage.css'

export const HomePage = ({products, setProducts}) => {

    useEffect(() => {
        APIService.GetAllProducts().then((resp) => {
            setProducts(resp);
        })
    }, [])

    return (
        <div className="homepage">
            <div className="product-list">
                {products.map((p) => (
                    <ListItem key={p.id} id = {p.id} name={p.name} img={p.image} price={p.price}/>
                ))}
            </div>
        </div>
    )
}
