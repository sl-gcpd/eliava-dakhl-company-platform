import React from 'react'
import '../styles/PriceFilter.css'

export const PriceFilter = ({ handleChange, current }) => {
  return (
        <div className="filter">
          <input className="price-filter" type="range" onInput={ (e) => handleChange(e.target.value) } />
          <p className="current-price">{ current }</p>
        </div>
    )
}
