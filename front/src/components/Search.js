import React, {useState} from 'react'
import {PriceFilter} from './PriceFilter'
import {SearchBar} from './SearchBar'
import {CategoryFilter} from './CategoryFilter'
import '../styles/Search.css'

export const Search = ({searchBtnClicked, categories}) => {
    const [search, setSearch] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [categoryFilters, setCategoryFilters] = useState(Object.fromEntries(categories.map(i => [i, false])))

    const toggleCategory = (category) => {
        let x = categoryFilters
        x[category] = !x[category]
        setCategoryFilters(x)
    }

    return (
        <div className="search-box">
            <SearchBar handleChange={setSearch} onClick={() => searchBtnClicked(search, [from, to], categoryFilters)}/>
            <div className="filters">
                <PriceFilter from={from} to={to} setFrom={setFrom} setTo={setTo}/>
                <CategoryFilter categories={categories} handleChange={toggleCategory}/>
            </div>

        </div>
    )
}
