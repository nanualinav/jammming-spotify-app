import React from 'react'
import './Playlist.css'

import { Tracklist } from './Tracklist';

export const Playlist = (props) => {
  const {onNameChange, playlistTracks, onSave, onRemove} = props;
  
  const handleNameChange = (e) => onNameChange(e.target.value);

  return (
    <div className='Playlist'>
      <input defaultValue={'New Playlist'} onChange={handleNameChange} />
      <Tracklist 
        isRemoval={true}
        tracks={playlistTracks}
        onRemove={onRemove}
      />
      <button className='Playlist-save' onClick={onSave} >SAVE TO SPOTIFY</button>
    </div>
  )
}

