import React from 'react'
import '../styles/SearchBar.css'
import {BiSearch} from 'react-icons/bi'


export const SearchBar = ({handleChange, onClick}) => {
    return (
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search"
                   onChange={(e) => handleChange(e.target.value)}/>
            <button className="search-button"
                    onClick={onClick}><BiSearch />
            </button>
        </div>
    )
}
