import React from 'react'
import '../styles/SearchBar.css'


export const SearchBar = ({handleChange}) => {
    return (
        <input className="search-input" type="text" placeholder="Search"
               onChange={(e) => handleChange(e.target.value)}/>
    )
}
