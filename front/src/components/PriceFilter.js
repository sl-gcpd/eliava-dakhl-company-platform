import React from 'react'
import '../styles/PriceFilter.css'

export const PriceFilter = ({ handleChange }) => {
  return (
        <div className="price-box">
            <h3>filter price</h3>
            <input className="price-filter" placeholder="from" type="number" onInput={ (e) => handleChange(e.target.value)} />    
            <input className="price-filter" placeholder="to" type="number" onInput={ (e) => handleChange(e.target.value)} />    
        </div>
    )
}
