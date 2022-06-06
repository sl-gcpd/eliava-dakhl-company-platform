import React from 'react'
import { PriceFilter } from './PriceFilter'
import { SearchBar } from './SearchBar'
import { CategoryFilter } from './CategoryFilter'
import '../styles/Search.css'

export const Search = ({ handleChange }) => {
  return (
    <div className="search-box">
        <SearchBar />
        <div className="filters">
            <PriceFilter handleChange={ handleChange }/>
            <CategoryFilter categories={["shurup", "lursman"]} handleChange={handleChange}/>
        </div>

    </div>
  )
}
