import React, {useEffect, useState} from 'react'
import APIService from "../APIService";
import {ListItem} from "../components/ListItem";
import '../styles/HomePage.css'

export const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        APIService.GetAllProducts().then((resp) => {
            setProducts(resp);
        })
    }, [])
    return (
            <div className="product-list">
                {products.map((p) => (
                    // <div className="product-list-child">
                    <ListItem key={p.id} name={p.name} img={p.image} price={p.price}/>
                    // </div>
                ))}
            </div>
    )
}
