import './SearchBar.css';
import React from 'react'
import { useState } from 'react';

export const SearchBar = (onSearch) => {

  const [term, setTerm] = useState('')

  const handleTermChange = e => {
    e.preventDefault()
    setTerm(e.target.value)
  }

  const search = () => {
    onSearch = term
  }

  return (
    <div className='SearchBar'>
      <input type='text' onChange={handleTermChange} value={term} placeholder='Enter A Song, Album, or Artist'/>
      <button className="SearchButton" onClick={search} >SEARCH</button>
      
    </div>
  )
}