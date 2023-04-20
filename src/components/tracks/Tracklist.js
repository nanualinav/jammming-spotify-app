import React from 'react'
import { useSelector } from 'react-redux'
import { selectTracklist } from './tracklistSlice'

import './Tracklist.css'
import { Track } from './Track'

export const Tracklist = () => {

    const tracklist = useSelector(selectTracklist);

    const renderedTracks = tracklist.map(track => (
        <Track 
          key={track.id}
          track={track}
        />
    ))

    
  return (
    <div>
      {renderedTracks}
    </div>
  )
}