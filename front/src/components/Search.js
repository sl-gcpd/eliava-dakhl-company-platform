import React, {useState} from 'react'
import {PriceFilter} from './PriceFilter'
import {SearchBar} from './SearchBar'
import {CategoryFilter} from './CategoryFilter'
import '../styles/Search.css'
import {Button} from "./Button";

export const Search = ({searchBtnClicked, priceFilters, categoryFilters}) => {
    const [pFilters, setPFilters] = useState(priceFilters)
    const [cFilters, setCFilters] = useState(categoryFilters)
    return (
        <div className="search-box">
            <SearchBar/>
            <div className="filters">
                <PriceFilter/>
                <CategoryFilter categories={["shurup", "lursman"]}/>
                <button className="search-button" onClick={(e) => searchBtnClicked(e)}>Search</button>
            </div>

        </div>
    )
}
