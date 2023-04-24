import React from 'react'
import './Playlist.css'

import { Tracklist } from './Tracklist';

export const Playlist = () => {
  
  
  return (
    <div className='Playlist'>
      <input defaultValue={'New Playlist'} />
      <Tracklist 
        isRemoval={true}
      />
      <button className='Playlist-save'>SAVE TO SPOTIFY</button>
    </div>
  )
}

