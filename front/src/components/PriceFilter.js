import React from 'react'
import '../styles/PriceFilter.css'

export const PriceFilter = ({from, to, setFrom, setTo}) => {
    return (
        <div className="price-box">
            <h3>filter price</h3>
            <input className="price-filter" placeholder="from" value={from}
                   type="number"
                   onChange={(e) => setFrom(e.target.value)}/>
            <input className="price-filter" placeholder="to" value={to} type="number"
                   onChange={(e) => setTo(e.target.value)}/>
        </div>
    )
}
