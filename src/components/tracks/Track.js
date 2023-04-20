import React from 'react'
import './Track.css'

export const Track = ({track}) => {
    return (
        <div className='Track'>
            <div className='Track-information'></div>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
        </div>
  )
}
