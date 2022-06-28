import React from 'react'
import {CategoryCheckbox} from './CategoryCheckbox'
import '../styles/CategoryFilter.css'

export const CategoryFilter = ({categories, handleChange}) => {
    return (
        <div className="category-box">
            <h3>category filter</h3>
            {
                categories.map((e) =>
                    <CategoryCheckbox label={e} handleChange={handleChange}/>
                )
            }
        </div>
    )
}
