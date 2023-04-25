import { useState } from 'react'
import './Tracklist.css'
import { Track } from './Track'

export const Tracklist = (props) => {

    const {isRemoval, tracks, onRemove, onAdd} = props

    const renderedTracks = tracks ? tracks.map(track => (
        <Track 
          key={track.id}
          track={track}
          isRemoval={isRemoval}
          onAdd={onAdd}
          onRemove={onRemove}
        />
    )) : null
    
  return (
    <div>
      {renderedTracks}
    </div>
  )
}