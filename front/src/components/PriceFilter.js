import React from 'react'
import '../styles/PriceFilter.css'

export const PriceFilter = () => {
    return (
        <div className="price-box">
            <h3>filter price</h3>
            <input className="price-filter" placeholder="from" type="number"/>
            <input className="price-filter" placeholder="to" type="number"/>
        </div>
    )
}
