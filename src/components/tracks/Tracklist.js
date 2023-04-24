import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTracklist } from './tracklistSlice'

import './Tracklist.css'
import { Track } from './Track'

export const Tracklist = ({isRemoval}) => {

    const tracklist = useSelector(selectTracklist);
    //const [isRemoval, setIsRemoval] = useState(true);

    const renderedTracks = tracklist.map(track => (
        <Track 
          key={track.id}
          track={track}
          isRemoval={isRemoval}
        />
    ))
    
  return (
    <div>
      {renderedTracks}
    </div>
  )
}