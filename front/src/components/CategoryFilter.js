import React from 'react'
import {CategoryCheckbox} from './CategoryCheckbox'
import '../styles/CategoryFilter.css'

export const CategoryFilter = ({categories, handleChange}) => {
    return (
        <div className="category-box">
            {
                categories.map((e) =>
                    <CategoryCheckbox label={e} handleChange={handleChange}/>
                )
            }
        </div>
    )
}
