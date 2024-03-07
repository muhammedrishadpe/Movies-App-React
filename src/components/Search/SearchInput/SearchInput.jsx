import React from 'react'

export const SearchInput = ({searchInputValue,
    handleChange, clearSearch}) => {
  return (
   <div className="search-input-container">
    <input type="text" value={searchInputValue}
        placeholder="Search here..."
        onChange={handleChange}/>
        
    <button onClick={clearSearch}></button>
   </div>
  )
}
