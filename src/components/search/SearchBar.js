import React from 'react'
import './SearchBar.css';

export const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input type='text' placeholder='Enter A Song, Album, or Artist'/>
      <button className="SearchButton" >SEARCH</button>
      
    </div>
  )
}