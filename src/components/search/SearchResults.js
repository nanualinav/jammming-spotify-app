import React from 'react'
import './SearchResults.css'
import { Tracklist } from '../tracks/Tracklist'

export const SearchResults = () => {
  
  
  return (
    <div className='SearchResults'>
      <h2>Results</h2>
      <Tracklist 
        isRemoval={false}
      />
    </div>
  )
}
