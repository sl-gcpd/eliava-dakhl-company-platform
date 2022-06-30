import React from 'react'
import '../styles/CategoryCheckbox.css'

export const CategoryCheckbox = ({label, handleChange}) => {
    return (
        <div className="category-checkbox">
                <input className="filter-checkbox" id={label} type="checkbox" onChange={() => handleChange(label)}/>
                <label className="category-label" htmlFor={label}>{label}</label>
        </div>
    )
}
