import React from 'react'
import '../styles/CategoryCheckbox.css'

export const CategoryCheckbox = ({ label, handleChange }) => {
  return (
    <>
        <label className="category-label">
            <input className="filter-checkbox" type="checkbox" onChange={() => handleChange} />
            {label}
        </label>
    </>
  )
}
