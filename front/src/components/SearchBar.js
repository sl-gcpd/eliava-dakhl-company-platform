import React from 'react'
import { useState } from 'react'
import '../styles/SearchBar.css'


export const SearchBar = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false)

    return (
      <div className="search-bar">
      
        <input className="search-input" type="text" placeholder="Search" onClick={() => setIsButtonVisible(true)}/>
      
        <button style={{
            visibility: isButtonVisible ? "visible" : "hidden",
            opacity: isButtonVisible ? 1 : 0
        }}>GO</button>  
      
      </div>
    )
}
