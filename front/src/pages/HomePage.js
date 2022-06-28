import React, {useEffect, useState} from 'react'
import APIService from "../APIService";
import {ListItem} from "../components/ListItem";
import '../styles/HomePage.css'
import {Search} from "../components/Search";

export const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        APIService.GetAllProducts().then((resp) => {
            setProducts(resp);
        })
    }, [])

    function singleBtnClicked(searchInput, priceFilters, categoryFilters) {
        const types = new Map(Object.entries(categoryFilters));
        const dict = {"lursman": "RS", "shurup": "RF"}
        let type = '';
        types.forEach((value, key) => {
            if (value === true) {
                type += dict[key];
                type += "_";
            }
        });
        type.slice(0, -1);
        let qp = ``;
        if (searchInput !== "")
            qp += `kword=${searchInput}&`;
        if (priceFilters[0] !== "")
            qp += `priceFrom=${priceFilters[0]}&`
        if (priceFilters[1] !== "")
            qp += `priceTo=${priceFilters[1]}`
        if (type !== '')
            qp += `&type=${type}`;
        APIService.GetFilteredProducts(qp).then((resp) => {
            setProducts(resp);
        })
    }

    return (
        <div className="homepage">
            <Search searchBtnClicked={singleBtnClicked} categories={["shurup", "lursman", "drel"]}/>
            <div className="product-list">
                {products.map((p) => (
                    <ListItem key={p.id} name={p.name} img={p.image} price={p.price}/>
                ))}
            </div>
        </div>
    )
}
